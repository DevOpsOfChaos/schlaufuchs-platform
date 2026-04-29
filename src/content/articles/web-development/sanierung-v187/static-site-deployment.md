---
title: "Static-Site-Deployment"
description: "Ordne Build, Ausgabeordner, Hosting und Basis-Pfad bei statischen Webseiten ein."
subject: "web-development"
section: "deployment"
topicPath: ["sanierung-v187", "static-site-deployment"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "deployment"]
draft: false
---
![Didaktische Skizze zu Static-Site-Deployment](/schlaufuchs-platform/images/web-development/sanierung-v187/static-site-deployment.svg)

    Static-Site-Deployment ist ein ruhiger Orientierungspunkt im Bereich Web Development. Die Seite ist bewusst nicht als Spezialproblem angelegt, sondern als Überblick: Was ist die Aufgabe des Themas, woran erkennt man eine saubere Lösung und welche Fehler führen häufig zu unruhigen Webprojekten?

    ## Worum es geht

    Der Kern ist: **Vom Projekt zur veröffentlichten Seite**. Im Web entsteht Qualität selten durch eine einzelne Technik. Meist wirken Struktur, Gestaltung, Bedienbarkeit, Dateiorganisation und spätere Wartung zusammen. Darum lohnt es sich, das Thema zuerst langsam zu lesen, bevor Details umgesetzt werden.

    Drei Grundgedanken sind besonders wichtig:

    - Ein Build erzeugt aus Quellen auslieferbare Dateien.
- Der Ausgabeordner ist nicht dasselbe wie der Quellordner.
- Base-Pfade müssen zu Hosting und URL-Struktur passen.

    ## Typische Entscheidung

    In der Praxis stellt sich fast immer die Frage: Ist das Problem wirklich ein Inhaltsproblem, ein Gestaltungsproblem, ein Interaktionsproblem oder ein Organisationsproblem? Wer diese Ebenen trennt, findet schneller eine einfache Lösung.

    Ein guter Arbeitsweg sieht so aus:

    1. Zweck des Seitenteils benennen.
    2. Inhalt oder Zustand in einfachen Worten beschreiben.
    3. passende HTML-, CSS- oder JavaScript-Rolle zuordnen.
    4. sichtbare Wirkung im Browser prüfen.
    5. Sonderfälle und Wartbarkeit kurz kontrollieren.

    ## Woran du saubere Arbeit erkennst

    Deployment ist nachvollziehbar, wenn du erklären kannst, welche Datei woher kommt und unter welcher URL landet.

    Das bedeutet nicht, dass jede Seite perfekt sein muss. Entscheidend ist, dass du erklären kannst, warum eine Struktur gewählt wurde und welche Folge sie für Nutzer, Wartung und spätere Erweiterung hat.

    ## Häufige Stolperstellen

    - Quellpfade werden mit öffentlichen URLs verwechselt.
- Lokale Pfade funktionieren, aber Deployment-Pfade nicht.
- Build-Artefakte werden unkontrolliert geändert.

    Diese Fehler sind nicht ungewöhnlich. Sie entstehen oft, wenn man eine sichtbare Wirkung schnell erreichen möchte. Für eine Lernplattform ist aber wichtiger, dass der Weg wiederholbar bleibt.

    ## Lernziele

    - Vom Projekt zur veröffentlichten Seite in eigenen Worten erklären
- Struktur, Zweck und typische Fehler unterscheiden
- einen kleinen Praxisfall ruhig prüfen

    ## Merksatz

    Eine gute Weblösung ist nicht nur sichtbar richtig, sondern auch strukturell erklärbar, zugänglich und später wartbar.
