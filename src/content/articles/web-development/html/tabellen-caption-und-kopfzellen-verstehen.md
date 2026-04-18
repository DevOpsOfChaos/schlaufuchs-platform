---
title: Tabellen mit Caption und Kopfzellen verstehen
description: Verstehe, warum Tabellen mehr brauchen als nur viele Zellen und wie Caption sowie Kopfzellen Daten leichter lesbar machen.
subject: web-development
section: HTML
topicPath:
  - html
  - tabellen-barrierearm
  - tabellen-caption-und-kopfzellen-verstehen
learningGoals:
  - Du erklärst die Rolle von <code>caption</code> und Kopfzellen in Tabellen.
  - Du unterscheidest Datenzellen und beschreibende Zellen.
  - Du beschreibst Tabellen als Struktur für Daten und nicht nur als Raster für Boxen.
practiceIdeas:
  - Prüfe bei einer Datentabelle, welche Zeile oder Spalte Überschriften enthält.
  - Ergänze einer Tabelle eine kurze inhaltliche Bezeichnung.
  - Vergleiche eine Tabelle mit und ohne klare Kopfstruktur.
commonMistakes:
  - Tabellen nur als optisches Gitter zu sehen.
  - Spaltenüberschriften als normale Datenzellen zu schreiben.
  - Eine Tabelle ohne klare inhaltliche Einordnung zu lassen.
keyTakeaways:
  - Eine Caption sagt, worum es in der Tabelle geht.
  - Kopfzellen strukturieren Zeilen und Spalten inhaltlich.
  - Gute Tabellen helfen beim Lesen, Vergleichen und Einordnen von Daten.
recognizeSignals:
  - Es geht um Datentabellen, Spaltenüberschriften oder die Frage, was eine Tabelle lesbar macht.
  - Du sollst Tabellenstruktur und Dateninhalt unterscheiden.
  - In Beispielen wird nach verständlicher Orientierung in einer Tabelle gefragt.
selfCheckPoints:
  - Kann ich die Aufgabe einer Caption erklären?
  - Kann ich Kopfzellen von normalen Datenzellen unterscheiden?
  - Kann ich beschreiben, warum Tabellen Orientierung brauchen?
tags:
  - html
  - tabellen
  - caption
  - th
level: einfach
draft: false
---

## Grundidee

Eine gute Tabelle besteht nicht nur aus vielen Kästchen. Sie braucht auch Hinweise darauf, **worum es in der Tabelle geht** und **wie sich die Daten lesen lassen**. Genau dafür helfen eine Caption und Kopfzellen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Öffnungszeiten mehrerer Standorte</h3>
  <p>Wenn oben nur Zahlen und Wochentage stehen, aber nicht klar ist, welche Daten zu welchem Standort gehören, wird die Tabelle schnell unruhig. Eine Caption und klare Kopfzellen schaffen Orientierung.</p>
</div>

## Was Caption und Kopfzellen leisten

<div class="visual-grid">
  <div class="visual-item">
    <strong>Caption</strong>
    <span>Sie beschreibt kurz, was die Tabelle insgesamt zeigt.</span>
  </div>
  <div class="visual-item">
    <strong>Kopfzellen</strong>
    <span>Sie benennen Spalten oder Zeilen und geben den Daten Bedeutung.</span>
  </div>
  <div class="visual-item">
    <strong>Datenzellen</strong>
    <span>Sie enthalten die eigentlichen Werte der Tabelle.</span>
  </div>
</div>

## Mini-Demo: gleiche Daten, andere Orientierung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Wann eine Tabelle lesbarer wird</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne klare Orientierung</strong></p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:#cbd5e1; border-radius:12px; overflow:hidden;">
        <div style="padding:0.55rem; background:white;">Mo</div>
        <div style="padding:0.55rem; background:white;">08–17</div>
        <div style="padding:0.55rem; background:white;">08–18</div>
        <div style="padding:0.55rem; background:white;">Di</div>
        <div style="padding:0.55rem; background:white;">08–17</div>
        <div style="padding:0.55rem; background:white;">08–18</div>
      </div>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit Caption und Kopfzellen gedacht</strong></p>
      <div style="padding:0.5rem 0.6rem; font-weight:700;">Öffnungszeiten der Standorte</div>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:#cbd5e1; border-radius:12px; overflow:hidden;">
        <div style="padding:0.55rem; background:#dbeafe; font-weight:700;">Tag</div>
        <div style="padding:0.55rem; background:#dbeafe; font-weight:700;">Mitte</div>
        <div style="padding:0.55rem; background:#dbeafe; font-weight:700;">West</div>
        <div style="padding:0.55rem; background:white;">Mo</div>
        <div style="padding:0.55rem; background:white;">08–17</div>
        <div style="padding:0.55rem; background:white;">08–18</div>
      </div>
    </div>
  </div>
</div>

## Ein kleines HTML-Beispiel

```html
<table>
  <caption>Öffnungszeiten der Standorte</caption>
  <tr>
    <th>Tag</th>
    <th>Mitte</th>
    <th>West</th>
  </tr>
  <tr>
    <td>Montag</td>
    <td>08–17</td>
    <td>08–18</td>
  </tr>
</table>
```

## Eine ruhige Prüfstrategie

1. Ist klar, worum es in der Tabelle insgesamt geht?
2. Welche Zeilen oder Spalten benennen die Daten?
3. Sind diese benennenden Zellen als Kopfzellen gedacht?
4. Können die eigentlichen Werte dadurch schneller eingeordnet werden?

<div class="note-panel">
  <p><strong>Merke:</strong> Tabellen werden nicht nur durch Zellen lesbar, sondern durch klare Orientierung über Caption und Kopfstruktur.</p>
</div>
