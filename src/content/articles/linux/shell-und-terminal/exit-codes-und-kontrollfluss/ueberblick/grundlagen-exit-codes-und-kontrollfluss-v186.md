---
title: "Grundlagen: Exit-Codes und Kontrollfluss"
description: "Verstehe Rückgabewerte von Befehlen als Grundlage für Entscheidungen in Shellabläufen."
subject: "linux"
section: "shell-und-terminal"
topicPath: ["shell-und-terminal", "exit-codes-und-kontrollfluss", "ueberblick", "grundlagen-exit-codes-und-kontrollfluss-v186"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "shell-und-terminal"]
draft: false
---
![Exit-Codes und Kontrollfluss](/schlaufuchs-platform/images/overviews/v186/exit-codes-und-kontrollfluss.svg)

## Begriff

**Exit-Codes und Kontrollfluss** ist ein wichtiges Linux-Thema, weil es nicht nur aus einem einzelnen Befehl besteht. Entscheidend ist, welche Rolle das Thema im System spielt, welcher Kontext geprüft werden muss und welche Grenzen es gibt.

## Warum das Thema wichtig ist

Befehle melden Erfolg oder Fehler über Exit-Codes. Skripte können diese Werte auswerten und darauf reagieren. Dadurch lassen sich Befehle, Ausgaben und Fehlersituationen geordneter lesen.

## Zentrale Teilaspekte

Im Einstieg solltest du besonders auf diese Punkte achten:

- Welche Information wird gebraucht?
- Welcher Systemkontext ist relevant?
- Welcher Befehl oder welche Datei liefert einen Hinweis?
- Wie wird das Ergebnis plausibilisiert?

So wird aus einer Befehlsfolge ein kontrollierter Ablauf.

## Typische Einordnung

In der Praxis beginnt man nicht mit blindem Ausprobieren. Zuerst wird geklärt, was beobachtet wurde, welcher Teil des Systems betroffen ist und welche einfache Prüfung den nächsten Hinweis liefert. Erst danach wird ein Fix vorbereitet.

## Häufiges Missverständnis

Eine sichtbare Ausgabe ist nicht dasselbe wie ein erfolgreicher Exit-Code. Diese Abgrenzung verhindert, dass ein einzelnes Symptom vorschnell als Ursache behandelt wird.

## Abgrenzung zu Detailseiten

Detailseiten können konkrete Befehle, Fehlermeldungen oder Reparaturschritte behandeln. Diese Überblicksseite erklärt den allgemeinen Rahmen: Begriff, Zweck, typische Prüfschritte und Grenzen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Linux-Arbeit trennt Beobachtung, Kontext, Prüfung und Änderung.</p>
</div>
