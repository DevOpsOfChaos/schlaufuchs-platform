---
title: "Lösung – Content Security Policy als Ausführungsgrenze lesen"
description: "Musterlösung zu Content Security Policy als Ausführungsgrenze lesen mit Einordnung, Abgrenzung und Gegenprobe."
subject: "web-development"
section: "Betrieb und Sicherheit"
topicPath:
  - "frontend-betrieb"
  - "build-performance-security"
  - "v110-teil-1"
  - "content-security-policy-als-ausfuehrungsgrenze-lesen"
taskId: "v110-web-development-content-security-policy-als-ausfuehrungsgrenze-lesen"
relatedExercise: "web-development/frontend-betrieb/build-performance-security/v110-teil-1/content-security-policy-als-ausfuehrungsgrenze-lesen"
tags:
  - "web development"
  - "frontend"
  - "ux"
  - "frontend-betrieb"
  - "build-performance-security"
  - "content-security-policy-als-ausfuehrungsgrenze-lesen"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Content Security Policy als Ausführungsgrenze lesen**.

## Einordnung

Eine Seite soll fremde Skripte nicht beliebig ausführen. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: CSP wird nur als zusätzlicher Header ohne Wirkung gesehen. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Prüfe, welche Quellen Skripte, Styles und Bilder laden dürfen.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
