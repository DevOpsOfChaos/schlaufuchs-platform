---
title: "Navigation und Breadcrumbs"
description: "Verstehe wege durch die seite nachvollziehbar machen als ruhigen Web-Development-Baustein für zugängliche, responsive und gut prüfbare Seiten."
subject: "web-development"
section: "barrierefreiheit-responsive-ux"
topicPath:
  - "barrierefreiheit-responsive-ux"
  - "content-und-navigation"
  - "navigation-und-breadcrumbs"

learningGoals:
  - "Wege durch die Seite nachvollziehbar machen"
  - "Struktur, Gestaltung und Nutzung klar trennen"
  - "einen kleinen prüfbaren nächsten Schritt formulieren"
practiceIdeas:
  - "Entwirf eine Breadcrumb-Struktur für ein Unterthema."
  - "Prüfe eine zweite Seite mit demselben Blickwinkel."
commonMistakes:
  - "Das Thema wird erst nach dem visuellen Design betrachtet."
  - "Ein einzelner Test wird mit echter Nutzbarkeit verwechselt."
  - "Zustände wie Fokus, Fehler oder kleine Bildschirme bleiben ungetestet."
keyTakeaways:
  - "Navigation zeigt Hauptwege."
  - "Breadcrumbs zeigen den aktuellen Ort."
  - "Beide müssen einfache Namen nutzen."

recognizeSignals:
  - "Das Thema taucht auf, wenn eine Seite zwar sichtbar funktioniert, aber Bedienung, Lesbarkeit oder Prüfung unsicher bleiben."
selfCheckPoints:
  - "Kann ich beschreiben, welches Problem für Nutzerinnen und Nutzer gelöst wird?"
  - "Ist klar, ob HTML-Struktur, CSS-Layout, Interaktion oder Inhalt betroffen ist?"
  - "Gibt es einen kleinen Test nach der Änderung?"
level: "mittel"
tags:
  - "navigation"
  - "breadcrumbs"
  - "web-development"
  - "v194"

draft: false
---

![Didaktische Skizze zu Navigation und Breadcrumbs](/schlaufuchs-platform/images/web-development/sanierung-v194/navigation-und-breadcrumbs.svg)

Navigation und Breadcrumbs gehört zur Web-Development-Sanierung v194. Die Seite behandelt das Thema als Qualitätsentscheidung: Eine Webseite soll nicht nur hübsch aussehen, sondern verständlich, bedienbar und überprüfbar bleiben.

## Worum es geht

Wege durch die Seite nachvollziehbar machen. Dabei hilft es, nicht sofort an ein großes Redesign zu denken. Meist reicht zuerst eine kleine Beobachtung: Wer nutzt die Seite, welche Information wird gesucht und welcher Zustand ist gerade sichtbar?

## Warum das im Alltag wichtig ist

Im Web treffen sehr unterschiedliche Geräte, Eingabearten und Bedürfnisse aufeinander. Eine Seite kann auf dem eigenen Monitor ordentlich wirken und trotzdem auf einem Handy, mit Tastatur oder mit Assistenztechnik schwer nutzbar sein.

Darum wird gute Frontend-Arbeit in kleine Prüfschritte zerlegt. Erst wird die Struktur gelesen, dann die Darstellung bewertet und erst danach wird entschieden, welche Änderung wirklich nötig ist.

## Merkpunkte

- Navigation zeigt Hauptwege.
- Breadcrumbs zeigen den aktuellen Ort.
- Beide müssen einfache Namen nutzen.

## Ruhiger Prüfweg

1. **Beobachten:** Beschreibe konkret, was auf der Seite passiert.
2. **Einordnen:** Entscheide, ob Inhalt, Semantik, Layout, Interaktion oder Performance betroffen ist.
3. **Verbessern:** Ändere nur den kleinsten sinnvollen Ausschnitt.
4. **Kontrollieren:** Prüfe mit Tastatur, kleiner Breite oder einem passenden Werkzeug nach.

## Mini-Beispiel

Wenn ein Button nur durch seine Farbe auffällt, ist das kein stabiler Zustand. Besser ist eine Kombination aus Text, Form, Fokuszustand und ausreichendem Kontrast. So bleibt die Aktion auch dann erkennbar, wenn Farbe nicht zuverlässig wahrgenommen wird.

## Merksatz

Gute Webqualität entsteht nicht durch eine einzelne perfekte Regel, sondern durch wiederholbare kleine Prüfungen an Struktur, Darstellung und Bedienung.
