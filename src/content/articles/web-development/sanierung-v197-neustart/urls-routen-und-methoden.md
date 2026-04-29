---
title: "URLs, Routen und HTTP-Methoden"
description: "Unterscheide Pfade, Parameter und Methoden, ohne jede URL als Sonderfall zu behandeln."
subject: "web-development"
section: "backend-und-apis"
topicPath: ["backend-und-apis", "routen-und-methoden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "backend", "api", "routen-und-methoden"]
draft: false
---
![URLs, Routen und HTTP-Methoden](/schlaufuchs-platform/images/web-development/sanierung-v197-neustart/urls-routen-und-methoden.svg)

## Worum es geht

Unterscheide Pfade, Parameter und Methoden, ohne jede URL als Sonderfall zu behandeln. In Backend- und API-Themen hilft es, nicht sofort an Code zu denken, sondern zuerst den Weg der Information zu lesen: Wer fragt an, wer prüft, wer antwortet und welche Daten verlassen das System?

## Grundidee

Eine Webanwendung besteht selten nur aus einer sichtbaren Seite. Der Browser zeigt etwas an, der Server entscheidet oder liefert Daten, und eine API beschreibt die Grenze zwischen beiden Seiten. Diese Grenze sollte so klar sein, dass man sie erklären und testen kann.

Drei Fragen helfen fast immer:

- Welche Information kommt vom Nutzer oder vom Browser?
- Welche Prüfung muss verlässlich auf dem Server passieren?
- Welche Antwort braucht das Frontend, damit Nutzerinnen und Nutzer sinnvoll weiterarbeiten können?

## Typischer Ablauf

1. Der Browser löst eine Aktion aus.
2. Eine Anfrage wird an eine Route oder API gesendet.
3. Der Server prüft Methode, Daten und Berechtigung.
4. Die Antwort enthält Daten, Status oder eine verständliche Fehlermeldung.
5. Das Frontend stellt den neuen Zustand dar.

## Warum das didaktisch wichtig ist

Viele Fehler im Web entstehen nicht durch einzelne Befehle, sondern durch unklare Zuständigkeiten. Wenn Validierung, Datenform, Statuscode und Nutzerfeedback getrennt betrachtet werden, wird die Umsetzung deutlich ruhiger.

## Merksatz

Backend- und API-Arbeit wird verständlich, wenn jede Anfrage als kontrollierter Weg von Eingabe, Prüfung, Antwort und Rückmeldung gelesen wird.
