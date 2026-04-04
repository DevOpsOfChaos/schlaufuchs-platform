---
title: chmod verstehen
description: Ändere Dateirechte gezielt und sicher mit chmod.
subject: linux
section: rechte-und-benutzer
level: mittel
tags: [chmod, dateirechte, linux]
draft: false
---

Mit `chmod` lassen sich Dateirechte gezielt ändern. Das Kommando ist ein zentrales Werkzeug, wenn du steuern willst, wer etwas lesen, schreiben oder ausführen darf.

## Was macht chmod?

`chmod` verändert die Rechte von Dateien und Ordnern. Damit arbeitest du direkt mit der Linux-Rechte-Logik für Besitzer, Gruppe und andere Nutzer.

## Warum das Kommando wichtig ist

Sobald du Dateirechte nicht nur lesen, sondern auch bewusst anpassen willst, brauchst du `chmod`. Das gilt zum Beispiel für:

- Skripte ausführbar machen
- Zugriffe einschränken
- Rechte in Übungs- oder Serverumgebungen bewusst setzen

## Zwei typische Denkweisen

Beim Arbeiten mit `chmod` ist wichtig, dass du nicht nur ein Kommando auswendig lernst, sondern verstehst,

- **welche Rechte** geändert werden
- **für wen** sie geändert werden
- **welche Wirkung** das praktisch hat

## Was du zuerst verstehen solltest

Am Anfang ist besonders hilfreich:

- die Grundrechte `r`, `w`, `x` sicher zu kennen
- die Rollen `user`, `group`, `other` zu verstehen
- zu erkennen, was ein Rechtewechsel konkret verändert

## Merksatz

`chmod` ändert Linux-Dateirechte – und macht aus der reinen Rechteanzeige eine bewusst steuerbare Zugriffskontrolle.
