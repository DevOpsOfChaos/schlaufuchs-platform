---
title: "DOM und Ereignisse"
description: "Allgemeiner Überblick über das Document Object Model und Ereignisse als Grundlage interaktiver Webseiten."
subject: "web-development"
section: "JavaScript"
topicPath: ["dom-und-ereignisse", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "JavaScript"]
draft: false
---
# DOM und Ereignisse

![Schaubild zum DOM und zu Ereignissen im Browser.](/schlaufuchs-platform/images/overviews/v148/dom-und-ereignisse.svg)

*Das Schaubild verbindet HTML-Struktur, DOM, Ereignisse und Reaktionen im Skript.*


Das Document Object Model, kurz DOM, ist die vom Browser erzeugte Objektstruktur einer Webseite. Aus HTML entsteht beim Laden der Seite ein Baum aus Knoten: Dokument, Elemente, Texte und Attribute. JavaScript kann diesen Baum lesen, verändern und auf Ereignisse reagieren.

Ereignisse beschreiben Vorgänge, die im Browser passieren. Dazu gehören Klicks, Tastatureingaben, Formularänderungen, Laden von Ressourcen oder das Absenden eines Formulars. Mit Event Listenern kann JavaScript auf solche Vorgänge reagieren.

## Einordnung

HTML beschreibt den Ausgangszustand. Das DOM ist die lebende Struktur im Browser. Wenn JavaScript ein Element ergänzt, eine Klasse ändert oder Text austauscht, verändert es das DOM. Der ursprüngliche HTML-Quelltext muss dadurch nicht identisch mit dem aktuellen Zustand der Seite sein.

## DOM-Manipulation

Typische DOM-Arbeit besteht aus Suchen, Lesen, Ändern und Erzeugen. Ein Skript sucht ein Element, liest einen Wert, setzt eine Klasse oder fügt einen neuen Knoten ein. Diese Änderungen sollten nachvollziehbar bleiben, damit Zustand und Darstellung nicht auseinanderlaufen.

## Ereignisse

Ein Ereignis besitzt ein Ziel, also das Element, auf dem es ausgelöst wurde. Viele Ereignisse wandern anschließend durch die DOM-Struktur. Dieses Verhalten heißt Bubbling. Dadurch kann ein übergeordnetes Element Ereignisse seiner Kinder behandeln. Gleichzeitig kann ein Ereignis ein Standardverhalten haben, etwa das Folgen eines Links oder das Absenden eines Formulars.

## Beispiele

Ein Button kann beim Klick ein Menü öffnen. Ein Eingabefeld kann bei jeder Änderung eine Vorschau aktualisieren. Eine Liste kann über Event Delegation Klicks auf ihre Einträge behandeln, ohne jedem Eintrag einzeln einen Listener zu geben.

## Häufige Missverständnisse

Ein häufiger Fehler ist, DOM-Änderungen ohne klaren Zustand zu verteilen. Dadurch ist später schwer erkennbar, warum ein Element sichtbar, deaktiviert oder gefüllt ist. Ein anderer Fehler ist, Standardverhalten zu unterdrücken, ohne eine gleichwertige Bedienbarkeit zu erhalten.

## Kurz zusammengefasst

Das DOM ist die programmierbare Struktur einer Webseite. Ereignisse machen diese Struktur interaktiv. Gute DOM-Arbeit verbindet klare Zustände, gezielte Änderungen und verständliche Ereignisbehandlung.
