---
title: "Grundlagen: Semantik und Barrierefreiheit"
description: "Allgemeiner Überblick über semantisches HTML und barrierearme Webinhalte."
subject: web-development
section: "HTML"
topicPath:
  - html
  - semantik-und-barrierefreiheit
  - grundlagen-semantik-und-barrierefreiheit
learningGoals:
  - "Du erklärst semantisches HTML als Bedeutung statt nur Darstellung."
  - "Du beschreibst Barrierefreiheit als Nutzbarkeit für verschiedene Menschen und Geräte."
  - "Du ordnest Überschriften, Landmarken und Alternativtexte als Strukturhilfen ein."
practiceIdeas: []
commonMistakes:
  - "HTML-Elemente nur nach Aussehen zu wählen."
  - "Barrierefreiheit als nachträgliches Extra zu behandeln."
  - "ARIA zu verwenden, obwohl semantisches HTML reichen würde."
keyTakeaways:
  - "Semantik beschreibt die Bedeutung von Inhalten."
  - "Barrierefreiheit beginnt bei klarer Struktur."
  - "Gutes HTML hilft Menschen, Browsern, Suchmaschinen und Hilfstechnologien."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - web
  - html
  - semantik
  - barrierefreiheit
draft: false
---
## Begriff

**Semantisches HTML** nutzt Elemente nach ihrer Bedeutung. Eine Überschrift ist nicht nur großer Text, sondern ein Strukturpunkt. Ein Button ist nicht nur ein klickbarer Kasten, sondern ein Bedienelement. **Barrierefreiheit** beschreibt, dass Inhalte für möglichst viele Menschen und Nutzungssituationen zugänglich sind.

## Warum Semantik wichtig ist

Browser, Suchmaschinen und Hilfstechnologien können Inhalte besser verstehen, wenn HTML sauber ausgezeichnet ist. Eine Seite wird dadurch nicht automatisch perfekt, aber sie bekommt eine robuste Grundstruktur.

## Barrierefreiheit

Barrierefreiheit betrifft Tastaturbedienung, Kontraste, Alternativtexte, verständliche Beschriftungen, Fokuszustände und sinnvolle Reihenfolge. Sie hilft nicht nur Menschen mit dauerhaften Einschränkungen, sondern auch bei kleinen Bildschirmen, schlechter Verbindung oder situativen Problemen.

## Semantik vor ARIA

ARIA kann zusätzliche Informationen liefern, ersetzt aber kein falsch gewähltes HTML. Wenn ein echtes `button`-Element passt, sollte man nicht zuerst ein `div` mit Rollen nachbauen.

<div class="note-panel">
  <p><strong>Merke:</strong> Semantik ist die Bedeutungsschicht einer Webseite. Barrierefreiheit beginnt dort, wo Struktur und Bedienung klar sind.</p>
</div>
