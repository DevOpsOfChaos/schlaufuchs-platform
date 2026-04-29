---
title: "Lösung – Icon-Buttons und Beschriftungen ruhig begründen"
description: "Musterlösung zur Aufgabe über sichtbare Beschriftung und aria-label."
subject: "web-development"
section: "HTML"
topicPath: ["html", "aria-label-und-sichtbarer-text-unterscheiden", "icon-buttons-und-beschriftungen-ruhig-begruenden"]
taskId: "WEB-HTML-A11Y-305"
relatedExercise: "src/content/exercises/web-development/html/aria-label-und-sichtbarer-text-unterscheiden/icon-buttons-und-beschriftungen-ruhig-begruenden.md"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Am ruhigsten verständlich ist der Button mit sichtbarem Text `🗑 Löschen`, weil die Handlung direkt auf der Oberfläche lesbar wird. Direkt dahinter kann die Variante `aria-label="Löschen"` plus sichtbarer Text eingeordnet werden, weil die Oberfläche ebenfalls klar ist, der eigentliche Qualitätsgewinn aber nicht mehr in der Sichtbarkeit liegt. Danach folgt der Button mit `aria-label="Löschen"` plus Symbol, weil die technische Benennung verbessert wird, die sichtbare Oberfläche aber weiter knapp bleibt. Am stärksten deutungsbedürftig ist der reine Symbol-Button, weil dort weder sichtbar noch technisch viel Orientierung erkennbar ist.

### Aufgabe 2

- **`<button>🗑</button>`** → sichtbar ist nur ein Symbol; eine klare Handlung muss eher gedeutet werden.
- **`<button aria-label="Löschen">🗑</button>`** → sichtbar bleibt nur das Symbol, technisch wird die Handlung aber sinnvoll benannt.
- **`<button>🗑 Löschen</button>`** → sichtbar ist die Handlung direkt lesbar; eine zusätzliche technische Benennung ist hier nicht mehr die Hauptfrage.
- **`<button aria-label="Löschen">🗑 Löschen</button>`** → sichtbar bleibt die Handlung ebenfalls direkt lesbar; technisch läuft dieselbe Benennung mit, ohne die sichtbare Klarheit noch einmal deutlich zu steigern.

### Aufgabe 3

Bei einer Lösch-Handlung ist eine Fehlbedienung teurer als bei einer harmlosen Routinefunktion. Deshalb sollte möglichst wenig geraten werden müssen. Sichtbarer Text reduziert genau diese Unsicherheit stärker als ein bloß unsichtbar ergänzter Name.

### Aufgabe 4

Die Variante ist unnötig unruhig, weil sichtbar `Entfernen` steht, technisch aber `Löschen`. Beide Namen meinen Ähnliches, sind aber nicht identisch. Genau dadurch entstehen zwei konkurrierende Bezeichnungen für dieselbe Handlung.

### Aufgabe 5

Die Aussage ist zu grob, weil ein zusätzliches `aria-label` nicht automatisch die sichtbare Verständlichkeit erhöht. Wenn ein Button schon sichtbar klar benannt ist, liegt der eigentliche Qualitätsgewinn oft nicht mehr in noch einer zusätzlichen Namensspur. Entscheidend ist, ob wirklich etwas sinnvoll ergänzt wird oder nur zusätzlicher Pflege- und Konsistenzaufwand entsteht.

### Aufgabe 6

Der Such-Button kann in einem klaren Suchkontext eher noch vertretbar sein, weil das Symbol sehr verbreitet ist und die Aktion meist harmloser wirkt. Beim Lösch-Button ist die Fehlbedienung kritischer. Deshalb sollte die sichtbare Klarheit dort noch ernster genommen werden.

### Aufgabe 7

Eine ruhige Variante wäre zum Beispiel:

```html
<button>🗑 Löschen</button>
```

Wenn zusätzlich eine technische Benennung mitlaufen soll, sollte sie dieselbe Handlung tragen:

```html
<button aria-label="Löschen">🗑 Löschen</button>
```

Entscheidend ist, dass sichtbarer Name und technische Benennung nicht gegeneinander laufen und dass sichtbare Klarheit zuerst gesichert ist.


### Aufgabe 8

Die Variante kann sichtbar ruhig sein, weil die Handlung direkt lesbar bleibt und technische Benennung und sichtbarer Name dieselbe Aussage tragen. Der zusätzliche Qualitätsgewinn ist aber nicht automatisch groß, weil die sichtbare Klarheit schon durch `🗑 Löschen` hergestellt wird. Entscheidend ist also, ob das zusätzliche `aria-label` wirklich etwas sinnvoll ergänzt oder nur eine zweite, mitzupflegende Namensspur erzeugt.


### Aufgabe 9

Eine ruhige Umbau-Variante wäre zum Beispiel:

```html
<button aria-label="Suche">🔍</button>
<button aria-label="Teilen">🔗</button>
<button>🗑 Löschen</button>
```

So bleibt die Toolbar insgesamt knapp, aber die riskantere Handlung wird sichtbar klarer. Genau darum geht es hier: Nicht alles zwanghaft gleich behandeln, sondern die sichtbare Ruhe dort erhöhen, wo Fehlbedienung teurer wäre.

