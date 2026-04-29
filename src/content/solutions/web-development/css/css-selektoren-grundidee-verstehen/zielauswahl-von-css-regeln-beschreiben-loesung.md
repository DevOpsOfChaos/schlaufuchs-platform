---
title: "Musterlösung – Zielauswahl von CSS-Regeln beschreiben"
description: "Musterlösung zur Aufgabe WEB-CSS-SEL-001."
subject: "web-development"
section: "CSS"
topicPath: ["css", "css-selektoren-grundidee-verstehen", "zielauswahl-von-css-regeln-beschreiben"]
taskId: "WEB-CSS-SEL-001"
relatedExercise: "src/content/exercises/web-development/css/css-selektoren-grundidee-verstehen/zielauswahl-von-css-regeln-beschreiben.md"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Aufgabe 1: Regel deuten

Die Regel trifft alle <code>p</code>-Elemente im Dokument, weil der Typselektor <code>p</code> allgemein auf jeden Absatz dieses Typs wirkt.

## Aufgabe 2: Zu breite Wirkung bewerten

Mit <code>p { color: red; }</code> werden nicht nur die Texte in der Warnbox rot, sondern alle Absätze der Seite. Genau dadurch entstehen Nebenwirkungen in Bereichen, die gar nicht gemeint waren.

## Aufgabe 3: Gezielt verbessern

<code>.warnung p</code> beschränkt die Regel auf Absätze innerhalb des Bereichs mit der Klasse <code>warnung</code>. Dadurch wird die Auswahl ruhiger und fachlich genauer als bei einem bloßen Typselektor.
