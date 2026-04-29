---
title: "Zielauswahl von CSS-Regeln beschreiben"
description: "Erkläre bei einfachen CSS-Regeln, welche Elemente angesprochen werden und warum zu breite Auswahl problematisch sein kann."
subject: "web-development"
section: "CSS"
topicPath: ["css", "css-selektoren-grundidee-verstehen", "zielauswahl-von-css-regeln-beschreiben"]
taskId: "WEB-CSS-SEL-001"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
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
