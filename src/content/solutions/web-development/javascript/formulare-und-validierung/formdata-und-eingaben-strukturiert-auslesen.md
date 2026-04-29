---
title: "Lösung – JavaScript: FormData und Eingaben strukturiert auslesen"
description: "Musterlösung zur Aufgabe: Ein Formular enthält email, message und mehrere topic-Checkboxen. Beschreibe, welche Werte mit get und welche mit getAll gelesen werden."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "formulare-und-validierung", "formdata-und-eingaben-strukturiert-auslesen"]
taskId: "web-js-formdata-und-eingaben-strukturiert-auslesen"
relatedExercise: "web-development/javascript/formulare-und-validierung/formdata-und-eingaben-strukturiert-auslesen"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

email und message sind einzelne Werte und können mit get gelesen werden. Mehrere topic-Checkboxen können mehrere Werte liefern; dafür ist getAll passend. Voraussetzung ist, dass die Felder sinnvolle name-Attribute besitzen.

## Fachliche Begründung

Die Lösung trennt bewusst die sichtbare Nutzerhandlung von der technischen Umsetzung. Dadurch wird klar, ob der Code ein Element auswählt, ein Ereignis behandelt, Daten liest, Daten speichert oder eine Rückmeldung in der Oberfläche erzeugt.

## Selbstkontrolle

- Ist erkennbar, welcher Browserzustand verändert wird?
- Gibt es eine sinnvolle Prüfung für fehlende oder ungültige Werte?
- Bleibt die Lösung verständlich, wenn später ein weiteres Feld, eine weitere Meldung oder ein weiterer Zustand dazukommt?
