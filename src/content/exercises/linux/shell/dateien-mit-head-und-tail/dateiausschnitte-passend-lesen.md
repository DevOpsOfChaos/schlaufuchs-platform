---
title: Dateiausschnitte passend lesen
description: Entscheide, wann head, tail oder cat für eine Datei und eine konkrete Frage am sinnvollsten ist.
subject: linux
section: Shell
topicPath:
  - shell
  - dateien-mit-head-und-tail
  - dateiausschnitte-passend-lesen
level: einfach
draft: false
tags:
  - linux
  - head
  - tail
hintPoints:
  - "Frage zuerst, ob du den Anfang, das Ende oder den ganzen Inhalt brauchst."
  - "Achte darauf, dass Logdateien oft am Ende die spannendsten Einträge haben."
selfCheckPoints:
  - "Kannst du den Zweck von head und tail klar unterscheiden?"
  - "Kannst du begründen, wann cat zu viel Ausgabe liefern würde?"
transferIdeas:
  - "Übertrage die Idee auf Logdateien, Listen oder Konfigurationsdateien."
  - "Erkläre die Lösung einmal knapp als Befehlswahl und einmal als Arbeitsstrategie."
reflectionPrompt: "Wann hilft dir ein Dateiausschnitt mehr als die komplette Datei?"
---

## Aufgabe 1: Werkzeug wählen

Ordne zu, welches Werkzeug besser passt:

- Du willst nur die ersten Überschriften einer Datei sehen.
- Du willst die letzten Einträge einer Logdatei sehen.
- Du willst eine sehr kurze Datei vollständig lesen.

## Aufgabe 2: Entscheidung begründen

Erkläre, warum `tail` für viele Protokolldateien oft sinnvoller ist als `cat`.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt:

> head und tail sind nur unnötige Varianten von cat.

Erkläre, was daran ungenau ist.
