---
title: "Grundlagen: Cron und systemd-Timer"
description: "Vergleiche geplante Ausführung mit Cron und systemd-Timern."
subject: "linux"
section: "automatisierung-und-skripte"
topicPath: ["automatisierung-und-skripte", "cron-und-systemd-timer", "ueberblick", "grundlagen-cron-und-systemd-timer-v186"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "automatisierung-und-skripte"]
draft: false
---
![Cron und systemd-Timer](/schlaufuchs-platform/images/overviews/v186/cron-und-systemd-timer.svg)

## Begriff

**Cron und systemd-Timer** ist ein wichtiges Linux-Thema, weil es nicht nur aus einem einzelnen Befehl besteht. Entscheidend ist, welche Rolle das Thema im System spielt, welcher Kontext geprüft werden muss und welche Grenzen es gibt.

## Warum das Thema wichtig ist

Geplante Aufgaben laufen oft in anderer Umgebung als interaktive Befehle. Cron ist einfach, systemd-Timer bieten stärkere Einbindung ins System. Dadurch lassen sich Befehle, Ausgaben und Fehlersituationen geordneter lesen.

## Zentrale Teilaspekte

Im Einstieg solltest du besonders auf diese Punkte achten:

- Welche Information wird gebraucht?
- Welcher Systemkontext ist relevant?
- Welcher Befehl oder welche Datei liefert einen Hinweis?
- Wie wird das Ergebnis plausibilisiert?

Logs und Exit-Codes sind für die Kontrolle zentral.

## Typische Einordnung

In der Praxis beginnt man nicht mit blindem Ausprobieren. Zuerst wird geklärt, was beobachtet wurde, welcher Teil des Systems betroffen ist und welche einfache Prüfung den nächsten Hinweis liefert. Erst danach wird ein Fix vorbereitet.

## Häufiges Missverständnis

Wenn ein Befehl im Terminal läuft, läuft er nicht automatisch genauso im Zeitjob. Diese Abgrenzung verhindert, dass ein einzelnes Symptom vorschnell als Ursache behandelt wird.

## Abgrenzung zu Detailseiten

Detailseiten können konkrete Befehle, Fehlermeldungen oder Reparaturschritte behandeln. Diese Überblicksseite erklärt den allgemeinen Rahmen: Begriff, Zweck, typische Prüfschritte und Grenzen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Linux-Arbeit trennt Beobachtung, Kontext, Prüfung und Änderung.</p>
</div>
