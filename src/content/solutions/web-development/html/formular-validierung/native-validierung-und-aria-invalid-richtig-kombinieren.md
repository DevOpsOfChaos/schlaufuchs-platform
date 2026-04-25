---
title: "Lösung – Validierungsregel und Fehlerzustand trennen"
description: "Musterlösung zu: Ordne required, pattern, aria-invalid und Fehlermeldung fachlich richtig ein."
subject: web-development
section: "HTML"
topicPath:
  - "html"
  - "formular-validierung"
  - "native-validierung-und-aria-invalid-richtig-kombinieren"
taskId: "wd-html-v95-native-validierung-aria-invalid"
relatedExercise: "web-development/html/formular-validierung/native-validierung-und-aria-invalid-richtig-kombinieren"
tags:
  - "web development"
  - "html"
  - "validierung"
  - "aria-invalid"
  - "formulare"
draft: false
---
## Lösung zu Aufgabe 1

aria-invalid beschreibt einen Fehlerzustand, aber keine Regel. Pflichtfelder brauchen weiterhin required oder eine andere echte Validierungslogik. Der Fehlerzustand sollte erst gesetzt werden, wenn die Prüfung wirklich einen Fehler ergeben hat.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
<input id="plz" name="plz" required pattern="[0-9]{5}" aria-describedby="plz-error" aria-invalid="true">
<p id="plz-error">Bitte gib genau fünf Ziffern ein.</p>
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
