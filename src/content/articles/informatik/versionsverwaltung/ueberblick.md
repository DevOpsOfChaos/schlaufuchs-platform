---
title: "Versionsverwaltung"
description: "Allgemeiner Überblick über Versionsverwaltung, Änderungen und Zusammenarbeit an Dateien."
subject: informatik
section: "Softwareentwicklung"
topicPath:
  - "versionsverwaltung"
  - "ueberblick"
learningGoals:
  - "Du kannst Versionsverwaltung grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Versionsverwaltung nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Versionsverwaltung beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Versionsverwaltung, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Versionsverwaltung in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "informatik"
  - "git"
  - "versionsverwaltung"
  - "software"
draft: false
---
# Versionsverwaltung

Versionsverwaltung speichert die Entwicklung von Dateien über die Zeit. Sie macht Änderungen nachvollziehbar, ermöglicht Rücksprünge und unterstützt Zusammenarbeit.

## Bedeutung

In der Softwareentwicklung ist Git besonders verbreitet. Es arbeitet mit Commits, Branches, Merges und Remotes. Der Kern bleibt aber: Änderungen werden bewusst gruppiert und mit Bedeutung versehen.

## Typische Teilaspekte

- **Commit:** Ein Commit hält einen nachvollziehbaren Änderungsstand fest.
- **Branch:** Ein Branch erlaubt Arbeit an einer Entwicklungslinie.
- **Merge:** Änderungen verschiedener Linien werden zusammengeführt.
- **Historie:** Die Historie hilft zu verstehen, wann und warum etwas geändert wurde.

## Beispiel

Ein Feature kann auf einem eigenen Branch entstehen und nach Prüfung in `main` übernommen werden.

## Abgrenzung

Versionsverwaltung ist kein Backup im einfachen Sinn. Sie schützt vor vielen Änderungsfehlern, ersetzt aber keine vollständige Datensicherung.

## Häufige Missverständnisse

Häufig werden zu viele unabhängige Änderungen in einen Commit gepackt. Das erschwert Prüfung, Rücknahme und Verständnis.

## Einordnung im Gesamtzusammenhang

Versionsverwaltung verbindet Teamarbeit, Qualitätssicherung, Release-Prozesse und nachvollziehbare Projektpflege.
