---
title: Musterlösung – Innen- und Außenabstand an Boxen beschreiben
description: Musterlösung zur Aufgabe WEB-CSS-CORE-104.
subject: web-development
section: CSS
topicPath:
  - css
  - boxenmodell-mit-margin-padding-und-border-verstehen
  - innen-und-aussenabstand-an-boxen-beschreiben-loesung
taskId: WEB-CSS-CORE-104
relatedExercise: src/content/exercises/web-development/css/boxenmodell-mit-margin-padding-und-border-verstehen/innen-und-aussenabstand-an-boxen-beschreiben.md
tags:
  - web-development
  - css
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Schichten benennen

Sinnvolle Reihenfolge:

1. Inhalt
2. Padding
3. Border
4. Margin

## Aufgabe 2: Innen und außen trennen

Padding ist der Innenabstand zwischen Inhalt und Rahmen. Margin ist der Außenabstand der ganzen Box zu anderen Elementen. Beide erzeugen also Abstand, aber nicht an derselben Stelle.

## Aufgabe 3: Sichtbare Boxbreite berechnen

Die sichtbare Boxbreite setzt sich aus Inhalt, Padding und Border zusammen:

```text
240 + 16 + 16 + 2 + 2 = 276px
```

Die Karte ist sichtbar also breiter als nur ihre Inhaltsbreite.

## Aufgabe 4: Außenabstand mitdenken

Wenn links und rechts auch die Margin mitgerechnet wird, kommt zusätzlich außen noch `24px + 24px` dazu:

```text
276 + 24 + 24 = 324px
```

Der gesamte Platzbedarf von äußerer Kante zu äußerer Kante beträgt hier also `324px`.

## Aufgabe 5: Drei Begriffe sortieren

- **Inhaltsbreite** → die eigentliche Fläche, in der der Inhalt liegt, hier `240px`.
- **sichtbare Boxbreite** → Inhaltsbreite plus Padding plus Border, hier `276px`.
- **gesamter Platzbedarf im Layout** → sichtbare Boxbreite plus linke und rechte Margin, hier `324px`.

## Aufgabe 6: Zwei Aussagen prüfen

- **„`width: 240px` ist die ganze sichtbare Breite der Karte.“**  
  Das stimmt nicht. `240px` beschreibt hier nur die Inhaltsbreite. Padding und Border machen die sichtbare Box breiter.

- **„Margin vergrößert nicht die sichtbare Box, aber den gesamten Platzbedarf im Layout.“**  
  Das ist fachlich richtig. Margin liegt außerhalb der sichtbaren Box, vergrößert aber den Abstand zu anderen Elementen.

## Aufgabe 7: Fehlersatz korrigieren

Eine ruhige Korrektur wäre zum Beispiel:

- **„Die sichtbare Box ist 276px breit.“**
- **„Mit linker und rechter Margin braucht die Karte im Layout insgesamt 324px Platz.“**

Genau diese Trennung macht sichtbar, ob über die Box selbst oder über ihren gesamten Platzbedarf gesprochen wird.

## Aufgabe 8: Zweite Karte ruhig lesen

Auch die zweite Karte kommt sichtbar wieder auf `276px` Breite:

```text
208 + 32 + 32 + 2 + 2 = 276px
```

Sichtbar gleich bleibt also die Boxbreite. Geändert hat sich aber die innere Verteilung: Die zweite Karte hat weniger Inhaltsbreite und dafür mehr Innenabstand. Beim gesamten Platzbedarf im Layout wird der Unterschied noch deutlicher:

```text
Karte 1: 276 + 24 + 24 = 324px
Karte 2: 276 + 8 + 8 = 292px
```

Die Boxen können also sichtbar gleich breit wirken, obwohl ihre inneren Anteile anders verteilt sind und sie im Layout unterschiedlich viel Platz brauchen.

## Aufgabe 9: Formel in Worte übersetzen

Mögliche Merksätze:

- **Sichtbare Boxbreite:** Inhaltsbreite plus linker und rechter Innenabstand plus linker und rechter Rahmen.
- **Gesamter Platzbedarf im Layout:** sichtbare Boxbreite plus linker und rechter Außenabstand.
