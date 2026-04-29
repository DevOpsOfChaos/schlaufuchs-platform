---
title: "Grundlagen: Pegel und Entprellung"
description: "Allgemeiner Überblick über digitale Pegel, Tasterprellen und Entprellung, bevor einzelne Schaltungssituationen betrachtet werden."
subject: "elektrotechnik"
section: "Digitale Eingänge und Ausgänge"
topicPath: ["digitale-eingaenge-und-ausgaenge", "pegel-und-entprellung", "grundlagen-pegel-und-entprellung"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Digitale Eingänge und Ausgänge"]
draft: false
---
## Begriff

**Pegel und Entprellung** beschreiben zwei grundlegende Themen digitaler Eingänge. Ein Pegel ist der elektrische Zustand, den ein Mikrocontroller als logisch `0` oder logisch `1` interpretiert. Entprellung ist die technische oder softwareseitige Maßnahme, mit der ein mechanisch unsauberes Tastensignal stabil ausgewertet wird.

Das Thema gehört zu den Grundlagen digitaler Ein- und Ausgänge. Es ist wichtig, weil Mikrocontroller nicht „Taster“ oder „Absicht“ lesen, sondern Spannungen an Pins.

## Digitale Pegel

Ein digitaler Eingang arbeitet nicht mit beliebig genauer Spannungsmessung. Er unterscheidet im Normalfall nur zwei Bereiche:

- ein Bereich wird als logisch `0` gelesen,
- ein anderer Bereich wird als logisch `1` gelesen.

Welche Spannung genau als sicher niedrig oder sicher hoch gilt, hängt vom Baustein, von der Versorgungsspannung und vom Datenblatt ab. Für das Grundverständnis reicht zunächst: Ein Pin braucht einen eindeutig definierten Zustand. Ein unklarer oder schwebender Eingang kann zufällige Werte liefern.

## Warum Taster prellen

Ein mechanischer Taster schließt nicht ideal in einem einzigen perfekten Moment. Beim Drücken oder Loslassen können seine Kontakte sehr kurz mehrfach berühren und wieder lösen. Für einen Menschen ist das ein einziger Tastendruck. Für einen Mikrocontroller können daraus mehrere schnelle Wechsel zwischen `0` und `1` entstehen.

Dieses Verhalten heißt **Prellen**. Es ist kein Programmfehler und kein Zeichen für einen defekten Controller, sondern eine typische Eigenschaft mechanischer Kontakte.

## Was Entprellung leistet

Entprellung versucht nicht, den Taster mechanisch perfekt zu machen. Sie sorgt dafür, dass die Auswertung nur ein stabiles Ereignis erkennt. Dafür gibt es mehrere Grundideen:

- Das Signal wird erst akzeptiert, wenn es eine kurze Zeit stabil bleibt.
- Ein erkannter Tastendruck wird für eine kurze Sperrzeit nicht erneut gezählt.
- Eine kleine Schaltung glättet oder formt das Signal vor dem Eingang.

In Lernseiten tauchen diese Varianten oft in konkreten Situationen auf. Die allgemeine Idee bleibt aber gleich: Ein unsauberes physikalisches Signal wird in ein eindeutig lesbares digitales Ereignis übersetzt.

## Zusammenhang mit Pull-ups

Viele Taster werden mit Pull-up-Widerstand betrieben. Dann liegt der Eingang im Ruhezustand auf logisch `1`. Wird der Taster gedrückt und nach Masse verbunden, liest der Eingang logisch `0`. Das wirkt am Anfang ungewohnt, ist aber eine stabile und häufig verwendete Schaltungsform.

Wichtig ist deshalb immer die Reihenfolge:

1. Welche Ruhelage hat der Eingang?
2. Was passiert elektrisch beim Drücken?
3. Welchen Pegel liest der Mikrocontroller?
4. Wie wird dieser Pegel im Programm als Ereignis gedeutet?

## Abgrenzung zu einzelnen Lernseiten

Spezielle Lernseiten behandeln einzelne Fälle: Pull-up-Taster, Active-Low-Logik, Softwareentprellung, Timerentprellung oder Messung mit Oszilloskop. Diese Seite erklärt vorher den gemeinsamen Rahmen. Wer diesen Rahmen verstanden hat, kann die Einzelfälle leichter einordnen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Taster ist für den Mikrocontroller kein „Klick“, sondern ein elektrisches Signal. Pegel erklären, wie dieses Signal gelesen wird; Entprellung erklärt, wie daraus ein verlässliches Ereignis entsteht.</p>
</div>
