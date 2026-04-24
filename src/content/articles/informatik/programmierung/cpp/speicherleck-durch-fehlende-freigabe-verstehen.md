---
title: Speicherleck durch fehlende Freigabe verstehen
description: Verstehe, warum dynamisch reservierter Speicher verloren gehen kann, wenn seine Freigabe fehlt oder der Zugriffspfad verschwindet.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - speicherleck-durch-fehlende-freigabe-verstehen
learningGoals:
  - Du erklärst, was bei einem Speicherleck fachlich verloren geht.
  - Du erkennst, dass nicht der Pointerwert, sondern der unerreichbar gewordene oder unbeendet gebliebene Speicher das eigentliche Problem ist.
  - Du liest kleine Beispiele gezielt auf Reservierung, Erreichbarkeit und Freigabe.
practiceIdeas:
  - Markiere in Beispielen die Stelle, an der Speicher mit <code>new</code> entsteht.
  - Prüfe danach, ob der reservierte Speicher noch erreichbar und später wieder freigegeben ist.
  - Vergleiche Beispiele mit sauberer Freigabe und mit verlorener Referenz.
commonMistakes:
  - Zu glauben, ein Speicherleck sei nur ein „falscher Pointerwert“.
  - Nur auf <code>delete</code> zu schauen und die Erreichbarkeit des Speichers zu vergessen.
  - Zu meinen, der Speicher verschwinde automatisch, nur weil die Variable überschrieben wurde.
keyTakeaways:
  - Ein Speicherleck entsteht, wenn reservierter Speicher ohne sauberen Abschluss zurückbleibt.
  - Kritisch ist nicht nur fehlendes <code>delete</code>, sondern auch verlorene Erreichbarkeit.
  - Gute Prüfung fragt immer: Wo entsteht Speicher, wie bleibt er erreichbar, wo endet er?
recognizeSignals:
  - Ein Pointer bekommt mit <code>new</code> eine Adresse und wird später überschrieben.
  - Eine Reservierung ist sichtbar, aber eine Freigabe fehlt.
  - Es geht um länger laufende Programme oder wiederholte Reservierungen.
selfCheckPoints:
  - Kann ich erklären, was bei einem Speicherleck konkret verloren geht?
  - Kann ich in einem Beispiel die fehlende Freigabe oder verlorene Erreichbarkeit benennen?
  - Kann ich Speicherleck und Dangling Pointer auseinanderhalten?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - speicher
  - memory-leak
draft: false
---

## Grundidee

Ein Speicherleck ist kein einzelner „gefährlicher Zugriff“, sondern ein **offen gebliebener Speicherlebenszyklus**. Die erste Kernfrage lautet hier deshalb:

**Bleibt ein reservierter Bereich zurück, ohne dass sein Abschluss noch sauber sichtbar ist?**

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Das Problem ist der zurückbleibende Bereich</h3>
  <p>Bei einem Speicherleck ist nicht bloß ein Pointer „komisch“. Kritisch ist: Ein Bereich wurde reserviert, aber sein Ende fehlt oder der Weg dorthin ist verloren gegangen.</p>
</div>

## Zwei typische Leckmuster

<div class="table-card">
  <p class="card-kicker">Fehlerformen</p>
  <h3>So bleibt Speicher ohne sauberen Abschluss zurück</h3>
  <table>
    <thead>
      <tr>
        <th>Muster</th>
        <th>Mini-Beispiel</th>
        <th>Warum kippt es?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pfad geht verloren</td>
        <td><code>int *p = new int; p = new int;</code></td>
        <td>Der erste Bereich ist später nicht mehr sauber erreichbar.</td>
      </tr>
      <tr>
        <td>Abschluss fehlt</td>
        <td><code>void demo() { int *p = new int; *p = 5; }</code></td>
        <td>Der Bereich bleibt offen, weil im Ausschnitt kein sauberer Abschluss mehr auftaucht.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo A: verlorener Zugriffspfad

```cpp
int *p = new int;
p = new int;
```

<div class="table-card">
  <p class="card-kicker">Ablauflesung</p>
  <h3>Woran man das Leck hier erkennt</h3>
  <table>
    <thead>
      <tr>
        <th>Schritt</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Der erste Bereich entsteht.</td>
      </tr>
      <tr>
        <td>2</td>
        <td><code>p</code> kennt seine Adresse.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Ein zweiter Bereich entsteht und <code>p</code> wird umgehängt.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Für den ersten Bereich ist kein sauberer Zugriffspfad mehr sichtbar. Genau dort kippt der Ablauf in Richtung Speicherleck.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo B: Abschluss fehlt, obwohl nichts crasht

```cpp
void demo() {
  int *p = new int;
  *p = 5;
}
```

<div class="compare-card">
  <p class="card-kicker">Wichtige Einsicht</p>
  <h3>Für ein Leck brauchst du keinen späteren Folgezugriff</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Dangling Pointer</strong>
      <span>Dort fällt zuerst ein Zugriff nach <code>delete</code> ins Auge.</span>
    </div>
    <div class="compare-item">
      <strong>Speicherleck</strong>
      <span>Hier reicht schon der offen gebliebene Lebenszyklus: Der Bereich beginnt, aber sein Ende fehlt.</span>
    </div>
  </div>
