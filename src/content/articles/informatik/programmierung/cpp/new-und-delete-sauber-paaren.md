---
title: new und delete sauber paaren
description: Verstehe, warum dynamisch reservierter Speicher in C++ bewusst wieder freigegeben werden muss und warum new und delete als zusammengehöriger Ablauf gelesen werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - new-und-delete-sauber-paaren
learningGoals:
  - Du erklärst, warum <code>new</code> und <code>delete</code> als zusammengehöriger Ablauf gelesen werden.
  - Du erkennst, dass dynamischer Speicher nicht automatisch wie lokale Variablen verschwindet.
  - Du leitest aus kleinen Beispielen eine ruhige Denkregel für Reservieren und Freigeben ab.
practiceIdeas:
  - Lies kleine Beispiele immer in der Reihenfolge Reservieren → Nutzen → Freigeben.
  - Markiere in Pointer-Code bewusst die Stelle, an der Speicher entsteht, und die Stelle, an der er wieder endet.
  - Vergleiche eine lokale Variable mit einem Objekt, das über <code>new</code> erzeugt wurde.
commonMistakes:
  - Zu glauben, dass <code>delete</code> bei dynamischem Speicher optional ist.
  - Lokale Lebensdauer und dynamisch reservierten Speicher gedanklich gleichzusetzen.
  - Nur auf den Pointer zu schauen und zu übersehen, dass es um den reservierten Speicher dahinter geht.
keyTakeaways:
  - <code>new</code> reserviert Speicher dynamisch und liefert eine Adresse zurück.
  - <code>delete</code> gibt genau diesen Speicher wieder frei.
  - Wer Speicher reserviert, muss die Freigabe didaktisch immer mitdenken.
recognizeSignals:
  - In einem Beispiel tauchen <code>new</code>, Pointer und später <code>delete</code> zusammen auf.
  - Du sollst erklären, warum ein Objekt nicht einfach „von selbst“ verschwindet.
  - Es geht um Speicherlebensdauer und nicht nur um den Zahlenwert eines Pointers.
selfCheckPoints:
  - Kann ich erklären, was <code>new</code> zurückliefert?
  - Kann ich begründen, warum zu <code>new</code> eine passende Freigabe gehört?
  - Kann ich Reservieren und Freigeben im Ablauf sauber benennen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - speicher
  - new
  - delete
draft: false
---

## Grundidee

Diese Seite hält bewusst nur das **Grundmuster** zusammen:

1. Speicher mit <code>new</code> anfordern  
2. die gelieferte Adresse in einem Pointer merken  
3. den Bereich benutzen  
4. denselben Bereich später mit <code>delete</code> wieder beenden  

Die Seitengrenze ist wichtig: Hier geht es **noch nicht** um <code>delete[]</code>, Speicherleck, Double Delete oder Dangling Pointer. Diese Seite prüft zuerst nur, ob der Grundablauf von **Reservieren → Nutzen → Beenden** überhaupt vollständig sichtbar ist.

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Ein Lebenszyklus statt nur drei einzelne Zeilen</h3>
  <p><code>new</code> und <code>delete</code> sind didaktisch kein loses Vokabelpaar. Zusammen beschreiben sie Anfang und Ende desselben dynamisch reservierten Bereichs. Dazwischen liegt die Nutzungsphase.</p>
</div>

## Mini-Demo A: das Grundmuster in einer Zeilenlesung

```cpp
int *p = new int;
*p = 42;
delete p;
```

<div class="table-card">
  <p class="card-kicker">Ablauflesung</p>
  <h3>Jede Zeile gehört zu einer klaren Phase</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Phase</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *p = new int;</code></td>
        <td>Reservieren</td>
        <td>Ein dynamischer Bereich entsteht und seine Adresse wird in <code>p</code> gemerkt.</td>
      </tr>
      <tr>
        <td><code>*p = 42;</code></td>
        <td>Nutzen</td>
        <td>Der reservierte Bereich wird über den Pointer verwendet.</td>
      </tr>
      <tr>
        <td><code>delete p;</code></td>
        <td>Beenden</td>
        <td>Genau dieser Bereich bekommt seinen sichtbaren Abschluss.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo B: unvollständiger Ablauf

```cpp
int *p = new int;
*p = 9;
```

<div class="compare-card">
  <p class="card-kicker">Seitenkern</p>
  <h3>Hier fehlt noch nicht „irgendwas“, sondern eine konkrete Phase</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sichtbar vorhanden</strong>
      <span>Reservierung und Nutzung sind erkennbar.</span>
    </div>
    <div class="compare-item">
      <strong>Noch nicht sichtbar</strong>
      <span>Der Abschluss des Lebenszyklus mit <code>delete</code> fehlt im Ausschnitt.</span>
    </div>
  </div>
</div>

Gerade diese Lesart hält die Seite sauber: Sie fragt zuerst nach dem vollständigen Grundmuster, nicht schon nach spezielleren Fehlerbildern.

