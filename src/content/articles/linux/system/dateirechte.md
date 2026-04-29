---
title: "Dateirechte lesen und deuten"
description: "Verstehe, wie Linux Rechte für Besitzer, Gruppe und andere unterscheidet."
subject: "linux"
section: "system"
topicPath: ["system", "dateirechte"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "system"]
draft: false
---
## Drei Ebenen der Rechte

Linux unterscheidet Rechte meist für drei Ebenen:

- Besitzer
- Gruppe
- andere

Dazu kommen die bekannten Buchstaben für Lesen, Schreiben und Ausführen.

## Warum das Lesen wichtiger ist als das Ändern

Viele Lernende wollen schnell zu <code>chmod</code>. Sinnvoller ist zuerst das saubere Lesen der Ausgangslage. Nur wer erkennt, wem eine Datei gehört und welche Rechte schon gesetzt sind, kann Änderungen sinnvoll einordnen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Privat oder gemeinsam?</h3>
  <p>Eine Datei mit restriktiven Rechten wirkt oft privat, eine Datei mit Gruppenleserechten eher teamorientiert. Erst zusammen mit Besitzer und Gruppe wird die Bedeutung klar.</p>
</div>

## Anwendungen

Rechte sind wichtig bei Konfigurationsdateien, Skripten, Teamordnern und allen Situationen, in denen mehrere Personen oder Prozesse zusammenarbeiten.
