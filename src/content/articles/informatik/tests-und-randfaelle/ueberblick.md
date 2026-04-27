---
title: "Tests und Randfälle"
description: "Allgemeiner Überblick über Tests, Randfälle und ihre Bedeutung für robuste Programme."
subject: informatik
section: "Programmierpraxis"
topicPath:
  - "tests-und-randfaelle"
  - "ueberblick"
learningGoals:
  - "Du kennst Tests als prüfbare Erwartungen an Programmverhalten."
  - "Du kannst typische Randfälle einordnen."
  - "Du verstehst, warum Tests Vertrauen, aber keine absolute Sicherheit geben."
practiceIdeas: []
commonMistakes:
  - "Nur den einfachsten Erfolgsfall zu testen."
  - "Tests als Ersatz für klares Denken über Anforderungen zu betrachten."
keyTakeaways:
  - "Tests beschreiben erwartetes Verhalten anhand konkreter Fälle."
  - "Randfälle zeigen, ob ein Programm auch an Grenzen sinnvoll reagiert."
recognizeSignals:
  - "Es geht um Testfälle, leere Eingaben, Grenzwerte, Fehlerfälle oder Regressionen."
selfCheckPoints:
  - "Kann ich mindestens einen Normalfall, einen Grenzfall und einen Fehlerfall nennen?"
level: einfach
tags:
  - "informatik"
  - "tests"
  - "randfälle"
  - "qualität"
draft: false
---

# Tests und Randfälle

![Schaubild zu Tests und Randfällen.](/schlaufuchs-platform/images/overviews/v148/tests-und-randfaelle.svg)

*Das Schaubild ordnet Beispiel-, Rand- und Fehlerfälle als Testklassen ein.*


Tests prüfen, ob ein Programm sich in bestimmten Situationen wie erwartet verhält. Ein Test beschreibt eine Eingabe, eine Aktion oder einen Zustand und vergleicht das Ergebnis mit einer Erwartung. Dadurch wird Programmverhalten sichtbar und wiederholbar überprüfbar.

Randfälle sind Situationen an den Grenzen des Erwarteten. Dazu gehören leere Eingaben, sehr kleine oder sehr große Werte, doppelte Werte, ungültige Daten, fehlende Berechtigungen oder bereits erledigte Zustände. Viele Fehler treten nicht im Normalfall auf, sondern genau an solchen Grenzen.

## Zweck

Tests schaffen Vertrauen in ein Programm. Sie helfen, Fehler früh zu finden und spätere Änderungen abzusichern. Wenn ein Fehler einmal behoben wurde, kann ein Regressionstest verhindern, dass er unbemerkt zurückkehrt.

## Arten von Fällen

Ein Normalfall zeigt, dass die gewünschte Hauptfunktion funktioniert. Ein Grenzfall prüft eine erlaubte, aber besondere Eingabe. Ein Fehlerfall prüft, ob das Programm mit ungültigen oder unerwarteten Daten kontrolliert umgeht. Alle drei Arten sind wichtig.

## Gute Tests

Ein guter Test ist verständlich, klein und eindeutig. Er prüft eine konkrete Erwartung und hat einen klaren Grund. Zu breite Tests können zwar viel abdecken, sind aber schwer zu verstehen, wenn sie fehlschlagen. Zu enge Tests können implementation details festschreiben, die sich ändern dürfen.

## Abgrenzung

Tests beweisen nicht, dass ein Programm fehlerfrei ist. Sie zeigen, dass bestimmte Fälle erfolgreich geprüft wurden. Ihre Qualität hängt davon ab, ob die wichtigen Anforderungen, Risiken und Randfälle erkannt wurden.

## Häufige Missverständnisse

Ein häufiger Fehler ist, nur den Erfolgsfall zu testen. Dadurch wirkt ein Programm stabil, bis reale Daten abweichen. Ein anderer Fehler ist, Tests erst nach großen Umbauten zu schreiben, wenn die Ursache eines Fehlers bereits schwer nachvollziehbar ist.

## Kurz zusammengefasst

Tests machen Erwartungen prüfbar. Randfälle zeigen, ob ein Programm auch an Grenzen robust bleibt. Gute Testpraxis verbindet Normalfälle, Grenzfälle und Fehlerfälle zu einem verständlichen Sicherheitsnetz.
