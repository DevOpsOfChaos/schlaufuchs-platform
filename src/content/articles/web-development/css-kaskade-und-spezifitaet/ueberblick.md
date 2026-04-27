---
title: "CSS-Kaskade und Spezifität"
description: "Allgemeiner Überblick über Kaskade, Spezifität und Reihenfolge als Grundprinzipien von CSS."
subject: web-development
section: "CSS"
topicPath:
  - "css-kaskade-und-spezifitaet"
  - "ueberblick"
learningGoals:
  - "Du kennst die Kaskade als Entscheidungsmodell von CSS."
  - "Du kannst Spezifität als Gewicht von Selektoren einordnen."
  - "Du verstehst, warum Reihenfolge und Herkunft von Regeln wichtig sind."
practiceIdeas: []
commonMistakes:
  - "CSS-Probleme sofort mit `!important` zu lösen."
  - "Spezifität nur als Reihenfolge im Stylesheet zu verstehen."
keyTakeaways:
  - "CSS entscheidet Konflikte über Herkunft, Wichtigkeit, Spezifität und Reihenfolge."
  - "Geringe, kontrollierte Spezifität macht Styles wartbarer."
recognizeSignals:
  - "Es geht um überschreibende Regeln, unerwartete Farben, Selektoren oder `!important`."
selfCheckPoints:
  - "Kann ich erklären, warum eine Regel eine andere überschreibt?"
level: einfach
tags:
  - "web development"
  - "css"
  - "kaskade"
  - "spezifität"
draft: false
---

# CSS-Kaskade und Spezifität

![Schaubild zu CSS-Kaskade und Spezifität.](/schlaufuchs-platform/images/overviews/v148/css-kaskade-und-spezifitaet.svg)

*Das Schaubild zeigt, wie mehrere Regeln auf ein Element treffen und ausgewertet werden.*


Die CSS-Kaskade beschreibt, wie der Browser entscheidet, welche Stilregel gilt, wenn mehrere Regeln dasselbe Element betreffen. Diese Entscheidung ist kein Zufall. Sie folgt einem System aus Herkunft, Wichtigkeit, Spezifität und Reihenfolge.

Spezifität beschreibt das Gewicht eines Selektors. Ein ID-Selektor ist stärker als ein Klassen-Selektor, ein Klassen-Selektor stärker als ein einfacher Elementselektor. Wenn zwei Regeln gleich wichtig und gleich spezifisch sind, gewinnt meist die später geladene Regel.

## Zweck

Die Kaskade macht CSS flexibel. Allgemeine Grundregeln können gesetzt und an bestimmten Stellen überschrieben werden. Dadurch müssen nicht alle Eigenschaften für jedes Element neu definiert werden. Gleichzeitig kann die Kaskade unübersichtlich werden, wenn Selektoren zu stark oder zu uneinheitlich werden.

## Zentrale Faktoren

Zuerst zählt, woher eine Regel stammt: Browserstandard, Nutzerstil oder Autorstil. Dann zählt, ob eine Regel als wichtig markiert wurde. Danach folgt die Spezifität des Selektors. Zuletzt entscheidet die Reihenfolge im CSS.

## Spezifität im Alltag

Eine Regel wie `.card .title` ist stärker als `.title`, weil sie genauer ist. Eine Regel mit `#main` ist stärker als beide. Das kann nützlich sein, führt aber schnell zu schwer überschreibbaren Styles. Moderne CSS-Architektur versucht deshalb oft, Spezifität bewusst niedrig zu halten.

## Abgrenzung

Kaskade ist nicht dasselbe wie Vererbung. Vererbung bedeutet, dass bestimmte Eigenschaften von Eltern auf Kinder übergehen. Die Kaskade entscheidet dagegen, welche Regel für ein Element gewinnt. Beide Mechanismen wirken zusammen, sind aber unterschiedliche Konzepte.

## Häufige Missverständnisse

`!important` wirkt wie eine schnelle Lösung, macht langfristig aber viele Styles schwerer wartbar. Ein anderes Missverständnis ist die Annahme, dass die letzte Regel immer gewinnt. Das stimmt nur, wenn Herkunft, Wichtigkeit und Spezifität vergleichbar sind.

## Kurz zusammengefasst

CSS-Kaskade und Spezifität erklären, warum ein Stil tatsächlich gilt. Wer diese Regeln versteht, debuggt CSS gezielter und schreibt Styles, die sich kontrolliert erweitern lassen.
