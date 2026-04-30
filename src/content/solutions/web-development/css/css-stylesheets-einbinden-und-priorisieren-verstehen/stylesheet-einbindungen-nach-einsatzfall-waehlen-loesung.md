---
title: "Musterlösung – Stylesheet-Einbindungen nach Einsatzfall wählen"
description: "Musterlösung zur Aufgabe WEB-CSS-CORE-101."
subject: "web-development"
section: "CSS"
topicPath: ["css", "css-stylesheets-einbinden-und-priorisieren-verstehen", "stylesheet-einbindungen-nach-einsatzfall-waehlen"]
taskId: "WEB-CSS-CORE-101"
relatedExercise: "src/content/exercises/web-development/css/css-stylesheets-einbinden-und-priorisieren-verstehen/stylesheet-einbindungen-nach-einsatzfall-waehlen"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Aufgabe 1: Drei Varianten vergleichen

- Inline-CSS passt eher für eine einmalige Ausnahme direkt an genau einem Element.
- Ein interner <code>style</code>-Block passt für Regeln, die nur diese eine Seite betreffen.
- Eine externe CSS-Datei passt am besten für Gestaltung, die auf mehreren Seiten oder in mehreren Komponenten wiederverwendet werden soll.

## Aufgabe 2: Wartbarkeit beurteilen

Eine externe CSS-Datei ist ruhiger, weil Gestaltung an einer zentralen Stelle geändert werden kann. Viele Inline-Regeln verteilen dieselbe Entscheidung über das ganze HTML und machen spätere Änderungen schwerer.

## Aufgabe 3: Herkunft einer Regel prüfen

Inline-Regeln stehen direkt im Element. Interne Regeln liegen im <code>&lt;style&gt;</code>-Block des Dokuments. Externe Regeln kommen über eine verlinkte CSS-Datei in die Seite.

## Worauf man bei der Korrektur achten sollte

- Einbindungsarten nicht nur optisch, sondern auch über Pflege und Wiederverwendung erklären.
- Externes Stylesheet nicht bloß als "auch möglich" behandeln, sondern als typische Projektlösung einordnen.

