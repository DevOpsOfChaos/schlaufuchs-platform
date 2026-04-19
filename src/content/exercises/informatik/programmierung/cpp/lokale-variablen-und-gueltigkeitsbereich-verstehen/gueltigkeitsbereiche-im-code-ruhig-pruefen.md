---
title: Gültigkeitsbereiche im Code ruhig prüfen
description: Beschreibe bei einfachen Blöcken, wo Variablen sichtbar sind und wo nicht.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - lokale-variablen-und-gueltigkeitsbereich-verstehen
  - gueltigkeitsbereiche-im-code-ruhig-pruefen
taskId: INF-PROG-CPP-SCOPE-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - scope
hintPoints:
  - "Achte genau auf geschweifte Klammern."
  - "Frage bei jedem Namen: In welchem Block wurde er eingeführt?"
selfCheckPoints:
  - "Sind Funktion und Schleife als eigene Bereiche erkannt?"
  - "Wird Gleichnamigkeit nicht mit gleicher Rolle verwechselt?"
transferIdeas:
  - "Übertrage die Idee auf if-Blöcke oder Hilfsfunktionen."
reflectionPrompt: "Warum hilft Scope dabei, Programme ruhiger zu lesen?"
---

## Aufgabe 1: Sichtbarkeit erklären

Eine Variable wird innerhalb einer <code>for</code>-Schleife deklariert.

Erkläre, warum sie nach dem Ende der Schleife nicht einfach weiterverwendet werden kann.

## Aufgabe 2: Zwei gleichnamige Variablen

Eine Funktion besitzt eine lokale Variable <code>count</code>. In <code>main</code> gibt es ebenfalls eine Variable <code>count</code>.

Erkläre, warum die beiden Namen nicht automatisch dieselbe Variable meinen.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "Wenn der Name gleich ist, ist es im ganzen Programm dieselbe Variable."

Erkläre, warum das zu falschem Lesen von Code führt.
