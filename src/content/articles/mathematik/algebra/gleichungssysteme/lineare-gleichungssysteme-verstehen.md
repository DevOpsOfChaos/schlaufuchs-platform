---
title: Lineare Gleichungssysteme verstehen
description: Lineare Gleichungssysteme verbinden mehrere Gleichungen und helfen dabei, mehrere unbekannte Größen gleichzeitig zu bestimmen.
subject: mathematik
section: Algebra
level: mittel
tags:
  - Gleichungssysteme
  - Algebra
  - Lineare Gleichungen
  - Variablen
draft: false
---

## Überblick

Einzelne lineare Gleichungen beschreiben Zusammenhänge mit einer Unbekannten. Viele reale Probleme enthalten aber mehrere unbekannte Größen gleichzeitig. Genau dann kommen lineare Gleichungssysteme ins Spiel. Sie helfen, mehrere Bedingungen zusammen zu betrachten und daraus passende Werte zu bestimmen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Bedingungen für dieselbe Situation</h3>
  <p>Stell dir vor, zwei Informationen beschreiben dieselben unbekannten Größen. Erst zusammen schränken sie die Möglichkeiten so weit ein, dass eine eindeutige Lösung entstehen kann. Genau das ist die Grundidee eines linearen Gleichungssystems.</p>
</div>

## Was ist ein lineares Gleichungssystem?

Ein lineares Gleichungssystem besteht aus mehreren linearen Gleichungen mit mehreren Unbekannten.

Ein einfaches Beispiel ist:

<div class="equation-card">
  <p class="card-kicker">Beispielsystem</p>
  <h3>Zwei Gleichungen, zwei Unbekannte</h3>
  <div class="equation-block">
    <p class="equation-line">2x + y = 7</p>
    <p class="equation-line">x - y = 2</p>
  </div>
</div>

Hier gibt es:

- zwei Gleichungen,
- zwei Unbekannte,
- eine gemeinsame Lösung oder auch keine.

## Warum braucht man mehrere Gleichungen?

Mit nur einer Gleichung wie

<div class="equation-card">
  <p class="card-kicker">Eine einzelne Bedingung</p>
  <h3>Noch zu viele Möglichkeiten</h3>
  <div class="equation-block">
    <p class="equation-line">x + y = 10</p>
    <p class="equation-line muted">x = 4, y = 6</p>
    <p class="equation-line muted">x = 1, y = 9</p>
    <p class="equation-line muted">x = 7, y = 3</p>
  </div>
</div>

lassen sich unendlich viele Zahlenpaare finden.

Erst eine zweite Bedingung schränkt die Möglichkeiten weiter ein. Ein Gleichungssystem verbindet also mehrere Bedingungen, die gleichzeitig erfüllt sein müssen.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Eine Gleichung</p>
    <h3>Zu viele passende Wertepaaren</h3>
    <p>Eine einzige Bedingung reicht oft nicht aus, um eine eindeutige Kombination festzulegen.</p>
  </section>
  <section>
    <p class="card-kicker">Zwei Gleichungen</p>
    <h3>Stärkere Einschränkung</h3>
    <p>Mehrere Bedingungen zusammen machen aus vielen Möglichkeiten eine deutlich kleinere Lösungsmenge.</p>
  </section>
</div>

## Was ist die Lösung?

Die Lösung eines linearen Gleichungssystems ist ein Wertepaar oder allgemein eine Werte-Kombination, die **alle Gleichungen gleichzeitig** erfüllt.

Bei zwei Unbekannten ist die Lösung oft ein Paar wie:

<div class="equation-card">
  <p class="card-kicker">Lösungsidee</p>
  <h3>Beide Gleichungen müssen stimmen</h3>
  <div class="equation-block">
    <p class="equation-line">x = 3</p>
    <p class="equation-line">y = 1</p>
  </div>
</div>

## Grafische Vorstellung

Jede lineare Gleichung mit zwei Variablen beschreibt eine Gerade.

Ein Gleichungssystem entspricht deshalb dem Vergleich zweier Geraden.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Genau ein Schnittpunkt</p>
    <h3>Eine eindeutige Lösung</h3>
    <p>Die beiden Geraden treffen sich an genau einer Stelle.</p>
  </section>
  <section>
    <p class="card-kicker">Keine Schnittpunkte</p>
    <h3>Keine Lösung</h3>
    <p>Die Geraden verlaufen parallel und treffen sich nicht.</p>
  </section>
  <section>
    <p class="card-kicker">Unendlich viele gemeinsame Punkte</p>
    <h3>Unendlich viele Lösungen</h3>
    <p>Beide Gleichungen beschreiben dieselbe Gerade.</p>
  </section>
</div>

