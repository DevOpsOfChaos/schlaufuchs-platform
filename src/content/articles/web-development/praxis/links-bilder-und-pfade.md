---
title: "Links, Bilder und Pfade"
description: "Verstehe, wie Webseiten auf andere Seiten, Bilder und Dateien verweisen und warum saubere Pfade wichtig sind."
subject: "web-development"
section: "Praxis"
topicPath: ["praxis", "links-bilder-und-pfade"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Praxis"]
draft: false
---
## Warum Pfade oft unnötig schwer wirken

Viele Fehler bei HTML-Dateien entstehen nicht durch Tags, sondern durch unklare Pfade. Wer den Ausgangsort einer Datei sauber mitdenkt, löst diese Probleme deutlich ruhiger.

## href und src trennen

Mit <code>href</code> verlinkst du ein Ziel. Mit <code>src</code> lädst du eine Ressource wie ein Bild. Beide arbeiten mit Pfaden, aber nicht mit derselben Aufgabe.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleicher Ordner, anderer Unterordner</h3>
  <p>Liegt eine HTML-Datei im Root und ein Bild in <code>assets/bilder</code>, dann musst du den Weg genau von der HTML-Datei aus lesen. Von einem Unterordner aus beginnt dieser Weg anders.</p>
</div>
