---
title: Musterlösung – Pointerzustand nach delete ruhig bewerten
description: Musterlösung zur Aufgabe INF-PROG-CPP-MEM-003.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - dangling-pointer-nach-delete-verstehen
  - pointerzustand-nach-delete-ruhig-bewerten-loesung
taskId: INF-PROG-CPP-MEM-003
relatedExercise: src/content/exercises/informatik/programmierung/cpp/dangling-pointer-nach-delete-verstehen/pointerzustand-nach-delete-ruhig-bewerten.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Drei Aussagen sortieren

- <code>p</code> existiert als Variable noch. → **stimmt**
- Das frühere Ziel von <code>p</code> ist noch sicher nutzbar. → **stimmt nicht**
- Ein späteres <code>*p</code> wäre unkritisch. → **stimmt nicht**

Begründung: Nach <code>delete</code> verschwindet der Variablenname nicht automatisch. Der frühere Zielbereich ist aber nicht mehr sicher nutzbar, deshalb wäre ein späterer Zugriff über <code>*p</code> riskant.

## Aufgabe 2: Problemzustand und Folgefehler trennen

Der Problemzustand entsteht direkt nach <code>delete p;</code>. Der konkrete Folgefehler entsteht erst bei <code>cout &lt;&lt; *p;</code>, weil dort über den alten Restpointer erneut zugegriffen wird.

## Aufgabe 3: Mini-Speicherprotokoll füllen

- <code>p</code> existiert nach <code>delete</code> noch als Variable.
- Das frühere Ziel von <code>p</code> ist nicht mehr sicher nutzbar.
- In der nächsten Zeile würde ich besonders auf jeden Zugriff über <code>p</code> achten.

## Aufgabe 4: Fehlvorstellung prüfen

Weil die Existenz des Variablennamens nichts über die Gültigkeit des früheren Zielobjekts beweist. Name und sichere Zielbeziehung sind zwei verschiedene Dinge.

## Aufgabe 5: Zur Nachbarseite abgrenzen

Weil diese Seite zuerst nur den problematischen Zustand nach <code>delete</code> diagnostiziert. Die Nachbarseite beginnt erst mit der Frage, was eine spätere lokale Nachmaßnahme wie <code>p = nullptr;</code> noch verbessert.

## Aufgabe 6: Fehlerklasse einordnen

Es ist kein Speicherleck, weil der Bereich gerade nicht offen zurückbleibt, sondern bereits freigegeben wurde. Es ist auch kein Double Delete, weil hier noch nicht derselbe Bereich ein zweites Mal freigegeben wird. Das Kernproblem ist der alte Restpointer nach einer bereits erfolgten Freigabe.

## Aufgabe 7: Alias-Zustand bewerten

Sowohl <code>p</code> als auch <code>q</code> tragen nach <code>delete p;</code> noch die alte Adresse weiter. Dass <code>q</code> nicht selbst in der <code>delete</code>-Zeile steht, macht seinen Zustand nicht sicherer. Beide Namen verweisen auf denselben bereits freigegebenen Bereich.

## Aufgabe 8: Zeitpunktfrage trennen

Der problematische Zustand liegt bereits ab <code>delete p;</code> vor. Ab dort ist der frühere Bereich beendet, <code>p</code> trägt die alte Adresse aber noch weiter.

Der konkrete Folgezugriff entsteht erst bei <code>cout &lt;&lt; *p;</code>, weil dort der kritische Zustand tatsächlich benutzt wird.
