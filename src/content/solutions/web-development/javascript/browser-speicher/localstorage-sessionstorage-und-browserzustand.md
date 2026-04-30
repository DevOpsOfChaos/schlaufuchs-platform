---
title: "Lösung – JavaScript: localStorage, sessionStorage und Browserzustand"
description: "Musterlösung zur Aufgabe: Ordne drei Werte zu: Farbschema, aktueller Wizard-Schritt und Passwort. Entscheide, ob localStorage, sessionStorage oder gar kein Browser-Speicher passt."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "browser-speicher", "localstorage-sessionstorage-und-browserzustand"]
taskId: "web-js-localstorage-sessionstorage-und-browserzustand"
relatedExercise: "src/content/exercises/web-development/javascript/browser-speicher/localstorage-sessionstorage-und-browserzustand"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

Das Farbschema kann in localStorage, weil es dauerhaft gewünscht sein kann. Ein Wizard-Schritt passt eher in sessionStorage. Ein Passwort gehört nicht in localStorage oder sessionStorage.

## Fachliche Begründung

Die Lösung trennt bewusst die sichtbare Nutzerhandlung von der technischen Umsetzung. Dadurch wird klar, ob der Code ein Element auswählt, ein Ereignis behandelt, Daten liest, Daten speichert oder eine Rückmeldung in der Oberfläche erzeugt.

## Selbstkontrolle

- Ist erkennbar, welcher Browserzustand verändert wird?
- Gibt es eine sinnvolle Prüfung für fehlende oder ungültige Werte?
- Bleibt die Lösung verständlich, wenn später ein weiteres Feld, eine weitere Meldung oder ein weiterer Zustand dazukommt?