</div>

## Mini-Demo C: Wiederholung kann das Leck verstärken

```cpp
for (int i = 0; i < 3; i++) {
  int *p = new int;
}
```

<div class="table-card">
  <p class="card-kicker">Skalierung</p>
  <h3>Das Grundproblem bleibt gleich, nur öfter</h3>
  <table>
    <thead>
      <tr>
        <th>Beobachtung</th>
        <th>Didaktische Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>In jeder Schleifenrunde entsteht ein neuer Bereich.</td>
        <td>Jeder Bereich beginnt mit <code>new</code>.</td>
      </tr>
      <tr>
        <td>Kein <code>delete</code> ist sichtbar.</td>
        <td>Jeder Bereich bleibt ohne sauberen Abschluss zurück.</td>
      </tr>
      <tr>
        <td>Es gibt keinen spektakulären Folgezugriff.</td>
        <td>Trotzdem liegt ein Leck vor, weil offene Lebenszyklen zurückbleiben.</td>
      </tr>
    </tbody>
  </table>
</div>


## Mini-Demo D: spätes delete rettet den verlorenen ersten Bereich nicht

```cpp
int *p = new int;
p = new int;
delete p;
```

<div class="table-card">
  <p class="card-kicker">Häufige Fehllesart</p>
  <h3>Ein späteres <code>delete</code> schließt hier nur den zweiten Bereich</h3>
  <table>
    <thead>
      <tr>
        <th>Schritt</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Der erste Bereich entsteht.</td>
      </tr>
      <tr>
        <td>2</td>
        <td><code>p</code> wird auf einen zweiten Bereich umgehängt.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Das spätere <code>delete p;</code> kann nur den aktuell noch von <code>p</code> getragenen zweiten Bereich beenden.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Der erste Bereich bleibt trotzdem ohne sauberen Pfad und damit als Leck zurück.</td>
      </tr>
    </tbody>
  </table>
</div>

## Gegenbild: sauber geschlossener Lebenszyklus


```cpp
int *p = new int;
*p = 5;
delete p;
```

<div class="table-card">
  <p class="card-kicker">Kontrastbild</p>
  <h3>Wann liegt gerade kein Leck vor?</h3>
  <table>
    <thead>
      <tr>
        <th>Schritt</th>
        <th>Lesart</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Der Bereich entsteht mit <code>new</code>.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Der Bereich bleibt über <code>p</code> erreichbar.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Mit <code>delete p;</code> bekommt genau dieser Bereich einen sichtbaren Abschluss.</td>
      </tr>
    </tbody>
  </table>
</div>

## Diagnose-Raster

<div class="table-card">
  <p class="card-kicker">Vier Kernfragen</p>
  <h3>So prüfst du Leckbeispiele ruhig</h3>
  <table>
    <thead>
      <tr>
        <th>Frage</th>
        <th>Warum sie wichtig ist</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wo entsteht Speicher?</td>
        <td>Nur dann gibt es überhaupt einen Lebenszyklus zu prüfen.</td>
      </tr>
      <tr>
        <td>Bleibt der Bereich erreichbar?</td>
        <td>Ein verlorener Zugriffspfad ist schon eine Kippstelle.</td>
      </tr>
      <tr>
        <td>Wo wird genau dieser Bereich beendet?</td>
        <td>Die Freigabe muss zum gleichen Bereich gehören.</td>
      </tr>
      <tr>
        <td>Fehlt dieser Abschluss?</td>
        <td>Dann bleibt der Bereich als Leck zurück.</td>
      </tr>
    </tbody>
  </table>
</div>

## Seitengrenze zu den Nachbarseiten

<div class="table-card">
  <p class="card-kicker">Erste Fachfrage sauber wählen</p>
  <h3>Leck, Double Delete und Dangling Pointer nicht vermischen</h3>
  <table>
    <thead>
      <tr>
        <th>Mini-Beispiel</th>
        <th>Erste Kernfrage</th>
        <th>Einordnung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>int *p = new int; p = new int;</code></td>
        <td>Bleibt der erste Bereich ohne sauberen Pfad oder Abschluss zurück?</td>
        <td>Ja – Speicherleck.</td>
      </tr>
      <tr>
        <td><code>delete p; cout &lt;&lt; *p;</code></td>
        <td>Wird nach einer Freigabe noch über einen Restpointer zugegriffen?</td>
        <td>Nein – zuerst Dangling Pointer.</td>
      </tr>
      <tr>
        <td><code>q = p; delete p; delete q;</code></td>
        <td>Wird derselbe Bereich ein zweites Mal freigegeben?</td>
        <td>Nein – zuerst Double Delete.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. new-Ereignis suchen.
2. Zugriffspfad markieren.
3. Prüfen, ob genau dieser Bereich beendet wird.
4. Fehlt der Abschluss oder geht der Pfad verloren, bleibt ein Leck.</code></pre>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Speicherleck ist die Frage nach einem offen gebliebenen Bereich, nicht nach einem spektakulären Folgezugriff.</p>
</div>
