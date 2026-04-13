---
title: Umgebungsvariablen und PATH verstehen
description: Verstehe, warum die Shell Informationen wie HOME, PWD oder PATH mitführt und wie sie Befehle dadurch besser einordnen kann.
subject: linux
section: Shell
topicPath:
  - shell
  - umgebungsvariablen-und-path
tags:
  - env
  - path
  - umgebungsvariable
  - shell
learningGoals:
  - "Du erklärst, was Umgebungsvariablen in der Shell leisten."
  - "Du beschreibst grob, warum PATH für das Finden von Befehlen wichtig ist."
  - "Du erkennst Variablen wie HOME oder PWD als Arbeitskontext statt als Dateiinhalte."
practiceIdeas:
  - "Vergleiche env, pwd und which in einer kleinen Shell-Situation."
  - "Ordne HOME, PWD und PATH ihren Funktionen grob zu."
  - "Erkläre, warum die Shell einen Befehl finden kann, ohne den vollständigen Pfad auszuschreiben."
commonMistakes:
  - "Umgebungsvariablen mit normalen Dateien zu verwechseln."
  - "PATH nur als Ordner statt als Suchregel der Shell zu sehen."
  - "PWD und HOME gleichzusetzen."
keyTakeaways:
  - "Umgebungsvariablen beschreiben den Arbeitskontext einer Shell."
  - "PATH hilft der Shell beim Finden von Befehlen."
  - "HOME, PWD und PATH haben unterschiedliche Aufgaben."
recognizeSignals:
  - "Es geht um env, HOME, PWD, PATH oder die Frage, wie Befehle gefunden werden."
  - "Du sollst erklären, warum ein Befehl ohne vollständigen Pfad funktioniert."
  - "Ein Beispiel fragt nach Shell-Kontext statt nach Dateiinhalten."
selfCheckPoints:
  - "Kann ich HOME, PWD und PATH grob unterscheiden?"
  - "Kann ich erklären, warum which zu PATH passt?"
  - "Kann ich Umgebungsvariablen als Shell-Kontext beschreiben?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Die Shell arbeitet nicht im luftleeren Raum. Sie kennt Informationen über den aktuellen Ort, das Benutzerverzeichnis und darüber, wo typische Befehle gesucht werden. Diese Informationen stecken oft in **Umgebungsvariablen**.
