---
title: "Restflächen und feste Anteile in Layouts begründen"
description: "Begründe, wann calc in CSS die Größenlogik eines Layouts sichtbar und nachvollziehbar macht."
subject: "web-development"
section: "CSS"
topicPath: ["css", "calc-fuer-zusammengesetzte-groessen-verstehen", "restflaechen-und-feste-anteile-in-layouts-begruenden"]
taskId: "AUTO-RESTFLAECHEN-UND-FESTE-ANTEILE-IN-LAYOUTS-BEGRUENDEN"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Hauptbereich neben Sidebar

Eine Seitenleiste ist 16rem breit. Daneben soll der Hauptbereich die restliche Breite nutzen.

Erkläre, warum eine Logik wie `calc(100% - 16rem)` hier sinnvoll beschrieben sein kann.

## Aufgabe 2: Höhe unter fester Kopfzeile

Eine App hat oben eine feste Kopfzeile mit 4rem Höhe. Der darunterliegende Inhaltsbereich soll den restlichen sichtbaren Raum einnehmen.

Begründe, warum `calc` hier helfen kann, die sichtbare Restfläche klar zu beschreiben.

## Aufgabe 3: Zu viel Rechnung

Jemand verwendet `calc`, obwohl das Layout mit einer klaren Grid- oder Flex-Struktur bereits sauber beschrieben wäre.

Erkläre, warum `calc` nicht automatisch die beste Lösung ist.
