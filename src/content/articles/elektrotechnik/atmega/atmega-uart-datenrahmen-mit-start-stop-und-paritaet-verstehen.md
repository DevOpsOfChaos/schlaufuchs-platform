---
title: "ATmega – UART-Datenrahmen mit Start-, Stopp- und Paritätsbit verstehen"
description: "Verstehe, wie der AVR ein Zeichen seriell als Datenrahmen überträgt und warum Start-, Stopp- und Paritätsbit andere Rollen haben als die eigentlichen Nutzdaten."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-datenrahmen-mit-start-stop-und-paritaet-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
## Grundidee

Wenn ein AVR über UART ein Zeichen sendet, wird nicht einfach nur „das Byte“ auf die Leitung gelegt. Das Zeichen wird in einen **Datenrahmen** eingebettet. Genau dieser Rahmen sorgt dafür, dass der Empfänger erkennt, **wann ein Zeichen beginnt**, **wie viele Nutzbits dazugehören** und **wann es wieder endet**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleicher Text, trotzdem unlesbar</h3>
  <p>Zwei Geräte arbeiten mit derselben Baudrate. Trotzdem kommen am Empfänger keine brauchbaren Zeichen an. Dann lohnt sich die Frage: Stimmen zwar die Bitzeiten, aber nicht die Struktur des übertragenen Zeichens? Genau dafür ist der UART-Rahmen entscheidend.</p>
</div>

## Ein Zeichen besteht aus mehreren Teilen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Startbit</strong>
    <span>Markiert den Beginn eines neuen Zeichens und bringt den Empfänger in die richtige Zeitlage.</span>
  </div>
  <div class="visual-item">
    <strong>Datenbits</strong>
    <span>Hier liegen die eigentlichen Nutzdaten des Zeichens.</span>
  </div>
  <div class="visual-item">
    <strong>Paritätsbit</strong>
    <span>Kann optional mitgesendet werden, um einfache Bitfehler besser zu erkennen.</span>
  </div>
  <div class="visual-item">
    <strong>Stoppbit</strong>
    <span>Markiert das saubere Ende des Rahmens, bevor das nächste Zeichen beginnt.</span>
  </div>
</div>

## Was 8N1 eigentlich bedeutet

```text
8N1 = 8 Datenbits, No Parity, 1 Stoppbit
```

Diese Kurzform beschreibt also **den Rahmen**, nicht den Inhalt des gesendeten Textes.

<div class="figure-card">
  <p class="card-kicker">Mini-Denkbild</p>
  <h3>Ein Zeichen wird eingerahmt, nicht nur übertragen</h3>
  <pre><code>Leitung in Ruhe → Startbit → 8 Datenbits → kein Paritätsbit → 1 Stoppbit</code></pre>
  <p>Genau diese Struktur muss der Empfänger in derselben Form mitdenken, sonst liest er die Bitfolge an den falschen Stellen.</p>
</div>

## Warum gleiche Baudrate nicht automatisch reicht

Viele Lernende denken zuerst: „Wenn 9600 Baud auf beiden Seiten gleich sind, dann muss es doch funktionieren.“ Das ist nur die halbe Wahrheit.

<div class="compare-card">
  <p class="card-kicker">Zwei Ebenen</p>
  <h3>Zeit und Rahmen müssen zusammenpassen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Baudrate</strong>
      <span>Bestimmt die zeitliche Länge eines Bits.</span>
    </div>
    <div class="compare-item">
      <strong>Rahmenform</strong>
      <span>Bestimmt, wie viele Bits ein Zeichen enthält und wie diese gelesen werden.</span>
    </div>
  </div>
</div>

Wenn eine Seite zum Beispiel 8N1 erwartet und die andere Seite 7E1 sendet, kann trotz passender Bitzeit die Zeichendeutung kippen.

## Mini-Demo: dieselbe Leitung, andere Lesart

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Der Unterschied liegt nicht im Text, sondern in der Rahmendeutung</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Sender</strong></p>
      <p style="margin:0;"><code>9600 Baud, 8N1</code></p>
      <p style="margin:0.6rem 0 0;">Das Zeichen wird mit 8 Nutzbits und 1 Stoppbit eingerahmt.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Empfänger</strong></p>
      <p style="margin:0;"><code>9600 Baud, 7E1</code></p>
      <p style="margin:0.6rem 0 0;">Die Bitzeit passt vielleicht, aber die Rahmendeutung ist anders. Genau dadurch entstehen Fehlzeichen.</p>
    </div>
  </div>
</div>

## Parität ist Zusatz, nicht die Hauptnutzlast

Das Paritätsbit gehört – wenn aktiviert – zum Rahmen. Es ist keine „neunte Datenstelle“, sondern ein zusätzlicher Kontrollgedanke.

- **N** in 8N1 bedeutet: keine Parität.
- **E** bedeutet: Even Parity.
- **O** bedeutet: Odd Parity.

Didaktisch wichtig ist hier: **Parität prüft mit**, sie trägt aber nicht den eigentlichen Zeicheninhalt.

Hier geht es um die **innere Form eines Zeichens**. Die Frage, wie aus `F_CPU` und `UBRR` die Bitzeit entsteht, gehört auf die eigene Baudraten-Seite. So bleibt sauber getrennt:

- **Baudrate** = Zeitbasis pro Bit
- **Rahmen** = Struktur des Zeichens

## Eine ruhige Prüfstrategie

1. Stimmen Sender und Empfänger in der Baudrate überein?
2. Lesen beide Seiten dieselbe Rahmenform wie `8N1` oder `7E1`?
3. Ist Parität aktiv oder nicht?
4. Wird ein Fehlerbild eher als Textproblem oder als Rahmenproblem sichtbar?

<div class="note-panel">
  <p><strong>Merke:</strong> UART überträgt nicht nur Nutzdaten. Jedes Zeichen braucht einen Datenrahmen – und genau dieser Rahmen muss auf beiden Seiten gleich gelesen werden.</p>
</div>
