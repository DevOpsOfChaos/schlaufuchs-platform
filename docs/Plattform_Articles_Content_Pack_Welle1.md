# Plattform – Articles Content Pack Welle 1

## Zweck dieser Datei
Diese Datei enthält die **konkret vorbereiteten Inhalte** für die erste Befüllungswelle der `articles` im Repo.

Sie baut auf dem bestehenden Collection-Schema auf und übersetzt die bisherige Fachplanung in direkt nutzbare erste Artikel-Vorlagen.

## Ausgangslage im Repo
Die `articles`-Collection erwartet aktuell mindestens diese Felder:
- `title`
- `description`
- `subject`
- `section`
- `level`
- `tags`
- `draft`

Diese Datei liefert für die erste Welle:
- empfohlene Dateipfade
- fertige Frontmatter-Vorlagen
- kurze, produktiv brauchbare Einstiegsinhalte

## Ziel der ersten Artikel-Welle
Die erste Welle soll:
- die Fach-Landingpages sichtbar tragen
- Suche und Fachbereiche mit echten Inhalten versorgen
- spätere Übungen sinnvoll andocken lassen
- pro Hauptfach einen stabilen Kern erzeugen

---

# A. Mathematik

## 1) Funktionen und Graphen Grundlagen
### Zielpfad
`src/content/articles/mathematik/funktionen-und-graphen-grundlagen.md`

### Vorlage
```md
---
title: Funktionen und Graphen – Grundlagen
description: Verstehe, wie Funktionsgleichung, Wertetabelle und Graph zusammenhängen.
subject: mathematik
section: funktionen
level: einfach
tags: [funktionen, graphen, grundlagen]
draft: false
---

Funktionen ordnen Eingabewerten passende Ausgabewerte zu. Auf dieser Seite lernst du die Grundidee von Funktionen kennen und siehst, wie sich Wertetabellen und Graphen gegenseitig ergänzen.
```

## 2) Lineare und quadratische Funktionen
### Zielpfad
`src/content/articles/mathematik/lineare-und-quadratische-funktionen.md`

```md
---
title: Lineare und quadratische Funktionen
description: Geraden und Parabeln verstehen, vergleichen und sicher einordnen.
subject: mathematik
section: funktionen
level: einfach
tags: [lineare-funktionen, quadratische-funktionen, graphen]
draft: false
---

Lineare Funktionen beschreiben Geraden, quadratische Funktionen beschreiben Parabeln. Auf dieser Seite lernst du die wichtigsten Merkmale beider Funktionsarten und ihre Graphen kennen.
```

## 3) Differentialrechnung Grundlagen
### Zielpfad
`src/content/articles/mathematik/differentialrechnung-grundlagen.md`

```md
---
title: Differentialrechnung – Grundlagen
description: Verstehe, was eine Ableitung über das Verhalten einer Funktion aussagt.
subject: mathematik
section: analysis
level: mittel
tags: [differentialrechnung, ableitung, analysis]
draft: false
---

Die Differentialrechnung beschreibt, wie sich eine Funktion an einer Stelle verändert. Der zentrale Gedanke ist die lokale Steigung eines Graphen.
```

## 4) Integralrechnung Grundlagen
### Zielpfad
`src/content/articles/mathematik/integralrechnung-grundlagen.md`

```md
---
title: Integralrechnung – Grundlagen
description: Verstehe das Integral als Aufsummieren von Änderungen und Flächen.
subject: mathematik
section: analysis
level: mittel
tags: [integralrechnung, analysis, flaechen]
draft: false
---

Die Integralrechnung hilft dabei, Änderungen aufzusummieren und Flächen unter Funktionsgraphen zu beschreiben. Auf dieser Seite lernst du die Grundidee des Integrals kennen.
```

---

# B. Linux

## 1) Shell und Prompt
### Zielpfad
`src/content/articles/linux/shell-und-prompt.md`

