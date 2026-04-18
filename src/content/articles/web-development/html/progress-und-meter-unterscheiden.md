---
title: Progress und Meter unterscheiden
description: Verstehe, warum Fortschritt und Messstand nicht dasselbe bedeuten und wie progress sowie meter unterschiedliche Arten von Zuständen ausdrücken.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - progress-und-meter-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen Fortschritt und Messstand.
  - Du beschreibst passende Einsatzsituationen für progress und meter.
  - Du liest Balkenanzeigen eher über ihre Aussage als nur über ihre Form.
practiceIdeas:
  - Vergleiche einen Upload-Fortschritt mit einer Speicher- oder Auslastungsanzeige.
  - Prüfe, ob sich ein Balken zu einem Ziel hin bewegt oder nur einen aktuellen Stand zeigt.
  - Lies die Balkenlogik eher als Bedeutung als als Designmuster.
commonMistakes:
  - progress und meter als austauschbare Balkenanzeigen zu behandeln.
  - einen aktuellen Messwert als Fortschritt zu beschreiben.
  - nur auf Farbe und Länge zu schauen, aber nicht auf die Aussage des Werts.
keyTakeaways:
  - progress beschreibt Fortschritt in Richtung eines Ziels.
  - meter beschreibt einen aktuellen Wert innerhalb eines Bereichs.
  - Gleiche Optik kann fachlich verschiedene Aussagen transportieren.
recognizeSignals:
  - Es geht um Uploads, Ladezustände, Speicherstände, Bewertungen oder Auslastungen.
  - Du sollst erklären, ob ein Zustand sich zu einem Abschluss hin bewegt oder nur gemessen wird.
  - In Beispielen ist die Bedeutung des Werts wichtiger als seine Balkenform.
selfCheckPoints:
  - Kann ich progress und meter fachlich trennen?
  - Kann ich erklären, was ein Zielzustand von einem Messbereich unterscheidet?
  - Kann ich passende Einsatzsituationen für beide nennen?
tags:
  - html
  - progress
  - meter
  - status
level: mittel
draft: false
---

## Grundidee

Zwei Balken können fast gleich aussehen und trotzdem etwas ganz anderes bedeuten. Ein Balken kann zeigen, **wie weit ein Vorgang schon fortgeschritten ist**. Oder er kann zeigen, **wo ein aktueller Wert innerhalb eines Bereichs liegt**. Genau dafür stehen `progress` und `meter`.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Datei-Upload und Speicherstand</h3>
  <p>Ein Upload läuft auf ein klares Ziel zu: 100 Prozent abgeschlossen. Ein Speicherstand zeigt dagegen nur, wie viel Platz gerade belegt ist. Beide Zustände lassen sich als Balken darstellen, aber die fachliche Aussage ist nicht dieselbe.</p>
</div>

## Zwei Bedeutungen, eine ähnliche Form

<div class="visual-grid">
  <div class="visual-item">
    <strong>progress</strong>
    <span>Zeigt Fortschritt auf dem Weg zu einem Abschluss oder Ziel.</span>
  </div>
  <div class="visual-item">
    <strong>meter</strong>
    <span>Zeigt einen aktuellen Wert innerhalb eines Bereichs, ohne dass dieser Wert automatisch „unterwegs zum Ende" ist.</span>
  </div>
</div>

## Mini-Demo: Abschluss oder Messstand?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Balkenform sieht ähnlich aus, die Aussage dahinter nicht</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Progress: Upload</strong></p>
      <div style="height:0.85rem; border-radius:999px; background:#e2e8f0; overflow:hidden;">
        <div style="width:68%; height:100%; background:#60a5fa;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">68 Prozent heißt hier: Der Vorgang nähert sich dem Abschluss.</p>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Meter: Speicherstand</strong></p>
      <div style="height:0.85rem; border-radius:999px; background:#e2e8f0; overflow:hidden;">
        <div style="width:68%; height:100%; background:#f59e0b;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">68 Prozent beschreibt hier nur einen Zustand innerhalb eines Bereichs.</p>
    </div>
  </div>
</div>

## Typische Einsatzsituationen

### `progress`

- Upload läuft,
- Download läuft,
- Formularschritte werden abgeschlossen,
- Verarbeitung nähert sich einem Ende.

### `meter`

- Speicherstand,
- Akkuzustand,
- Auslastung,
- Bewertung oder Pegel innerhalb eines Bereichs.

## Ruhiger Vergleich

<div class="compare-card">
  <p class="card-kicker">Frage nach der Aussage</p>
  <h3>Bewegt sich der Wert auf ein Ziel zu oder beschreibt er nur einen aktuellen Stand?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Fortschritt</strong>
      <span>Ein Zustand verändert sich in Richtung eines Abschlusses.</span>
    </div>
    <div class="compare-item">
      <strong>Messstand</strong>
      <span>Ein Wert liegt irgendwo innerhalb eines Bereichs und muss nicht „zum Ende" unterwegs sein.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Gibt es ein **klares Ziel oder Ende**?
2. Oder wird nur ein **aktueller Wert** beschrieben?
3. Soll der Balken „fertig werden"?
4. Oder soll er nur eine Lage im Bereich zeigen?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>progress</code> ist eher Weg-zum-Ziel. <code>meter</code> ist eher aktueller Stand im Bereich.</p>
</div>
