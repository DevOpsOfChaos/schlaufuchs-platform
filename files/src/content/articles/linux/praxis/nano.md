---
title: nano – Grundlagen
description: Lerne, wie du mit nano einfache Textdateien öffnest, bearbeitest, speicherst und wieder verlässt.
subject: linux
section: praxis
level: einfach
tags: [linux, nano, editor, terminal, textdateien]
draft: false
---

`nano` ist einer der freundlichsten Einstiegseditoren im Terminal. Er ist besonders geeignet, wenn du schnell eine Datei lesen oder kleine Änderungen an einer Konfiguration vornehmen willst.

## Überblick

Für den Einstieg mit `nano` brauchst du vor allem diese vier Grundideen:

- Datei öffnen
- Text ändern
- speichern
- Editor verlassen

Mehr ist am Anfang gar nicht nötig.

## Warum `nano` so oft für den Einstieg genutzt wird

Im Vergleich zu komplexeren Terminal-Editoren ist `nano` sehr direkt. Die wichtigsten Aktionen werden meist schon am unteren Bildschirmrand angezeigt.

Das hilft, weil man nicht sofort viele Sonderbefehle auswendig lernen muss.

## Datei öffnen

Eine Datei lässt sich zum Beispiel so öffnen:

```bash
nano datei.txt
```

Wenn die Datei schon existiert, wird ihr Inhalt angezeigt. Falls sie noch nicht existiert, kann eine neue Datei angelegt werden.

## Text bearbeiten

Innerhalb von `nano` kannst du Text direkt schreiben, löschen oder verändern. Für den Einstieg ist wichtig:

- Der Cursor zeigt, wo du arbeitest.
- Änderungen passieren direkt im Text.
- Du solltest bewusst lesen, was bereits in der Datei steht.

Gerade bei Konfigurationsdateien ist vorsichtiges Arbeiten wichtig.

## Speichern

Wenn du Änderungen behalten willst, musst du speichern. In `nano` wird das über die angezeigten Tastenkombinationen gesteuert.

Für den Einstieg reicht das Verständnis:

- Änderungen sind nicht automatisch „sicher gespeichert“
- Speichern ist ein eigener Schritt
- dabei sollte geprüft werden, ob Dateiname und Ziel stimmen

## Editor verlassen

Auch das Beenden ist ein eigener Schritt. Besonders wichtig ist:

- nicht aus Versehen ungespeicherte Änderungen verwerfen
- Hinweise im Editor ernst nehmen
- sauber unterscheiden zwischen speichern und nur beenden

## Wofür `nano` gut geeignet ist

`nano` eignet sich besonders für:

- kleine Textdateien
- erste Konfigurationsdateien
- kurze Korrekturen
- schnellen Überblick über Inhalte

Für sehr große oder komplexe Bearbeitungen gibt es andere Werkzeuge, aber für den Einstieg ist `nano` oft völlig ausreichend.

## Typische Anfängerfehler

Besonders häufig passieren:

- Datei öffnen, ändern und vergessen zu speichern
- Hinweise im unteren Bereich nicht lesen
- zu hektisch Tastenkombinationen drücken
- Konfigurationsdateien ändern, ohne vorher den Inhalt zu verstehen

## Gute Arbeitsweise mit `nano`

Sinnvoll ist meistens:

1. Datei bewusst öffnen
2. Inhalt erst lesen
3. nur gezielt ändern
4. speichern prüfen
5. sauber beenden

Diese Reihenfolge macht `nano` zu einem sehr zuverlässigen Werkzeug für erste Terminal-Arbeiten.

## Merksätze

- `nano` ist ein einfacher Editor für den Einstieg.
- Die wichtigsten Grundaktionen sind öffnen, ändern, speichern und beenden.
- Hinweise im Editor helfen bei der Orientierung.
- Gerade in Konfigurationsdateien sollte ruhig und bewusst gearbeitet werden.
- Für kleine Änderungen ist `nano` oft völlig ausreichend.
