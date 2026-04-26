---
title: "Speicher und Dateisystembelegung unter Linux – Überblick"
description: "Eine allgemeine Einführung in Arbeitsspeicher, Datenträgerbelegung und die Unterscheidung zwischen RAM und Dateisystemplatz."
subject: "linux"
section: "System"
topicPath:
  - "system"
  - "speicher-und-dateisystembelegung"
  - "ueberblick"
learningGoals:
  - "Du unterscheidest Arbeitsspeicher und Speicherplatz im Dateisystem."
  - "Du verstehst, warum Linux verschiedene Werkzeuge für RAM, Datenträger und Verzeichnisse nutzt."
  - "Du erkennst typische Fehlerbilder bei vollem Speicher oder vollem Dateisystem."
practiceIdeas:
  - "Erkläre den Unterschied zwischen einem vollen Arbeitsspeicher und einer vollen Festplatte."
  - "Ordne typische Werkzeuge wie free, df und du ihrer Fragestellung zu."
  - "Beschreibe, warum ein System trotz freiem RAM keine Datei mehr speichern kann."
commonMistakes:
  - "RAM und Festplattenspeicher als dieselbe Art von Speicher zu behandeln."
  - "df und du gleichzusetzen, obwohl sie unterschiedliche Fragen beantworten."
  - "Eine volle Partition nur als Platzproblem zu sehen und Einhängepunkte zu ignorieren."
keyTakeaways:
  - "RAM ist flüchtiger Arbeitsspeicher für laufende Programme."
  - "Dateisystembelegung beschreibt, wie viel Platz auf Partitionen oder Datenträgern genutzt wird."
  - "Linux trennt die Fragen: Was belegt Arbeitsspeicher, was belegt Speicherplatz und wo ist etwas eingehängt?"
recognizeSignals:
  - "Ein System meldet zu wenig Speicher, zu wenig Platz oder eine volle Partition."
  - "Werkzeuge wie free, df, du, mount oder lsblk werden erwähnt."
  - "Es muss unterschieden werden, ob ein Prozess, ein Verzeichnis oder ein Dateisystem das Problem verursacht."
selfCheckPoints:
  - "Weiß ich, ob nach RAM oder Datenträgerplatz gefragt ist?"
  - "Kann ich das passende Werkzeug zur Fragestellung nennen?"
  - "Ist klar, auf welcher Partition oder in welchem Verzeichnis das Problem liegt?"
level: "einfach"
tags:
  - "linux"
  - "speicher"
  - "dateisystem"
  - "system"
draft: false
---

## Begriff und Grundidee

Unter Linux wird das Wort Speicher in verschiedenen Bedeutungen verwendet. Arbeitsspeicher, also RAM, wird von laufenden Programmen genutzt. Speicherplatz im Dateisystem liegt dagegen auf Datenträgern, Partitionen oder eingebundenen Verzeichnissen. Beide Arten von Speicher können knapp werden, aber sie verursachen unterschiedliche Probleme.

Ein System kann genügend RAM haben und trotzdem keine Datei mehr speichern, wenn eine Partition voll ist. Umgekehrt kann auf der Festplatte viel Platz frei sein, während Programme wegen knappem Arbeitsspeicher langsam werden oder beendet werden.

## Arbeitsspeicher

Arbeitsspeicher ist flüchtig. Er wird gebraucht, damit Programme Daten während der Ausführung schnell lesen und schreiben können. Wenn ein Programm läuft, belegt es RAM. Linux nutzt freien RAM außerdem oft als Cache, um Dateizugriffe zu beschleunigen.

Deshalb bedeutet viel belegter RAM nicht automatisch ein Problem. Entscheidend ist, ob noch genug Speicher für laufende Programme verfügbar ist oder ob das System stark auslagern muss.

## Dateisystembelegung

Dateisystembelegung beschreibt, wie viel Platz auf einem Dateisystem genutzt ist. Ein Dateisystem kann eine ganze Partition, ein eingebundenes Laufwerk oder ein spezieller Speicherbereich sein. Wenn es voll ist, können dort keine neuen Daten mehr geschrieben werden.

Wichtig ist der Einhängepunkt. Unter Linux erscheinen Datenträger nicht als Laufwerksbuchstaben, sondern werden an bestimmten Stellen im Verzeichnisbaum eingehängt. Deshalb muss man wissen, welches Dateisystem zu welchem Pfad gehört.

## Werkzeuge und Fragestellungen

Verschiedene Werkzeuge beantworten verschiedene Fragen. `free` betrachtet den Arbeitsspeicher. `df` zeigt die Belegung von Dateisystemen. `du` untersucht, wie viel Platz einzelne Verzeichnisse oder Dateien belegen.

Die Werkzeuge sind nicht austauschbar. Wer wissen möchte, ob `/var` voll ist, braucht eine andere Sicht als jemand, der wissen möchte, welcher Prozess viel RAM nutzt.

## Typische Fehlerbilder

Ein volles Dateisystem kann Logdateien, Updates, temporäre Dateien oder Datenbanken blockieren. Ein knappes RAM-System kann langsam werden, stark auslagern oder Prozesse beenden. In beiden Fällen ist die erste Diagnosefrage: Welche Art von Speicher ist betroffen?

## Abgrenzung zu einzelnen Lernseiten

Einzelne Lernseiten können konkrete Befehle wie `df -h`, `du -sh`, `free -h`, `lsblk` oder `journalctl` behandeln. Diese Überblicksseite erklärt zuerst die Begriffe, damit klar ist, warum es mehrere Werkzeuge gibt und welche Frage sie jeweils beantworten.

## Merksatz

RAM ist Speicher für laufende Arbeit. Dateisystemplatz ist Speicher für Dateien. Linux trennt beide Ebenen klar, und genau diese Trennung macht eine ruhige Diagnose möglich.
