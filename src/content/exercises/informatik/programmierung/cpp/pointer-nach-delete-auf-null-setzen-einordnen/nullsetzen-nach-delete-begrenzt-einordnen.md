---
title: Nullsetzen nach delete begrenzt einordnen
description: Erkläre, was das Setzen auf nullptr nach delete hilft und warum es Alias-Pointer nicht automatisch sicher macht.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - pointer-nach-delete-auf-null-setzen-einordnen
  - nullsetzen-nach-delete-begrenzt-einordnen
taskId: INF-PROG-CPP-MEM-006
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Achte darauf, welche konkrete Variable wirklich geändert wird."
  - "Prüfe bei mehreren Pointern, ob andere Alias-Pointer unberührt bleiben."
  - "Beschreibe Nutzen und Grenze des Musters getrennt."
selfCheckPoints:
  - "Habe ich Nutzen und Grenze des Musters beide genannt?"
  - "Habe ich erklärt, warum nur ein bestimmter Pointer sicherer wird?"
  - "Habe ich das Nullsetzen nicht als Komplettlösung dargestellt?"
transferIdeas:
  - "Übertrage die Überlegung auf Beispiele mit zwei oder mehr Pointern auf dieselbe Adresse."
reflectionPrompt: "Warum klingt das Nullsetzen auf den ersten Blick nach einer Komplettlösung, ist aber nur eine lokale Schutzmaßnahme?"
---

## Aufgabe 1: Lokalen Nutzen beschreiben

Warum wird in einfachen Lehrbeispielen nach <code>delete p;</code> oft noch <code>p = nullptr;</code> geschrieben?

## Aufgabe 2: Kurzprotokoll ergänzen

Gegeben ist:

```cpp
int *p = new int;
delete p;
p = nullptr;
```

Ergänze in Worten:

- Was wird an <code>p</code> sichtbar geändert?
- Was wird am früheren Speicher **nicht** wiederhergestellt?

## Aufgabe 3: Alias-Beispiel lesen

Gegeben ist:

```cpp
int *p = new int;
int *q = p;
delete p;
p = nullptr;
```

Bewerte getrennt den Zustand von <code>p</code> und <code>q</code> nach der letzten Zeile.

## Aufgabe 4: Grenze benennen

Warum macht <code>p = nullptr;</code> nicht automatisch auch <code>q</code> sicher?

## Aufgabe 5: Mini-Konsole im Kopf

Schreibe vier kurze Denkschritte, die dieses Schutzmuster möglichst knapp erklären.

## Aufgabe 6: Einordnung formulieren

Warum sollte man <code>p = nullptr;</code> als hilfreiche, aber begrenzte Nachmaßnahme beschreiben?

## Aufgabe 7: Zur Nachbarseite abgrenzen

Warum ist die Kernfrage hier nicht mehr „Warum ist der Pointer nach delete gefährlich?“, sondern „Was verbessert das Nullsetzen lokal?“

## Aufgabe 8: Seitencheck anwenden

Ordne die erste Kernfrage zu:

```cpp
delete p;
p = nullptr;
```

```cpp
delete p;
cout << *p;
```

```cpp
int *q = p;
delete p;
p = nullptr;
```

Bei welchen Beispielen geht es wirklich um das Nullsetzen als Nachmaßnahme – und welches Beispiel gehört zuerst auf die Dangling-Pointer-Seite?

## Aufgabe 9: Alias-Ampel

Gegeben ist:

```cpp
int *p = new int;
int *q = p;
delete p;
p = nullptr;
```

Ordne knapp zu:
- Welche Variable ist danach lokal klar leer?
- Welche Variable bleibt weiterhin kritisch?
- Warum zeigt das Beispiel die Grenze des Musters besonders gut?


## Aufgabe 10: Überschätzung entkräften

Warum wäre die Aussage „Nach <code>delete p; p = nullptr;</code> ist das Speicherproblem insgesamt erledigt“ didaktisch zu groß formuliert?
