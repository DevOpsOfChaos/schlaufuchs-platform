---
title: "chroot und einfache Isolation"
description: "Allgemeiner Überblick über chroot, isolierte Dateisystemansichten und ihre Grenzen."
subject: "linux"
section: "Isolation"
topicPath:
  - "chroot-und-isolation"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig wird chroot als starke Sandbox verstanden. Ohne weitere Schutzmaßnahmen kann es für privilegierte Prozesse umgehbar sein."
keyTakeaways:
  - "chroot verändert die Sicht auf das Dateisystem. Es ist nützlich, aber keine vollständige Sicherheitsgrenze."
  - "chroot ist keine vollständige Sicherheitsisolation wie ein gut konfigurierter Container oder eine virtuelle Maschine. Es ist eher eine Dateisystemgrenze."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "mittel"
tags:
  - "linux"
  - "chroot"
  - "isolation"
  - "dateisystem"
draft: false
---

# chroot und einfache Isolation

![Schaubild zu chroot und Isolation.](/schlaufuchs-platform/images/overviews/v150/chroot-und-isolation.svg)

*Das Schaubild zeigt, wie ein Prozess eine geänderte Wurzelumgebung sieht.*



`chroot` startet einen Prozess mit einem veränderten Wurzelverzeichnis, sodass dieser nur einen Teilbaum des Dateisystems als sein `/` sieht.

Das Konzept hilft, Umgebungen zu trennen, Wiederherstellungssysteme zu betreten oder einfache Build- und Testumgebungen aufzubauen.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Eine chroot-Umgebung benötigt passende Programme, Bibliotheken und Gerätedateien.
- Prozesse bleiben dennoch Teil desselben Kernels.
- Mounts, Nutzerrechte und offene Deskriptoren beeinflussen die tatsächliche Trennung.

## Abgrenzung

chroot ist keine vollständige Sicherheitsisolation wie ein gut konfigurierter Container oder eine virtuelle Maschine. Es ist eher eine Dateisystemgrenze.

## Beispiele

- Ein Rettungssystem kann per chroot in ein installiertes System wechseln.
- Ein Build kann in einer vorbereiteten Wurzelumgebung laufen.

## Häufiges Missverständnis

Häufig wird chroot als starke Sandbox verstanden. Ohne weitere Schutzmaßnahmen kann es für privilegierte Prozesse umgehbar sein.

## Kurz zusammengefasst

chroot verändert die Sicht auf das Dateisystem. Es ist nützlich, aber keine vollständige Sicherheitsgrenze.
