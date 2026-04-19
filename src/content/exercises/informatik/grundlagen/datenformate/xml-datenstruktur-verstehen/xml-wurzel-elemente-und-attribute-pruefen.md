---
title: XML-Struktur auf Wohlgeformtheit prüfen
description: Prüfe ein kleines XML-Beispiel auf saubere Verschachtelung und richtig eingesetzte Attribute.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - datenformate
  - xml-datenstruktur-verstehen
  - xml-wurzel-elemente-und-attribute-pruefen
taskId: INF-DATA-FORMAT-XML-001
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - grundlagen
  - datenformate
hintPoints:
  - "Lies das Beispiel zuerst ruhig in Worten."
  - "Trenne Struktur, Rolle und Wirkung sauber."
selfCheckPoints:
  - "Habe ich begründet statt nur benannt?"
  - "Habe ich Fachbegriffe sauber verwendet?"
transferIdeas:
  - "Übertrage die Logik auf ein ähnliches Beispiel."
reflectionPrompt: "Welche Stelle war leicht zu verwechseln und warum?"
---

## Aufgabe 1: Elemente lesen

Gegeben ist:

```xml
<party datum="31.12.11">
  <gast name="Albert">
    <getraenk>Wein</getraenk>
  </gast>
</party>
```

Benenne:
- das Wurzelelement,
- ein Attribut,
- und ein Unterelement.

## Aufgabe 2: Wohlgeformtheit prüfen

Erkläre, warum ein Dokument mit zwei äußersten Elementen nicht wohlgeformt ist.

## Aufgabe 3: Verschachtelungsfehler finden

Begründe, warum `&lt;a&gt;&lt;b&gt;&lt;/a&gt;&lt;/b&gt;` formal fehlerhaft ist.
