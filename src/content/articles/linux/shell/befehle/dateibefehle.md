---
title: "Dateibefehle"
description: "Wie typische Befehle wie cp, mv und rm Dateien und Inhalte im Dateisystem verändern."
subject: "linux"
section: "Shell / Befehle"
topicPath: ["shell", "befehle", "dateibefehle"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell / Befehle"]
draft: false
---
## Worum geht es?

Dateibefehle verändern direkt Inhalte im Dateisystem.  
Darum sind sie nützlich, aber auch sensibler als reine Anzeige-Befehle.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Aus derselben Datei werden drei verschiedene Aktionen</h3>
  <p>Mit <code>cp</code> entsteht eine Kopie, mit <code>mv</code> wird dieselbe Datei an einen neuen Ort gebracht oder umbenannt, mit <code>rm</code> verschwindet sie. Die sichtbare Ausgangsdatei ist ähnlich, die Wirkung ist aber jedes Mal grundlegend anders.</p>
</div>

## Die drei Grundideen klar trennen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">cp</p>
    <h3>Etwas bleibt erhalten</h3>
    <p>Die Originaldatei bleibt bestehen, zusätzlich entsteht eine Kopie an einem anderen Ort oder unter einem anderen Namen.</p>
    <div class="command-strip"><code>cp notiz.txt backup/notiz.txt</code></div>
  </section>
  <section>
    <p class="card-kicker">mv</p>
    <h3>Ort oder Name ändern sich</h3>
    <p>Die Datei bleibt dieselbe, aber ihr Platz oder ihr Name ändert sich.</p>
    <div class="command-strip"><code>mv alt.txt neu.txt</code></div>
  </section>
  <section>
    <p class="card-kicker">rm</p>
    <h3>Der Eintrag verschwindet</h3>
    <p>Die Datei wird entfernt. Genau deshalb sollte dieser Befehl besonders bewusst gelesen werden.</p>
    <div class="command-strip"><code>rm notiz.txt</code></div>
  </section>
</div>

## Warum diese Unterscheidung so wichtig ist

Oberflächlich wirken die Befehle ähnlich: Alle arbeiten mit Datei- oder Ordnernamen. Fachlich sind sie aber sehr verschieden.

<div class="figure-card">
  <p class="card-kicker">Wirkbild</p>
  <h3>Vom Befehl zur Veränderung im Dateisystem</h3>
  <div class="signal-flow compact">
    <div><strong>Datei wählen</strong><span>Name und Pfad prüfen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Befehl ausführen</strong><span>cp, mv oder rm</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Zustand prüfen</strong><span>Was existiert jetzt noch?</span></div>
  </div>
</div>

## Erst prüfen, dann verändern

Mit diesen Befehlen arbeitest du nicht nur an einem Ort — du **veränderst** ihn. Deshalb lohnt sich vor dem Ausführen fast immer eine kurze Kontrolle:

- Bin ich im richtigen Verzeichnis?
- Greife ich wirklich auf die richtige Datei zu?
- Ist Kopieren, Verschieben oder Löschen gerade die passende Handlung?

## Dateibefehle lesen statt nur tippen

Gerade am Anfang hilft es, einen Befehl wie einen Satz zu lesen:

- **Was** ist die Quelle?
- **Wohin** geht das Ergebnis?
- **Bleibt** das Original bestehen oder nicht?

Wer so liest, versteht Shell-Arbeit deutlich ruhiger.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Unsicherer Stil</p>
    <h3>Schnell tippen, Wirkung hoffen</h3>
    <p>Das führt leicht zu falschen Zielen, vertauschten Namen oder unbeabsichtigtem Löschen.</p>
  </section>
  <section>
    <p class="card-kicker">Ruhiger Stil</p>
    <h3>Pfad und Wirkung bewusst prüfen</h3>
    <p>So wird aus einem sensiblen Befehl ein kontrollierter Arbeitsschritt.</p>
  </section>
</div>

## Typische Anfängerfehler

### „Ich dachte, das ist nur eine Vorschau.“

Nein. Diese Befehle wirken auf echte Inhalte.

### „Ich habe den Namen nicht genau geprüft.“

Gerade bei Datei-Befehlen sollte man Namen und Pfade sorgfältig lesen.

### „Ich nutze rm zu schnell.“

Besonders <code>rm</code> sollte man nie hektisch verwenden.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Dateibefehlen ist nicht Geschwindigkeit der wichtigste Punkt, sondern Kontrolle über Quelle, Ziel und Wirkung.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So arbeitest du mit Dateibefehlen ruhiger</h3>
  <ol>
    <li>Prüfe zuerst Datei und Pfad.</li>
    <li>Frage dann, ob kopiert, verschoben oder wirklich gelöscht werden soll.</li>
    <li>Kontrolliere nach dem Befehl den neuen Zustand im Dateisystem.</li>
  </ol>
</div>