```md
---
title: Shell und Prompt verstehen
description: Lerne, was Shell und Prompt sind und wie du dich im Terminal orientierst.
subject: linux
section: einstieg
level: einfach
tags: [shell, prompt, terminal, grundlagen]
draft: false
---

Die Shell ist die textbasierte Arbeitsumgebung von Linux. Der Prompt zeigt dir, dass das System bereit ist und oft auch, wo du dich gerade befindest.
```

## 2) Dateirechte Grundlagen
### Zielpfad
`src/content/articles/linux/dateirechte-grundlagen.md`

```md
---
title: Dateirechte – Grundlagen
description: Verstehe, wie Lesen, Schreiben und Ausführen in Linux geregelt werden.
subject: linux
section: rechte-und-benutzer
level: einfach
tags: [dateirechte, linux, chmod, grundlagen]
draft: false
---

Linux steuert Zugriffe über Rechte für Besitzer, Gruppe und andere. Diese Seite zeigt dir die Grundlogik hinter Lesen, Schreiben und Ausführen.
```

## 3) chmod
### Zielpfad
`src/content/articles/linux/chmod.md`

```md
---
title: chmod verstehen
description: Ändere Dateirechte gezielt und sicher mit chmod.
subject: linux
section: rechte-und-benutzer
level: mittel
tags: [chmod, dateirechte, linux]
draft: false
---

Mit `chmod` kannst du Zugriffsrechte auf Dateien und Ordner anpassen. Wichtig ist dabei, genau zu verstehen, welche Rechte du wem gibst.
```

## 4) Shellskripte Grundlagen
### Zielpfad
`src/content/articles/linux/shellskripte-grundlagen.md`

```md
---
title: Shellskripte – Grundlagen
description: Verstehe, wie kleine Linux-Skripte aufgebaut sind und was sie leisten können.
subject: linux
section: shellskripte
level: einfach
tags: [shellskripte, bash, linux, automation]
draft: false
---

Shellskripte helfen dir, wiederkehrende Aufgaben zu automatisieren. Auf dieser Seite lernst du den einfachen Aufbau und erste typische Bestandteile kennen.
```

## 5) SSH Grundlagen
### Zielpfad
`src/content/articles/linux/ssh-grundlagen.md`

```md
---
title: SSH – Grundlagen
description: Verstehe sicheren Fernzugriff mit SSH und seine wichtigsten Grundbegriffe.
subject: linux
section: ssh
level: einfach
tags: [ssh, fernzugriff, linux]
draft: false
---

SSH ist ein wichtiger Standard für sicheren Fernzugriff. Diese Seite erklärt dir die Grundidee und zeigt, wann und warum SSH eingesetzt wird.
```

---

# C. Web Development

## 1) HTML Grundlagen
### Zielpfad
`src/content/articles/web-development/html-grundlagen.md`

```md
---
title: HTML – Grundlagen
description: Verstehe die Struktur einer Webseite mit HTML.
subject: web-development
section: html
level: einfach
tags: [html, grundlagen, struktur]
draft: false
---

HTML beschreibt die Struktur einer Webseite. Auf dieser Seite lernst du, wie ein einfaches HTML-Dokument aufgebaut ist und welche Grundelemente du zuerst kennen solltest.
```

## 2) HTML Semantik und Struktur
### Zielpfad
`src/content/articles/web-development/html-semantik-und-struktur.md`

```md
---
title: HTML-Semantik und Struktur
description: Nutze HTML-Elemente nicht nur korrekt, sondern auch sinnvoll.
subject: web-development
section: html
level: einfach
tags: [html, semantik, struktur]
draft: false
---

Gutes HTML beschreibt nicht nur Inhalt, sondern auch die Aufgabe dieses Inhalts. Diese Seite zeigt dir, warum semantische Struktur wichtig ist.
```

## 3) Links, Bilder und Pfade
### Zielpfad
`src/content/articles/web-development/html-links-bilder-pfade.md`

```md
---
title: Links, Bilder und Pfade in HTML
description: Verstehe, wie Webseiten Inhalte und Dateien miteinander verbinden.
subject: web-development
section: html
level: einfach
tags: [html, links, bilder, pfade]
draft: false
---

Links und Bilder gehören zu den wichtigsten HTML-Bausteinen. Auf dieser Seite lernst du, wie Ziele, Dateipfade und Struktur zusammenhängen.
```

