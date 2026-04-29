---
title: "Ganzzahl-, Gleitkomma- und bool-Werte unterscheiden"
description: "Verstehe, wann ein exakter Zählwert, ein Näherungswert oder ein Ja-Nein-Zustand gebraucht wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "ganzzahl-gleitkomma-und-bool-unterscheiden"]
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
