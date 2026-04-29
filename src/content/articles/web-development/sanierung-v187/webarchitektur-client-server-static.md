---
title: "Webarchitektur: Client, Server und Static"
description: "Unterscheide, welche Aufgaben im Browser, beim Server oder schon beim Build erledigt werden."
subject: "web-development"
section: "architektur"
topicPath: ["sanierung-v187", "webarchitektur-client-server-static"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "architektur"]
draft: false
---
![Didaktische Skizze zu Webarchitektur: Client, Server und Static](/schlaufuchs-platform/images/web-development/sanierung-v187/webarchitektur-client-server-static.svg)

    Webarchitektur: Client, Server und Static ist ein ruhiger Orientierungspunkt im Bereich Web Development. Die Seite ist bewusst nicht als Spezialproblem angelegt, sondern als Überblick: Was ist die Aufgabe des Themas, woran erkennt man eine saubere Lösung und welche Fehler führen häufig zu unruhigen Webprojekten?

    ## Worum es geht

    Der Kern ist: **Ort der Verarbeitung**. Im Web entsteht Qualität selten durch eine einzelne Technik. Meist wirken Struktur, Gestaltung, Bedienbarkeit, Dateiorganisation und spätere Wartung zusammen. Darum lohnt es sich, das Thema zuerst langsam zu lesen, bevor Details umgesetzt werden.

    Drei Grundgedanken sind besonders wichtig:

    - Client-Code läuft im Browser der Nutzer.
- Server-Code läuft kontrolliert auf einem Backend oder Dienst.
- Static-Site-Builds erledigen viele Schritte vor der Auslieferung.

    ## Typische Entscheidung

    In der Praxis stellt sich fast immer die Frage: Ist das Problem wirklich ein Inhaltsproblem, ein Gestaltungsproblem, ein Interaktionsproblem oder ein Organisationsproblem? Wer diese Ebenen trennt, findet schneller eine einfache Lösung.

    Ein guter Arbeitsweg sieht so aus:

    1. Zweck des Seitenteils benennen.
    2. Inhalt oder Zustand in einfachen Worten beschreiben.
    3. passende HTML-, CSS- oder JavaScript-Rolle zuordnen.
    4. sichtbare Wirkung im Browser prüfen.
    5. Sonderfälle und Wartbarkeit kurz kontrollieren.

    ## Woran du saubere Arbeit erkennst

    Architektur wird klarer, wenn jede Aufgabe einen passenden Ausführungsort bekommt.

    Das bedeutet nicht, dass jede Seite perfekt sein muss. Entscheidend ist, dass du erklären kannst, warum eine Struktur gewählt wurde und welche Folge sie für Nutzer, Wartung und spätere Erweiterung hat.

    ## Häufige Stolperstellen

    - Geheime Logik wird in Client-Code gelegt.
- Buildzeit und Laufzeit werden verwechselt.
- Statische Seiten werden unterschätzt, obwohl sie viele Inhalte gut tragen.

    Diese Fehler sind nicht ungewöhnlich. Sie entstehen oft, wenn man eine sichtbare Wirkung schnell erreichen möchte. Für eine Lernplattform ist aber wichtiger, dass der Weg wiederholbar bleibt.

    ## Lernziele

    - Ort der Verarbeitung in eigenen Worten erklären
- Struktur, Zweck und typische Fehler unterscheiden
- einen kleinen Praxisfall ruhig prüfen

    ## Merksatz

    Eine gute Weblösung ist nicht nur sichtbar richtig, sondern auch strukturell erklärbar, zugänglich und später wartbar.
