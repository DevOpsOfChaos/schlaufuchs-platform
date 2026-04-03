---
title: "Pfade verstehen"
description: "Absolute und relative Pfade unterscheiden und sicher im Terminal nutzen."
subject: linux
section: "Shell / Navigation"
level: einfach
tags:
  - Pfade
  - Shell
  - Navigation
draft: false
---

## Was ist ein Pfad?

Ein Pfad beschreibt den **Weg zu einem Ordner oder zu einer Datei**.

## Absolute Pfade

Ein absoluter Pfad beginnt am Startpunkt des Dateisystems.

```bash
/home/user/projekte
```

Er ist vollständig und unabhängig davon, wo du gerade bist.

## Relative Pfade

Ein relativer Pfad hängt davon ab, **wo du gerade arbeitest**.

```bash
projekte
```

oder

```bash
../bilder
```

## Warum ist das wichtig?

Viele Befehle im Terminal arbeiten mit Pfaden.  
Wer Pfade versteht, kann sich sicherer bewegen und macht weniger Fehler.

## Merksatz

Absolute Pfade sind vollständig.  
Relative Pfade beziehen sich auf deinen aktuellen Ort.
