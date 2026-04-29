---
title: "Loesung – Clientseite und Serverseite im Zustandsmodell trennen"
description: "Musterloesung zur Aufgabe ueber Cookies und Sessions in PHP."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "cookies-und-sessions-in-php-unterscheiden", "clientseite-und-serverseite-im-zustandsmodell-trennen"]
taskId: "INF-PHP-STATE-011"
relatedExercise: "informatik/programmierung/php/cookies-und-sessions-in-php-unterscheiden/clientseite-und-serverseite-im-zustandsmodell-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Ein Cookie ist eher clientseitig im Browserkontext mitgefuehrte Information. Eine Session beschreibt dagegen serverseitigen Zustand, der oft ueber eine Session ID wiedergefunden wird.

### Aufgabe 2

Die Session Daten koennen auf dem Server liegen, waehrend ein Cookie hilft, spaetere Requests der richtigen Sitzung zuzuordnen. Das Cookie traegt also oft die Wiedererkennungsrolle, nicht den ganzen Session Zustand selbst.

### Aufgabe 3

Ein Login Zustand liegt nicht einfach komplett im Cookie. Hauefig dient das Cookie eher dazu, die passende serverseitige Session wiederzufinden, in der der eigentliche Zustand verwaltet wird.
