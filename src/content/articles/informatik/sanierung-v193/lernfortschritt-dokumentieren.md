---
title: "Lernfortschritt dokumentieren"
description: "Verstehe arbeitsstand so festhalten, dass später weitergebaut werden kann als ruhigen Informatik-Baustein für Qualität, Tests und nachvollziehbare Änderungen."
subject: "informatik"
section: "softwarequalitaet-und-datenpraxis"
topicPath: ["sanierung-v193", "lernfortschritt-dokumentieren"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "fortgeschritten"
tags: ["informatik", "softwarequalitaet-und-datenpraxis"]
draft: false
---
![Didaktische Skizze zu Lernfortschritt dokumentieren](/schlaufuchs-platform/images/informatik/sanierung-v193/lernfortschritt-dokumentieren.svg)

Lernfortschritt dokumentieren gehört zur Informatik-Sanierung v193. Die Seite behandelt das Thema nicht als isolierten Programmiertrick, sondern als Qualitätsentscheidung: Was soll der Code leisten, woran erkennt man korrektes Verhalten und wie bleibt die Änderung später verständlich?

## Worum es geht

Der Kern ist: **arbeitsstand so festhalten, dass später weitergebaut werden kann**. Gute Informatik-Praxis beginnt damit, ein Problem klein genug zu beschreiben, damit es geprüft werden kann. Danach werden Daten, Zustände, Fehlerfälle und Schnittstellen bewusst benannt.

Wichtige Leitgedanken:

- Dokumentation hält Entscheidungen und Grenzen fest.\n- Offene Punkte sollten konkret und auffindbar sein.\n- Ein Statusdoc verhindert doppelte Arbeit.\n
## Arbeitsweise

Gehe ruhig in vier Schritten vor:

1. **Erwartung klären:** Was soll am Ende beobachtbar stimmen?
2. **Daten lesen:** Welche Eingaben, Zustände oder Strukturen sind beteiligt?
3. **Risiko benennen:** Was könnte beim Ändern, Testen oder Umbauen brechen?
4. **Kontrolle planen:** Welcher kleine Test zeigt, ob die Entscheidung trägt?

## Typische Fehlerstelle

Viele Fehler entstehen nicht durch fehlendes Wissen, sondern durch zu große Schritte. Wenn Anforderung, Datenstruktur, Testfall und Änderung gleichzeitig unscharf bleiben, wird Fehlersuche schnell zufällig.

## Mini-Beispiel

Statt „die Suche ist kaputt“ ist hilfreicher:

- Welche Eingabe wurde verwendet?
- Welches Ergebnis wurde erwartet?
- Welches Ergebnis kam wirklich zurück?
- Welche kleinste Änderung oder welcher kleinste Test kann die Vermutung prüfen?

## Merksatz

Informatik wird stabiler, wenn Verhalten, Daten und Prüfung klein genug sind, um sie gemeinsam zu verstehen.
