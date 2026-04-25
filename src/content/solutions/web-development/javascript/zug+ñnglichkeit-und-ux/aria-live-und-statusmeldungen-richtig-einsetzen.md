---
title: "Lösung – aria-live und Statusmeldungen richtig einsetzen"
description: "Musterlösung mit fachlicher Begründung zur passenden JavaScript-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "zugaenglichkeit-und-ux"
  - "aria-live-und-statusmeldungen-richtig-einsetzen"
taskId: "web-js-v99-aria-live-und-statusmeldungen-richtig-einsetzen"
relatedExercise: "web-development/javascript/zugänglichkeit-und-ux/aria-live-und-statusmeldungen-richtig-einsetzen"
tags:
  - "web development"
  - "javascript"
  - "aria-live"
  - "accessibility"
  - "status"
  - "lösung"
draft: false
---

## Lösung

Ein Absatz wie <p class="status" aria-live="polite"></p> reicht für eine normale Speichern-Meldung. JavaScript setzt danach den Text „Einstellungen gespeichert.“. polite ist passend, weil die Meldung wichtig, aber nicht alarmierend ist.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: vorhandene Struktur lesen, Entscheidung treffen, Rückmeldung geben und Fehler nicht unsichtbar lassen.
