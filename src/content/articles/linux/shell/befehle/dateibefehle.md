---
title: "Dateibefehle"
description: "Wie typische Befehle wie cp, mv und rm Dateien und Inhalte im Dateisystem verändern."
subject: linux
section: "Shell / Befehle"
level: einfach
tags:
  - Dateien
  - cp
  - mv
  - rm
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

## Typische Beispiele

### `cp`

Kopiert Dateien oder Ordner.

<div class="command-strip">
  <p>Kopie einer Datei anlegen</p>
  <code>cp notiz.txt backup/notiz.txt</code>
</div>

### `mv`

Verschiebt oder benennt Inhalte um.

<div class="command-strip">
  <p>Datei umbenennen</p>
  <code>mv alt.txt neu.txt</code>
</div>

### `rm`

Entfernt Dateien.

<div class="command-strip">
  <p>Datei löschen</p>
  <code>rm notiz.txt</code>
</div>

## Gleiche Werkzeuge, sehr unterschiedliche Wirkung

<div class="comparison-grid">
  <section>
    <p class="card-kicker">cp</p>
    <h3>Etwas bleibt erhalten</h3>
    <p>Die Originaldatei bleibt bestehen, zusätzlich entsteht eine Kopie an einem anderen Ort oder unter einem anderen Namen.</p>
  </section>
  <section>
    <p class="card-kicker">mv</p>
    <h3>Ort oder Name ändern sich</h3>
    <p>Die Datei bleibt dieselbe, aber ihr Platz oder ihr Name ändert sich.</p>
  </section>
  <section>
    <p class="card-kicker">rm</p>
    <h3>Der Eintrag verschwindet</h3>
    <p>Die Datei wird entfernt. Genau deshalb sollte dieser Befehl besonders bewusst gelesen werden.</p>
  </section>
</div>

## Warum ist das wichtig?

Mit diesen Befehlen arbeitest du nicht nur an einem Ort — du **veränderst** ihn.

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

Deshalb ist es gut, sie bewusst und ruhig einzusetzen.

## Praktische Regel

Vor Datei-Befehlen helfen oft zwei kurze Fragen:

- Bin ich am richtigen Ort?
- Greife ich auf die richtige Datei zu?

<div class="note-panel">
  <p><strong>Merke:</strong> Gerade bei verändernden Befehlen ist nicht Tempo wichtig, sondern Kontrolle. Ein kurzer Blick auf Pfad und Dateiname spart oft viel Ärger.</p>
</div>

## Typische Anfängerfehler

### „Ich dachte, das ist nur eine Vorschau.“

Nein. Diese Befehle wirken auf echte Inhalte.

### „Ich habe den Namen nicht genau geprüft.“

Gerade bei Datei-Befehlen sollte man Namen und Pfade sorgfältig lesen.

### „Ich nutze rm zu schnell.“

Besonders <code>rm</code> sollte man nie hektisch verwenden.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So arbeitest du mit Dateibefehlen ruhiger</h3>
  <ol>
    <li>Prüfe zuerst Datei und Pfad.</li>
    <li>Frage dann, ob kopiert, verschoben oder wirklich gelöscht werden soll.</li>
    <li>Kontrolliere nach dem Befehl den neuen Zustand im Dateisystem.</li>
  </ol>
</div>
