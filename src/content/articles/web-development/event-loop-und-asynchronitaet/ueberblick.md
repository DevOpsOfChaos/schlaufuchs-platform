---
title: "Event Loop und Asynchronität"
description: "Allgemeiner Überblick über Event Loop, asynchrone Abläufe und Reaktionen im Browser."
subject: "web-development"
section: "JavaScript"
topicPath: ["event-loop-und-asynchronitaet", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "JavaScript"]
draft: false
---
# Event Loop und Asynchronität

Der Event Loop ist ein Modell dafür, wie JavaScript im Browser Ereignisse, Aufgaben und spätere Rückmeldungen verarbeitet. Er erklärt, warum Code nicht einfach in mehreren echten Strängen gleichzeitig läuft und trotzdem auf Eingaben, Timer oder Netzwerkantworten reagieren kann.

## Bedeutung

Asynchronität ist im Web zentral, weil Benutzeroberflächen bedienbar bleiben sollen, während Daten geladen oder Zeitgeber ablaufen. Promises, async/await, Events und Timer bauen auf diesem Ablaufmodell auf.

## Typische Teilaspekte

- **Call Stack:** Aktuell laufender JavaScript-Code wird im Aufrufstapel verarbeitet.
- **Tasks:** Ereignisse, Timer und andere Aufgaben werden nacheinander abgearbeitet.
- **Microtasks:** Promise-Reaktionen werden in einer eigenen Reihenfolge verarbeitet.
- **Rendering:** Der Browser muss zwischen Aufgaben auch Darstellung und Eingaben berücksichtigen.

## Beispiel

Ein Klick startet eine Fetch-Anfrage. Der Code blockiert nicht, sondern registriert eine spätere Reaktion. Wenn die Antwort kommt, wird die passende Fortsetzung eingeplant.

## Abgrenzung

Der Event Loop ist kein Garant für schnelle Anwendungen. Lange synchrone Berechnungen blockieren trotzdem die Oberfläche.

## Häufige Missverständnisse

Häufig wird `async` mit echter Parallelität verwechselt. Es beschreibt zunächst, dass ein Ablauf unterbrochen und später fortgesetzt werden kann.

## Einordnung im Gesamtzusammenhang

Der Event Loop verbindet JavaScript, DOM-Ereignisse, Netzwerkzugriffe, Performance und robuste UI-Zustände.
