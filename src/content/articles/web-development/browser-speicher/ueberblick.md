---
title: "Browser-Speicher"
description: "Überblick über lokale Speicherformen im Browser und ihre typischen Einsatzgrenzen."
subject: "web-development"
section: "Browser und Daten"
topicPath: ["browser-speicher", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Browser und Daten"]
draft: false
---
# Browser-Speicher

![Schaubild zum Browser-Speicher.](/schlaufuchs-platform/images/overviews/v148/browser-speicher.svg)

*Das Schaubild ordnet typische Browser-Speicherarten nach Zweck und Reichweite.*


## Überblick
Browser können Daten lokal speichern. Das ermöglicht Einstellungen, Sitzungszustände, Caches, Warenkörbe, Offline-Funktionen oder wiederkehrende Anmeldungen. Die verschiedenen Speicherformen unterscheiden sich in Lebensdauer, Zugriff, Größe und Sicherheitsmodell.

## Cookies
Cookies werden häufig für Sitzungen und servernahe Zustände verwendet. Sie können bei HTTP-Anfragen automatisch mitgesendet werden. Das ist praktisch, aber sicherheitsrelevant. Attribute wie HttpOnly, Secure und SameSite beeinflussen, ob JavaScript zugreifen darf und wann Cookies übertragen werden.

## Web Storage
localStorage speichert einfache Schlüssel-Wert-Daten dauerhaft, bis sie gelöscht werden. sessionStorage gilt nur für eine Browsersitzung oder einen Tab-Kontext. Beide sind leicht nutzbar, aber für sensible Daten problematisch, weil JavaScript darauf zugreifen kann.

## Cache und Offline
Browser-Caches speichern Ressourcen, um Seiten schneller zu laden. Service Worker können zusätzlich gezielte Offline-Strategien ermöglichen. Dabei muss klar sein, wann alte Daten noch gültig sind und wie Aktualisierungen erkannt werden.

## Grenzen
Browser-Speicher ist kein Ersatz für eine verlässliche Serverdatenbank. Nutzende können Daten löschen, Browser begrenzen Speicherplatz und verschiedene Geräte teilen lokale Daten nicht automatisch. Für robuste Anwendungen müssen Synchronisation, Datenschutz und Fehlerfälle eingeplant werden.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
