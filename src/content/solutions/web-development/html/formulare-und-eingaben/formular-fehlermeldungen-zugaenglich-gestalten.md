---
title: "Lösung – Fehlermeldungen in einem Formular verbessern"
description: "Musterlösung zu: Analysiere ein Formularfeld mit unklarer Fehlermeldung und baue daraus eine zugänglichere Lösung."
subject: "web-development"
section: "HTML"
topicPath: ["html", "formulare-und-eingaben", "formular-fehlermeldungen-zugaenglich-gestalten"]
taskId: "wd-html-v95-formular-fehlermeldungen"
relatedExercise: "web-development/html/formulare-und-eingaben/formular-fehlermeldungen-zugaenglich-gestalten"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der rote Rahmen allein ist nicht ausreichend, weil er nur visuell wirkt und keine konkrete Handlung erklärt. Die Fehlermeldung muss beim Feld stehen, sichtbar sein und über aria-describedby mit dem Eingabefeld verbunden werden.

## Lösung zu Aufgabe 2

Eine tragfähige Entscheidung trennt zuerst Bedeutung und Technik. In diesem Fall sollte nicht nur ein optischer Effekt erzeugt werden. Die Lösung muss ausdrücken, was gemeint ist, und sie muss in typischen Nutzungssituationen funktionieren.

Wichtig ist außerdem: Die Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Ein möglicher Ausschnitt ist:

```html
<label for="email">E-Mail</label>
<input id="email" name="email" aria-invalid="true" aria-describedby="email-error">
<p id="email-error">Bitte gib eine vollständige E-Mail-Adresse ein.</p>
```

Je nach Projekt kann der genaue Code anders aussehen. Entscheidend ist, dass die gewählte Struktur das Problem gezielt löst und nicht nur kosmetisch überdeckt.
