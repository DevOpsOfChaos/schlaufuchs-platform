---
title: Cookie oder Session für einen Anwendungsfall wählen
description: Entscheide, ob ein Anwendungsfall eher Cookie- oder Session-Logik braucht, und begründe den Unterschied.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - cookies-und-sessions-in-php-unterscheiden
  - cookie-oder-session-fuer-anwendungsfall-waehlen
taskId: INF-PHP-STATE-001
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - cookies
  - sessions
hintPoints:
  - "Denke an zustandsloses HTTP."
  - "Trenne clientseitige Speicherung von serverseitiger Sitzung."
selfCheckPoints:
  - "Habe ich Speicherort und Rolle nicht verwechselt?"
  - "Habe ich begründet, warum ein Mechanismus hier besser passt?"
transferIdeas:
  - "Übertrage die Logik auf Login, Warenkorb und einfache Personalisierung."
reflectionPrompt: "Wann reicht eine kleine clientseitige Information, und wann braucht der Server eigene Sitzungsdaten?"
---

## Aufgabe 1

Ordne die Fälle grob zu:

- Spracheinstellung einer Seite merken
- Warenkorb eines Shops zwischen Seiten halten
- Benutzer nach Login eindeutig wiedererkennen

## Aufgabe 2

Warum ist HTTP ohne Zusatzmechanismen nicht gut darin, zusammenhängende Abläufe über mehrere Seitenaufrufe zu „merken“?

## Aufgabe 3

Warum müssen <code>setcookie()</code> und <code>session_start()</code> vor normaler Ausgabe erfolgen?
