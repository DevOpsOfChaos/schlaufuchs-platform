---
title: "ATmega – UART Senden und Empfangen trennen"
description: "Verstehe, warum UART am AVR nicht nur „serielle Daten“ bedeutet, sondern aus zwei klar unterscheidbaren Richtungen besteht."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-senden-und-empfangen-trennen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
UART wirkt im Einstieg oft wie „da laufen halt serielle Daten“. Ruhiger ist aber die klare Frage: **Wer sendet gerade, und wer empfängt gerade?** Genau diese Trennung zwischen **TX** und **RX** macht den UART-Fall am AVR deutlich verständlicher.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein AVR sendet „A“ und empfängt später „B“</h3>
  <p>Ein Controller soll ein Zeichen an einen PC schicken und später ein anderes Zeichen vom PC empfangen. Die Schnittstelle ist in beiden Fällen dieselbe UART-Verbindung, aber die Richtung des Datenwegs ist nicht dieselbe. Genau das muss man fachlich sauber trennen.</p>
</div>

## Zwei Richtungen statt eine diffuse Leitung

<div class="compare-card">
  <p class="card-kicker">Richtungslogik</p>
  <h3>Vom AVR weg oder zum AVR hin?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>TX</strong>
      <span>Hier sendet der AVR Daten nach außen.</span>
    </div>
    <div class="compare-item">
      <strong>RX</strong>
      <span>Hier empfängt der AVR Daten von außen.</span>
    </div>
  </div>
</div>

## Mini-Demo: derselbe UART, zwei Wege

<pre><code>AVR sendet 'A'  → Zeichen läuft vom Controller über TX nach außen
AVR empfängt 'B' → Zeichen kommt von außen über RX in den Controller hinein</code></pre>

Gerade diese einfache Richtungslesart verhindert viele Einstiegsfehler.

## Ein Zeichen als Weg lesen

```c
UDR0 = 'A';      // senden
zeichen = UDR0;  // empfangen
```

Die ruhige Lesart ist:

- beim Senden wird ein Zeichen in die serielle Ausgangsrichtung gegeben,
- beim Empfangen wird ein angekommenes Zeichen aus der Eingangsrichtung geholt,
- derselbe UART-Baustein ist beteiligt, aber die Datenrichtung ist nicht dieselbe.

## Nicht nur auf Pins schauen

TX und RX sind nicht bloß zwei Pin-Namen. Sie beschreiben die **Datenrichtung relativ zum Controller**. Genau deshalb kann derselbe Verdrahtungsfehler oder Denkfehler schnell dazu führen, dass etwas gesendet wird, obwohl man eigentlich auf Empfang wartet – oder umgekehrt.

## Mini-Konsole im Kopf

<pre><code>Will ich ein Zeichen hinausschicken?
→ TX / senden
Will ich ein Zeichen von außen aufnehmen?
→ RX / empfangen</code></pre>

## Diese Seite behandelt bewusst Richtungslogik, nicht schon jedes UART-Detail

Hier geht es zuerst um die ruhige Trennung von **Senden** und **Empfangen**. Baudrate, Registerdetails oder Puffer bauen darauf auf und gehören auf eigene Seiten.

## Eine ruhige Prüfstrategie

1. Wo startet das Zeichen – im Controller oder außerhalb?
2. Läuft das Zeichen gerade hinaus oder hinein?
3. Ist TX oder RX aus Sicht des AVR gemeint?
4. Erst danach die konkreten Register oder Statusbits lesen.

<div class="note-panel">
  <p><strong>Merke:</strong> UART ist nicht nur „serielle Daten“. Die erste ruhige Frage lautet immer: Wird gerade gesendet oder empfangen?</p>
</div>
