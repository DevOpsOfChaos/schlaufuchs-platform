---
title: "Mounts und Dateisysteme"
description: "Allgemeiner Überblick über eingehängte Dateisysteme, Mountpoints und Speicherorte unter Linux."
subject: linux
section: "Dateisystem"
topicPath:
  - "mounts-und-dateisysteme"
  - "ueberblick"
learningGoals:
  - "Du kannst Mounts und Dateisysteme grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Mounts und Dateisysteme nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Mounts und Dateisysteme beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Mounts und Dateisysteme, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Mounts und Dateisysteme in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "linux"
  - "dateisystem"
  - "mount"
  - "speicher"
draft: false
---
# Mounts und Dateisysteme

Unter Linux werden Dateisysteme in einen gemeinsamen Verzeichnisbaum eingehängt. Ein Mountpoint ist der Ort, an dem ein Dateisystem sichtbar wird.

## Bedeutung

Dieses Konzept erklärt, warum verschiedene Partitionen, USB-Laufwerke, Netzfreigaben oder virtuelle Dateisysteme alle unter Pfaden erreichbar sind. Der Pfad sagt nicht automatisch, auf welchem physischen Speicher Daten liegen.

## Typische Teilaspekte

- **Mountpoint:** Ein Verzeichnis wird zum Einstiegspunkt eines eingehängten Dateisystems.
- **Gerät:** Blockgeräte, Partitionen oder Netzwerkquellen können eingehängt werden.
- **Optionen:** Mountoptionen beeinflussen Rechte, Schreibzugriff oder Verhalten.
- **Virtuelle Dateisysteme:** Orte wie `/proc` oder `/sys` zeigen Systeminformationen statt normale Dateien.

## Beispiel

Ein USB-Stick kann unter `/mnt/usb` oder automatisch unter `/media/...` eingehängt werden.

## Abgrenzung

Ein Verzeichnis ist nicht immer nur ein Ordner auf derselben Festplatte. Es kann ein Einstieg in ein anderes Dateisystem sein.

## Häufige Missverständnisse

Häufig wird vor dem Entfernen eines Datenträgers nicht sauber ausgehängt. Dadurch können noch nicht geschriebene Daten verloren gehen.

## Einordnung im Gesamtzusammenhang

Mounts verbinden Dateisystemhierarchie, Speicherverwaltung, Rechte, Backup und Systemdiagnose.