## Wichtige Lösungsverfahren

### Einsetzungsverfahren

Dabei wird eine Gleichung nach einer Variablen aufgelöst und in die andere eingesetzt.

### Additionsverfahren

Dabei werden Gleichungen so kombiniert, dass eine Variable wegfällt.

### Gleichsetzungsverfahren

Dabei werden zwei Ausdrücke für dieselbe Variable miteinander verglichen.

Alle Verfahren verfolgen dasselbe Ziel:

- eine Variable schrittweise zu entfernen,
- die übrige zu bestimmen,
- danach zurückzusetzen und die zweite zu berechnen.

<div class="figure-card">
  <p class="card-kicker">Lösungslogik</p>
  <h3>Vom System zur konkreten Zahl</h3>
  <div class="signal-flow compact">
    <div><strong>zwei Gleichungen lesen</strong><span>gemeinsame Struktur erkennen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>eine Variable entfernen</strong><span>ein Verfahren gezielt nutzen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Rückeinsetzen</strong><span>zweite Variable bestimmen</span></div>
  </div>
</div>

## Beispiel mit Additionsverfahren

Gegeben ist:

<div class="equation-card">
  <p class="card-kicker">Start</p>
  <h3>Ausgangssystem</h3>
  <div class="equation-block">
    <p class="equation-line">2x + y = 7</p>
    <p class="equation-line">x - y = 2</p>
  </div>
</div>

Beide Gleichungen werden addiert:

<div class="equation-card">
  <p class="card-kicker">Schritt 1</p>
  <h3>Eine Variable fällt weg</h3>
  <div class="equation-block">
    <p class="equation-line">3x = 9</p>
    <p class="equation-line muted">also x = 3</p>
  </div>
</div>

Jetzt in eine der Gleichungen einsetzen:

<div class="equation-card">
  <p class="card-kicker">Schritt 2</p>
  <h3>Rückeinsetzen</h3>
  <div class="equation-block">
    <p class="equation-line">3 - y = 2</p>
    <p class="equation-line muted">also y = 1</p>
  </div>
</div>

Die Lösung lautet also:

<div class="equation-card">
  <p class="card-kicker">Ergebnis</p>
  <h3>Gemeinsame Lösung</h3>
  <div class="equation-block">
    <p class="equation-line">x = 3</p>
    <p class="equation-line">y = 1</p>
  </div>
</div>

## Eine ruhige Rechenstrategie

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Ein Verfahren bewusst durchziehen</h3>
    <p>Du entscheidest dich für ein Verfahren, verfolgst einen klaren Schritt nach dem anderen und kontrollierst am Ende mit der Probe.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Zwischen Verfahren hin und her springen</h3>
    <p>Dann gehen Vorzeichen, Zwischenschritte oder die gemeinsame Logik des Systems schnell verloren.</p>
  </section>
</div>

## Probe

Die Probe ist besonders wichtig.

<div class="equation-card">
  <p class="card-kicker">Kontrolle</p>
  <h3>Beide Gleichungen testen</h3>
  <div class="equation-block">
    <p class="equation-line">2 · 3 + 1 = 7</p>
    <p class="equation-line">3 - 1 = 2</p>
  </div>
</div>

Beide Aussagen stimmen. Die Lösung passt.

## Typische Fehler

- Nur eine Gleichung beachten und die andere vergessen.
- Vorzeichenfehler beim Addieren oder Subtrahieren.
- Nach dem ersten Ergebnis die zweite Variable nicht korrekt zurückberechnen.
- Keine Probe machen.
- Ein Gleichungssystem mit einer einzelnen Gleichung verwechseln.

## Gute Denkweise

Beim Lösen helfen diese Schritte:

1. Beide Gleichungen ruhig lesen.
2. Ein sinnvolles Verfahren auswählen.
3. Eine Variable entfernen.
4. Die verbleibende Variable bestimmen.
5. Rückeinsetzen.
6. Probe machen.

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Lösung ist erst dann wirklich eine Lösung, wenn sie in <em>allen</em> Gleichungen des Systems stimmt.</p>
</div>

## Warum das Thema wichtig ist

Lineare Gleichungssysteme sind wichtig für:

- Sachaufgaben,
- technische Berechnungen,
- Funktionen und Geraden,
- spätere lineare Algebra,
- Modellierung von Zusammenhängen.

## Merksätze

- Ein lineares Gleichungssystem verbindet mehrere Bedingungen.
- Gesucht sind Werte, die alle Gleichungen gleichzeitig erfüllen.
- Es kann eine Lösung, keine Lösung oder unendlich viele Lösungen geben.
- Die Probe zeigt, ob das Ergebnis wirklich beide Gleichungen erfüllt.
