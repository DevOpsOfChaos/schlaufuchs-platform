---
title: Zielauswahl von CSS-Regeln beschreiben
description: Erkläre bei einfachen CSS-Regeln, welche Elemente angesprochen werden und warum zu breite Auswahl problematisch sein kann.
subject: web-development
section: CSS
topicPath:
  - css
  - selektoren
  - css-selektoren-grundidee-verstehen
  - zielauswahl-von-css-regeln-beschreiben
level: einfach
draft: false
tags:
  - css
  - selektoren
  - struktur
hintPoints:
  - "Frage zuerst: Welche Elemente trifft die Regel überhaupt?"
  - "Achte darauf, nicht sofort mit Farben oder Abständen zu argumentieren."
  - "Überlege, ob die Auswahl zu breit für das eigentliche Ziel ist."
selfCheckPoints:
  - "Beschreibst du die Zielauswahl verständlich?"
  - "Ist klar, warum eine allgemeine Regel mehr Wirkung haben kann als gedacht?"
  - "Begründest du, welche gezieltere Auswahl ruhiger wäre?"
transferIdeas:
  - "Übertrage die Aufgabe auf Überschriften, Buttons oder Kartenbereiche."
  - "Vergleiche eine allgemeine Regel mit einer gezielteren Variante."
reflectionPrompt: "Warum entstehen viele CSS-Probleme schon bei der Auswahl der Elemente und nicht erst bei den Eigenschaften?"
---

## Aufgabe 1: Regel deuten

Gegeben ist diese CSS-Regel:

```css
p {
  margin-bottom: 1rem;
}
```

Erkläre, welche Elemente davon betroffen sind.

## Aufgabe 2: Zu breite Wirkung bewerten

Eine Person möchte nur die Texte in einer Warnbox rot einfärben, schreibt aber:

```css
p {
  color: red;
}
```

Erkläre, warum das zu unerwarteten Nebenwirkungen führen kann.

## Aufgabe 3: Gezielt verbessern

Formuliere in eigenen Worten, warum eine Auswahl wie <code>.warnung p</code> oft ruhiger ist als ein bloßer Typselektor <code>p</code>, wenn nur ein bestimmter Bereich gemeint ist.
