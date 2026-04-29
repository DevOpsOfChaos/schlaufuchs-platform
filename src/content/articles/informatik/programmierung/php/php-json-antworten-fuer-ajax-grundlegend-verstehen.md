---
title: "PHP-JSON-Antworten für AJAX grundlegend verstehen"
description: "Verstehe, wie ein PHP-Skript Daten als JSON zurückgeben kann, damit JavaScript sie im Browser weiterverarbeitet."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "php-json-antworten-fuer-ajax-grundlegend-verstehen"]
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

Bei vielen Hintergrundanfragen soll ein PHP-Skript nicht direkt eine ganze HTML-Seite ausgeben, sondern strukturierte Daten liefern. Dafür ist JSON oft passend. PHP erzeugt die Daten, JavaScript liest sie und aktualisiert danach die Oberfläche.

```php
<?php
$daten = ["status" => "ok", "punkte" => 12];
echo json_encode($daten);
?>
```

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Von der AJAX-Anfrage zur sichtbaren Änderung</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Browser sendet Anfrage</strong><span>JavaScript löst die Hintergrundanfrage aus.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>PHP verarbeitet</strong><span>Das Skript bereitet die Daten vor und codiert sie als JSON.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>JavaScript liest Antwort</strong><span>Die Oberfläche wird mit den empfangenen Daten gezielt aktualisiert.</span></div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> JSON ist hier nicht die Oberfläche selbst, sondern das strukturierte Transportformat zwischen PHP und JavaScript.</p>
</div>
