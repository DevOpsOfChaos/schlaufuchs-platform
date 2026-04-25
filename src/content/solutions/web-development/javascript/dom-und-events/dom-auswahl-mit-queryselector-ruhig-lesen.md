---
title: "Lösung – JavaScript: DOM-Auswahl mit querySelector ruhig lesen"
description: "Musterlösung zur Aufgabe: Wähle ein Element mit der Klasse status aus und setze den Text nur dann auf „Gespeichert“, wenn das Element existiert. Erkläre jeden Schritt."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "dom-und-events"
  - "dom-auswahl-mit-queryselector-ruhig-lesen"
taskId: "web-js-dom-auswahl-mit-queryselector-ruhig-lesen"
relatedExercise: "web-development/javascript/dom-und-events/dom-auswahl-mit-queryselector-ruhig-lesen"
tags:
  - "web development"
  - "javascript"
  - "dom"
  - "queryselector"
  - "browser"
  - "lösung"
draft: false
---

## Musterlösung

Zuerst wird mit document.querySelector(".status") gesucht. Danach prüft if (status), ob wirklich ein Element gefunden wurde. Erst im if-Block wird textContent gesetzt. So bleibt der Code stabil, wenn die Seite das Element noch nicht enthält.

## Fachliche Begründung

Die Lösung trennt bewusst die sichtbare Nutzerhandlung von der technischen Umsetzung. Dadurch wird klar, ob der Code ein Element auswählt, ein Ereignis behandelt, Daten liest, Daten speichert oder eine Rückmeldung in der Oberfläche erzeugt.

## Selbstkontrolle

- Ist erkennbar, welcher Browserzustand verändert wird?
- Gibt es eine sinnvolle Prüfung für fehlende oder ungültige Werte?
- Bleibt die Lösung verständlich, wenn später ein weiteres Feld, eine weitere Meldung oder ein weiterer Zustand dazukommt?
