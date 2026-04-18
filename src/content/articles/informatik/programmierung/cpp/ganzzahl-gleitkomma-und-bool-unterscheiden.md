---
title: Ganzzahl-, Gleitkomma- und bool-Werte unterscheiden
description: Verstehe, wann ein exakter Zählwert, ein Näherungswert oder ein Ja-Nein-Zustand gebraucht wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - primitive-datentypen
  - ganzzahl-gleitkomma-und-bool-unterscheiden
learningGoals:
  - Du unterscheidest ganze Zahlen, Näherungswerte und bool-Werte sauber.
  - Du erklärst, warum Messwerte und Zählwerte nicht gleich behandelt werden sollten.
  - Du erkennst typische Verwechslungen zwischen 0, false und Zeichenwerten.
practiceIdeas:
  - Begründe für mehrere Variablen, ob ein Zählwert, Näherungswert oder Zustand vorliegt.
  - Prüfe, welche Werte exakt gezählt werden und welche nur angenähert vorliegen.
  - Vergleiche Beispiele mit <code>int</code>, <code>double</code> und <code>bool</code> bewusst über ihre Rolle im Ablauf.
commonMistakes:
  - Eine Messgröße mit Nachkommastellen als exakte Anzahl zu behandeln.
  - bool-Werte nur als verkleidete Zahlen zu sehen.
  - Zeichen, Zustände und ganze Zahlen über dieselbe Sichtweise zu lesen.
keyTakeaways:
  - Ganze Zahlen eignen sich für exakte Stückzahlen oder Zähler.
  - Gleitkommawerte eignen sich für Näherungswerte wie Längen, Zeiten oder Temperaturen.
  - bool ist für Entscheidungen und Zustände gedacht.
recognizeSignals:
  - Es geht um Typwahl, Variablenrollen oder die Frage, ob ein Wert genau oder nur angenähert vorliegt.
  - In Beispielen musst du zwischen Rechnen, Vergleichen und Entscheiden unterscheiden.
  - Du sollst begründen, warum ein bestimmter Grundtyp sinnvoller ist als ein anderer.
selfCheckPoints:
  - Kann ich ganze Zahlen, Näherungswerte und Zustände auseinanderhalten?
  - Kann ich erklären, warum Messwerte oft anders behandelt werden als Zählwerte?
  - Kann ich Verwechslungen zwischen 0, false und Zeichenwerten vermeiden?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - int
  - double
  - bool
draft: false
---

## Grundidee

Beim Programmieren ist nicht nur wichtig, <em>dass</em> ein Wert gespeichert wird, sondern auch <em>welche Art von Wert</em> vorliegt. Ein Lagerbestand, eine Temperatur und ein Zustand wie „eingeloggt oder nicht“ brauchen nicht dieselbe Denkweise.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Werte, drei Rollen</h3>
  <p>Ein Shop speichert <code>artikelImWarenkorb = 3</code>, <code>rabattAktiv = true</code> und <code>porto = 4.95</code>. Obwohl alle Werte „klein und harmlos“ wirken, stecken fachlich drei verschiedene Rollen dahinter: zählen, entscheiden und mit Näherungswerten rechnen.</p>
</div>

## Exakt zählen oder angenähert messen?

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Ganzzahl</p>
    <h3>Exakte Stückzahl</h3>
    <p>Eine Anzahl von Personen, Klicks oder Fehlversuchen wird normalerweise als ganze Zahl gedacht.</p>
  </section>
  <section>
    <p class="card-kicker">Gleitkomma</p>
    <h3>Näherungswert</h3>
    <p>Temperatur, Gewicht oder Zeitwerte mit Nachkommastellen werden typischerweise als Näherungswerte gelesen.</p>
  </section>
  <section>
    <p class="card-kicker">bool</p>
    <h3>Ja oder Nein</h3>
    <p>Ein bool-Wert beantwortet eine Entscheidungsfrage und ist keine Stückzahl.</p>
  </section>
</div>

## Warum diese Trennung wichtig ist

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Wertart vor Rechenweg</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Frage stellen</strong><span>Was beschreibt der Wert eigentlich?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Wertart klären</strong><span>Zählwert, Näherungswert oder Zustand?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Typ wählen</strong><span>Dann erst <code>int</code>, <code>double</code> oder <code>bool</code>.</span></div>
  </div>
</div>

## Typische Verwechslungen

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Rolle des Werts zuerst lesen</h3>
    <p>Du fragst zuerst: Zähle ich etwas, messe ich etwas oder prüfe ich einen Zustand?</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur auf die Schreibweise schauen</h3>
    <p>Dann wirken <code>0</code>, <code>false</code> oder <code>0.0</code> schnell wie bloß andere Varianten desselben.</p>
  </section>
</div>

## Ein kleines Beispiel

```cpp
int anzahlTickets = 4;
double streckeKm = 12.7;
bool zugFaelltAus = false;
```

- <code>anzahlTickets</code> ist eine exakte Menge.
- <code>streckeKm</code> ist ein Messwert.
- <code>zugFaelltAus</code> ist eine Entscheidungsinformation.

## Eine ruhige Prüfstrategie

1. Beschreibt der Wert eine Anzahl, einen Messwert oder einen Zustand?
2. Muss der Wert exakt sein oder reicht eine Näherung?
3. Soll der Wert später in Bedingungen geprüft werden?
4. Erst dann den Typ festlegen.

<div class="note-panel">
  <p><strong>Merke:</strong> Der Unterschied zwischen <code>int</code>, <code>double</code> und <code>bool</code> ist nicht nur technisch. Er spiegelt wider, wie du die Information fachlich verstehst.</p>
</div>
