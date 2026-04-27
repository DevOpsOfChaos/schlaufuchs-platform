---
title: "du und df"
description: "Überblick über die Werkzeuge `du` und `df` zur Analyse von Speicherbelegung im Dateisystem."
subject: linux
section: "Dateisystem"
topicPath:
  - "du-und-df"
  - "ueberblick"
learningGoals:
  - "Du kannst du und df als allgemeinen Begriff einordnen."
  - "Du kennst Zweck, typische Teilaspekte und Grenzen des Themas."
  - "Du kannst häufige Missverständnisse erkennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Fehler ist, du und df als austauschbar zu betrachten. Sie beantworten unterschiedliche Fragen."
keyTakeaways:
  - "df zeigt freien und belegten Platz auf Dateisystemen, während du die Größe von Dateien und Verzeichnissen aufsummiert."
  - "Der Unterschied hilft, Speicherplatzprobleme richtig einzugrenzen."
  - "Keines der Werkzeuge erklärt allein die Ursache. Mounts, offene Dateien, Snapshots und Berechtigungen können das Bild verändern."
recognizeSignals:
  - "Es geht um du und df, wenn df betrachtet gemountete Dateisysteme."
  - "Das Thema wird relevant, wenn Beispiele wie wenn df volle Partition meldet, du aber wenig findet, kann eine gelöschte Logdatei noch von einem Prozess offen gehalten werden."
selfCheckPoints:
  - "Kann ich du und df in eigenen Worten erklären?"
  - "Kann ich Zweck, Grenze und ein typisches Beispiel unterscheiden?"
  - "Kann ich ein häufiges Missverständnis zum Thema benennen?"
level: einfach
tags:
  - "linux"
  - "dateisystem"
  - "speicherplatz"
  - "du"
  - "df"
draft: false
---
# du und df

## Begriff

df zeigt freien und belegten Platz auf Dateisystemen, während du die Größe von Dateien und Verzeichnissen aufsummiert.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Der Unterschied hilft, Speicherplatzprobleme richtig einzugrenzen.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- df betrachtet gemountete Dateisysteme.
- du läuft durch Verzeichnisse und summiert sichtbare Einträge.
- Gelöschte, aber noch geöffnete Dateien können df und du unterschiedlich erscheinen lassen.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Keines der Werkzeuge erklärt allein die Ursache. Mounts, offene Dateien, Snapshots und Berechtigungen können das Bild verändern.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Wenn df volle Partition meldet, du aber wenig findet, kann eine gelöschte Logdatei noch von einem Prozess offen gehalten werden.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Ein häufiger Fehler ist, du und df als austauschbar zu betrachten. Sie beantworten unterschiedliche Fragen.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

du und df steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
