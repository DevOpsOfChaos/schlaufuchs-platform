---
title: "ATmega – UART-Baudrate und UBRR verstehen"
description: "Verstehe, wie der AVR aus Takt und UBRR die UART-Baudrate ableitet und warum derselbe Terminalwert je nach Taktbasis etwas anderes bedeuten kann."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-baudrate-und-ubrr-verstehen"]
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

Bei der UART stellt man am AVR nicht einfach nur „9600“ oder „115200“ ein und alles passt. Der Controller braucht eine **Zeitbasis**, aus der er die Bitdauer ableitet. Genau dafür ist die Kombination aus **Systemtakt** und **UBRR-Registerwert** wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>9600 Baud sind nicht einfach nur „9600“</h3>
  <p>Zwei Projekte sollen beide mit <code>9600 Baud</code> senden. Das eine läuft mit <code>8&nbsp;MHz</code>, das andere mit <code>16&nbsp;MHz</code>. Nach außen sieht der Zielwert gleich aus. Im Controller müssen aber unterschiedliche Zeitverhältnisse eingestellt werden, damit die Bitdauer wirklich passt.</p>
</div>

## Die ruhige Leitfrage

Nicht nur fragen: <strong>„Welche Baudrate will ich?“</strong><br />
Sondern technischer lesen:

1. Welche <strong>Taktbasis</strong> hat mein AVR?
2. Welcher <strong>UBRR-Wert</strong> erzeugt daraus ungefähr die gewünschte Bitdauer?

## Mini-Demo: gleicher Zielwert, andere Zeitbasis

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum dieselbe Baudrate nicht automatisch denselben Registerwert bedeutet</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Projekt A</strong></p>
      <p style="margin:0;"><code>F_CPU = 8 MHz</code></p>
      <p style="margin:0.35rem 0 0;"><code>Ziel = 9600 Baud</code></p>
      <p style="margin:0.6rem 0 0;">Der AVR braucht einen Registerwert, der aus 8&nbsp;MHz eine passende Bitzeit ableitet.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Projekt B</strong></p>
      <p style="margin:0;"><code>F_CPU = 16 MHz</code></p>
      <p style="margin:0.35rem 0 0;"><code>Ziel = 9600 Baud</code></p>
      <p style="margin:0.6rem 0 0;">Der Zielwert bleibt gleich, aber die Registereinstellung muss zur neuen Taktbasis passen.</p>
    </div>
  </div>
</div>

## UBRR ist kein „Baudratenfeld“

Der UBRR-Wert ist kein Speicherplatz, in den man direkt die gewünschte Baudrate hineinschreibt. Er ist vielmehr ein **Teiler- beziehungsweise Einstellwert**, mit dem der AVR aus seinem Takt eine passende serielle Bitgeschwindigkeit ableitet.

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Zielwert und Registerwert sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Baudrate</strong>
      <span>Beschreibt die gewünschte Bitgeschwindigkeit auf der Leitung.</span>
    </div>
    <div class="compare-item">
      <strong>UBRR</strong>
      <span>Ist der Registerwert, mit dem der AVR diese Geschwindigkeit aus seiner Taktbasis ungefähr erzeugt.</span>
    </div>
  </div>
</div>

## Der Denkweg ist wichtiger als die Detailformel

In vielen Einführungen wird schnell eine Formel hingeschrieben. Didaktisch wichtiger ist zuerst der Gedanke:

- Der AVR läuft mit einer bestimmten Taktfrequenz.
- Die UART braucht eine bestimmte Bitdauer.
- UBRR hilft, diese Zeitrelation im Controller einzustellen.

Erst dann wird klar, warum ein falscher Takt oder ein unpassender UBRR-Wert zu falscher serieller Übertragung führt.

## Mini-Rechenblick

Auch ohne tiefe Detailrechnung ist der Kern schon sichtbar:

```text
gleiche Ziel-Baudrate + andere Taktbasis = anderer Registerwert
gleicher Registerwert + andere Taktbasis = andere echte Baudrate
```

Genau deshalb sind UART-Fehler oft **Zeitbasisfehler** und nicht zuerst „Zeichenfehler“.

## Typisches Fehlerbild

Wenn im Terminal statt lesbarer Zeichen nur unverständliche Ausgaben erscheinen, liegt oft eine dieser Ursachen vor:

- falsche Taktannahme im Projekt,
- unpassender UBRR-Wert,
- Sender und Empfänger sprechen nicht mit derselben Bitzeit.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei UART-Problemen zuerst Takt und Baudrate lesen – erst danach den eigentlichen Textinhalt bewerten.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Zielwert benennen</strong>
    <span>Welche Baudrate soll überhaupt erreicht werden?</span>
  </div>
  <div class="step-item">
    <strong>2. Taktbasis prüfen</strong>
    <span>Mit welcher <code>F_CPU</code> arbeitet der AVR wirklich?</span>
  </div>
  <div class="step-item">
    <strong>3. Register logisch lesen</strong>
    <span>Ist der UBRR-Wert plausibel für genau diese Taktbasis?</span>
  </div>
  <div class="step-item">
    <strong>4. Fehlerbild deuten</strong>
    <span>Zeigt der Terminal-Zeichensalat eher auf ein Zeitproblem als auf die Textlogik?</span>
  </div>
</div>
