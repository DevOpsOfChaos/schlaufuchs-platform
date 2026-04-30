---
title: "Accessible Name"
description: "Der Accessible Name ist der programmatisch ermittelbare Name, mit dem Bedienelemente im Accessibility Tree erscheinen."
subject: "web-development"
section: "Accessibility und UX"
topicPath: ["accessibility-und-ux", "accessible-name"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Accessibility und UX"]
draft: false
---
# Accessible Name

Der Accessible Name ist der Name, unter dem ein Element im Accessibility Tree erscheint. Screenreader, Sprachsteuerung und Accessibility-Tests verwenden diesen Namen, um Buttons, Links, Formularfelder und andere Bedienelemente identifizierbar zu machen.

## Einordnung

Der Accessible Name verbindet sichtbare Oberfläche, HTML-Struktur und assistive Technologien. Ein Element kann visuell verständlich wirken und trotzdem technisch unklar sein, wenn kein stabiler Name berechnet werden kann oder wenn sichtbarer Text und zugänglicher Name voneinander abweichen.

## Zentrale Begriffe

- **Accessibility Tree:** technische Repräsentation der Bedien- und Inhaltsstruktur für assistive Technologien.
- **sichtbarer Text:** Text, den Nutzende auf der Oberfläche sehen.
- **`label`:** sichtbare Beschriftung für Formularfelder.
- **`aria-label`:** expliziter Name ohne sichtbaren Text.
- **`aria-labelledby`:** Verweis auf vorhandene Textelemente, die den Namen liefern.

## Mechanismus

Browser berechnen den Accessible Name aus mehreren möglichen Quellen. Sichtbarer Text, ein zugeordnetes `label`, Alternativtext oder ARIA-Attribute können beteiligt sein. ARIA kann vorhandene Namen überschreiben; deshalb muss geprüft werden, ob der berechnete Name noch zur sichtbaren Funktion passt.

```html
<button type="button" aria-label="Suche öffnen">
  <svg aria-hidden="true">...</svg>
</button>

<label for="email">E-Mail-Adresse</label>
<input id="email" name="email" type="email" />
```

Der Icon-Button braucht einen expliziten Namen, weil das Symbol selbst keinen verlässlichen Text liefert. Das Eingabefeld erhält seinen Namen über das sichtbare `label`.

## Typische Fehler

- Icon-Buttons ohne Textalternative ausliefern.
- Platzhaltertext als dauerhafte Beschriftung behandeln.
- Mehrere Links nur mit dem Text "Mehr" oder "Hier klicken" benennen.
- `aria-label` verwenden, obwohl sichtbarer Text bereits vorhanden und eindeutiger wäre.
- Sichtbaren Text und `aria-label` widersprüchlich pflegen.

## Abgrenzung

Der Accessible Name ersetzt keine Bedienbarkeit. Fokusreihenfolge, Tastaturverhalten, Rollen, Zustände und Fehlermeldungen bleiben eigene Anforderungen. Ein korrekt benanntes Element kann trotzdem unzugänglich sein, wenn es nicht fokussierbar ist oder seinen Zustand nicht vermittelt.

## Verwandte Themen

- Accessibility Tree
- ARIA und assistive Technologien
- Formularlabels und Fehlermeldungen
- Tastaturnavigation und Fokus
