---
title: "Observability-Metriken"
description: "Überblick über Metriken als Bestandteil von Observability in Softwaresystemen."
subject: "informatik"
section: "Observability"
topicPath: ["observability-metriken", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Observability"]
draft: false
---
# Observability-Metriken

## Begriff

Metriken sind numerische Messwerte über Systemverhalten, die über Zeit gesammelt und ausgewertet werden.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Sie machen Trends, Grenzwerte, Last und Fehlerquoten sichtbar, bevor einzelne Logzeilen betrachtet werden müssen.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Typische Metriken sind Latenz, Durchsatz, Fehlerrate und Ressourcennutzung.
- Labels ermöglichen Aufschlüsselung, können aber Kardinalität stark erhöhen.
- Dashboards und Alarme brauchen fachlich sinnvolle Schwellen.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Metriken erklären nicht jeden Einzelfall. Dafür sind Logs und Traces ergänzend nötig.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Eine steigende p95-Latenz kann zeigen, dass ein Dienst für einen Teil der Anfragen langsam wird.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Ein häufiger Fehler ist, sehr viele Metriken zu sammeln, ohne zu wissen, welche Entscheidung sie unterstützen.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Observability-Metriken steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
