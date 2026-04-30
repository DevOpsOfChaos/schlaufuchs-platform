---
title: "Lösung – JavaScript: JSON.parse, JSON.stringify und Datengrenzen verstehen"
description: "Musterlösung zur Aufgabe: Erkläre, warum localStorage nur Text speichert. Zeige, wann stringify und parse gebraucht werden."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "daten-laden", "json-parse-stringify-und-datengrenzen-verstehen"]
taskId: "web-js-json-parse-stringify-und-datengrenzen-verstehen"
relatedExercise: "src/content/exercises/web-development/javascript/daten-laden/json-parse-stringify-und-datengrenzen-verstehen"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

localStorage speichert Werte als Strings. Soll ein Objekt gespeichert werden, wird es vorher mit JSON.stringify in Text verwandelt. Beim Lesen wird dieser Text mit JSON.parse wieder in ein Objekt übersetzt.

## Fachliche Begründung

Die Lösung trennt bewusst die sichtbare Nutzerhandlung von der technischen Umsetzung. Dadurch wird klar, ob der Code ein Element auswählt, ein Ereignis behandelt, Daten liest, Daten speichert oder eine Rückmeldung in der Oberfläche erzeugt.

## Selbstkontrolle

- Ist erkennbar, welcher Browserzustand verändert wird?
- Gibt es eine sinnvolle Prüfung für fehlende oder ungültige Werte?
- Bleibt die Lösung verständlich, wenn später ein weiteres Feld, eine weitere Meldung oder ein weiterer Zustand dazukommt?
