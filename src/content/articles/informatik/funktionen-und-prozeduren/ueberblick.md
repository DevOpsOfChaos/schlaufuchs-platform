---
title: "Funktionen und Prozeduren"
description: "Überblick über Funktionen und Prozeduren als benannte, wiederverwendbare Programmbausteine."
subject: informatik
section: "Programmierung"
topicPath:
  - "funktionen-und-prozeduren"
  - "ueberblick"
learningGoals:
  - "Du verstehst Funktionen als abgegrenzte Programmeinheiten."
  - "Du kannst Parameter, Rückgabe und Seiteneffekte unterscheiden."
  - "Du erkennst die Bedeutung klarer Verantwortlichkeiten."
practiceIdeas: []
commonMistakes:
  - "Zu viele Aufgaben in eine Funktion zu packen."
  - "Rückgabewerte und Seiteneffekte unklar zu vermischen."
keyTakeaways:
  - "Funktionen machen Code wiederverwendbar, testbar und lesbarer."
  - "Gute Funktionen haben eine klare Aufgabe und verständliche Schnittstelle."
recognizeSignals:
  - "Es geht um Parameter, Rückgabewert, Aufruf, Prozedur, Verantwortung, Seiteneffekt oder Testbarkeit."
selfCheckPoints:
  - "Kann ich in einem Satz sagen, wofür eine Funktion verantwortlich ist?"
level: einfach
tags:
  - "informatik"
  - "programmierung"
  - "funktionen"
draft: false
---

# Funktionen und Prozeduren

![Schaubild zu Funktionen und Prozeduren.](/schlaufuchs-platform/images/overviews/v148/funktionen-und-prozeduren.svg)

*Das Schaubild vergleicht Eingaben, Verarbeitung und Rückgabe.*



## Begriff
Funktionen und Prozeduren sind benannte Programmbausteine. Sie fassen Anweisungen zusammen, können Eingaben erhalten und ein Ergebnis zurückgeben oder eine Wirkung auslösen. Der genaue Sprachgebrauch unterscheidet sich je nach Programmiersprache.

## Parameter und Rückgabe
Parameter beschreiben, welche Informationen eine Funktion benötigt. Der Rückgabewert beschreibt, welches Ergebnis sie liefert. Eine Funktion mit klaren Parametern und klarer Rückgabe ist leichter zu testen, weil Eingabe und erwartete Ausgabe benannt werden können.

## Seiteneffekte
Nicht jede Funktion ist rein berechnend. Manche schreiben Dateien, ändern Zustände, senden Daten oder verändern die Oberfläche. Solche Seiteneffekte sind oft nötig, sollten aber bewusst sein. Unklare Seiteneffekte machen Programme schwer verständlich.

## Verantwortung
Eine gute Funktion hat eine begrenzte Verantwortung. Wenn eine Funktion Daten lädt, validiert, berechnet, speichert und zugleich Ausgaben formatiert, wird sie schwer testbar. Kleinere Funktionen mit klarer Aufgabe lassen sich besser kombinieren.

## Einordnung
Funktionen sind nicht nur ein Mittel gegen Wiederholung. Sie schaffen Begriffe im Programm. Ein gut gewählter Funktionsname erklärt, welche fachliche oder technische Handlung gerade passiert. Dadurch wird Code lesbarer und wartbarer.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
