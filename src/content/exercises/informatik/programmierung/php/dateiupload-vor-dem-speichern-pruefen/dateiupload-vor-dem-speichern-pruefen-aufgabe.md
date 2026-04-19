---
title: Dateiupload vor dem Speichern prüfen
description: Ordne die Upload-Daten in $_FILES und begründe, warum Prüfung vor Speicherung nötig ist.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - dateiupload-vor-dem-speichern-pruefen
  - dateiupload-vor-dem-speichern-pruefen-aufgabe
taskId: INF-PHP-ADV-009
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - task-id
hintPoints:
  - "Frage zuerst, welche fachliche Rolle im Beispiel wirklich gemeint ist."
  - "Trenne Begriffe, Ablauf und sichtbares Ergebnis sauber."
selfCheckPoints:
  - "Habe ich die zentrale Unterscheidung dieser Seite sauber getroffen?"
  - "Habe ich meine Begründung nicht nur benannt, sondern erklärt?"
transferIdeas:
  - "Übertrage die Idee auf ein kleines Formular- oder Dateibeispiel in PHP."
reflectionPrompt: "Welche Unterscheidung war in dieser Aufgabe am leichtesten zu verwechseln?"
---
## Aufgabe 1: Felder zuordnen

Wofür stehen grob diese Einträge?

- `name`
- `size`
- `error`
- `tmp_name`

## Aufgabe 2: Sicherheitsgedanke erklären

Warum sollte `move_uploaded_file(...)` nicht der allererste Schritt nach einem Upload sein?
