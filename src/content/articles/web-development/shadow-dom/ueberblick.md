---
title: "Shadow DOM"
description: "Überblick über Shadow DOM als gekapselten DOM-Bereich für Web Components."
subject: "web-development"
section: "Komponenten"
topicPath: ["shadow-dom", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Komponenten"]
draft: false
---
# Shadow DOM

Shadow DOM ist ein gekapselter DOM-Baum innerhalb eines Elements. Er trennt interne Struktur und Styles teilweise vom restlichen Dokument.

## Einordnung

Web Components nutzen Shadow DOM, um Komponenten wiederverwendbar und weniger anfällig für globale CSS-Regeln zu machen. Die Kapselung betrifft Markup, Styles und Ereignisgrenzen.

## Zentrale Aspekte

- Styles im Shadow DOM wirken lokal.
- Slots erlauben Inhalte von außen.
- Events können durch die Grenze retargeted werden.
- Barrierefreiheit und Fokus müssen bewusst gestaltet werden.

## Beispiele und Zusammenhang

Ein eigener Datepicker kann interne Buttons und Styles im Shadow DOM kapseln, während außen nur ein einzelnes Custom Element sichtbar ist.

## Abgrenzung

Shadow DOM macht Komponenten nicht automatisch barrierefrei oder einfach. Schnittstellen, Zustände und Styling-Hooks müssen geplant werden.

## Häufige Missverständnisse

Kapselung als vollständige Isolation zu verstehen und Integration, Theming oder Accessibility zu vernachlässigen.

## Kurz zusammengefasst

- Shadow DOM kapselt interne Komponentenstruktur.
- Slots verbinden innere und äußere Inhalte.
- Kapselung braucht klare öffentliche Schnittstellen.
