---
title: Upload-Formular und Dateidaten einordnen
description: Erkläre die Rolle von Upload-Formular, $_FILES und serverseitiger Prüfung bei einem Dateiupload.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - dateiupload-in-php-grundidee-verstehen
  - upload-formular-und-dateidaten-einordnen
taskId: INF-PHP-UPLOAD-001
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - upload
hintPoints:
  - "Suche zuerst die Formular-Stellen, die speziell für Upload nötig sind."
  - "Denke an temporäre Speicherung und Prüfung vor der endgültigen Ablage."
selfCheckPoints:
  - "Kann ich name und tmp_name unterscheiden?"
  - "Habe ich erklärt, warum vor dem Speichern geprüft werden sollte?"
transferIdeas:
  - "Übertrage die Logik auf Bild-Uploads, PDF-Uploads oder Avatar-Bilder."
reflectionPrompt: "Welche Stelle im Upload-Ablauf wirkt am sicherheitsrelevantesten?"
---

## Aufgabe 1

Nenne zwei Merkmale, die ein Formular für Dateiupload von einem einfachen Textformular unterscheiden.

## Aufgabe 2

Erkläre den Unterschied zwischen <code>$_FILES['Datei']['name']</code> und <code>$_FILES['Datei']['tmp_name']</code>.

## Aufgabe 3

Warum sollte eine hochgeladene Datei nicht ungeprüft dauerhaft gespeichert werden?
