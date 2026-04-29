---
title: "fgets, feof und Dateischleifen ruhig lesen"
description: "Verstehe, wie PHP Dateien zeilenweise liest und warum Lesen, Ende-Prüfung und Schließen zusammengehören."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "fgets-feof-und-dateischleifen-ruhig-lesen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Beim zeilenweisen Dateilesen in PHP wirken mehrere Teile zusammen: Eine Datei wird geöffnet, über ein Handle referenziert, zeilenweise gelesen und am Ende sauber geschlossen.

<div class="step-grid">
  <div class="step-item">
    <strong>1. Öffnen</strong>
    <span>Mit <code>fopen</code> entsteht ein Handle auf die Datei.</span>
  </div>
  <div class="step-item">
    <strong>2. Solange lesen</strong>
    <span>Mit einer Schleife wird geprüft, ob das Dateiende erreicht ist.</span>
  </div>
  <div class="step-item">
    <strong>3. Zeile holen</strong>
    <span><code>fgets</code> liest typischerweise die nächste Zeile.</span>
  </div>
  <div class="step-item">
    <strong>4. Schließen</strong>
    <span><code>fclose</code> beendet den Zugriff sauber.</span>
  </div>
</div>

## Rollen sauber trennen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Handle</strong>
    <span>Die technische Referenz auf die offene Datei.</span>
  </div>
  <div class="visual-item">
    <strong>fgets</strong>
    <span>Liest Inhalt aus der Datei.</span>
  </div>
  <div class="visual-item">
    <strong>feof</strong>
    <span>Prüft, ob das Dateiende erreicht ist.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> feof liest nichts aus der Datei. Es hilft nur dabei, den Leseablauf kontrolliert zu beenden.</p>
</div>
