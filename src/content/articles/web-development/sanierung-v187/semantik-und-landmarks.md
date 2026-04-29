---
title: "Semantik und Landmarks"
description: "Verstehe, warum semantische Elemente mehr sind als andere Namen für div-Blöcke."
subject: "web-development"
section: "html"
topicPath: 
  - "html-und-semantik"
  - "landmarks"
learningGoals: 
  - "Bedeutung von Seitenteilen ruhig einordnen"
  - "typische Fehler erkennen und vermeiden"
  - "eine kleine Web-Entscheidung begründen"
practiceIdeas: 
  - "Ordne einer Beispielseite passende semantische Bereiche zu und erkläre, warum du sie gewählt hast."
  - "Überarbeite eine div-lastige Seitenstruktur zu einer lesbaren Landmark-Struktur."
commonMistakes: 
  - "Jeder Bereich wird als div gebaut."
  - "main, nav und aside werden nach Optik statt nach Aufgabe gewählt."
  - "Mehrere Hauptbereiche machen die Seitenlogik unklar."
keyTakeaways: 
  - "Semantik ist passend, wenn ein Screenreader, ein Suchsystem und ein Mensch die gleiche Grundstruktur erkennen können."
  - "Struktur, Gestaltung und Verhalten getrennt prüfen."
recognizeSignals: 
  - "Semantik ist passend, wenn ein Screenreader, ein Suchsystem und ein Mensch die gleiche Grundstruktur erkennen können."
selfCheckPoints: 
  - "Kann ich den Zweck nennen?"
  - "Ist die Rolle von HTML, CSS oder JavaScript klar?"
  - "Ist mindestens ein Fehlerfall geprüft?"
level: "mittel"
tags: 
  - "html"
  - "semantik"
  - "landmarks"
  - "barrierefreiheit"
  - "web-development"
draft: false
---

![Didaktische Skizze zu Semantik und Landmarks](/schlaufuchs-platform/images/web-development/sanierung-v187/semantik-und-landmarks.svg)

    Semantik und Landmarks ist ein ruhiger Orientierungspunkt im Bereich Web Development. Die Seite ist bewusst nicht als Spezialproblem angelegt, sondern als Überblick: Was ist die Aufgabe des Themas, woran erkennt man eine saubere Lösung und welche Fehler führen häufig zu unruhigen Webprojekten?

    ## Worum es geht

    Der Kern ist: **Bedeutung von Seitenteilen**. Im Web entsteht Qualität selten durch eine einzelne Technik. Meist wirken Struktur, Gestaltung, Bedienbarkeit, Dateiorganisation und spätere Wartung zusammen. Darum lohnt es sich, das Thema zuerst langsam zu lesen, bevor Details umgesetzt werden.

    Drei Grundgedanken sind besonders wichtig:

    - Semantische Elemente beschreiben die Rolle eines Inhalts.
- Landmarks helfen beim Orientieren im Dokument.
- Nicht jeder Container braucht sofort ein semantisches Spezialelement.

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

    Semantik ist passend, wenn ein Screenreader, ein Suchsystem und ein Mensch die gleiche Grundstruktur erkennen können.

    Das bedeutet nicht, dass jede Seite perfekt sein muss. Entscheidend ist, dass du erklären kannst, warum eine Struktur gewählt wurde und welche Folge sie für Nutzer, Wartung und spätere Erweiterung hat.

    ## Häufige Stolperstellen

    - Jeder Bereich wird als div gebaut.
- main, nav und aside werden nach Optik statt nach Aufgabe gewählt.
- Mehrere Hauptbereiche machen die Seitenlogik unklar.

    Diese Fehler sind nicht ungewöhnlich. Sie entstehen oft, wenn man eine sichtbare Wirkung schnell erreichen möchte. Für eine Lernplattform ist aber wichtiger, dass der Weg wiederholbar bleibt.

    ## Lernziele

    - Bedeutung von Seitenteilen in eigenen Worten erklären
- Struktur, Zweck und typische Fehler unterscheiden
- einen kleinen Praxisfall ruhig prüfen

    ## Merksatz

    Eine gute Weblösung ist nicht nur sichtbar richtig, sondern auch strukturell erklärbar, zugänglich und später wartbar.
