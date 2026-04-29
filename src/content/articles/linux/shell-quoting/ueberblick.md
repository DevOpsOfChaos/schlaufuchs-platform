---
title: "Shell-Quoting"
description: "Überblick über Anführungszeichen und Maskierung in der Shell."
subject: "linux"
section: "Shell"
topicPath: ["shell-quoting", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
# Shell-Quoting

Shell-Quoting steuert, wie die Shell Zeichen interpretiert, bevor ein Programm gestartet wird. Leerzeichen, Sternchen, Dollarzeichen und andere Sonderzeichen haben in der Shell besondere Bedeutung. Quoting schützt Text davor, ungewollt zerlegt oder ersetzt zu werden.

## Einordnung

Viele Shell-Fehler entstehen nicht im aufgerufenen Programm, sondern schon davor: Die Shell teilt Eingaben in Argumente auf, ersetzt Variablen, erweitert Wildcards und verarbeitet Maskierungen. Wer Quoting versteht, kann Befehle zuverlässiger und sicherer schreiben.

## Zentrale Aspekte

- **einfache Anführungszeichen für wörtlichen Text:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **doppelte Anführungszeichen mit Variablenersetzung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Backslash zur Maskierung einzelner Zeichen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Argumente mit Leerzeichen und Sonderzeichen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein Dateiname mit Leerzeichen muss gequotet werden, damit er ein Argument bleibt. `"$name"` schützt den Variableninhalt vor Wortaufteilung. Ein Sternchen `*` wird ohne Schutz als Glob interpretiert und kann viele Dateien treffen.

## Abgrenzung

Quoting ist nicht nur Schönheitsfrage, sondern Sicherheits- und Datenintegritätsfrage. Besonders in Skripten können unquotierte Variablen zu falschen Pfaden, unerwarteten Argumenten oder gefährlichen Löschbefehlen führen.

## Häufige Missverständnisse

Häufig werden Variablen ohne Anführungszeichen verwendet. Das funktioniert bei einfachen Beispielen, bricht aber bei Leerzeichen, Zeilenumbrüchen oder Wildcards. Ein weiterer Fehler ist, einfache und doppelte Anführungszeichen gleich zu behandeln.

## Kurz zusammengefasst

- Die Shell interpretiert Eingaben vor dem Programmstart.
- Quoting schützt Argumente vor ungewollter Zerlegung.
- In Skripten sollten Variablen meist gequotet werden.
