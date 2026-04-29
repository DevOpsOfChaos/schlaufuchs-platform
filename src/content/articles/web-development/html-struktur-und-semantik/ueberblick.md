---
title: "HTML-Struktur und Semantik"
description: "Allgemeiner Überblick über HTML als strukturierende und semantische Grundlage von Webseiten."
subject: "web-development"
section: "HTML"
topicPath: ["html-struktur-und-semantik", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML"]
draft: false
---
# HTML-Struktur und Semantik

![Schaubild zu HTML-Struktur und Semantik.](/schlaufuchs-platform/images/overviews/v148/html-struktur-und-semantik.svg)

*Das Schaubild ordnet typische semantische Bereiche einer Seite und ihre Rolle.*


HTML ist die strukturelle Grundlage des Webs. Eine HTML-Seite beschreibt, welche Inhalte vorhanden sind und welche Bedeutung sie im Dokument haben. Überschriften, Absätze, Listen, Links, Formulare, Navigation und Hauptbereiche bilden eine erkennbare Ordnung, die nicht nur für Menschen, sondern auch für Browser, Suchmaschinen und assistive Technologien wichtig ist.

Semantik bedeutet, dass ein Element nicht nur irgendeinen sichtbaren Bereich erzeugt, sondern eine inhaltliche Rolle ausdrückt. Ein `nav`-Element steht für Navigation, `main` für den Hauptinhalt, `article` für einen eigenständigen Inhalt und `button` für eine auslösbare Aktion.

## Zweck

Eine gute HTML-Struktur macht Inhalte verständlich, auch wenn CSS nicht geladen wird. Sie erleichtert Tastaturnavigation, Screenreader-Ausgabe, Suchmaschineninterpretation und spätere Wartung. Wer HTML nur als Sammlung von `div`-Blöcken verwendet, verliert diese Bedeutungsschicht.

## Dokumentstruktur

Eine Webseite sollte eine klare Überschriftenhierarchie besitzen. Die Hauptüberschrift beschreibt das zentrale Thema. Darunter gliedern weitere Überschriften die Seite in Abschnitte. Listen fassen gleichartige Elemente zusammen. Tabellen beschreiben tabellarische Daten, nicht beliebige Layouts.

## Semantische Elemente

Semantische Elemente ersetzen nicht jedes `div`, aber sie geben wichtigen Bereichen Namen. `header`, `footer`, `main`, `section`, `article`, `aside` und `nav` helfen dabei, die Rolle von Bereichen sichtbar zu machen. Formularelemente, Labels und Buttons sind besonders wichtig, weil sie direkt mit Interaktion und Zugänglichkeit verbunden sind.

## Abgrenzung zu CSS

HTML legt die Bedeutung fest. CSS legt die Darstellung fest. Eine Überschrift sollte nicht deshalb `h2` sein, weil sie groß aussieht, sondern weil sie in der Struktur eine Überschrift zweiter Ebene ist. Das Aussehen kann CSS unabhängig davon gestalten.

## Häufige Missverständnisse

Ein häufiger Fehler ist, klickbare Elemente als `div` mit JavaScript zu bauen, obwohl ein `button` oder `a` semantisch richtig wäre. Ein anderer Fehler ist das Überspringen von Überschriftenebenen, weil eine bestimmte Größe gewünscht ist.

## Kurz zusammengefasst

HTML ist mehr als Markup für sichtbare Bereiche. Gute HTML-Struktur beschreibt Inhalt, Bedeutung und Reihenfolge. Sie ist die Basis für robuste, zugängliche und wartbare Webseiten.
