---
title: "Grundlagen: Formulare und Eingaben"
description: "Allgemeiner Überblick über Formularfelder, Beschriftungen, Eingabehilfen, Validierung und barrierearme Formularstruktur."
subject: "web-development"
section: "HTML"
topicPath: ["html", "formulare-und-eingaben", "ueberblick", "grundlagen-formulare-und-eingaben"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML"]
draft: false
---
## Begriff

Ein **Formular** ist ein strukturierter Bereich einer Webseite, in dem Nutzer Informationen eingeben, auswählen oder absenden können. Formulare erscheinen bei Kontaktseiten, Suche, Anmeldung, Bestellung, Kommentaren und vielen anderen Interaktionen.

Ein Formular ist nicht nur eine Ansammlung von Eingabefeldern. Es besteht aus Beschriftungen, Hilfetexten, Eingabetypen, Zuständen, Fehlermeldungen und einer klaren Absendehandlung.

## Bestandteile

Zu einem verständlichen Formular gehören typischerweise:

- ein Feld für die Eingabe,
- ein sichtbares Label,
- optional ein kurzer Hinweis,
- eine verständliche Fehlermeldung,
- eine klare Aktion wie „Absenden“ oder „Speichern“.

Diese Teile sollten nicht zufällig nebeneinanderstehen. Sie erklären gemeinsam, was erwartet wird und was nach dem Absenden passiert.

## Warum Labels wichtig sind

Ein Label benennt dauerhaft, welche Information ein Feld erwartet. Ein Placeholder verschwindet dagegen oft beim Tippen und ist deshalb kein vollständiger Ersatz. Labels helfen auch Screenreadern und vergrößern bei korrekt verbundenen Feldern die nutzbare Klickfläche.

## Validierung

Validierung prüft, ob eine Eingabe zur erwarteten Form passt. Eine E-Mail-Adresse, eine Zahl oder ein Pflichtfeld können unterschiedlich geprüft werden. Gute Validierung erklärt nicht nur, dass etwas falsch ist, sondern was der Nutzer ändern kann.

## Allgemeine Gestaltungsregel

Ein Formular sollte zuerst aus Nutzersicht gelesen werden:

1. Was soll ich eingeben?
2. Warum wird diese Information benötigt?
3. Was passiert mit meiner Eingabe?
4. Wie erkenne ich Fehler?
5. Wie korrigiere ich sie?

## Abgrenzung

Spezielle Seiten behandeln einzelne Situationen wie Labels, Placeholder, Fehlermeldungen oder `aria-describedby`. Diese Überblicksseite erklärt den gemeinsamen Rahmen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein gutes Formular ist eine kleine Unterhaltung mit dem Nutzer: Es fragt klar, hilft bei Fehlern und zeigt verständlich, was als Nächstes passiert.</p>
</div>
