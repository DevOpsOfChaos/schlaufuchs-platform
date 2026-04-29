---
title: "nullptr vor Dereferenzierung prüfen"
description: "Verstehe, warum ein Pointer vor dem Zugriff auf den Zielwert zuerst auf einen sinnvollen Zustand geprüft werden sollte."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "nullptr-vor-dereferenzierung-pruefen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Ein Pointer kann bewusst mit <code>nullptr</code> gesetzt sein. Das ist ein klarer Zustand — aber noch kein Signal dafür, dass man direkt mit <code>*p</code> auf einen Zielwert zugreifen darf.

Wichtig ist die Trennung zur Nachbarfrage: Ob ein Pointer **sauber initialisiert** wurde, ist etwas anderes als die Frage, ob er **jetzt gerade dereferenziert werden darf**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Erst prüfen, dann benutzen</h3>
  <p>Wenn <code>p</code> noch <code>nullptr</code> ist, zeigt der Pointer gerade auf kein nutzbares Objekt. Eine ruhige Lesart lautet deshalb: Erst den Zustand prüfen, dann dereferenzieren. Nicht umgekehrt.</p>
</div>

## Warum die Reihenfolge entscheidend ist

<div class="compare-card">
  <p class="card-kicker">Sicherheitsroutine</p>
  <h3>Prüfung vor Zugriff</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unsichere Lesart</strong>
      <span><code>*p</code> wird direkt benutzt, obwohl noch gar nicht klar ist, ob <code>p</code> auf ein gültiges Ziel zeigt.</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Zuerst wird geprüft, ob <code>p</code> sinnvoll gesetzt ist. Erst danach erfolgt der Zugriff auf den Zielwert.</span>
    </div>
  </div>
</div>

## Eingebautes Mini-Beispiel

```cpp
int *p = nullptr;

if (p != nullptr) {
  cout << *p;
}
```

<div class="table-card">
  <p class="card-kicker">Zeilen lesen</p>
  <h3>Welche Zeile prüft und welche greift zu?</h3>
  <table>
    <thead>
      <tr>
        <th>Zeile</th>
        <th>Rolle</th>
        <th>Didaktische Bewertung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>if (p != nullptr)</code></td>
        <td>Zustand prüfen</td>
        <td>Bereitet einen möglichen Zugriff vor.</td>
      </tr>
      <tr>
        <td><code>cout &lt;&lt; *p;</code></td>
        <td>Dereferenzieren</td>
        <td>Darf erst nach einer sinnvollen Prüfung gelesen werden.</td>
      </tr>
    </tbody>
  </table>
</div>

## Mini-Konsole im Kopf

<pre><code>Gedanklicher Ablauf:
1. p prüfen
2. Nur wenn p sinnvoll zeigt, *p benutzen
3. Bei nullptr kein Zielwertzugriff</code></pre>

Die didaktische Hauptidee hier ist nicht die genaue Syntax, sondern die Reihenfolge:

1. Zustand des Pointers prüfen.
2. Erst danach den Zielwert lesen.

## Was diese Seite nicht mehr neu klärt

Hier wird nicht mehr neu entschieden, ob <code>p</code> überhaupt sauber initialisiert wurde. Diese Seite setzt voraus: Der Pointer liegt bereits vor, und jetzt muss der **Zugriff** bewertet werden.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Von der Zustandsfrage zum Zugriff</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Pointer liegt vor</strong><span>aktuellen Zustand lesen</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Prüfen</strong><span>zeigt <code>p</code> sinnvoll auf ein Ziel?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Dann dereferenzieren</strong><span>erst jetzt ist <code>*p</code> fachlich vorbereitet</span></div>
  </div>
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Nicht vertauschen</p>
  <h3><code>nullptr</code> ist klar, aber nicht nutzbar</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Falsches Bauchgefühl</strong>
      <span>„<code>nullptr</code> ist doch ein definierter Zustand, also kann ich ruhig mal <code>*p</code> probieren.“</span>
    </div>
    <div class="compare-item">
      <strong>Saubere Lesart</strong>
      <span>Definiert bedeutet hier nur: Der Zustand ist klar. Für einen Zielwertzugriff reicht das noch nicht.</span>
    </div>
  </div>
</div>

## Gegenbeispiel bewusst lesen

```cpp
int *p = nullptr;
cout << *p;

if (p != nullptr) {
  cout << "ok";
}
```

Hier kommt die Prüfung zu spät. Die problematische Stelle ist schon die frühe Dereferenzierung mit <code>*p</code>.

## Zwei fast gleiche Snippets unterschiedlich lesen

<div class="compare-card">
  <p class="card-kicker">Auditblick</p>
  <h3>Fast gleiche Zeilenfolge, aber nur ein Ablauf ist sauber</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sauberer Ablauf</strong>
      <span><code>if (p != nullptr)</code> steht vor dem Zugriff. Erst prüfen, dann dereferenzieren.</span>
    </div>
    <div class="compare-item">
      <strong>Unsicherer Ablauf</strong>
      <span><code>cout &lt;&lt; *p;</code> passiert schon vor der Prüfung. Die spätere if-Zeile kommt inhaltlich zu spät.</span>
    </div>
  </div>
</div>

Der Qualitätsunterschied steckt also oft nicht in neuen Fachwörtern, sondern nur in der Reihenfolge der bereits bekannten Zeilen.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Aktuellen Zustand benennen</strong>
    <span>Steht der Pointer auf <code>nullptr</code> oder zeigt er auf ein gültiges Ziel?</span>
  </div>
  <div class="step-item">
    <strong>2. Prüfung und Nutzung trennen</strong>
    <span>Prüfen ist etwas anderes als dereferenzieren.</span>
  </div>
  <div class="step-item">
    <strong>3. Reihenfolge sichern</strong>
    <span>Erst Bedingung, dann Zugriff mit <code>*p</code>.</span>
  </div>
  <div class="step-item">
    <strong>4. Regel mitnehmen</strong>
    <span>Ein klarer Pointerzustand ersetzt nie die saubere Zugriffsentscheidung.</span>
  </div>
</div>


## Nicht mit Nachbarseiten vermischen

<div class="compare-card">
  <p class="card-kicker">Seitengrenze</p>
  <h3>Diese Seite startet bei der Sicherheitsroutine vor dem Zugriff</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Diese Seite</strong>
      <span>Im Fokus steht die Reihenfolge: erst prüfen, dann über <code>*p</code> zugreifen.</span>
    </div>
    <div class="compare-item">
      <strong>Nullpointer und uninitialisierte Pointer unterscheiden</strong>
      <span>Dort wird vorher geklärt, wie ein Pointer überhaupt sinnvoll startet.</span>
    </div>
    <div class="compare-item">
      <strong>Adressoperator und Dereferenzierung</strong>
      <span>Dort wird gelesen, was <code>*p</code> bedeutet. Hier wird beurteilt, wann dieses <code>*p</code> fachlich verantwortbar ist.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Pointern lautet die ruhige Grundreihenfolge: erst prüfen, dann dereferenzieren.</p>
</div>
