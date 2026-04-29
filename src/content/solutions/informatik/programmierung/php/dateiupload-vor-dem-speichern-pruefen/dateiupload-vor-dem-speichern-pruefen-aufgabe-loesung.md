---
title: "Musterlösung – Dateiupload vor dem Speichern prüfen"
description: "Musterlösung zur Aufgabe INF-PHP-ADV-009."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "dateiupload-vor-dem-speichern-pruefen", "dateiupload-vor-dem-speichern-pruefen-aufgabe"]
taskId: "INF-PHP-ADV-009"
relatedExercise: "src/content/exercises/informatik/programmierung/php/dateiupload-vor-dem-speichern-pruefen/dateiupload-vor-dem-speichern-pruefen-aufgabe.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

- `name` → ursprünglicher Dateiname auf der Client-Seite
- `size` → Dateigröße
- `error` → Fehlerstatus
- `tmp_name` → temporärer Name der Datei auf dem Server

## Aufgabe 2

Vor dem Speichern sollte geprüft werden, ob Upload, Typ, Größe und Fehlerstatus plausibel sind. Erst danach sollte die Datei an einen endgültigen Ort verschoben werden.
