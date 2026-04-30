---
title: "Musterlösung – Parameter und Aufrufe sauber zuordnen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-FUNC-002."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "parameter-und-argumente-unterscheiden", "parameter-und-aufrufe-sauber-zuordnen"]
taskId: "INF-PROG-CPP-FUNC-002"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/parameter-und-argumente-unterscheiden/parameter-und-aufrufe-sauber-zuordnen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Begriffe zuordnen

Der Parameter ist <code>int zahl</code> in der Funktionsdefinition. Das Argument ist die konkrete <code>7</code> im Aufruf <code>verdoppeln(7)</code>.

## Aufgabe 2: Funktionsaufruf erklären

Beim Aufruf wird der konkrete Wert 7 an die Funktion übergeben, sodass der Platzhalter <code>zahl</code> innerhalb der Funktion mit diesem Wert arbeitet.

## Aufgabe 3: Denkfehler prüfen

<code>int zahl</code> ist noch kein fester Wert, sondern nur ein Platzhalter im Funktionskopf. Erst der konkrete Aufruf entscheidet, mit welchem Wert die Funktion in diesem Durchgang tatsächlich arbeitet.
