---
title: "Timeout-Budget"
description: "Überblick über Timeout-Budgets und die Verteilung maximaler Wartezeiten über mehrere Systemaufrufe."
subject: "informatik"
section: "Resilienz"
topicPath: ["timeout-budget", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Resilienz"]
draft: false
---
# Timeout-Budget

## Begriff

Ein Timeout-Budget beschreibt, wie viel Wartezeit für eine Anfrage insgesamt zur Verfügung steht und wie sie auf Teilaufrufe verteilt wird.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Es verhindert, dass einzelne langsame Abhängigkeiten die gesamte Antwortzeit unkontrolliert verlängern.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Gesamtbudget und Einzeltimeouts müssen zusammenpassen.
- Retries verbrauchen ebenfalls Zeitbudget.
- Abhängigkeiten am Ende einer Kette dürfen nicht länger warten als der ursprüngliche Request erlaubt.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Ein Timeout ist keine fachliche Fehlerbehandlung. Nach Ablauf muss klar sein, was dem Nutzer oder aufrufenden System gemeldet wird.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Wenn eine Webanfrage maximal zwei Sekunden dauern soll, dürfen drei interne Dienste nicht jeweils zwei Sekunden blockieren.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Häufig werden Timeouts isoliert pro Client gesetzt. Dadurch entstehen Ketten, die insgesamt viel zu lange warten.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Timeout-Budget steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
