---
title: Fieldset und Legend im Formular verstehen
description: Verstehe, wie zusammengehörige Formularfelder mit fieldset und legend klarer gegliedert und besser lesbar werden.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - fieldset-und-legend-im-formular-verstehen
learningGoals:
  - Du erklärst die Rolle von fieldset und legend.
  - Du erkennst zusammengehörige Felder als inhaltliche Gruppe.
  - Du strukturierst Formulare ruhiger über Abschnitte statt nur über Abstand.
practiceIdeas:
  - Suche in einem Formular Felder, die logisch zusammengehören.
  - Formuliere eine passende Gruppenüberschrift für Adressdaten oder Einstellungen.
  - Prüfe, ob eine bloße Zwischenüberschrift reicht oder ob eine echte Feldgruppe sinnvoller ist.
commonMistakes:
  - Formulare nur visuell mit Abständen zu gliedern.
  - zusammengehörige Felder nicht als Gruppe zu kennzeichnen.
  - legend als Deko statt als Gruppenbezeichnung zu behandeln.
keyTakeaways:
  - fieldset fasst zusammengehörige Formularfelder zu einer Gruppe zusammen.
  - legend benennt diese Gruppe.
  - Gute Gruppierung macht Formulare lesbarer und orientierbarer.
recognizeSignals:
  - Es geht um mehrteilige Formulare, Abschnitte oder logisch zusammenhängende Eingaben.
  - Du sollst nicht nur Felder benennen, sondern ihre Gruppierung erklären.
  - In Aufgaben geht es um Orientierung im Formular, nicht nur um das einzelne Input-Feld.
selfCheckPoints:
  - Kann ich erklären, wann fieldset sinnvoll ist?
  - Kann ich eine passende legend formulieren?
  - Kann ich begründen, warum Feldgruppen mehr sind als nur Abstand?
tags:
  - html
  - formular
  - fieldset
  - legend
level: einfach
draft: false
---

## Grundidee

Ein längeres Formular besteht oft aus mehreren Bereichen: persönliche Daten, Adresse, Einstellungen oder Zahlungsinformationen. Damit diese Bereiche nicht nur optisch, sondern auch **inhaltlich als Gruppe** erkennbar werden, gibt es <code>&lt;fieldset&gt;</code> und <code>&lt;legend&gt;</code>.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Registrierungsformular mit mehreren Themenblöcken</h3>
  <p>Name und E-Mail gehören logisch zusammen. Benachrichtigungseinstellungen bilden einen anderen Bereich. Wenn alles nur untereinander steht, wirkt das Formular schnell wie eine lange lose Liste. Feldgruppen bringen hier deutlich mehr Ruhe hinein.</p>
</div>

## Was die beiden Elemente tun

<div class="visual-grid">
  <div class="visual-item">
    <strong>fieldset</strong>
    <span>Fasst mehrere zusammengehörige Felder zu einer gemeinsamen Gruppe zusammen.</span>
  </div>
  <div class="visual-item">
    <strong>legend</strong>
    <span>Benennt diese Gruppe und macht ihren thematischen Rahmen sichtbar.</span>
  </div>
</div>

## Mini-Demo: dieselben Felder, unterschiedlich gegliedert

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum Gruppen mehr sind als bloßer Abstand</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem; align-items:start;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur untereinander</strong></p>
      <div style="display:grid; gap:0.55rem; padding:0.75rem; border-radius:12px; background:white;">
        <div>Name</div>
        <div>E-Mail</div>
        <div>Straße</div>
        <div>PLZ</div>
        <div>Newsletter</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Reihenfolge ist sichtbar, aber die Gruppenlogik bleibt schwach.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit Feldgruppen gedacht</strong></p>
      <div style="display:grid; gap:0.65rem;">
        <div style="padding:0.75rem; border:1px solid #cbd5e1; border-radius:12px; background:white;">
          <strong style="display:block; margin-bottom:0.45rem;">Kontaktdaten</strong>
          <div>Name</div>
          <div>E-Mail</div>
        </div>
        <div style="padding:0.75rem; border:1px solid #cbd5e1; border-radius:12px; background:white;">
          <strong style="display:block; margin-bottom:0.45rem;">Adresse</strong>
          <div>Straße</div>
          <div>PLZ</div>
        </div>
        <div style="padding:0.75rem; border:1px solid #cbd5e1; border-radius:12px; background:white;">
          <strong style="display:block; margin-bottom:0.45rem;">Einstellungen</strong>
          <div>Newsletter</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Zweite Mini-Demo: Zwischenüberschrift oder echte Gruppe?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum eine bloße Überschrift nicht immer reicht</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem; align-items:start;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur optische Trennung</strong></p>
      <div style="padding:0.75rem; border-radius:12px; background:white;">
        <h4 style="margin:0 0 0.55rem; font-size:1rem;">Adresse</h4>
        <div>Straße</div>
        <div>PLZ</div>
        <div>Ort</div>
      </div>
      <p style="margin:0.55rem 0 0;">Man sieht eine Zwischenüberschrift, aber die Felder sind nicht als eigene Gruppe ausgezeichnet.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Als Gruppe ausgezeichnet</strong></p>
      <div style="padding:0.75rem; border-radius:12px; border:1px solid #cbd5e1; background:white;">
        <div style="display:inline-block; margin-bottom:0.55rem; padding:0.25rem 0.5rem; border-radius:999px; background:#e2e8f0; font-weight:700;">Adresse</div>
        <div>Straße</div>
        <div>PLZ</div>
        <div>Ort</div>
      </div>
      <p style="margin:0.55rem 0 0;">Hier wird deutlicher: Diese Felder gehören inhaltlich zusammen.</p>
    </div>
  </div>
</div>

## Ein typisches HTML-Muster

```html
<fieldset>
  <legend>Kontaktdaten</legend>
  <label for="name">Name</label>
  <input id="name" />

  <label for="mail">E-Mail</label>
  <input id="mail" />
</fieldset>
```

Hier wird nicht nur sichtbar, welche Felder zusammengehören. Die Gruppe bekommt auch eine benannte Bedeutung.

## Wann fieldset besonders sinnvoll ist

- bei längeren Formularen,
- bei logisch zusammengehörigen Feldern,
- bei Auswahlgruppen,
- und überall dort, wo bloßer Abstand als Gliederung zu schwach wäre.

<div class="compare-card">
  <p class="card-kicker">Entscheidungshilfe</p>
  <h3>Wann bloßer Abstand oft zu wenig ist</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Nur Abstand</strong>
      <span>Man sieht eine Lücke, aber nicht unbedingt die inhaltliche Zusammengehörigkeit.</span>
    </div>
    <div class="compare-item">
      <strong>Fieldset mit Legend</strong>
      <span>Die Gruppe bekommt einen Namen und wirkt als eigener Formularabschnitt.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Welche Felder gehören inhaltlich zusammen?
2. Braucht diese Gruppe einen eigenen Namen?
3. Würde bloßer Abstand die Struktur ausreichend erklären?
4. Wenn nein: Ist <code>fieldset</code> mit <code>legend</code> die ruhigere Lösung?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>fieldset</code> ordnet nicht nur optisch. Es macht sichtbar, welche Felder gemeinsam zu einem Themenblock gehören.</p>
</div>
