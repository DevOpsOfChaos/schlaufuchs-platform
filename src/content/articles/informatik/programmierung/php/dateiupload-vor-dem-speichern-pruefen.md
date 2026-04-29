---
title: "Dateiupload in PHP vor dem Speichern prüfen"
description: "Verstehe, warum ein Upload erst geprüft und erst danach mit move_uploaded_file abgelegt werden sollte."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "dateiupload-vor-dem-speichern-pruefen"]
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

Bei einem Upload schickt der Browser eine Datei an den Server. Dort liegt sie zunächst nicht automatisch am endgültigen Ziel, sondern zuerst in einem temporären Bereich.

## Welche Informationen liefert $_FILES?

<div class="visual-grid">
  <div class="visual-item"><strong>name</strong><span>ursprünglicher Dateiname auf der Client-Seite</span></div>
  <div class="visual-item"><strong>type</strong><span>angegebener MIME-Typ</span></div>
  <div class="visual-item"><strong>size</strong><span>Dateigröße in Byte</span></div>
  <div class="visual-item"><strong>error</strong><span>Fehlerstatus beim Upload</span></div>
  <div class="visual-item"><strong>tmp_name</strong><span>temporärer Name der Datei auf dem Server</span></div>
</div>

```php
<?php
move_uploaded_file($_FILES['Datei']['tmp_name'], 'tmp/Bild.jpg');
```

Dieser Schritt gehört erst ans Ende des Ablaufs: zuerst prüfen, dann verschieben.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Upload ist noch kein vertrauenswürdiger Dateibestand. Zwischen Ankunft und endgültiger Ablage sollte immer eine Prüfung liegen.</p>
</div>
