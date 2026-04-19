---
title: PHP-JSON-Antworten für AJAX grundlegend verstehen
description: Verstehe, wie ein PHP-Skript Daten als JSON zurückgeben kann, damit JavaScript sie im Browser weiterverarbeitet.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - php-json-antworten-fuer-ajax-grundlegend-verstehen
learningGoals:
  - Du erklärst die Grundidee einer JSON-Antwort aus PHP.
  - Du verknüpfst AJAX-Anfrage, PHP-Verarbeitung und JSON-Antwort zu einem Gesamtablauf.
  - Du liest <code>json_encode</code> fachlich als Umwandlung von PHP-Daten in ein transportierbares Datenformat.
practiceIdeas:
  - Ordne Browser, PHP-Skript und JSON-Antwort einem AJAX-Ablauf zu.
  - Vergleiche HTML-Antwort und JSON-Antwort bei einer Hintergrundanfrage.
  - Erkläre, warum strukturierte Daten für JavaScript oft günstiger sind als bloßer Fließtext.
commonMistakes:
  - AJAX nur als Browsertrick ohne Serverseite zu sehen.
  - JSON mit JavaScript-Code gleichzusetzen.
  - Zu glauben, json_encode erzeuge automatisch schon die Browseroberfläche.
keyTakeaways:
  - PHP kann Datenstrukturen als JSON zurückgeben.
  - AJAX nutzt solche Antworten oft, damit JavaScript die Seite im Hintergrund aktualisiert.
  - Der Server liefert Daten, die Oberfläche interpretiert und zeigt sie dann passend an.
recognizeSignals:
  - Begriffe wie AJAX, JSON, <code>json_encode</code>, <code>responseText</code> oder <code>JSON.parse</code> tauchen auf.
  - Es geht um Hintergrundanfragen und dynamische Seitenteile.
  - Du sollst Client- und Serverrolle gemeinsam erklären.
selfCheckPoints:
  - Kann ich Serverantwort und Seitendarstellung unterscheiden?
  - Kann ich erklären, was json_encode fachlich macht?
  - Kann ich den Ablauf Browser → PHP → JSON → JavaScript ruhig beschreiben?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - ajax
  - json
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
