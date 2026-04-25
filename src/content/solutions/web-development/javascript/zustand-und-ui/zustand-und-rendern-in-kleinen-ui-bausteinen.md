---
title: "Lösung – Zustand und Rendern in kleinen UI-Bausteinen"
description: "Musterlösung mit fachlicher Begründung zur passenden JavaScript-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "zustand-und-ui"
  - "zustand-und-rendern-in-kleinen-ui-bausteinen"
taskId: "web-js-v99-zustand-und-rendern-in-kleinen-ui-bausteinen"
relatedExercise: "web-development/javascript/zustand-und-ui/zustand-und-rendern-in-kleinen-ui-bausteinen"
tags:
  - "web development"
  - "javascript"
  - "zustand"
  - "rendern"
  - "ui"
  - "lösung"
draft: false
---

## Lösung

Der Zustand kann als Objekt oder Variable vorliegen, zum Beispiel count. Beim Klick wird nur count erhöht. Danach ruft der Code render() auf. render() liest count und schreibt den sichtbaren Text. Dadurch ist klar getrennt, was die Datenlage ist und was nur Anzeige ist.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: vorhandene Struktur lesen, Entscheidung treffen, Rückmeldung geben und Fehler nicht unsichtbar lassen.
