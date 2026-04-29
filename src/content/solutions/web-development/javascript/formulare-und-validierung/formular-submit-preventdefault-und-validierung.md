---
title: "Lösung – JavaScript: Formular-submit, preventDefault und Validierung"
description: "Musterlösung zur Aufgabe: Beschreibe, warum ein submit-Listener am Formular robuster ist als ein click-Listener am Button. Skizziere eine Validierungslogik."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "formulare-und-validierung", "formular-submit-preventdefault-und-validierung"]
taskId: "web-js-formular-submit-preventdefault-und-validierung"
relatedExercise: "web-development/javascript/formulare-und-validierung/formular-submit-preventdefault-und-validierung"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

Ein submit-Listener reagiert auch bei Enter-Taste oder anderen Auslösewegen. Die Logik prüft zuerst die Daten, verhindert das Standardverhalten nur bei Fehlern und zeigt dann konkrete Feldhinweise oder eine Fehlersammlung.

## Fachliche Begründung

Die Lösung trennt bewusst die sichtbare Nutzerhandlung von der technischen Umsetzung. Dadurch wird klar, ob der Code ein Element auswählt, ein Ereignis behandelt, Daten liest, Daten speichert oder eine Rückmeldung in der Oberfläche erzeugt.

## Selbstkontrolle

- Ist erkennbar, welcher Browserzustand verändert wird?
- Gibt es eine sinnvolle Prüfung für fehlende oder ungültige Werte?
- Bleibt die Lösung verständlich, wenn später ein weiteres Feld, eine weitere Meldung oder ein weiterer Zustand dazukommt?