## Was <code>delete p;</code> wirklich beendet

<div class="compare-card">
  <p class="card-kicker">Nicht am Namen hängen bleiben</p>
  <h3>Freigegeben wird der Bereich, nicht die Variable als solche</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zu kurze Lesart</strong>
      <span><code>delete p;</code> „löscht einfach den Pointer“.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span><code>p</code> speichert nur die Adresse. Freigegeben wird der dynamisch reservierte Bereich hinter dieser Adresse.</span>
    </div>
  </div>
</div>

## Kontrast zur lokalen Variable

```cpp
int zahl = 42;
```

<div class="table-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Warum diese Zeile nicht auf dieselbe Seite gehört</h3>
  <table>
    <thead>
      <tr>
        <th>Beispiel</th>
        <th>Erste Fachfrage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int zahl = 42;</code></td>
        <td>Hier entsteht kein dynamisch reservierter Bereich mit <code>new</code>. Deshalb stellt sich auf dieser Seite noch gar keine <code>delete</code>-Frage.</td>
      </tr>
    </tbody>
  </table>
</div>


## Mini-Demo C: gleicher Pointername, aber zwei getrennte Lebenszyklen

```cpp
int *p = new int;
delete p;
p = new int;
delete p;
```

<div class="table-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Der gleiche Name beweist noch keine gleiche Speicherstory</h3>
  <table>
    <thead>
      <tr>
        <th>Teil</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *p = new int; delete p;</code></td>
        <td>Der erste dynamische Bereich entsteht und bekommt auch wieder seinen sichtbaren Abschluss.</td>
      </tr>
      <tr>
        <td><code>p = new int; delete p;</code></td>
        <td>Danach beginnt mit demselben Variablennamen ein zweiter, eigener Lebenszyklus.</td>
      </tr>
      <tr>
        <td>Didaktischer Kern</td>
        <td>Entscheidend ist nicht der Name <code>p</code>, sondern ob jeder erzeugte Bereich genau einmal sichtbar abgeschlossen wird.</td>
      </tr>
    </tbody>
  </table>
</div>

## Leseraster für neue Beispiele


<div class="step-grid">
  <div class="step-item">
    <strong>1. Anfang suchen</strong>
    <span>Wo beginnt der Lebenszyklus mit <code>new</code>?</span>
  </div>
  <div class="step-item">
    <strong>2. Träger suchen</strong>
    <span>Welcher Pointer merkt sich danach die Adresse?</span>
  </div>
  <div class="step-item">
    <strong>3. Nutzungsphase sehen</strong>
    <span>Wo wird genau dieser Bereich gelesen oder beschrieben?</span>
  </div>
  <div class="step-item">
    <strong>4. Abschluss suchen</strong>
    <span>Wo endet derselbe Bereich wieder sichtbar mit <code>delete</code>?</span>
  </div>
</div>

## Seitengrenze zu den Nachbarseiten

<div class="table-card">
  <p class="card-kicker">Erste Fachfrage sauber wählen</p>
  <h3>Derselbe Themenraum, aber nicht dieselbe Einstiegsfrage</h3>
  <table>
    <thead>
      <tr>
        <th>Mini-Beispiel</th>
        <th>Erste Fachfrage</th>
        <th>Einordnung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *p = new int; *p = 7; delete p;</code></td>
        <td>Ist der Lebenszyklus von Reservieren bis Freigeben vollständig sichtbar?</td>
        <td>Ja – genau diese Seite.</td>
      </tr>
      <tr>
        <td><code>int *feld = new int[3]; delete feld;</code></td>
        <td>Welche Freigabeform passt zur Erzeugungsform?</td>
        <td>Nein – das ist zuerst die <code>delete</code>/<code>delete[]</code>-Nachbarseite.</td>
      </tr>
      <tr>
        <td><code>int *p = new int; delete p; cout &lt;&lt; *p;</code></td>
        <td>Warum wird der Folgezugriff nach der Freigabe kritisch?</td>
        <td>Nein – das ist zuerst die Dangling-Pointer-Nachbarseite.</td>
      </tr>
      <tr>
        <td><code>int *p = new int; p = new int;</code></td>
        <td>Bleibt ein Bereich ohne sauberen Pfad oder Abschluss zurück?</td>
        <td>Nein – das ist zuerst die Speicherleck-Nachbarseite.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. new finden.
2. Adresse und Trägerpointer benennen.
3. Nutzungsphase markieren.
4. Prüfen, ob genau dieser Bereich wieder mit delete endet.</code></pre>

<div class="note-panel">
  <p><strong>Merke:</strong> Diese Seite erklärt zuerst nur das saubere Paar <code>new</code> → benutzen → <code>delete</code>. Erst wenn dieses Grundmuster sitzt, lohnen sich die spezielleren Fehlerbilder wirklich.</p>
</div>