## 4) CSS Grundlagen
### Zielpfad
`src/content/articles/web-development/css-grundlagen.md`

```md
---
title: CSS – Grundlagen
description: Verstehe, wie CSS das Aussehen und die Darstellung von HTML-Inhalten steuert.
subject: web-development
section: css
level: einfach
tags: [css, grundlagen, styling]
draft: false
---

CSS bestimmt, wie HTML-Inhalte aussehen. Diese Seite zeigt dir, wie eine CSS-Regel aufgebaut ist und wie HTML und CSS zusammenarbeiten.
```

## 5) Box-Modell und Layouts
### Zielpfad
`src/content/articles/web-development/css-box-modell-und-layouts.md`

```md
---
title: CSS-Box-Modell und Layouts
description: Verstehe Abstände, Rahmen und erste Layout-Prinzipien mit CSS.
subject: web-development
section: css
level: mittel
tags: [css, box-modell, layouts]
draft: false
---

Das CSS-Box-Modell erklärt, wie Elemente Platz einnehmen und wie Layouts aufgebaut werden. Diese Seite verbindet Abstände, Rahmen und erste Strukturprinzipien.
```

---

# D. Informatik

## 1) Informatik Einstieg
### Zielpfad
`src/content/articles/informatik/informatik-einstieg.md`

```md
---
title: Einführung in die Informatik
description: Verstehe die Grundideen der Informatik als Fachbereich.
subject: informatik
section: einstieg
level: einfach
tags: [informatik, grundlagen, einstieg]
draft: false
---

Informatik beschäftigt sich damit, wie Informationen dargestellt, verarbeitet und durch Programme nutzbar gemacht werden. Diese Seite bietet dir den Einstieg in das Fach.
```

## 2) Computer und Programmiergrundlagen
### Zielpfad
`src/content/articles/informatik/computer-und-programmiergrundlagen.md`

```md
---
title: Computer und Programmiergrundlagen
description: Verstehe, wie Computer arbeiten und wie Programme grundlegend aufgebaut sind.
subject: informatik
section: programmierung
level: einfach
tags: [computer, programmierung, grundlagen]
draft: false
---

Computer verarbeiten Informationen nach klaren Regeln. Diese Seite verbindet Computer-Grundfunktionen mit den ersten Bausteinen von Programmen.
```

## 3) Programmieren mit C und Python
### Zielpfad
`src/content/articles/informatik/programmieren-mit-c-und-python.md`

```md
---
title: Programmieren mit C und Python
description: Lerne die Gemeinsamkeiten und Unterschiede zweier wichtiger Programmiersprachen kennen.
subject: informatik
section: programmierung
level: einfach
tags: [c, python, programmierung]
draft: false
---

C und Python sind unterschiedliche Werkzeuge, mit denen dieselben Grundideen des Programmierens umgesetzt werden können. Diese Seite ordnet beide Sprachen verständlich ein.
```

## 4) C Grundlagen
### Zielpfad
`src/content/articles/informatik/c-grundlagen.md`

```md
---
title: C – Grundlagen
description: Verstehe Aufbau, Variablen und erste Ausgaben in C.
subject: informatik
section: c-grundlagen
level: mittel
tags: [c, grundlagen, programmierung]
draft: false
---

C ist eine strukturierte Programmiersprache mit klarem Aufbau. Diese Seite führt dich in die wichtigsten Grundbausteine eines einfachen C-Programms ein.
```

## 5) C Kontrollstrukturen und Eingaben
### Zielpfad
`src/content/articles/informatik/c-kontrollstrukturen-und-eingaben.md`

```md
---
title: C – Kontrollstrukturen und Eingaben
description: Lerne Bedingungen, Schleifen und Eingaben in C kennen.
subject: informatik
section: c-grundlagen
level: mittel
tags: [c, if, schleifen, scanf]
draft: false
---

Mit Bedingungen, Schleifen und Eingaben wird aus statischem Code echte Programmlogik. Diese Seite zeigt dir die wichtigsten Grundmuster dafür in C.
```

