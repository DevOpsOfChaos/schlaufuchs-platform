---
title: Eingabe und Ausgabe im Konsolenablauf erklären
description: Erkläre bei kleinen C++-Beispielen die Rollen von cout, cin und der verwendeten Variable.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - erstes-programm
  - ein-und-ausgabe-mit-cin-und-cout-verstehen
  - eingabe-und-ausgabe-im-konsolenablauf-erklaeren
taskId: INF-PROG-CPP-CINOUT-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - cin
  - cout
hintPoints:
  - "Trenne zuerst Ausgabe, Eingabe und spätere Rückmeldung."
  - "Achte darauf, in welche Variable der Wert geschrieben wird."
selfCheckPoints:
  - "Hast du cin und cout sauber getrennt?"
  - "Ist die Rolle der Variablen erklärt?"
transferIdeas:
  - "Übertrage die Logik auf Name, Alter oder Punktzahl."
reflectionPrompt: "Warum hilft dir ein Datenflussdenken mehr als bloßes Symbolmerken?"
---

## Aufgabe 1: Rollen benennen

Gegeben ist:

```cpp
int zahl;
cout << "Bitte Zahl eingeben:" << endl;
cin >> zahl;
cout << "Zahl = " << zahl << endl;
```

Erkläre:

- welche Zeile eine Eingabeaufforderung ausgibt,
- welche Zeile die Eingabe übernimmt,
- und welche Zeile den gespeicherten Wert wieder sichtbar macht.

## Aufgabe 2: Richtung erklären

Erkläre in 2 bis 4 Sätzen, warum <code>&lt;&lt;</code> bei <code>cout</code> und <code>&gt;&gt;</code> bei <code>cin</code> für Anfänger als unterschiedliche Datenrichtung gelesen werden können.
