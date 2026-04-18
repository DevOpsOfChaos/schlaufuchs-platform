---
title: Button-Typen button, submit und reset unterscheiden
description: Verstehe, warum Buttons in Formularen nicht alle dieselbe Wirkung haben und wie ihr Typ das Verhalten bestimmt.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - button-typen-button-submit-und-reset-unterscheiden
learningGoals:
  - Du unterscheidest die Rollen von button, submit und reset.
  - Du erklärst, welche sichtbare oder funktionale Wirkung diese Typen im Formular haben.
  - Du begründest Button-Typen eher über Absicht als über Aussehen.
practiceIdeas:
  - Vergleiche Buttons für Absenden, Leeren und Zusatzaktionen.
  - Prüfe bei einem Formular, welcher Button wirklich Daten senden soll.
  - Lies Buttons eher als Handlungstypen als als bloße Designflächen.
commonMistakes:
  - jeden Button im Formular wie einen Submit-Button zu behandeln.
  - Reset zu benutzen, obwohl die Aktion Nutzende leicht aus dem Fluss bringt.
  - Button-Typ und sichtbare Beschriftung nicht zusammenzudenken.
keyTakeaways:
  - submit sendet ein Formular ab.
  - reset setzt Formularwerte zurück.
  - button ist für andere Aktionen sinnvoll, wenn gerade nicht abgeschickt werden soll.
recognizeSignals:
  - Es geht um Formulare mit mehreren Buttons.
  - Du sollst erklären, warum eine Aktion absendet, leert oder nur etwas anzeigt.
  - In Beispielen zählt die Handlung eines Buttons stärker als seine Farbe.
selfCheckPoints:
  - Kann ich button, submit und reset fachlich trennen?
  - Kann ich erklären, warum nicht jeder Button absenden sollte?
  - Kann ich einen neutralen Aktionsbutton von einem Formularabschluss unterscheiden?
tags:
  - html
  - button
  - submit
  - reset
  - formular
level: einfach
draft: false
---

## Grundidee

In Formularen sehen viele Buttons ähnlich aus. Ihre **Rolle** ist aber nicht dieselbe. Manche sollen Daten absenden, manche etwas zurücksetzen und manche nur eine kleine Zusatzaktion auslösen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Formular mit drei Handlungsarten</h3>
  <p>Ein Button „Absenden“ soll Daten schicken. Ein Button „Zurücksetzen“ leert das Formular. Ein Button „Passwort anzeigen“ verändert nur die Ansicht. Alle drei können wie normale Buttons aussehen, erfüllen aber klar verschiedene Aufgaben.</p>
</div>

## Die drei Typen im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>type="submit"</code></strong>
    <span>Sendet das Formular ab.</span>
  </div>
  <div class="visual-item">
    <strong><code>type="reset"</code></strong>
    <span>Setzt Formularwerte auf ihren Ausgangszustand zurück.</span>
  </div>
  <div class="visual-item">
    <strong><code>type="button"</code></strong>
    <span>Für andere Aktionen, ohne das Formular direkt abzusenden oder zu leeren.</span>
  </div>
</div>

## Mini-Demo: gleiche Optik, andere Handlung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Wichtig ist nicht die Farbe, sondern die Wirkung im Formular</h3>
  <div style="display:grid; gap:0.85rem; background:#f8fafc; border:1px dashed #94a3b8; border-radius:16px; padding:0.95rem;">
    <div style="display:grid; gap:0.6rem; background:white; border:1px solid #e2e8f0; border-radius:12px; padding:0.9rem;">
      <div style="padding:0.7rem; border:1px solid #cbd5e1; border-radius:10px; color:#94a3b8;">E-Mail-Adresse</div>
      <div style="padding:0.7rem; border:1px solid #cbd5e1; border-radius:10px; color:#94a3b8;">Passwort</div>
      <div style="display:flex; gap:0.55rem; flex-wrap:wrap;">
        <span style="padding:0.45rem 0.75rem; border-radius:999px; background:#dbeafe;">Absenden</span>
        <span style="padding:0.45rem 0.75rem; border-radius:999px; background:#fee2e2;">Zurücksetzen</span>
        <span style="padding:0.45rem 0.75rem; border-radius:999px; background:#e2e8f0;">Passwort anzeigen</span>
      </div>
    </div>
    <p style="margin:0;">Drei optisch ähnliche Flächen, aber drei verschiedene Rollen im Formularablauf.</p>
  </div>
</div>

## Warum `submit` besonders wichtig ist

Ein Submit-Button markiert: **Jetzt soll der aktuelle Formularkontext abgeschlossen oder gesendet werden.**

Das ist etwas anderes als:

- Inhalte kurz prüfen,
- Passwörter sichtbar machen,
- zusätzliche Hilfe anzeigen,
- oder Felder bewusst leeren.

## `reset` ist fachlich klar, aber nicht immer freundlich

Ein Reset-Button hat eine klare Rolle: Er setzt das Formular auf den Ausgangszustand zurück. Das kann sinnvoll sein, ist aber oft heikel, weil Nutzende dadurch viele Eingaben auf einmal verlieren.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Reset nur mit klarem Zweck</h3>
    <p>Zum Beispiel in einer Filtermaske, wenn „alles zurücksetzen“ wirklich eine häufige Aktion ist.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Reset als Standardaktion</h3>
    <p>Dann wird aus einer kleinen Fehlbedienung schnell ein unnötiger Verlust von Eingaben.</p>
  </section>
</div>

## `button` für Zusatzaktionen

`type="button"` ist die ruhige Wahl, wenn eine Aktion **nicht** sofort das Formular abschicken oder leeren soll.

Typische Beispiele:

- Passwort sichtbar machen,
- zusätzliche Hinweise einblenden,
- einen Schritt lokal prüfen,
- eine kleine UI-Aktion auslösen.

## Eine ruhige Prüfstrategie

1. Soll die Aktion **absenden**?
2. Soll sie **wirklich zurücksetzen**?
3. Oder ist es nur eine **Zusatzhandlung innerhalb des Formulars**?
4. Passt der Typ zur sichtbaren Beschriftung?

<div class="compare-card">
  <p class="card-kicker">Wichtige Lesart</p>
  <h3>Button-Typen sind Absichten, nicht nur Optik</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Gut</strong>
      <span>Der Typ beschreibt genau die Handlung, die Nutzende erwarten dürfen.</span>
    </div>
    <div class="compare-item">
      <strong>Schwach</strong>
      <span>Die Beschriftung sagt etwas anderes als die tatsächliche Formularwirkung.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> In Formularen sollte jeder Button über seine Absicht gelesen werden: abschicken, zurücksetzen oder eine andere lokale Aktion auslösen.</p>
</div>
