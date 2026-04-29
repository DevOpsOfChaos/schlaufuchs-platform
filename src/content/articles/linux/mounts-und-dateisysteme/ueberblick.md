---
title: "Mounts und Dateisysteme"
description: "Allgemeiner Überblick über eingehängte Dateisysteme, Mountpoints und Speicherorte unter Linux."
subject: "linux"
section: "Dateisystem"
topicPath: ["mounts-und-dateisysteme", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateisystem"]
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
