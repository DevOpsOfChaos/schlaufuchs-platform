---
title: "ATmega – Zustandsmaschine statt Delay-Kette"
description: "Verstehe, wie eine kleine Zustandsmaschine Abläufe lesbar macht, ohne das Programm mit langen Delays zu blockieren."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "zustandsmaschine-statt-delay-kette"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
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
