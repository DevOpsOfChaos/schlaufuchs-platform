---
title: "Lösung – scroll-margin und Sprungziele mit Sticky Header planen"
description: "Musterlösung zu: Eine Seite hat einen 72px hohen Sticky Header. Lege eine robuste Regel für Abschnittsziele fest und erkläre den Unterschied zu normalem margin-top."
subject: "web-development"
section: "CSS"
topicPath: ["css", "box-modell", "scroll-margin-und-sprungziele-mit-sticky-header"]
taskId: "wd-v97-scroll-margin-und-sprungziele-mit-sticky-header"
relatedExercise: "src/content/exercises/web-development/css/box-modell/scroll-margin-und-sprungziele-mit-sticky-header"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Das Problem entsteht nicht nur im Code, sondern in der Nutzung: Wenn Bedeutung, Struktur oder Rückmeldung unklar bleiben, müssen Nutzerinnen und Nutzer raten. Besonders kritisch wird das bei Tastaturbedienung, kleinen Bildschirmen, langen Inhalten oder assistiven Technologien.

## Lösung zu Aufgabe 2

Eine Regel wie section[id] { scroll-margin-top: 5rem; } gibt dem Browser beim Anspringen des Ziels zusätzlichen Abstand. Im Gegensatz zu margin-top verändert sie nicht den normalen Layoutabstand des Abschnitts.

Wichtig ist außerdem: Die gewählte Technik ist kein Selbstzweck. Sie ist dann passend, wenn sie die Information besser auffindbar, verständlicher oder wartbarer macht.

## Lösung zu Aufgabe 3

Eine tragfähige Skizze zeigt mindestens drei Dinge:

1. die fachliche Bedeutung der Stelle,
2. die passende HTML- oder CSS-Entscheidung,
3. eine kurze Prüfung, ob die Lösung in einer realistischen Nutzungssituation funktioniert.

## Lösung zu Aufgabe 4

Ein guter Review-Satz kann lauten:

> Ist diese Stelle nicht nur optisch sichtbar, sondern auch strukturell verständlich und in typischen Nutzungssituationen bedienbar?

Dieser Satz zwingt dazu, Semantik, Gestaltung und Bedienung gemeinsam zu prüfen.
