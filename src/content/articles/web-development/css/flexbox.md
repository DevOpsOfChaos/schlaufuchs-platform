---
title: "Flexbox"
description: "Flexbox ist ein eindimensionales CSS-Layoutmodell für Ausrichtung, Verteilung, Umbruch und flexible Größen direkter Kindelemente."
subject: "web-development"
section: "CSS"
topicPath: ["css", "flexbox"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

Flexbox ordnet direkte Kindelemente eines Containers entlang einer Hauptachse an. Es eignet sich für Navigationen, Button-Gruppen, Kartenreihen, Toolbars und viele Zentrierungs- oder Verteilungsaufgaben.

## Einordnung

Flexbox ist ein eindimensionales Layoutmodell. Eine Richtung steht im Mittelpunkt: Reihe oder Spalte. Für Raster, bei denen Zeilen und Spalten gemeinsam geplant werden, ist CSS Grid meistens klarer.

## Zentrale Begriffe

- **Flex-Container:** Element mit `display: flex`.
- **Flex-Items:** direkte Kinder des Flex-Containers.
- **Hauptachse:** Richtung von `flex-direction`.
- **Querachse:** Achse senkrecht zur Hauptachse.
- **`justify-content`:** Verteilung entlang der Hauptachse.
- **`align-items`:** Ausrichtung entlang der Querachse.
- **`gap`:** Abstand zwischen Items.
- **`flex-wrap`:** erlaubt Umbruch in mehrere Zeilen oder Spalten.
- **`flex-grow`, `flex-shrink`, `flex-basis`:** steuern Wachstum, Schrumpfen und Ausgangsgröße einzelner Items.

## Syntaxbeispiel

```css
.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.navigation > .aktion {
  margin-left: auto;
}
```

Der Container aktiviert Flexbox. Seine direkten Kinder werden verteilt, ausgerichtet und können bei zu wenig Platz umbrechen.

## Typische Fehler

- `justify-content` und `align-items` ohne Blick auf `flex-direction` verwenden.
- Flex-Eigenschaften auf ein Kind setzen, obwohl sie auf den Container gehören.
- Starre Breiten und flexibles Schrumpfen widersprüchlich kombinieren.
- Mit `order` die visuelle Reihenfolge ändern und dadurch Lese- oder Fokusreihenfolge verwirren.
- Flexbox für komplexe zweidimensionale Raster erzwingen.

## Abgrenzung zu CSS Grid

Flexbox arbeitet besonders gut für eine Reihe oder eine Spalte. CSS Grid ist sinnvoller, wenn Layoutbereiche gleichzeitig in Zeilen und Spalten definiert werden sollen.

## Verwandte Themen

- CSS Grid
- CSS-Box-Modell
- Responsive Design
- Lesereihenfolge und Fokusreihenfolge
