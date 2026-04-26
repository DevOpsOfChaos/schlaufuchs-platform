---
title: "Grundlagen: Browser Storage"
description: "Ein allgemeiner Überblick darüber, wie Webseiten Daten im Browser speichern und welche Grenzen dabei gelten."
subject: web-development
section: "JavaScript"
topicPath:
  - javascript
  - browser-storage
  - ueberblick
learningGoals:
  - "Du erklärst, warum Webseiten Daten im Browser speichern."
  - "Du unterscheidest kurzlebige Zustände von dauerhaftem Browser-Speicher."
  - "Du erkennst Datenschutz und Lebensdauer als zentrale Fragen."
practiceIdeas:
  - "Ordne Beispiele wie Theme-Auswahl, Warenkorb und Login-Zustand ein."
  - "Prüfe, ob Daten wirklich dauerhaft gespeichert werden müssen."
commonMistakes:
  - "Browser Storage als sichere Datenbank zu behandeln."
  - "Sensible Daten unkritisch lokal zu speichern."
keyTakeaways:
  - "Browser Storage kann Nutzung komfortabler machen."
  - "Lokale Speicherung hat klare Sicherheits- und Datenschutzgrenzen."
recognizeSignals:
  - "Eine Webseite merkt sich Einstellungen oder Formzustände."
  - "Es geht um localStorage, sessionStorage, Cookies oder Cache."
selfCheckPoints:
  - "Kann ich erklären, warum Browser Storage nützlich ist?"
  - "Kann ich sensible Daten von unkritischen Einstellungen unterscheiden?"
tags:
  - web-development
  - javascript
  - browser
level: mittel
draft: false
---

## Begriff

**Browser Storage** ist ein Sammelbegriff für Möglichkeiten, Daten im Browser der Nutzerin oder des Nutzers zu speichern. Dazu gehören unter anderem `localStorage`, `sessionStorage`, Cookies und weitere browsernahe Speicherformen.

## Zweck

Webseiten verwenden Browser-Speicher, um Informationen zwischen Seitenaufrufen oder innerhalb einer Sitzung zu behalten. Typische Beispiele sind Spracheinstellungen, Theme-Auswahl, Warenkörbe, zwischengespeicherte Formularzustände oder technische Sitzungsinformationen.

## localStorage und sessionStorage

`localStorage` bleibt in der Regel über das Schließen des Browsers hinaus erhalten, bis die Daten gelöscht werden. `sessionStorage` ist stärker an die aktuelle Browser-Sitzung gebunden. Beide speichern einfache Schlüssel-Wert-Paare und werden direkt im Browser verwaltet.

## Cookies

Cookies werden häufig für Sitzungen, Anmeldung, Tracking oder servernahe Zustände verwendet. Sie können bei HTTP-Anfragen automatisch mitgeschickt werden. Dadurch sind sie mächtig, aber auch datenschutz- und sicherheitsrelevant.

## Grenzen und Risiken

Browser Storage ist keine geschützte Datenbank für sensible Informationen. Daten können gelöscht, manipuliert oder von Skripten gelesen werden, wenn die Anwendung unsicher gebaut ist. Besonders Zugangsdaten, geheime Tokens oder private Inhalte müssen sehr sorgfältig behandelt werden.

## Einordnung für Webentwicklung

Die wichtigste Frage lautet nicht nur, wie Daten gespeichert werden, sondern ob sie überhaupt lokal gespeichert werden sollten. Gute Webentwicklung trennt unkritische Komfortdaten von sensiblen Informationen und entscheidet bewusst über Speicherort, Lebensdauer und Zugriff.
