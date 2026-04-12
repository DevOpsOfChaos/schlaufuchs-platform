---
title: nano – Grundlagen
description: Lerne, wie du mit nano einfache Textdateien öffnest, bearbeitest, speicherst und wieder verlässt.
subject: linux
section: praxis
topicPath:
  - praxis
  - nano
learningGoals:
  - Du verstehst die Grundidee von nano als einfachen Terminal-Editor.
  - Du unterscheidest öffnen, ändern, speichern und beenden sauber.
  - Du arbeitest bei kleinen Änderungen bewusster und ruhiger.
level: einfach
tags: [linux, nano, editor, terminal, textdateien]
draft: false
---

<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p><code>nano</code> ist ein freundlicher Einstiegseditor im Terminal. Wichtig sind nicht viele Sonderfunktionen, sondern ein ruhiger Ablauf: öffnen, lesen, ändern, speichern und sauber beenden.</p>
  <ul>
    <li>Du verstehst, warum <code>nano</code> gut für den Einstieg geeignet ist.</li>
    <li>Du kennst die Grundschritte beim Bearbeiten einer Datei.</li>
    <li>Du erkennst, warum bewusstes Speichern und Beenden wichtig ist.</li>
  </ul>
</div>

## Grundidee

Ein Terminal-Editor ist kein anderes Universum, sondern einfach ein Werkzeug für Textdateien.

Bei <code>nano</code> geht es für den Einstieg vor allem um vier Dinge:

- Datei öffnen
- Text ändern
- speichern
- Editor verlassen

## Warum <code>nano</code> für den Einstieg hilfreich ist

Im Vergleich zu komplexeren Editoren ist <code>nano</code> direkter. Viele wichtige Aktionen werden bereits am unteren Rand angezeigt.

Das hilft, weil man nicht sofort viele Spezialbefehle auswendig lernen muss.

## Datei öffnen

<div class="wide-example">

```bash
nano datei.txt
```

</div>

Wenn die Datei schon existiert, wird ihr Inhalt angezeigt. Falls sie noch nicht existiert, kann sie neu angelegt werden.

## Bewusst bearbeiten

Wichtig ist nicht nur, dass du schreiben kannst. Wichtig ist auch:

- zuerst lesen,
- dann gezielt ändern,
- und nicht hektisch an einer Datei herumarbeiten.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Erst lesen, dann ändern</h3>
  <p>Gerade bei Konfigurationsdateien ist es riskant, sofort etwas umzuschreiben. Oft ist es besser, den bestehenden Inhalt erst zu verstehen und nur dann gezielt etwas zu ändern.</p>
</div>

## Speichern und Beenden

Bei <code>nano</code> sind Speichern und Beenden eigenständige Schritte. Genau das ist für den Einstieg wichtig:

- Änderungen bleiben nicht einfach automatisch erhalten,
- Speichern ist ein bewusster Schritt,
- und auch beim Beenden solltest du Hinweise im Editor ernst nehmen.

<div class="practice-card">
  <p class="card-kicker">Zum Ausprobieren</p>
  <h3>Was du in der Linux-Lernshell testen solltest</h3>
  <ul>
    <li><code>ls</code> um vorhandene Dateien zu sehen</li>
    <li><code>nano notizen.txt</code> um einen typischen nano-Aufruf zu simulieren</li>
    <li><code>touch neu.txt</code> und danach <code>nano neu.txt</code></li>
    <li>anschließend mit <code>cat</code> prüfen, welche Datei gemeint ist</li>
  </ul>
  <p>Die Lernshell ersetzt keinen echten Editor, macht aber die Arbeitslogik sichtbar.</p>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Datei öffnen, ändern und bewusstes Speichern vergessen.</li>
    <li>Hinweise am unteren Rand ignorieren.</li>
    <li>Zu hektisch Tastenkombinationen benutzen.</li>
    <li>Konfigurationsdateien ändern, ohne den Inhalt vorher zu verstehen.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li><code>nano</code> ist ein einfacher Editor für den Einstieg.</li>
    <li>Die wichtigsten Grundaktionen sind öffnen, ändern, speichern und beenden.</li>
    <li>Hinweise im Editor helfen bei der Orientierung.</li>
    <li>Gerade in Konfigurationsdateien sollte ruhig und bewusst gearbeitet werden.</li>
    <li>Für kleine Änderungen ist <code>nano</code> oft völlig ausreichend.</li>
  </ul>
</div>
