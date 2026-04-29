---
title: "Dateiupload in PHP – Grundidee verstehen"
description: "Verstehe, wie ein HTML-Formular eine Datei an den Server überträgt und welche Rolle $_FILES dabei spielt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "dateiupload-in-php-grundidee-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Beim Dateiupload schickt der Browser nicht nur normale Textwerte, sondern eine ausgewählte Datei an den Server. Damit das klappt, braucht das Formular eine passende Übertragungsart und PHP braucht eine Struktur, in der die Dateiinfos zugänglich werden.

```html
<form action="script.php" method="POST" enctype="multipart/form-data">
  <input type="file" name="Datei">
  <input type="submit">
</form>
```

## Was PHP bereitstellt

<div class="compare-card">
  <p class="card-kicker">Upload-Daten</p>
  <h3>In <code>$_FILES</code> steckt mehr als nur ein Name</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>name</strong>
      <span>Ursprünglicher Dateiname auf der Client-Seite.</span>
    </div>
    <div class="compare-item">
      <strong>tmp_name</strong>
      <span>Temporärer Ort auf dem Server, unter dem die Datei zunächst liegt.</span>
    </div>
    <div class="compare-item">
      <strong>size / type / error</strong>
      <span>Größe, Typangabe und mögliche Upload-Fehler helfen bei der Prüfung.</span>
    </div>
  </div>
</div>

## Der typische Ablauf

<div class="step-grid">
  <div class="step-item">
    <strong>1. Formular senden</strong>
    <span>Die Datei wird zusammen mit dem Formular zum Server übertragen.</span>
  </div>
  <div class="step-item">
    <strong>2. Upload prüfen</strong>
    <span>PHP stellt Name, Größe, Fehler und temporären Speicherort bereit.</span>
  </div>
  <div class="step-item">
    <strong>3. Erst dann speichern</strong>
    <span>Nach Prüfung kann die Datei bewusst an ihren Zielort verschoben werden.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Upload ist nicht einfach "Datei speichern", sondern zuerst eine Übertragung in einen temporären Bereich, die sauber geprüft werden sollte.</p>
</div>
