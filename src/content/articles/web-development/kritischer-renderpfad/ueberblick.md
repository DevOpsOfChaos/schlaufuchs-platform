---
title: "Kritischer Renderpfad"
description: "Überblick über die Schritte vom HTML-Dokument bis zur sichtbaren Darstellung einer Webseite im Browser."
subject: "web-development"
section: "Performance"
topicPath: ["kritischer-renderpfad", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Performance"]
draft: false
---
# Kritischer Renderpfad

Der kritische Renderpfad umfasst die Schritte, die ein Browser durchläuft, bevor eine Webseite sichtbar und nutzbar wird. Dazu gehören das Laden von HTML, der Aufbau des DOM, das Laden und Auswerten von CSS, die Ausführung von JavaScript und die Berechnung von Layout und Darstellung.

![Vereinfachter kritischer Renderpfad vom HTML bis zur sichtbaren Seite.](/schlaufuchs-platform/images/overviews/v146/kritischer-renderpfad.svg)

*Vereinfachter kritischer Renderpfad vom HTML bis zur sichtbaren Seite.*

## Grundidee

HTML liefert die Struktur. CSS bestimmt, wie diese Struktur dargestellt wird. JavaScript kann Inhalt, Klassen, Layout oder Interaktion verändern. Der Browser muss entscheiden, welche Ressourcen vor der ersten Darstellung unbedingt nötig sind und welche später nachgeladen werden können.

## Bedeutung im Zusammenhang

Blockierende Ressourcen sind besonders wichtig. Ein Stylesheet kann die Darstellung verzögern, weil der Browser ohne CSS nicht weiß, wie Elemente aussehen sollen. JavaScript kann das Parsen unterbrechen, wenn es synchron geladen und ausgeführt wird. Webfonts, Bilder und große Bundles können zusätzlich sichtbare Verzögerungen verursachen.

## Typische Anwendung

Optimierung bedeutet nicht, alles zu entfernen. Entscheidend ist, was früh gebraucht wird, was asynchron geladen werden kann und welche Ressourcen unnötig groß oder unpassend priorisiert sind.

## Abgrenzung

Ein verbreitetes Missverständnis ist die Gleichsetzung von Dateigröße und Wirkung. Eine kleine, aber blockierende Ressource kann für den sichtbaren Start wichtiger sein als eine größere Datei, die später geladen wird.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
