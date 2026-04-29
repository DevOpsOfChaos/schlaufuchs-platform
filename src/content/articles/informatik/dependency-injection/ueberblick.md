---
title: "Dependency Injection"
description: "Überblick über Dependency Injection als Technik, Abhängigkeiten von außen bereitzustellen."
subject: "informatik"
section: "Softwaredesign"
topicPath: ["dependency-injection", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Softwaredesign"]
draft: false
---
# Dependency Injection

## Begriff

Dependency Injection bedeutet, dass eine Komponente ihre Abhängigkeiten nicht selbst erzeugt, sondern von außen erhält.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Dadurch werden Module austauschbarer, testbarer und weniger stark an konkrete Implementierungen gekoppelt.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Abhängigkeiten können über Konstruktoren, Funktionen oder Container übergeben werden.
- Schnittstellen trennen Nutzung von Umsetzung.
- Tests können echte Abhängigkeiten durch Testdoubles ersetzen.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Dependency Injection löst keine schlechte Modulstruktur. Zu viele injizierte Abhängigkeiten können ein Designproblem sichtbar machen.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Ein Service erhält ein Mail-Gateway als Abhängigkeit, statt im Code direkt einen SMTP-Client zu erzeugen.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Häufig wird Dependency Injection mit einem bestimmten Framework verwechselt. Das Grundprinzip ist unabhängig davon.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Dependency Injection steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
