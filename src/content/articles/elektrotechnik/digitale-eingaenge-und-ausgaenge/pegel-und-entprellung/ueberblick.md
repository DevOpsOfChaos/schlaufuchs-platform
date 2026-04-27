---
title: "Pegel und Entprellung"
description: "Allgemeiner Überblick über digitale Pegel, Tasterprellen und die Bedeutung stabiler Eingangssignale."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "digitale-eingaenge-und-ausgaenge"
  - "pegel-und-entprellung"
  - "ueberblick"
learningGoals:
  - "Du kennst die Grundidee digitaler Pegel."
  - "Du verstehst, warum mechanische Taster prellen können."
  - "Du kannst Entprellung als Stabilisierung eines Eingangssignals einordnen."
practiceIdeas: []
commonMistakes:
  - "Ein digitales Signal als sofort perfekt stabil zu betrachten."
  - "Entprellung nur als Softwaretrick zu sehen und elektrische Ursachen zu übersehen."
keyTakeaways:
  - "Digitale Eingänge unterscheiden Pegelbereiche, nicht beliebig genaue Spannungen."
  - "Taster können beim Schalten mehrere schnelle Wechsel erzeugen."
recognizeSignals:
  - "Es geht um Taster, Eingangssignale, High/Low, Flanken oder instabile Schaltzustände."
selfCheckPoints:
  - "Kann ich erklären, warum ein gedrückter Taster nicht immer sofort ein sauberes Digitalsignal liefert?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "digitale eingänge"
  - "entprellung"
draft: false
---

# Pegel und Entprellung

![Schaubild zu Pegel, Prellen und Entprellung.](/schlaufuchs-platform/images/overviews/v148/pegel-und-entprellung.svg)

*Das Schaubild zeigt den Weg vom mechanischen Taster über Prellen und Entprellung zum stabilen Digitalsignal.*



## Begriff
Digitale Schaltungen arbeiten oft mit den Zuständen High und Low. Diese Zustände sind aber keine abstrakten Wörter, sondern werden durch Spannungsbereiche dargestellt. Ein Mikrocontroller erkennt also nicht „gedrückt“ oder „nicht gedrückt“, sondern vergleicht eine Eingangsspannung mit internen Schwellen. Zwischen einem sicheren Low und einem sicheren High kann es Übergangsbereiche geben, in denen das Verhalten nicht zuverlässig ist.

## Warum Entprellung nötig ist
Mechanische Kontakte schließen nicht ideal. Beim Drücken oder Loslassen eines Tasters können die Kontaktflächen für wenige Millisekunden mehrmals berühren und wieder trennen. Dieses Prellen erzeugt schnelle Wechsel zwischen High und Low. Für einen Menschen ist das ein einziger Tastendruck, für einen Mikrocontroller kann es wie mehrere Impulse aussehen.

## Typische Lösungen
Entprellung bedeutet, diese schnellen unerwünschten Wechsel zu unterdrücken oder auszuwerten. Das kann elektrisch mit Widerständen und Kondensatoren, mit speziellen Schaltungen oder in Software geschehen. Software-Entprellung prüft häufig, ob ein Zustand über eine kurze Zeit stabil bleibt, bevor er als gültig übernommen wird.

## Einordnung
Pegel und Entprellung gehören zu den Grundlagen digitaler Eingänge. Sie erklären, warum ein Schaltplan mit Taster nicht nur aus einem Draht besteht und warum Programme Eingänge nicht blind bei jedem kurzen Wechsel auswerten sollten. Besonders wichtig ist das bei Bedienknöpfen, Zählimpulsen, Reset-Leitungen und externen Interrupts.

## Häufige Missverständnisse
Ein häufiger Irrtum ist die Annahme, ein digitaler Eingang sei immer entweder eindeutig 0 oder eindeutig 1. In der Praxis hängen diese Zustände von Spannung, Bezugspotential, Pull-up oder Pull-down und Störungen ab. Ein weiterer Irrtum ist, dass Entprellung nur langsamer macht. Tatsächlich macht sie Bedienung zuverlässiger, weil sie zufällige Mehrfachauslösungen vermeidet.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
