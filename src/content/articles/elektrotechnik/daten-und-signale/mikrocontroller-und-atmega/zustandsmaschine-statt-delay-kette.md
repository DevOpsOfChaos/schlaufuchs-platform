---
title: "ATmega – Zustandsmaschine statt Delay-Kette"
description: "Verstehe, wie eine kleine Zustandsmaschine Abläufe lesbar macht, ohne das Programm mit langen Delays zu blockieren."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - zustandsmaschine-statt-delay-kette
learningGoals:
  - "Du erklärst, warum lange Delay-Ketten Mikrocontrollerprogramme unreaktiv machen."
  - "Du beschreibst Zustände, Ereignisse und Übergänge als Grundidee einer Zustandsmaschine."
  - "Du wandelst einen einfachen Ablauf gedanklich von „warte und tue“ in „prüfe und wechsle“ um."
practiceIdeas:
  - "Lies zuerst den praktischen Fehlerfall und danach die technische Regel."
  - "Skizziere den Ablauf als kleines Zeit-, Signal- oder Entscheidungsbild."
  - "Erkläre den Unterschied einmal ohne Code und danach mit den passenden Fachbegriffen."
commonMistakes:
  - "Eine Zustandsmaschine mit besonders kompliziertem Code zu verwechseln."
  - "Zustände nicht eindeutig zu benennen."
  - "Ereignisse, Bedingungen und Aktionen in einer einzigen unklaren Zeile zu vermischen."
keyTakeaways:
  - "Eine Zustandsmaschine beschreibt, in welchem Zustand ein System gerade ist und wann es wechselt."
  - "Sie ersetzt blockierendes Warten durch regelmäßiges Prüfen von Zeit und Ereignissen."
  - "Gute Zustandsnamen machen Mikrocontrollerprogramme verständlicher."
recognizeSignals:
  - "Die Aufgabe enthält Mikrocontroller-Code, Register, Sensorwerte, Zeitverhalten oder Schnittstellen."
  - "Es wird nach Ursache, Wirkung, Diagnose oder einer besseren Struktur gefragt."
  - "Eine reine Codeantwort reicht nicht; die elektrische oder zeitliche Bedeutung muss mitgelesen werden."
selfCheckPoints:
  - "Kann ich den Hauptbegriff in einem Satz fachlich sauber erklären?"
  - "Kann ich ein typisches Fehlerbild zuordnen?"
  - "Kann ich begründen, warum die vorgeschlagene Lösung zur Anwendung passt?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - zustandsmaschine
  - softtimer
  - delay
  - programmstruktur
level: mittel
draft: false
---


## Grundidee

Viele Anfängerprogramme bestehen aus langen Ketten von <code>delay()</code>-Aufrufen. Das funktioniert für eine einzelne blinkende LED, wird aber schnell unübersichtlich und unreaktiv. Eine Zustandsmaschine beschreibt stattdessen: Wo ist das System gerade, was wird geprüft und wann wird gewechselt?

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Eine Ampel soll laufen und trotzdem einen Taster beachten</h3><p>Mit langen Delays steckt das Programm während Rot, Gelb oder Grün fest. Mit Zuständen prüft es regelmäßig, ob Zeit abgelaufen ist oder ein Tasterereignis vorliegt.</p></div>

<div class="visual-grid"><div class="visual-item"><strong>Zustand</strong><span>Was gerade gilt, zum Beispiel ROT oder WARTEN.</span></div><div class="visual-item"><strong>Ereignis</strong><span>Tasterdruck, abgelaufene Zeit oder empfangener Wert.</span></div><div class="visual-item"><strong>Übergang</strong><span>Die Regel, wann der nächste Zustand gilt.</span></div></div>

<div class="figure-card"><p class="card-kicker">Ablaufbild</p><h3>Aus „warte und tue“ wird „prüfe und wechsle“</h3><pre><code>ROT      -- Zeit abgelaufen --&gt; ROT_GELB
ROT_GELB -- Zeit abgelaufen --&gt; GRUEN
GRUEN    -- Zeit abgelaufen --&gt; GELB
GELB     -- Zeit abgelaufen --&gt; ROT</code></pre></div>

<div class="compare-card"><p class="card-kicker">Programmlogik</p><h3>Blockierende Reihenfolge gegen reaktionsfähigen Zustand</h3><div class="compare-grid"><div class="compare-item"><strong>Delay-Kette</strong><span>Ein Schritt blockiert, bis die Wartezeit vorbei ist.</span></div><div class="compare-item"><strong>Zustandsmaschine</strong><span>Die Hauptschleife prüft wiederholt Zustand, Zeit und Ereignisse.</span></div></div></div>

<div class="note-panel"><p><strong>Merke:</strong> Eine Zustandsmaschine ist keine komplizierte Profi-Technik. Sie ist eine ruhige Art, Mikrocontrollerabläufe sichtbar, prüfbar und erweiterbar zu machen.</p></div>
