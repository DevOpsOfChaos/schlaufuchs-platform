---
title: "Shell-Quoting"
description: "Überblick über Anführungszeichen und Maskierung in der Shell."
subject: linux
section: "Shell"
topicPath:
  - "shell-quoting"
  - "ueberblick"
learningGoals:
  - "Du kannst Shell-Quoting als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig werden Variablen ohne Anführungszeichen verwendet."
keyTakeaways:
  - "Die Shell interpretiert Eingaben vor dem Programmstart."
  - "Quoting schützt Argumente vor ungewollter Zerlegung."
  - "In Skripten sollten Variablen meist gequotet werden."
recognizeSignals:
  - "Es geht um Shell-Quoting als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich Shell-Quoting in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "shell"
  - "quoting"
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
