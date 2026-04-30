---
title: "Lösung – JavaScript: classList und UI-Zustand sichtbar machen"
description: "Musterlösung zur Aufgabe: Plane drei Zustandsklassen für eine Hinweisbox: neutral, Erfolg und Fehler. Erkläre, was JavaScript und was CSS übernimmt."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "dom-und-events", "classlist-und-ui-zustand-sichtbar-machen"]
taskId: "web-js-classlist-und-ui-zustand-sichtbar-machen"
relatedExercise: "src/content/exercises/web-development/javascript/dom-und-events/classlist-und-ui-zustand-sichtbar-machen"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

JavaScript entscheidet, welche Klasse gesetzt wird, zum Beispiel is-success oder is-error. CSS legt Farbe, Rahmen und Abstände fest. Dadurch bleibt die Logik im JavaScript und die Gestaltung im CSS.

## Fachliche Begründung

Die Lösung trennt bewusst die sichtbare Nutzerhandlung von der technischen Umsetzung. Dadurch wird klar, ob der Code ein Element auswählt, ein Ereignis behandelt, Daten liest, Daten speichert oder eine Rückmeldung in der Oberfläche erzeugt.

## Selbstkontrolle

- Ist erkennbar, welcher Browserzustand verändert wird?
- Gibt es eine sinnvolle Prüfung für fehlende oder ungültige Werte?
- Bleibt die Lösung verständlich, wenn später ein weiteres Feld, eine weitere Meldung oder ein weiterer Zustand dazukommt?
