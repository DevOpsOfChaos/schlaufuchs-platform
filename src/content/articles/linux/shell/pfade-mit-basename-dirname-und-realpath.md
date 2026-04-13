---
title: Pfade mit basename, dirname und realpath verstehen
description: Lerne, wie du mit einfachen Werkzeugen Dateinamen, Verzeichnisse und vollständige Pfade sauber auseinanderhältst.
subject: linux
section: Shell
topicPath:
  - shell
  - pfade-mit-basename-dirname-und-realpath
tags:
  - pfad
  - basename
  - dirname
  - realpath
learningGoals:
  - "Du erklärst, was basename, dirname und realpath jeweils sichtbar machen."
  - "Du unterscheidest Dateiname, Ordnerpfad und vollständigen Pfad sauber voneinander."
  - "Du erkennst, warum genaue Pfadangaben in der Shell Missverständnisse verhindern."
practiceIdeas:
  - "Vergleiche denselben Pfad mit basename, dirname und realpath."
  - "Prüfe bei einem Beispiel, welche Information für den nächsten Arbeitsschritt wichtig ist."
  - "Nutze Pfadwerkzeuge, um einen Dateipfad in Teilinformationen zu zerlegen."
commonMistakes:
  - "Dateiname und Verzeichnispfad gleichzusetzen."
  - "Den aktuellen Ort mit dem vollständigen Zielpfad zu verwechseln."
  - "Pfade nur optisch statt strukturell zu lesen."
keyTakeaways:
  - "basename zeigt den letzten Namensteil eines Pfades."
  - "dirname zeigt den übergeordneten Pfad."
  - "realpath macht einen vollständigen, aufgelösten Pfad sichtbar."
recognizeSignals:
  - "Es geht um Pfade, Dateinamen, Verzeichnisse oder die genaue Lage einer Datei."
  - "Du sollst einen Pfad in Bestandteile zerlegen oder eindeutig angeben."
  - "Ein Beispiel fragt, welcher Teil eines Pfades der Name und welcher das Verzeichnis ist."
selfCheckPoints:
  - "Kann ich basename, dirname und realpath in eigenen Worten unterscheiden?"
  - "Kann ich an einem Beispiel Dateiname und Verzeichnis sauber trennen?"
  - "Kann ich erklären, warum vollständige Pfade in der Shell hilfreich sind?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

In der Shell ist ein Pfad nicht bloß Text, sondern eine strukturierte Wegbeschreibung. Wer Pfade sauber lesen kann, arbeitet ruhiger, vermeidet Missverständnisse und versteht besser, worauf sich ein Befehl eigentlich bezieht.

## Drei Werkzeuge, drei Blickwinkel

- `basename` zeigt den letzten Namensteil eines Pfades.
- `dirname` zeigt das übergeordnete Verzeichnis.
- `realpath` macht einen vollständigen, eindeutig aufgelösten Pfad sichtbar.

Gerade zusammen helfen diese Werkzeuge beim Zerlegen und Prüfen von Pfadangaben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Datei im Projektordner</h3>
  <p>Aus einem Pfad wie <code>/home/fox/projekte/app/config/settings.json</code> wird mit <code>basename</code> der Dateiname, mit <code>dirname</code> der übergeordnete Ordner und mit <code>realpath</code> der vollständige Bezugspunkt.</p>
</div>

## Warum diese Trennung hilft

Viele Shell-Probleme entstehen, weil unklar bleibt,

- wo eine Datei liegt,
- welcher Teil der Pfadangabe der Name ist,
- und welches Verzeichnis für den nächsten Schritt wichtig wird.

Pfadwerkzeuge helfen genau an dieser Stelle.

## Präzision statt Pfadgefühl

Gerade bei verschachtelten Ordnern reicht ein grober Eindruck oft nicht. Dann hilft es, Pfade nicht nur zu lesen, sondern in ihre Bestandteile zu zerlegen. Das macht Shell-Arbeit sicherer und nachvollziehbarer.
