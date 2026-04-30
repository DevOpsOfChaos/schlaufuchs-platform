---
title: "CSS-Selektoren"
description: "CSS-Selektoren legen fest, welche HTML-Elemente von einer CSS-Regel getroffen werden."
subject: "web-development"
section: "CSS"
topicPath: ["css", "selektoren"]
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
# CSS-Selektoren

CSS-Selektoren bestimmen, auf welche HTML-Elemente eine Gestaltungsregel angewendet wird. Sie bilden die Verbindung zwischen der Struktur eines Dokuments und seiner Darstellung.

## Einordnung

Jede CSS-Regel besteht aus Selektor und Deklarationsblock. Der Selektor entscheidet zuerst, ob eine Regel überhaupt auf ein Element passt. Erst danach sind Eigenschaften wie Farbe, Abstand oder Layout relevant.

## Zentrale Selektorarten

- **Typselektor:** `p`, `h1` oder `button` treffen alle Elemente dieses Typs.
- **Klassenselektor:** `.warnung` trifft Elemente mit dieser Klasse.
- **ID-Selektor:** `#hauptnavigation` trifft das Element mit dieser ID.
- **Attributselektor:** `input[type="email"]` trifft Elemente mit passendem Attribut.
- **Pseudoklasse:** `:hover`, `:focus-visible` oder `:first-child` treffen Zustände oder Positionen.
- **Kombinator:** `nav a`, `ul > li`, `h2 + p` oder `h2 ~ p` beschreiben Beziehungen im DOM.

## Syntaxbeispiel

```css
nav a {
  color: #1d4ed8;
}

nav > a {
  font-weight: 700;
}

button:focus-visible {
  outline: 3px solid currentColor;
}
```

`nav a` trifft Links irgendwo innerhalb der Navigation. `nav > a` trifft nur direkte Link-Kinder. `:focus-visible` beschreibt einen Fokuszustand, der besonders für Tastaturbedienung relevant ist.

## Typische Fehler

- Selektoren zu stark an zufällige Verschachtelung koppeln.
- IDs für normale Komponentenstile verwenden und dadurch Spezifität unnötig erhöhen.
- Zustände wie Fokus oder Hover vergessen.
- CSS-Klassen als Ersatz für semantisches HTML missverstehen.
- Beziehungsselektoren verwenden, ohne die tatsächliche DOM-Struktur zu prüfen.

## Abgrenzung

Selektoren beschreiben Zielauswahl für CSS. Sie ersetzen keine HTML-Semantik und lösen keine Kaskadenkonflikte allein. Ob eine Regel gewinnt, hängt zusätzlich von Spezifität, Reihenfolge, Herkunft und Cascade Layers ab.

## Verwandte Themen

- CSS-Kaskade und Spezifität
- Cascade Layers
- HTML-Struktur und Semantik
- Fokuszustände und Tastaturbedienung
