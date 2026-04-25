---
title: "Lösung – JavaScript: Event Listener und Handler klar trennen"
description: "Musterlösung zur Aufgabe: Beschreibe den Unterschied zwischen showMessage und showMessage() in einem addEventListener. Schreibe ein korrektes Klickbeispiel."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "dom-und-events"
  - "event-listener-und-handler-klar-trennen"
taskId: "web-js-event-listener-und-handler-klar-trennen"
relatedExercise: "web-development/javascript/dom-und-events/event-listener-und-handler-klar-trennen"
tags:
  - "web development"
  - "javascript"
  - "events"
  - "listener"
  - "handler"
  - "lösung"
draft: false
---

## Musterlösung

showMessage ist die Funktionsreferenz. showMessage() führt die Funktion sofort aus und übergibt ihr Ergebnis. Für einen Listener wird die Referenz übergeben: button.addEventListener("click", showMessage).

## Fachliche Begründung

Die Lösung trennt bewusst die sichtbare Nutzerhandlung von der technischen Umsetzung. Dadurch wird klar, ob der Code ein Element auswählt, ein Ereignis behandelt, Daten liest, Daten speichert oder eine Rückmeldung in der Oberfläche erzeugt.

## Selbstkontrolle

- Ist erkennbar, welcher Browserzustand verändert wird?
- Gibt es eine sinnvolle Prüfung für fehlende oder ungültige Werte?
- Bleibt die Lösung verständlich, wenn später ein weiteres Feld, eine weitere Meldung oder ein weiterer Zustand dazukommt?