---

# E. Elektrotechnik

## 1) Computer und CPU Grundlagen
### Zielpfad
`src/content/articles/elektrotechnik/computer-und-cpu-grundlagen.md`

```md
---
title: Computer und CPU – Grundlagen
description: Verstehe den Aufbau einfacher Computersysteme und die Rolle der CPU.
subject: elektrotechnik
section: computer-und-cpu
level: einfach
tags: [cpu, computer, grundlagen]
draft: false
---

Die CPU verarbeitet Daten und führt Befehle aus. Diese Seite erklärt dir den groben Aufbau eines Computersystems und die wichtigsten Grundideen dahinter.
```

## 2) Daten, Signale und Codierung
### Zielpfad
`src/content/articles/elektrotechnik/daten-signale-und-codierung.md`

```md
---
title: Daten, Signale und Codierung
description: Verstehe, wie technische Systeme Informationen übertragen und darstellen.
subject: elektrotechnik
section: daten-und-kommunikation
level: einfach
tags: [daten, signale, codierung]
draft: false
---

Daten müssen in technischen Systemen gespeichert, übertragen und interpretiert werden. Diese Seite erklärt dir die Verbindung zwischen Daten, Signalen und Codierung.
```

## 3) Netzwerke und Protokolle
### Zielpfad
`src/content/articles/elektrotechnik/netzwerke-und-protokolle.md`

```md
---
title: Netzwerke und Protokolle
description: Verstehe grundlegende Kommunikation in technischen Netzwerken.
subject: elektrotechnik
section: daten-und-kommunikation
level: einfach
tags: [netzwerke, protokolle, osi, http, mqtt]
draft: false
---

Netzwerke verbinden Geräte, und Protokolle regeln den Austausch von Informationen. Diese Seite bietet dir einen verständlichen Einstieg in die wichtigsten Grundideen.
```

## 4) Logikgatter und digitale Schaltungen
### Zielpfad
`src/content/articles/elektrotechnik/logikgatter-und-digitale-schaltungen.md`

```md
---
title: Logikgatter und digitale Schaltungen
description: Verstehe, wie digitale Zustände logisch verarbeitet werden.
subject: elektrotechnik
section: halbleiter
level: einfach
tags: [logikgatter, digitaltechnik, wahrheitstabelle]
draft: false
---

Logikgatter verarbeiten digitale Zustände nach klaren Regeln. Diese Seite zeigt dir die Grundidee digitaler Schaltungen und einfacher Wahrheitstabellen.
```

## 5) Mikrocontroller Grundlagen
### Zielpfad
`src/content/articles/elektrotechnik/mikrocontroller-grundlagen.md`

```md
---
title: Mikrocontroller – Grundlagen
description: Verstehe, wie Mikrocontroller Eingaben verarbeiten und Hardware steuern.
subject: elektrotechnik
section: mikrocontroller
level: einfach
tags: [mikrocontroller, arduino, esp32, grundlagen]
draft: false
---

Mikrocontroller sind kompakte eingebettete Systeme, die Eingaben verarbeiten und gezielt Hardware steuern. Diese Seite bildet den Einstieg in den Praxisblock des Fachbereichs.
```

---

# Empfehlung für die erste echte Umsetzung
## Welle A
- Mathematik: Funktionen und Graphen
- Linux: Shell und Prompt
- Web Development: HTML Grundlagen
- Informatik: Informatik Einstieg
- Elektrotechnik: Computer und CPU Grundlagen

## Welle B
- restliche Kernartikel der ersten Welle pro Fach ergänzen

---

# Warum dieses Pack wichtig ist
Mit diesem Pack ist die erste `articles`-Welle nicht mehr nur priorisiert, sondern bereits **konkret als Repo-Content vorbereitet**.

Das reduziert den nächsten Umsetzungsaufwand deutlich:
- Pfade sind klar
- Frontmatter ist klar
- erste Introtexte sind klar
- Fach-Landingpages können direkt darauf aufbauen
