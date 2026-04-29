---
title: "Loesung – Objektlebenszyklus mit Konstruktor und Destruktor erklaeren"
description: "Musterloesung zur Aufgabe ueber Konstruktor, Destruktor und Objektlebenszyklus."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "konstruktoren-und-destruktoren-verstehen", "objektlebenszyklus-mit-konstruktor-und-destruktor-erklaeren"]
taskId: "INF-PROG-OOP-005"
relatedExercise: "informatik/programmierung/oop/konstruktoren-und-destruktoren-verstehen/objektlebenszyklus-mit-konstruktor-und-destruktor-erklaeren"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Der Konstruktor sorgt dafuer, dass ein neues Objekt in einem sinnvollen Anfangszustand startet. Er setzt also Startwerte oder bereitet benoetigte Bestandteile direkt beim Erzeugen vor.

### Aufgabe 2

Der Destruktor gehoert zum Ende des Objektlebenszyklus. Er hilft dabei, Ressourcen oder offene Zustaende sauber aufzuraeumen, wenn das Objekt verschwindet.

### Aufgabe 3

Ein automatisch erzeugtes Objekt endet meist automatisch beim Verlassen seines Geltungsbereichs. Ein mit `new` erzeugtes Objekt braucht spaeter ein bewusstes `delete`, damit sein Lebenszyklus sauber beendet wird.
