---
title: "Pointer nach delete auf null setzen einordnen"
description: "Verstehe, warum das Zurücksetzen eines Pointers auf nullptr nach delete ein begrenztes Schutzmuster sein kann, aber nicht alle Alias-Probleme löst."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "pointer-nach-delete-auf-null-setzen-einordnen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Diese Seite setzt voraus: Der problematische Zustand nach <code>delete</code> ist schon verstanden. Hier geht es nicht mehr darum, **ob** der Pointer danach gefährlich ist, sondern darum, was das anschließende <code>p = nullptr;</code> lokal verbessert – und was gerade nicht.

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Ein Pointer wird bewusst in einen leeren Zustand gebracht</h3>
  <p>Mit <code>p = nullptr;</code> wird nicht der alte Speicher geheilt. Es wird nur diese konkrete Variable sichtbar so gesetzt, dass über genau sie kein scheinbar gültiger Altzustand mehr weitergetragen wird.</p>
</div>

## Das Schutzmuster

```cpp
int *p = new int;
delete p;
p = nullptr;
```

<div class="table-card">
  <p class="card-kicker">Lokaler Effekt</p>
  <h3>Was wird durch das Nullsetzen wirklich geändert?</h3>
  <table>
    <thead>
      <tr>
        <th>Frage</th>
        <th>Vor <code>p = nullptr;</code></th>
        <th>Nach <code>p = nullptr;</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wie sieht <code>p</code> lokal aus?</td>
        <td><code>p</code> trägt noch die alte Adresse als riskanten Altzustand weiter.</td>
        <td><code>p</code> ist sichtbar leer gesetzt und lokal klarer prüfbar.</td>
      </tr>
      <tr>
        <td>Ist der alte Speicher dadurch wieder nutzbar?</td>
        <td>Nein</td>
        <td>Nein</td>
      </tr>
      <tr>
        <td>Werden andere Alias-Pointer mitgeändert?</td>
        <td>Nein</td>
        <td>Nein</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Demo mit lokaler Prüfung

```cpp
int *p = new int;
delete p;
p = nullptr;

if (p == nullptr) {
  cout << "leer";
}
```

<div class="compare-card">
  <p class="card-kicker">Was das Muster gut kann</p>
  <h3>Eine Variable wird lokal klarer lesbar</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ohne Nullsetzen</strong>
      <span>Der alte Adressrest bleibt in <code>p</code> stehen und wirkt syntaktisch leicht noch „gefüllt“.</span>
    </div>
    <div class="compare-item">
      <strong>Mit Nullsetzen</strong>
      <span><code>p</code> ist sichtbar leer. Genau diese eine Variable lässt sich dadurch später sauberer prüfen.</span>
    </div>
  </div>
</div>

## Mini-Demo mit Alias-Pointer

```cpp
int *p = new int;
int *q = p;
delete p;
p = nullptr;
```

<div class="table-card">
  <p class="card-kicker">Grenze des Musters</p>
  <h3>Nur ein Name wird geändert</h3>
  <table>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Zustand nach der letzten Zeile</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>p</code></td>
        <td>Wird bewusst auf <code>nullptr</code> gesetzt und ist damit lokal besser lesbar.</td>
      </tr>
      <tr>
        <td><code>q</code></td>
        <td>Bleibt unverändert und trägt die alte Adresse als eigenes Risiko weiter.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>1. Bereich freigeben.
2. Einen konkreten Pointer sichtbar leeren.
3. Lokalen Nutzen benennen.
4. Alias-Namen getrennt weiterprüfen.</code></pre>

## Alias-Ampel im Kopf

<div class="table-card">
  <p class="card-kicker">Lokale Wirkung sichtbar machen</p>
  <h3>Welche Variablen werden wirklich sicherer gelesen?</h3>
  <table>
    <thead>
      <tr>
        <th>Nach diesem Ablauf</th>
        <th>Zustand</th>
        <th>Warum?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>delete p; p = nullptr;</code></td>
        <td><strong>p</strong> ist lokal klar leer.</td>
        <td>Die Variable wurde bewusst neu gesetzt.</td>
      </tr>
      <tr>
        <td><code>int *q = p; delete p; p = nullptr;</code></td>
        <td><strong>q</strong> bleibt kritisch.</td>
        <td><code>q</code> wurde nicht verändert und trägt den alten Rest separat weiter.</td>
      </tr>
    </tbody>
  </table>
</div>

## Häufiger Fehlschluss kurz entkräftet

<div class="compare-card">
  <p class="card-kicker">Typische Überschätzung</p>
  <h3><code>p = nullptr;</code> macht nicht die ganze Situation automatisch gut</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Fehlschluss</strong>
      <span>Wenn <code>p</code> leer gesetzt wurde, ist das Speicherproblem insgesamt erledigt.</span>
    </div>
    <div class="compare-item">
      <strong>Richtige Lesart</strong>
      <span>Nur genau diese Variable wird klarer. Andere Alias-Pointer und die Besitzfrage müssen weiter getrennt geprüft werden.</span>
    </div>
  </div>
</div>

## Schneller Seitencheck

<div class="table-card">
  <p class="card-kicker">Kernfrage sauber treffen</p>
  <h3>Wann geht es wirklich um das Nullsetzen danach?</h3>
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
        <td><code>delete p; p = nullptr;</code></td>
        <td>Was verbessert das sichtbare Leersetzen dieser Variablen?</td>
        <td>Ja – genau diese Seite.</td>
      </tr>
      <tr>
        <td><code>delete p; cout &lt;&lt; *p;</code></td>
        <td>Warum ist der Folgezugriff auf den alten Rest riskant?</td>
        <td>Nein – das ist zuerst die Dangling-Pointer-Seite.</td>
      </tr>
      <tr>
        <td><code>int *q = p; delete p; p = nullptr;</code></td>
        <td>Welche Namen bleiben trotz des Musters noch problematisch?</td>
        <td>Ja – hier zeigt sich die Grenze des Musters.</td>
      </tr>
    </tbody>
  </table>
</div>

## Nicht zu viel versprechen

<div class="note-panel">
  <p><strong>Merke:</strong> <code>p = nullptr;</code> ist keine Komplettlösung für Speicherfehler. Es ist eine lokale Nachmaßnahme, die genau eine Variable klarer macht. Besitzlogik, Alias-Fragen und saubere Freigabeverantwortung müssen trotzdem separat stimmen.</p>
</div>
