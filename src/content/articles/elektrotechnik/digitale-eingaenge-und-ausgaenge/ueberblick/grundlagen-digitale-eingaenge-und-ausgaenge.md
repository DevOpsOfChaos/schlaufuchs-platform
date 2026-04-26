---
title: "Grundlagen: Digitale Eingänge und Ausgänge"
description: "Allgemeiner Überblick über digitale Pins, Zustände, Richtung, Pegel und typische Ein-/Ausgabeideen am Mikrocontroller."
subject: elektrotechnik
section: "Digitale Eingänge und Ausgänge"
topicPath:
  - digitale-eingaenge-und-ausgaenge
  - ueberblick
  - grundlagen-digitale-eingaenge-und-ausgaenge
learningGoals:
  - "Du erklärst den Unterschied zwischen Eingang und Ausgang."
  - "Du beschreibst Pins als Schnittstelle zwischen Mikrocontroller und Außenwelt."
  - "Du ordnest Pegel, Richtung und Beschaltung als gemeinsame Grundlage ein."
practiceIdeas: []
commonMistakes:
  - "Einen Pin nur als Zahl im Code zu betrachten."
  - "Ein- und Ausgang zu vermischen."
  - "Die äußere Beschaltung beim Lesen eines digitalen Zustands zu ignorieren."
keyTakeaways:
  - "Digitale Pins verbinden Software mit elektrischen Signalen."
  - "Die Pinrichtung legt fest, ob ein Pin gelesen oder aktiv getrieben wird."
  - "Ohne definierte Beschaltung entstehen leicht unklare Zustände."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - elektrotechnik
  - mikrocontroller
  - gpio
  - eingang
  - ausgang
draft: false
---

## Begriff

**Digitale Eingänge und Ausgänge** sind die einfachste Schnittstelle zwischen einem Mikrocontroller und seiner Umgebung. Über sie kann ein Controller Zustände lesen oder Signale ausgeben. Typische Beispiele sind Taster, LEDs, Relais, einfache Sensoren und Steuersignale.

Das Thema wird oft mit Registerbefehlen oder Codebeispielen eingeführt. Fachlich steht dahinter aber zuerst eine einfache Frage: Soll der Pin etwas beobachten oder selbst einen elektrischen Zustand erzeugen?

## Eingang

Ein Eingang wird gelesen. Der Mikrocontroller schaut, welcher Pegel am Pin anliegt. Er erzeugt diesen Pegel nicht selbst, sondern wertet die äußere Beschaltung aus. Ein Taster, ein Sensor oder ein anderes Bauteil bestimmt dann, ob der Eingang als logisch `0` oder logisch `1` erscheint.

Damit ein Eingang zuverlässig ist, braucht er eine definierte Ruhelage. Pull-up- und Pull-down-Widerstände sorgen dafür, dass der Pin nicht unkontrolliert „in der Luft hängt“.

## Ausgang

Ein Ausgang wird vom Mikrocontroller aktiv getrieben. Er kann eine Leitung auf einen niedrigen oder hohen Zustand bringen. Eine LED kann dadurch ein- oder ausgeschaltet werden. Auch Steuersignale für andere Schaltungen entstehen so.

Ein Ausgang ist aber keine beliebige Stromquelle. Stromgrenzen, Schutzwiderstände und die zulässige Belastung des Pins bleiben wichtig.

## Gemeinsame Grundfragen

Bei jedem digitalen Pin helfen vier Fragen:

1. Ist der Pin Eingang oder Ausgang?
2. Was ist die elektrische Ruhelage?
3. Welche Bedeutung hat logisch `0`?
4. Welche Bedeutung hat logisch `1`?

Erst danach lohnt sich der Blick auf konkrete Register, Bibliotheksfunktionen oder Programmzeilen.

## Warum das Thema schnell unübersichtlich wird

Digitale Ein- und Ausgänge wirken einfach, weil sie nur zwei logische Zustände kennen. In der Praxis kommen aber mehrere Ebenen zusammen: elektrische Spannung, äußere Beschaltung, logische Bedeutung und Programmcode. Deshalb entstehen viele Unterthemen wie Pull-ups, Active-Low, Entprellung, Pegelgrenzen oder Strombelastung.

Diese Überblicksseite ist der gemeinsame Einstieg. Die einzelnen Lernseiten behandeln danach konkrete Situationen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein digitaler Pin ist nicht nur eine Codevariable. Er ist eine elektrische Schnittstelle, deren Richtung, Pegel und Beschaltung gemeinsam verstanden werden müssen.</p>
</div>
