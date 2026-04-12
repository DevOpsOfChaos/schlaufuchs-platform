---
title: Algorithmen
description: Algorithmen beschreiben eindeutige und endliche Handlungsvorschriften und bilden eine Grundlage für strukturiertes Problemlösen in der Informatik.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - algorithmen
learningGoals:
  - Du erklärst, was einen Algorithmus ausmacht.
  - Du erkennst Eingabe, Verarbeitung und Ausgabe in einfachen Abläufen.
  - Du formulierst selbst kleine Algorithmen in klaren Schritten.
level: einfach
tags:
  - Algorithmen
  - Informatik
  - Ablauf
  - Problemlösen
  - Pseudocode
draft: false
---

<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Algorithmen sind keine Programmiersprache, sondern zuerst eine Denkweise. Sie helfen dabei, Probleme in klare, endliche und nachvollziehbare Schritte zu zerlegen.</p>
  <ul>
    <li>Du lernst die Merkmale eines Algorithmus kennen.</li>
    <li>Du siehst, wie Eingabe, Verarbeitung und Ausgabe zusammenhängen.</li>
    <li>Du formulierst kleine Abläufe in Alltagssprache und Pseudocode.</li>
  </ul>
</div>

## Grundidee

Ein Algorithmus ist eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems. Die Schritte müssen eindeutig beschrieben sein und der Ablauf muss irgendwann enden.

Deshalb gehören zu einem guten Algorithmus immer diese Eigenschaften:

- klar
- eindeutig
- endlich
- ausführbar

## Alltag und Informatik

Algorithmen gibt es nicht erst im Code. Schon im Alltag nutzen wir klare Abläufe.

<div class="example-card">
  <p class="card-kicker">Alltagsbeispiel</p>
  <h3>Tee kochen als Algorithmus</h3>
  <ol>
    <li>Wasser einfüllen.</li>
    <li>Wasser erhitzen.</li>
    <li>Teebeutel in die Tasse legen.</li>
    <li>Wasser eingießen.</li>
    <li>Warten.</li>
    <li>Teebeutel herausnehmen.</li>
  </ol>
  <p>Die Reihenfolge ist klar und der Ablauf endet. Genau das macht den Ablauf algorithmisch.</p>
</div>

## Eingabe, Verarbeitung, Ausgabe

Viele Algorithmen lassen sich in drei Teile zerlegen:

- **Eingabe**: Welche Werte oder Informationen kommen hinein?
- **Verarbeitung**: Was wird mit diesen Angaben gemacht?
- **Ausgabe**: Was kommt am Ende heraus?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Zahlen addieren</h3>
  <ul>
    <li>Eingabe: Zahl <code>a</code> und Zahl <code>b</code></li>
    <li>Verarbeitung: <code>a + b</code> berechnen</li>
    <li>Ausgabe: Ergebnis anzeigen</li>
  </ul>
</div>

## Algorithmen in Pseudocode

Bevor echter Programmcode entsteht, wird ein Ablauf oft zuerst als Pseudocode notiert.

<div class="wide-example">

```text
Lies zwei Zahlen ein.
Berechne ihre Summe.
Gib das Ergebnis aus.
```

</div>

Pseudocode ist hilfreich, weil er die Logik sichtbar macht, ohne sich schon um Syntaxdetails kümmern zu müssen.

## Entscheidungen und Verzweigungen

Viele Probleme brauchen Bedingungen.

<div class="example-card">
  <p class="card-kicker">Verzweigung</p>
  <h3>Gerade oder ungerade prüfen</h3>
  <ol>
    <li>Lies eine Zahl ein.</li>
    <li>Teile die Zahl durch 2.</li>
    <li>Prüfe den Rest.</li>
    <li>Wenn der Rest 0 ist, gib „gerade“ aus.</li>
    <li>Sonst gib „ungerade“ aus.</li>
  </ol>
</div>

## Wiederholungen

Manche Abläufe wiederholen sich. Das führt später zu Schleifen.

<div class="example-card">
  <p class="card-kicker">Wiederholung</p>
  <h3>Zahlen von 1 bis 10 ausgeben</h3>
  <ol>
    <li>Starte bei 1.</li>
    <li>Gib die Zahl aus.</li>
    <li>Erhöhe sie um 1.</li>
    <li>Wiederhole den Ablauf, solange die Zahl nicht größer als 10 ist.</li>
  </ol>
</div>

<div class="practice-card">
  <p class="card-kicker">Zum Ausprobieren</p>
  <h3>Formuliere selbst einen kleinen Algorithmus</h3>
  <p>Nimm einen einfachen Alltagsablauf, zum Beispiel „Jacke anziehen bei Regen“ oder „eine Datei speichern“, und schreibe ihn in 4 bis 6 klare Schritte.</p>
  <ul>
    <li>Gibt es eine Eingabe?</li>
    <li>Gibt es eine Entscheidung?</li>
    <li>Endet der Ablauf sicher?</li>
  </ul>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Schritte sind zu unklar formuliert.</li>
    <li>Die Reihenfolge passt nicht.</li>
    <li>Ein notwendiger Schritt fehlt.</li>
    <li>Der Ablauf endet nicht sicher.</li>
    <li>Eingabe oder Ausgabe werden vergessen.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Ein Algorithmus ist eine klare und endliche Handlungsvorschrift.</li>
    <li>Er beschreibt zuerst die Logik eines Problems, nicht die Programmiersprache.</li>
    <li>Eingabe, Verarbeitung und Ausgabe sind eine hilfreiche Grundstruktur.</li>
    <li>Bedingungen und Wiederholungen gehören zu vielen Algorithmen dazu.</li>
    <li>Gute Algorithmen sind klar, eindeutig und nachvollziehbar.</li>
  </ul>
</div>
