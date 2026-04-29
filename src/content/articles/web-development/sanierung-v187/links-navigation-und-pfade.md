---
title: "Links, Navigation und Pfade"
description: "Verstehe Links als Wegweiser und unterscheide interne, externe, absolute und relative Pfade."
subject: "web-development"
section: "html"
topicPath: 
  - "html-und-semantik"
  - "links-und-navigation"
learningGoals: 
  - "Orientierung durch Verweise ruhig einordnen"
  - "typische Fehler erkennen und vermeiden"
  - "eine kleine Web-Entscheidung begründen"
practiceIdeas: 
  - "Plane die Navigation für eine kleine Website mit Startseite, Themenübersicht und Kontaktseite."
  - "Korrigiere fünf fehlerhafte relative Pfade in einer vorgegebenen Ordnerstruktur."
commonMistakes: 
  - "Linktext lautet nur „hier“ oder „mehr“."
  - "Interne und externe Ziele werden nicht unterschieden."
  - "Pfade funktionieren nur zufällig im aktuellen Ordner."
keyTakeaways: 
  - "Eine Navigation ist stark, wenn Ziel, Linktext und Pfad ohne Raten zusammenpassen."
  - "Struktur, Gestaltung und Verhalten getrennt prüfen."
recognizeSignals: 
  - "Eine Navigation ist stark, wenn Ziel, Linktext und Pfad ohne Raten zusammenpassen."
selfCheckPoints: 
  - "Kann ich den Zweck nennen?"
  - "Ist die Rolle von HTML, CSS oder JavaScript klar?"
  - "Ist mindestens ein Fehlerfall geprüft?"
level: "einfach"
tags: 
  - "links"
  - "navigation"
  - "pfade"
  - "html"
  - "web-development"
draft: false
---

![Didaktische Skizze zu Links, Navigation und Pfade](/schlaufuchs-platform/images/web-development/sanierung-v187/links-navigation-und-pfade.svg)

    Links, Navigation und Pfade ist ein ruhiger Orientierungspunkt im Bereich Web Development. Die Seite ist bewusst nicht als Spezialproblem angelegt, sondern als Überblick: Was ist die Aufgabe des Themas, woran erkennt man eine saubere Lösung und welche Fehler führen häufig zu unruhigen Webprojekten?

    ## Worum es geht

    Der Kern ist: **Orientierung durch Verweise**. Im Web entsteht Qualität selten durch eine einzelne Technik. Meist wirken Struktur, Gestaltung, Bedienbarkeit, Dateiorganisation und spätere Wartung zusammen. Darum lohnt es sich, das Thema zuerst langsam zu lesen, bevor Details umgesetzt werden.

    Drei Grundgedanken sind besonders wichtig:

    - Links verbinden Seiten, Bereiche oder externe Ziele.
- Navigation ist eine geordnete Sammlung wichtiger Wege.
- Relative Pfade hängen vom aktuellen Ort der Datei ab.

    ## Typische Entscheidung

    In der Praxis stellt sich fast immer die Frage: Ist das Problem wirklich ein Inhaltsproblem, ein Gestaltungsproblem, ein Interaktionsproblem oder ein Organisationsproblem? Wer diese Ebenen trennt, findet schneller eine einfache Lösung.

    Ein guter Arbeitsweg sieht so aus:

    1. Zweck des Seitenteils benennen.
    2. Inhalt oder Zustand in einfachen Worten beschreiben.
    3. passende HTML-, CSS- oder JavaScript-Rolle zuordnen.
    4. sichtbare Wirkung im Browser prüfen.
    5. Sonderfälle und Wartbarkeit kurz kontrollieren.


```html
<section aria-labelledby="beispiel-title">
  <h2 id="beispiel-title">Beispielbereich</h2>
  <p>Der Inhalt bleibt auch ohne Gestaltung verständlich.</p>
</section>
```

    ## Woran du saubere Arbeit erkennst

    Eine Navigation ist stark, wenn Ziel, Linktext und Pfad ohne Raten zusammenpassen.

    Das bedeutet nicht, dass jede Seite perfekt sein muss. Entscheidend ist, dass du erklären kannst, warum eine Struktur gewählt wurde und welche Folge sie für Nutzer, Wartung und spätere Erweiterung hat.

    ## Häufige Stolperstellen

    - Linktext lautet nur „hier“ oder „mehr“.
- Interne und externe Ziele werden nicht unterschieden.
- Pfade funktionieren nur zufällig im aktuellen Ordner.

    Diese Fehler sind nicht ungewöhnlich. Sie entstehen oft, wenn man eine sichtbare Wirkung schnell erreichen möchte. Für eine Lernplattform ist aber wichtiger, dass der Weg wiederholbar bleibt.

    ## Lernziele

    - Orientierung durch Verweise in eigenen Worten erklären
- Struktur, Zweck und typische Fehler unterscheiden
- einen kleinen Praxisfall ruhig prüfen

    ## Merksatz

    Eine gute Weblösung ist nicht nur sichtbar richtig, sondern auch strukturell erklärbar, zugänglich und später wartbar.
