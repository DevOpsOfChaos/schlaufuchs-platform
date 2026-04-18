---
title: Datalist und Vorschlagslisten verstehen
description: Verstehe, wie datalist Eingabefelder mit Vorschlägen ergänzt, ohne daraus automatisch eine feste Auswahlliste zu machen.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - datalist-und-vorschlagslisten-verstehen
learningGoals:
  - Du erklärst die Grundidee von datalist.
  - Du unterscheidest Vorschlag und feste Auswahl sauber.
  - Du liest datalist als Unterstützung beim Eingeben, nicht als Ersatz für jede Form von Auswahlfeld.
practiceIdeas:
  - Vergleiche ein Eingabefeld mit Vorschlägen und ein klassisches select-Feld.
  - Prüfe, ob Nutzer frei tippen dürfen oder nur aus vorgegebenen Werten wählen sollen.
  - Lies Hilfsvorschläge eher als Unterstützung denn als harte Begrenzung.
commonMistakes:
  - datalist mit select gleichzusetzen.
  - zu glauben, dass Vorschläge automatisch nur gültige Werte erzwingen.
  - ein Feld mit freien Eingaben unnötig hart zu sperren.
keyTakeaways:
  - datalist ergänzt ein Eingabefeld um Vorschläge.
  - Nutzer können oft trotzdem frei schreiben.
  - Für feste Auswahl bleibt select meist die klarere Lösung.
recognizeSignals:
  - Es geht um Formulare, Suchfelder, Orte, Begriffe oder häufige Eingaben.
  - Du sollst erklären, ob Vorschläge helfen oder ob eine feste Liste nötig ist.
  - In Beispielen zählt die Eingabelogik stärker als das Styling.
selfCheckPoints:
  - Kann ich datalist und select sauber unterscheiden?
  - Kann ich erklären, warum Vorschläge nicht automatisch harte Auswahl bedeuten?
  - Kann ich eine sinnvolle Einsatzsituation für datalist nennen?
tags:
  - html
  - formulare
  - datalist
  - eingaben
level: mittel
draft: false
---

## Grundidee

Manchmal soll ein Eingabefeld helfen, ohne den Nutzer vollständig auf eine starre Liste festzulegen. Genau dafür ist `datalist` nützlich: Es zeigt Vorschläge an, bleibt aber näher an einem normalen Eingabefeld als ein `select`.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Feld für Lieblingssprache oder Stadt</h3>
  <p>Häufige Werte sollen schnell vorgeschlagen werden, aber auch neue Eingaben sollen möglich bleiben. Ein starres Dropdown wäre dafür manchmal zu eng, ein komplett leeres Freitextfeld dagegen zu wenig unterstützend.</p>
</div>

## Mini-Demo: Vorschlag oder feste Auswahl?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Beide Felder helfen – aber nicht auf dieselbe Weise</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Eingabe mit Vorschlägen</strong></p>
      <div style="padding:0.75rem; background:white; border:1px solid #cbd5e1; border-radius:12px;">Sprache eingeben …</div>
      <div style="margin-top:0.45rem; padding:0.7rem; border-radius:12px; background:white; border:1px dashed #cbd5e1; display:grid; gap:0.35rem;">
        <span>Python</span>
        <span>JavaScript</span>
        <span>Rust</span>
      </div>
      <p style="margin:0.55rem 0 0;">Die Liste hilft, aber freie Eingabe bleibt denkbar.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Feste Auswahl</strong></p>
      <div style="padding:0.75rem; background:white; border:1px solid #cbd5e1; border-radius:12px; display:flex; justify-content:space-between;">
        <span>Python</span><span>▾</span>
      </div>
      <p style="margin:0.55rem 0 0;">Hier geht es stärker um das Wählen aus vorgegebenen Optionen.</p>
    </div>
  </div>
</div>

## Datalist ist keine feste Auswahllogik

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Unterstützen ist etwas anderes als erzwingen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>datalist</code></strong>
      <span>unterstützt beim Tippen durch Vorschläge.</span>
    </div>
    <div class="compare-item">
      <strong><code>select</code></strong>
      <span>führt stärker durch eine feste Auswahl vordefinierter Optionen.</span>
    </div>
  </div>
</div>

```html
<label for="sprache">Sprache</label>
<input id="sprache" list="sprachen" />
<datalist id="sprachen">
  <option value="Python"></option>
  <option value="JavaScript"></option>
  <option value="Rust"></option>
</datalist>
```

## Wann datalist sinnvoll ist

- häufige, aber nicht abschließende Vorschläge,
- Suchfelder,
- Orte, Begriffe oder Kategorien,
- unterstützte Freitexteingaben.

## Eine ruhige Prüfstrategie

1. Soll frei geschrieben werden dürfen?
2. Helfen Vorschläge, ohne alles festzulegen?
3. Oder ist eine feste Auswahl fachlich klarer?
4. Dann erst zwischen `datalist` und `select` entscheiden.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>datalist</code> bedeutet vor allem <strong>Vorschlag statt starre Auswahl</strong>.</p>
</div>
