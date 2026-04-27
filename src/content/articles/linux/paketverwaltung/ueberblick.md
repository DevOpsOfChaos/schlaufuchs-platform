---
title: "Paketverwaltung"
description: "Überblick über Paketverwaltung als geregelte Installation, Aktualisierung und Entfernung von Software auf Linux-Systemen."
subject: linux
section: "Systempflege"
topicPath:
  - "paketverwaltung"
  - "ueberblick"
learningGoals:
  - "Du verstehst Pakete als verwaltete Softwareeinheiten."
  - "Du kennst Repositories, Abhängigkeiten und Updates als Grundbegriffe."
  - "Du kannst Paketverwaltung von manueller Installation abgrenzen."
practiceIdeas: []
commonMistakes:
  - "Software beliebig manuell am Paketmanager vorbei zu installieren."
  - "Updates ohne Blick auf Abhängigkeiten oder Dienste einzuspielen."
keyTakeaways:
  - "Paketverwaltung hält Software und Abhängigkeiten nachvollziehbar."
  - "Repositories bestimmen, welche Versionen vertrauenswürdig bezogen werden."
recognizeSignals:
  - "Es geht um apt, dnf, pacman, install, update, upgrade, Repositories oder Abhängigkeiten."
selfCheckPoints:
  - "Kann ich erklären, warum ein Paketmanager Abhängigkeiten kennt?"
level: einfach
tags:
  - "linux"
  - "paketverwaltung"
  - "systempflege"
draft: false
---

# Paketverwaltung

![Schaubild zur Paketverwaltung.](/schlaufuchs-platform/images/overviews/v148/paketverwaltung.svg)

*Das Schaubild ordnet Paketquelle, Paketmanager, Installation und Systemzustand.*



## Grundidee
Paketverwaltung ist ein zentrales Merkmal vieler Linux-Systeme. Software wird nicht nur als einzelne Datei installiert, sondern als Paket mit Metadaten, Abhängigkeiten, Versionen und Installationsregeln. Der Paketmanager weiß, welche Dateien zu welchem Paket gehören.

## Repositories
Pakete stammen normalerweise aus Repositories. Diese Quellen werden von der Distribution oder vertrauenswürdigen Anbietern gepflegt. Dadurch lassen sich Updates zentral prüfen und installieren. Fremde Quellen können nötig sein, erhöhen aber Pflege- und Sicherheitsaufwand.

## Abhängigkeiten
Software braucht oft Bibliotheken oder andere Pakete. Der Paketmanager löst solche Abhängigkeiten auf und sorgt dafür, dass passende Versionen installiert sind. Das reduziert Konflikte, ersetzt aber nicht die Pflicht, größere Updates bewusst zu prüfen.

## Installation und Entfernung
Beim Installieren kopiert der Paketmanager Dateien an definierte Orte und registriert sie. Beim Entfernen kann er diese Dateien wieder zuordnen. Manuell kopierte Programme umgehen diese Nachvollziehbarkeit und können später schwer zu pflegen sein.

## Systempflege
Regelmäßige Updates schließen Fehler und Sicherheitslücken. Auf produktiven Systemen sollten Updates planvoll erfolgen, besonders wenn Dienste neu gestartet werden müssen. Gute Systempflege verbindet Aktualität, Stabilität und Kontrolle.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
