---
title: "Ausblendung und Layoutwirkung sauber begründen"
description: "Begründe, warum opacity, visibility und display trotz ähnlicher Sichtwirkung unterschiedliche Folgen im Layout haben."
subject: "web-development"
section: "CSS"
topicPath: ["css", "opacity-visibility-und-display-unterscheiden", "ausblendung-und-layoutwirkung-sauber-begruenden"]
taskId: "AUTO-AUSBLENDUNG-UND-LAYOUTWIRKUNG-SAUBER-BEGRUENDEN"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Lücke oder Nachrücken

Unter einem Formularfeld soll eine Fehlermeldung bei Bedarf erscheinen. Ohne Fehler soll die Oberfläche möglichst ruhig bleiben und nicht springen.

Begründe, warum hier `visibility: hidden` oder `opacity: 0` in manchen Fällen ruhiger wirken kann als `display: none`.

## Aufgabe 2: Anzeige vollständig entfernen

Ein Werbebanner soll auf kleinen Screens komplett wegfallen, damit der Hauptinhalt den Platz nutzen kann.

Erkläre, warum `display: none` hier oft passender ist als `opacity: 0`.

## Aufgabe 3: Sichtbar gleich, fachlich verschieden

Zwei Elemente sind beide nicht zu sehen. Bei einem bleibt eine Lücke, beim anderen nicht.

Erkläre in eigenen Worten, welche CSS-Ideen dahinterstecken können.
