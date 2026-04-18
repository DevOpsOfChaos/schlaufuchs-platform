---
title: Listen und Navigation strukturieren
description: Verstehe, warum Menüs oft als Listen gedacht werden und wie eine ruhige HTML-Struktur Navigationen klarer und wartbarer macht.
subject: web-development
section: HTML
topicPath:
  - html
  - navigation-und-menues
  - listen-und-navigation-strukturieren
learningGoals:
  - Du erklärst, warum mehrere Navigationspunkte oft als Liste modelliert werden.
  - Du beschreibst den Zusammenhang von <code>nav</code>, <code>ul</code> und <code>li</code>.
  - Du strukturierst kleine Menüs ruhiger als geordnete Gruppe statt als lose Linkreihe.
practiceIdeas:
  - Prüfe bei einem Menü, ob die Punkte als zusammengehörige Gruppe erkennbar sind.
  - Vergleiche lose Links mit einer Navigation aus Liste und Listeneinträgen.
  - Begründe, warum HTML-Struktur auch dann wichtig bleibt, wenn CSS die Punkte nebeneinander anordnet.
commonMistakes:
  - Menüpunkte nur als optische Reihe zu sehen.
  - Listenelemente wegzulassen, obwohl mehrere Einträge zusammengehören.
  - zu glauben, dass eine horizontale Darstellung automatisch keine Liste mehr sei.
keyTakeaways:
  - Navigation besteht oft aus mehreren zusammengehörigen Zielen.
  - Eine Liste macht diese Gruppe in HTML ruhig und eindeutig sichtbar.
  - CSS kann die Darstellung ändern, die Strukturidee bleibt trotzdem sinnvoll.
recognizeSignals:
  - Es geht um Menüs, Linkgruppen, Navigationsleisten oder Seitenstrukturen.
  - Du sollst nicht nur Links bauen, sondern ihre Gruppierung begründen.
  - In Beispielen ist wichtig, ob mehrere Navigationspunkte als Einheit gedacht sind.
selfCheckPoints:
  - Kann ich erklären, warum eine Navigation oft eine Liste enthält?
  - Kann ich nav, ul und li in ihrer Rolle unterscheiden?
  - Kann ich beschreiben, warum horizontale Menüs trotzdem Listen bleiben können?
tags:
  - html
  - navigation
  - listen
  - struktur
level: einfach
draft: false
---

## Grundidee

Viele Menüs bestehen nicht nur aus einzelnen Links, sondern aus **einer zusammengehörigen Gruppe von Navigationspunkten**. Genau deshalb werden sie in HTML oft als Liste strukturiert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Hauptmenü mit vier Bereichen</h3>
  <p>Start, Kurse, Hilfe und Kontakt sind nicht vier zufällige Textstücke. Sie bilden zusammen eine Navigation. Eine Listenstruktur macht genau diese Gruppierung sichtbar und lässt das Menü dadurch ruhiger denken und pflegen.</p>
</div>

## Drei Bausteine arbeiten zusammen

<div class="visual-grid">
  <div class="visual-item">
    <strong>nav</strong>
    <span>Markiert den Bereich als Navigation.</span>
  </div>
  <div class="visual-item">
    <strong>ul</strong>
    <span>Bündelt die Navigationspunkte als zusammengehörige Liste.</span>
  </div>
  <div class="visual-item">
    <strong>li</strong>
    <span>Jeder einzelne Menüpunkt bekommt einen eigenen Listeneintrag.</span>
  </div>
</div>

## Mini-Demo: lose Links oder strukturierte Gruppe?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Gleiche Ziele, aber nicht gleich ruhig strukturiert</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur lose nebeneinander gedacht</strong></p>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#dbeafe;">Start</span>
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#dcfce7;">Kurse</span>
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#fde68a;">Hilfe</span>
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#e2e8f0;">Kontakt</span>
      </div>
      <p style="margin:0.55rem 0 0;">Optisch wirkt das wie ein Menü, die Gruppierungslogik im HTML bleibt aber unsichtbar.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Als Navigation mit Liste gedacht</strong></p>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#dbeafe; font-weight:700;">nav</span>
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#fef3c7; font-weight:700;">ul</span>
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#dcfce7;">li</span>
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#dcfce7;">li</span>
        <span style="padding:0.55rem 0.75rem; border-radius:999px; background:#dcfce7;">li</span>
      </div>
      <p style="margin:0.55rem 0 0;">Jetzt ist nicht nur das Aussehen klar, sondern auch die Struktur der Gruppe.</p>
    </div>
  </div>
</div>

```html
<nav aria-label="Hauptnavigation">
  <ul>
    <li><a href="/start">Start</a></li>
    <li><a href="/kurse">Kurse</a></li>
    <li><a href="/hilfe">Hilfe</a></li>
    <li><a href="/kontakt">Kontakt</a></li>
  </ul>
</nav>
```

## Warum horizontale Menüs trotzdem Listen bleiben

CSS kann die Liste später horizontal darstellen, Aufzählungszeichen entfernen und Abstände setzen. Trotzdem bleibt die Grundidee gleich: **Mehrere Navigationseinträge bilden eine Gruppe**.

<div class="compare-card">
  <p class="card-kicker">Ruhige Denkweise</p>
  <h3>Darstellung und Struktur nicht verwechseln</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>HTML</strong>
      <span>Beschreibt, dass mehrere Ziele als Navigation und Liste zusammengehören.</span>
    </div>
    <div class="compare-item">
      <strong>CSS</strong>
      <span>Steuert später, ob diese Liste vertikal, horizontal oder als Burger-Menü erscheint.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Gehören mehrere Links als Menü zusammen?
2. Ist klar, dass sie Navigation und nicht bloß ein Textblock sind?
3. Lässt sich diese Gruppe als Liste beschreiben?
4. Erst danach: Wie soll sie visuell gestaltet werden?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein horizontales Menü bleibt inhaltlich oft eine Liste. CSS ändert die Darstellung, aber nicht die Strukturidee.</p>
</div>
