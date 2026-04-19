---
title: fgets, feof und Dateischleifen ruhig lesen
description: Verstehe, wie PHP Dateien zeilenweise liest und warum Lesen, Ende-Prüfung und Schließen zusammengehören.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - fgets-feof-und-dateischleifen-ruhig-lesen
learningGoals:
  - Du erklärst den Ablauf beim zeilenweisen Lesen einer Datei.
  - Du unterscheidest Handle, Zeile und Dateiende.
  - Du liest Dateischleifen als kontrollierten Ablauf statt als Funktionskette.
practiceIdeas:
  - Ordne Öffnen, Schleife, Lesen und Schließen in eine sinnvolle Reihenfolge.
  - Erkläre, warum feof nicht dieselbe Rolle wie fgets hat.
  - Beschreibe eine Ausgabeschleife für Logzeilen oder CSV-Zeilen in Worten.
commonMistakes:
  - Handle und gelesenen Text zu verwechseln.
  - Zu denken, feof lese selbst Daten.
  - Das Schließen der Datei als nebensächlich zu behandeln.
keyTakeaways:
  - fopen liefert typischerweise ein Handle.
  - fgets liest eine Zeile, feof prüft das Dateiende.
  - Schließen beendet den Zugriff sauber.
recognizeSignals:
  - Es geht um Dateilesen, fgets, feof, while oder fclose.
  - Ein Beispiel zeigt Zeilenverarbeitung.
  - Du sollst den Ablauf erklären, nicht nur die Syntax kennen.
selfCheckPoints:
  - Kann ich Handle, Zeile und Dateiende unterscheiden?
  - Kann ich den Sinn von feof erklären?
  - Kann ich den Gesamtablauf vom Öffnen bis Schließen beschreiben?
level: mittel
tags:
  - informatik
  - programmierung
  - php
  - datei
  - fgets
  - feof
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
