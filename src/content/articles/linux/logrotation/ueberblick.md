---
title: "Logrotation"
description: "Einordnung von Logrotation als Pflege von wachsenden Protokolldateien."
subject: "linux"
section: "Logs"
topicPath: ["logrotation", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Logs"]
draft: false
---
# Logrotation

Logdateien wachsen, solange Programme Ereignisse protokollieren. Logrotation begrenzt dieses Wachstum, indem alte Logs umbenannt, komprimiert, gelöscht oder archiviert werden. Ohne Rotation können Logs ein Dateisystem füllen und Dienste stören.

## Einordnung

Logrotation ist Teil des Betriebs einer Anwendung. Sie muss zu Fehlersuche, Aufbewahrungsanforderungen, Datenschutz und Speicherplatz passen. Zu kurze Aufbewahrung erschwert Diagnose, zu lange Aufbewahrung kann unnötige Daten sammeln.

## Zentrale Aspekte

- **Rotationsintervall nach Zeit oder Größe:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Komprimierung alter Logs:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Anzahl aufzubewahrender Generationen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Signal an Dienste nach Rotation:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

`logrotate` kann tägliche oder wöchentliche Rotation konfigurieren. Ein Webserver-Log kann nach Rotation neu geöffnet werden müssen, damit der Dienst nicht weiter in eine alte Datei schreibt. Komprimierte Archive sparen Platz.

## Abgrenzung

Logrotation ersetzt kein zentrales Logging und keine Auswertung. Sie kümmert sich um Dateien und Aufbewahrung. Für Monitoring, Suche und Alarmierung können zusätzliche Systeme nötig sein.

## Häufige Missverständnisse

Häufig wird Rotation erst eingerichtet, wenn eine Platte vollgelaufen ist. Ein weiterer Fehler ist, Logs zu löschen, ohne zu prüfen, ob ein Prozess die Datei noch geöffnet hält. Dann wird Platz eventuell nicht sofort frei.

## Kurz zusammengefasst

- Logrotation verhindert unkontrolliert wachsende Logs.
- Aufbewahrung muss Diagnose und Datenschutz ausbalancieren.
- Dienste müssen nach Rotation korrekt mit neuen Logdateien arbeiten.
