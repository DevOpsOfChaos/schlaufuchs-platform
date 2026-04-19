---
title: Loesung – virtual und konkretes Objekt bei Methodenwahl erklaeren
description: Musterloesung zur Aufgabe ueber virtual, override und das konkrete Objekt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - virtual-methoden-und-override-verstehen
taskId: INF-PROG-OOP-019
relatedExercise: informatik/programmierung/oop/virtual-methoden-und-override-verstehen/virtual-und-konkretes-objekt-bei-methodenwahl-erklaeren
tags:
  - informatik
  - oop
  - loesung
draft: false
---

## Musterloesung

### Aufgabe 1

Bei `virtual` reicht der Basisklassentyp allein nicht mehr fuer die endgueltige Methodenwahl. Wichtig wird, welches konkrete Objekt wirklich hinter der Referenz oder dem Zeiger steckt.

### Aufgabe 2

Ueberschreiben beschreibt zuerst die Struktur entlang einer Vererbung. `virtual` sorgt dann dafuer, dass die Auswahl der passenden Implementierung spaeter und am echten Objekt orientiert erfolgen kann.

### Aufgabe 3

Ein typisches Missverstaendnis ist, dass jede ueberschriebene Methode automatisch polymorph wirkt. Ruhiger gedacht wird sie erst dann zur Laufzeit passend gewaehlt, wenn `virtual` die spaete Bindung erlaubt.
