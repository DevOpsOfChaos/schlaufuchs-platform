---
title: Dateirechte symbolisch und numerisch lesen
description: Diese Aufgabe vertieft das Lesen und Deuten von Linux-Dateirechten in symbolischer und numerischer Form.
subject: linux
section: Grundlagen
level: mittel
draft: false
---

## Arbeitsauftrag

Bearbeite die Aufgaben so, dass immer klar ist, welche Rechte für Besitzer, Gruppe und andere gelten.

## Aufgabe 1

Erkläre in eigenen Worten:

1. Warum Linux Dateirechte braucht.
2. Was die drei Gruppen Besitzer, Gruppe und andere bedeuten.
3. Wofür `r`, `w` und `x` stehen.

## Aufgabe 2

Lies diese symbolischen Rechte:

- `rw-r--r--`
- `rwxr-xr-x`
- `rw-------`

Beschreibe jeweils, was Besitzer, Gruppe und andere dürfen.

## Aufgabe 3

Ordne die numerischen Schreibweisen zu:

- `644`
- `755`
- `600`

Erkläre jeweils kurz die Bedeutung.

## Aufgabe 4

Welche Rechte wären sinnvoll für:

1. eine persönliche Notizdatei, die nur der Besitzer lesen und ändern soll
2. ein Skript, das alle ausführen dürfen, aber nur der Besitzer ändern soll

## Aufgabe 5

Erkläre kurz:

1. Warum zu offene Schreibrechte problematisch sein können.
2. Warum `x` nicht einfach dasselbe ist wie lesen.

## Hinweise

- `r = 4`, `w = 2`, `x = 1`
- Rechte werden pro Gruppe getrennt betrachtet.
- Symbolische und numerische Schreibweise beschreiben dieselbe Idee.
