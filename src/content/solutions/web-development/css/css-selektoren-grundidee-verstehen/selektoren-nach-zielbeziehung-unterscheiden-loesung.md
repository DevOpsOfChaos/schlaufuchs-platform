---
title: "Musterlösung – Selektoren nach Zielbeziehung unterscheiden"
description: "Musterlösung zur Aufgabe WEB-CSS-CORE-108."
subject: "web-development"
section: "CSS"
topicPath: ["css", "css-selektoren-grundidee-verstehen", "selektoren-nach-zielbeziehung-unterscheiden"]
taskId: "WEB-CSS-CORE-108"
relatedExercise: "src/content/exercises/web-development/css/css-selektoren-grundidee-verstehen/selektoren-nach-zielbeziehung-unterscheiden.md"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Aufgabe 1: Zielauswahl nennen

- <code>a</code>: alle Links
- <code>.hinweis a</code>: alle Links innerhalb eines Bereichs mit der Klasse <code>hinweis</code>
- <code>nav > a</code>: nur direkte Link-Kinder von <code>nav</code>
- <code>h2 + p</code>: der Absatz, der direkt auf eine <code>h2</code> folgt

## Aufgabe 2: Strukturbezug erklären

<code>nav a</code> ist breiter, weil auch tiefer verschachtelte Links innerhalb von <code>nav</code> getroffen werden. <code>nav > a</code> trifft nur direkte Kinder.

## Aufgabe 3: Zu breit oder passend?

<code>a { ... }</code> ist zu grob, wenn nur Navigationslinks gemeint sind, weil dann auch Links in Inhalt, Footer oder Infoboxen mitgestylt werden.

## Worauf man bei der Korrektur achten sollte

- Zielbeziehung sprachlich sauber beschreiben.
- Direkte Kinder und beliebige Nachkommen nicht verwechseln.

