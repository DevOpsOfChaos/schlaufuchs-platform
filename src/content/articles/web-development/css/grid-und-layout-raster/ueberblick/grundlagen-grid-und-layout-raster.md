---
title: "Grundlagen: CSS Grid und Layout-Raster"
description: "Allgemeiner Überblick über CSS Grid, Zeilen, Spalten, Rasterbereiche und den Unterschied zu Flexbox."
subject: web-development
section: "CSS"
topicPath:
  - css
  - grid-und-layout-raster
  - grundlagen-grid-und-layout-raster
learningGoals:
  - "Du erklärst CSS Grid als zweidimensionales Layoutmodell."
  - "Du beschreibst Zeilen, Spalten und Rasterbereiche."
  - "Du grenzt Grid von Flexbox über die Layoutaufgabe ab."
practiceIdeas: []
commonMistakes:
  - "Grid und Flexbox als austauschbare Technik zu behandeln."
  - "Nur Spalten zu definieren und Zeilenwirkung zu ignorieren."
  - "Rasterbereiche ohne inhaltliche Struktur zu verwenden."
keyTakeaways:
  - "CSS Grid ordnet Elemente in Zeilen und Spalten."
  - "Grid eignet sich besonders für zweidimensionale Layouts."
  - "Flexbox ist stärker für eine Achse, Grid stärker für Rasterflächen geeignet."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "webentwicklung"
  - "css"
  - "grid"
  - "layout"
  - "responsive"
draft: false
---

## Begriff

**CSS Grid** ist ein Layoutmodell für zweidimensionale Anordnungen im Web. Es arbeitet mit Zeilen und Spalten und kann Elemente in einem Raster platzieren. Dadurch eignet es sich besonders für Seitenlayouts, Kartenübersichten, Dashboard-Strukturen und komplexere Inhaltsbereiche.

Grid ergänzt Flexbox, ersetzt es aber nicht vollständig. Beide Modelle lösen unterschiedliche Layoutprobleme gut.

## Raster aus Zeilen und Spalten

Ein Grid-Container definiert ein Raster. Seine direkten Kinder werden zu Grid-Items. Über Eigenschaften wie grid-template-columns und grid-template-rows können Spalten und Zeilen festgelegt werden. Zwischenräume werden häufig mit gap beschrieben.

Das Raster ist nicht nur optisch. Es gibt dem Layout eine Struktur, auf der Elemente platziert und ausgerichtet werden können.

## Rasterbereiche

Mit Grid können Bereiche benannt werden. Dadurch lässt sich ein Layout semantischer lesen: Kopfbereich, Navigation, Hauptinhalt und Seitenleiste können als Bereiche gedacht werden. Das macht komplexe Layouts verständlicher.

Bei responsiven Layouts können diese Bereiche für kleinere Bildschirme neu angeordnet werden.

## Unterschied zu Flexbox

Flexbox ist besonders stark, wenn Elemente entlang einer Hauptachse verteilt werden sollen. Grid ist stärker, wenn Zeilen und Spalten gleichzeitig wichtig sind. Eine Navigation ist oft ein Flexbox-Fall, ein komplettes Seitenraster eher ein Grid-Fall.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Grid-Eigenschaften, responsive Umbrüche oder typische Layoutmuster. Diese Überblicksseite erklärt den allgemeinen Rahmen: CSS Grid ist ein Rastermodell für zweidimensionale Layoutentscheidungen.

<div class="note-panel">
  <p><strong>Merke:</strong> Wenn Zeilen und Spalten gleichzeitig geplant werden müssen, ist CSS Grid oft das passendere Werkzeug.</p>
</div>
