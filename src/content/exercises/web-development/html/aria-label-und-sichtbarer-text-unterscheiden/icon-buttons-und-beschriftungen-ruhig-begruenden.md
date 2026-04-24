---
title: Icon-Buttons und Beschriftungen ruhig begründen
description: Begründe an kleinen UI-Beispielen, wann sichtbarer Text hilfreicher ist als ein reines Symbol und wie aria-label dabei ergänzend wirken kann.
subject: web-development
section: HTML
topicPath:
  - html
  - linktexte-und-links
  - aria-label-und-sichtbarer-text-unterscheiden
  - icon-buttons-und-beschriftungen-ruhig-begruenden
taskId: WEB-HTML-A11Y-305
level: mittel
draft: false
tags:
  - html
  - aria-label
  - buttons
hintPoints:
  - Frage zuerst, ob die Handlung schon sichtbar verständlich ist.
  - Trenne Oberfläche und technische Benennung bewusst.
  - Begründe aus Sicht der Orientierung und nicht nur aus Platzgründen.
selfCheckPoints:
  - Ist klar, warum sichtbarer Text oft die ruhigere Lösung ist?
  - Trennst du sichtbaren Text und aria-label sauber?
transferIdeas:
  - Übertrage die Aufgabe auf Such-, Menü- oder Teilen-Buttons.
reflectionPrompt: Warum ist ein technisch benanntes Element noch nicht automatisch eine gut verständliche Oberfläche?
---

Gegeben sind diese vier Varianten:

```html
<button>🗑</button>
<button aria-label="Löschen">🗑</button>
<button>🗑 Löschen</button>
<button aria-label="Löschen">🗑 Löschen</button>
```

## Aufgabe 1: Vier Varianten ordnen

Ordne die vier Varianten von **sichtbar am ruhigsten verständlich** nach **sichtbar am stärksten deutungsbedürftig**.

Begründe deine Reihenfolge in 4 bis 6 Sätzen.

## Aufgabe 2: Zwei Ebenen trennen

Beschreibe für jede Variante kurz:

- was auf der Oberfläche direkt lesbar ist,
- was höchstens technisch ergänzt wird.

## Aufgabe 3: Riskante Aktion bewerten

Warum ist bei einer Lösch-Handlung sichtbare Klarheit oft wichtiger als bei einer harmlosen Routinefunktion?

## Aufgabe 4: Widerspruch prüfen

Bewerte diesen Code:

```html
<button aria-label="Löschen">Entfernen</button>
```

Erkläre, warum diese Variante unnötig unruhig wirken kann.

## Aufgabe 5: Zusätzliche Benennung einordnen

Bewerte diese Aussage:

> „Wenn ein sichtbarer Text schon klar ist, macht ein zusätzliches `aria-label` den Button automatisch besser.“

Erkläre in 2 bis 4 Sätzen, warum diese Aussage zu grob ist.

## Aufgabe 6: Zwei Aktionen vergleichen

Vergleiche diese beiden Fälle kurz:

```html
<button aria-label="Suche">🔍</button>
<button aria-label="Löschen">🗑</button>
```

Warum ist der zweite Fall oft kritischer zu lesen als der erste?

## Aufgabe 7: Ruhig umbauen

Formuliere eine ruhigere Variante für denselben Lösch-Button, bei der sichtbarer Name und technische Benennung nicht gegeneinander laufen.

## Aufgabe 8: Toolbar-Fall einordnen

In einer kleinen Toolbar stehen diese drei Buttons nebeneinander:

```html
<button aria-label="Suche">🔍</button>
<button aria-label="Teilen">🔗</button>
<button aria-label="Löschen">🗑</button>
```

Erkläre kurz, warum gerade der dritte Button sichtbare Beschriftung eher gebrauchen kann als die beiden anderen.
