---
title: Input-Typen sinnvoll wählen
description: Verstehe, warum Eingabefelder nicht alle gleich sind und wie passende input-Typen Formulare klarer und bedienbarer machen.
subject: web-development
section: HTML
topicPath:
  - html
  - formulare-und-eingaben
  - input-typen-sinnvoll-waehlen
learningGoals:
  - Du unterscheidest wichtige input-Typen nach ihrer Aufgabe.
  - Du erklärst, warum der passende Typ mehr ist als nur eine technische Formalität.
  - Du wählst Eingabefelder eher nach Datenart und Nutzungssituation als nach Gewohnheit.
practiceIdeas:
  - Prüfe bei kleinen Formularen, welcher Typ zu E-Mail, Zahl, Passwort oder Suche passt.
  - Vergleiche zwei Formularversionen mit allgemeinen und mit passenderen input-Typen.
  - Begründe bei einem Feld, welche Art von Eingabe erwartet wird.
commonMistakes:
  - überall denselben Standardtyp zu benutzen.
  - Feldinhalt und Feldtyp nicht zusammenzudenken.
  - Typen nur nach Optik statt nach Datenart und Bedienung zu wählen.
keyTakeaways:
  - Der input-Typ beschreibt, welche Art von Eingabe erwartet wird.
  - Passende Typen helfen bei Orientierung, Bedienung und technischer Plausibilität.
  - Gute Formulare zeigen schon im Feldaufbau, was gemeint ist.
recognizeSignals:
  - Es geht um Formulare mit E-Mail, Passwort, Zahl, Suche oder Datum.
  - Du sollst begründen, warum ein Feld nicht einfach irgendein Textfeld sein sollte.
  - In Beispielen ist wichtig, welche Datenart erwartet wird und wie Nutzer damit interagieren.
selfCheckPoints:
  - Kann ich wichtige input-Typen nach Aufgabe unterscheiden?
  - Kann ich begründen, warum der Typ zur erwarteten Eingabe passen sollte?
  - Kann ich erklären, was an einem Feld schon vor der Eingabe Orientierung gibt?
tags:
  - html
  - formular
  - input
  - typ
level: einfach
draft: false
---

## Grundidee

Nicht jedes Eingabefeld ist einfach nur ein Textkasten. Schon im HTML lässt sich beschreiben, **welche Art von Eingabe erwartet wird**. Genau das macht die Wahl des passenden input-Typs sinnvoll.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Registrierungsformular mit verschiedenen Datenarten</h3>
  <p>Eine E-Mail-Adresse, ein Passwort, eine Alterseingabe und ein Suchfeld sehen alle nach Eingabe aus. Trotzdem ist ihre Aufgabe verschieden. Gute Formulare zeigen diese Unterschiede schon im Feldtyp und nicht erst in einer Fehlermeldung.</p>
</div>

## Typen nach Aufgabe lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>type="email"</code></strong>
    <span>Passt, wenn eine E-Mail-Adresse erwartet wird.</span>
  </div>
  <div class="visual-item">
    <strong><code>type="password"</code></strong>
    <span>Passt, wenn die Eingabe geschützt dargestellt werden soll.</span>
  </div>
  <div class="visual-item">
    <strong><code>type="number"</code></strong>
    <span>Passt, wenn eine numerische Eingabe im Mittelpunkt steht.</span>
  </div>
  <div class="visual-item">
    <strong><code>type="search"</code></strong>
    <span>Passt, wenn das Feld zum Suchen und Filtern dient.</span>
  </div>
</div>

## Mini-Demo: gleiche Feldform, unterschiedliche Erwartung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Das Feld sieht ähnlich aus, die Aufgabe ist es nicht</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(14rem,1fr)); gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <div style="font-weight:700; margin-bottom:0.35rem;">E-Mail</div>
      <div style="padding:0.7rem; border:1px solid #cbd5e1; border-radius:12px; background:white; color:#94a3b8;">name@example.de</div>
      <p style="margin:0.5rem 0 0;">Hier ist keine beliebige Zeichenfolge gemeint, sondern eine Adresse.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <div style="font-weight:700; margin-bottom:0.35rem;">Passwort</div>
      <div style="padding:0.7rem; border:1px solid #cbd5e1; border-radius:12px; background:white;">••••••••</div>
      <p style="margin:0.5rem 0 0;">Hier ist die Sicht auf die Eingabe schon Teil der Aufgabe.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <div style="font-weight:700; margin-bottom:0.35rem;">Suche</div>
      <div style="padding:0.7rem; border:1px solid #cbd5e1; border-radius:12px; background:white; color:#94a3b8;">Thema suchen …</div>
      <p style="margin:0.5rem 0 0;">Das Feld dient nicht zum Speichern einer Profilangabe, sondern zum Filtern oder Finden.</p>
    </div>
  </div>
</div>

## Zweite Mini-Demo: derselbe Platz, andere Datenart

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Typen geben Orientierung schon vor der Fehlermeldung</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.4rem;"><strong>Unpräzises Standardfeld</strong></p>
      <div style="padding:0.7rem; border-radius:12px; border:1px solid #cbd5e1; background:white;">123</div>
      <p style="margin:0.5rem 0 0;">Ohne Typ bleibt offen, ob hier Alter, Hausnummer, Suchbegriff oder Kundennummer gemeint ist.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.4rem;"><strong>Als Zahlenfeld gedacht</strong></p>
      <div style="padding:0.7rem; border-radius:12px; border:1px solid #cbd5e1; background:white;">Alter: 23</div>
      <p style="margin:0.5rem 0 0;">Der Typ macht klarer, welche Datenart erwartet und wie das Feld benutzt wird.</p>
    </div>
  </div>
</div>

## Warum das mehr ist als Technik

Passende Typen helfen nicht nur dem Browser. Sie helfen auch Menschen beim Verstehen:

- Welche Datenart ist gemeint?
- Wie soll das Feld benutzt werden?
- Was wird hier wahrscheinlich akzeptiert?

```html
<input type="email" />
<input type="password" />
<input type="number" />
<input type="search" />
```

## Eine ruhige Prüfstrategie

1. Welche Datenart wird erwartet?
2. Geht es um Adresse, Zahl, Suche, Geheimwert oder etwas anderes?
3. Unterstützt der Typ die Aufgabe sichtbar sinnvoll?
4. Erst dann an Platzhalter, Styling und Feinschliff denken.

<div class="compare-card">
  <p class="card-kicker">Entscheidungshilfe</p>
  <h3>Typen nach Aufgabe statt nach Gewohnheit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Beliebiges Textfeld</strong>
      <span>Wirkt oft unspezifisch und erklärt wenig über die erwartete Eingabe.</span>
    </div>
    <div class="compare-item">
      <strong>Passender Typ</strong>
      <span>Zeigt schon im Aufbau, welche Art von Information hier hingehört.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Formulare erklären nicht alles erst nach einem Fehler. Sie zeigen schon im Feldtyp, welche Eingabe gedacht ist.</p>
</div>
