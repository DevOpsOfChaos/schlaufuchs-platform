---
title: "Batterien und Akkus"
description: "Überblick über Batterien und Akkus als Energiequellen für elektronische Schaltungen."
subject: "elektrotechnik"
section: "Versorgung"
topicPath: ["batterien-und-akkus", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Versorgung"]
draft: false
---
# Batterien und Akkus

![Schaubild zu Batterien und Akkus.](/schlaufuchs-platform/images/overviews/v150/batterien-und-akkus.svg)

*Das Schaubild ordnet gespeicherte Energie, Spannungslage und Lastverhalten ein.*



Batterien und Akkus liefern elektrische Energie aus chemischen Prozessen. Sie unterscheiden sich in Spannungslage, Kapazität, Innenwiderstand, Entladekurve, Wiederaufladbarkeit und Sicherheitsanforderungen. Für Schaltungen ist nicht nur die Nennspannung wichtig, sondern auch das Verhalten unter Last.

## Einordnung

Mobile Geräte, Sensoren und Mikrocontrollerprojekte hängen stark von der gewählten Energiequelle ab. Ein Akku kann anfangs eine höhere Spannung haben, später absinken und bei Lastspitzen kurz einbrechen. Die Versorgungsschaltung muss diese Veränderungen berücksichtigen.

## Zentrale Aspekte

- **Nennspannung und tatsächlicher Spannungsverlauf:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Kapazität in mAh oder Wh:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Innenwiderstand und Lastfähigkeit:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Ladeschutz, Tiefentladung und Kurzschlussrisiko:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Eine Knopfzelle kann kleine Ströme lange liefern, ist aber für Motoren ungeeignet. Ein Lithium-Ionen-Akku liefert viel Energie, benötigt aber Schutz vor Überladung, Tiefentladung und Kurzschluss. Ein Batteriehalter, ein Schalter und ein Regler gehören oft zur Versorgungskette.

## Abgrenzung

Eine Batterie ist keine ideale konstante Spannungsquelle. Ihre Spannung hängt von Chemie, Ladestand, Temperatur und Last ab. Außerdem bedeutet eine hohe Kapazitätsangabe nicht automatisch, dass hohe Spitzenströme sicher möglich sind.

## Häufige Missverständnisse

Häufig wird die Nennspannung als fester Wert behandelt. Ein weiterer Fehler ist, Akkus ohne geeignete Schutz- und Ladeelektronik zu verwenden. Besonders Lithium-Systeme erfordern sorgfältige Beachtung von Datenblatt und Sicherheitshinweisen.

## Kurz zusammengefasst

- Energiequellen haben elektrische und sicherheitsrelevante Grenzen.
- Spannung, Kapazität und Laststrom müssen gemeinsam betrachtet werden.
- Akkus benötigen passende Lade- und Schutzkonzepte.
