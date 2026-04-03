# Plattform – Exercises Content Pack Welle 1

## Zweck dieser Datei
Diese Datei enthält die **konkret vorbereiteten Inhalte** für die erste Befüllungswelle der `exercises` im Repo.

Sie baut auf dem bestehenden Collection-Schema auf und übersetzt die bisherige Fach- und Aufgabenplanung in direkt nutzbare erste Aufgaben-Vorlagen.

## Ausgangslage im Repo
Die `exercises`-Collection erwartet aktuell mindestens diese Felder:
- `title`
- `description`
- `subject`
- `level`
- `draft`

Für die spätere echte Plattformlogik sind zusätzlich sinnvoll geplant:
- `section`
- `exerciseType`
- `order`
- `hasSolution`
- optional später `relatedArticle`, `tags`, `estimatedTime`

## Ziel der ersten Exercises-Welle
Die erste Welle soll:
- den globalen Aufgaben-Hub sichtbar tragfähig machen
- auf Fach-Landingpages echte Aufgabenblöcke ermöglichen
- direkte Andockung an Einstiegsartikel schaffen
- pro Hauptfach einen belastbaren Übungseinstieg liefern

## Hinweis zur Form
Die folgenden Vorlagen sind **repo-nah und produktiv gedacht**, aber bewusst pragmatisch gehalten.

Das bedeutet:
- kleine, klare Aufgaben
- gut als erste `exercises` geeignet
- direkt an die erste `articles`-Welle anschließbar

---

# A. Mathematik

## 1) Lineare Funktionen – Grundaufgaben
### Zielpfad
`src/content/exercises/mathematik/lineare-funktionen-grundaufgaben.md`

### Vorlage
```md
---
title: Lineare Funktionen – Grundaufgaben
description: Übe Steigung, y-Achsenabschnitt und einfache Geradengraphen.
subject: mathematik
level: einfach
draft: false
---

Diese Übung hilft dir dabei, die wichtigsten Merkmale linearer Funktionen sicher zu erkennen und anzuwenden.
```

### Spätere Zusatzmetadaten
- `section: funktionen`
- `exerciseType: rechnen`
- `order: 1`
- `hasSolution: true`

## 2) Quadratische Funktionen – Grundaufgaben
### Zielpfad
`src/content/exercises/mathematik/quadratische-funktionen-grundaufgaben.md`

```md
---
title: Quadratische Funktionen – Grundaufgaben
description: Übe typische Eigenschaften von Parabeln und quadratischen Funktionen.
subject: mathematik
level: einfach
draft: false
---

Diese Übung trainiert dein Verständnis für Parabeln, Scheitelpunktlogik und typische Aufgaben zu quadratischen Funktionen.
```

### Spätere Zusatzmetadaten
- `section: funktionen`
- `exerciseType: rechnen`
- `order: 2`
- `hasSolution: true`

## 3) Differentialrechnung – Standardableitungen
### Zielpfad
`src/content/exercises/mathematik/differentialrechnung-standardableitungen.md`

```md
---
title: Differentialrechnung – Standardableitungen
description: Übe grundlegende Ableitungen und typische Standardregeln.
subject: mathematik
level: mittel
draft: false
---

Diese Übung hilft dir, Standardableitungen sicher zu erkennen und typische Rechenmuster der Differentialrechnung anzuwenden.
```

### Spätere Zusatzmetadaten
- `section: analysis`
- `exerciseType: rechnen`
- `order: 3`
- `hasSolution: true`

## 4) Integralrechnung – Standardintegrale
### Zielpfad
`src/content/exercises/mathematik/integralrechnung-standardintegrale.md`

```md
---
title: Integralrechnung – Standardintegrale
description: Übe einfache Integrale und grundlegende Rechenmuster.
subject: mathematik
level: mittel
draft: false
---

Diese Übung trainiert die wichtigsten Standardintegrale und schafft eine sichere Grundlage für spätere Flächen- und Integralaufgaben.
```

### Spätere Zusatzmetadaten
- `section: analysis`
- `exerciseType: rechnen`
- `order: 4`
- `hasSolution: true`

---

# B. Linux

## 1) Shell-Befehle erkennen und zuordnen
### Zielpfad
`src/content/exercises/linux/shell-befehle-erkennen-und-zuordnen.md`

```md
---
title: Shell-Befehle erkennen und zuordnen
description: Übe typische Linux-Befehle und ihre Grundfunktion.
subject: linux
level: einfach
draft: false
---

Diese Übung hilft dir, typische Linux-Befehle sicher einzuordnen und ihre Funktion im Terminalalltag besser zu verstehen.
```

### Spätere Zusatzmetadaten
- `section: shell`
- `exerciseType: diagnose`
- `order: 1`
- `hasSolution: true`

## 2) Dateirechte – Grundaufgaben
### Zielpfad
`src/content/exercises/linux/dateirechte-grundaufgaben.md`

```md
---
title: Dateirechte – Grundaufgaben
description: Übe Lesen, Schreiben und Ausführen in der Linux-Rechte-Logik.
subject: linux
level: einfach
draft: false
---

Diese Übung trainiert dein Verständnis für Besitzer, Gruppe und andere sowie für die Grundlogik von Linux-Dateirechten.
```

### Spätere Zusatzmetadaten
- `section: rechte`
- `exerciseType: diagnose`
- `order: 2`
- `hasSolution: true`

## 3) chmod – Grundaufgaben
### Zielpfad
`src/content/exercises/linux/chmod-grundaufgaben.md`

```md
---
title: chmod – Grundaufgaben
description: Übe das gezielte Ändern von Dateirechten mit chmod.
subject: linux
level: mittel
draft: false
---

Diese Übung hilft dir dabei, `chmod` sicher zu lesen und typische Rechteänderungen korrekt einzuordnen.
```

### Spätere Zusatzmetadaten
- `section: rechte`
- `exerciseType: praxis`
- `order: 3`
- `hasSolution: true`

## 4) Shellskripte – Einstiegsaufgaben
### Zielpfad
`src/content/exercises/linux/shellskripte-einstiegsaufgaben.md`

```md
---
title: Shellskripte – Einstiegsaufgaben
description: Übe den einfachen Aufbau und erste typische Bestandteile von Shellskripten.
subject: linux
level: mittel
draft: false
---

Diese Übung begleitet den Einstieg in Shellskripte und hilft dir, kleine Skripte besser zu lesen und zu verstehen.
```

### Spätere Zusatzmetadaten
- `section: shellskripte`
- `exerciseType: code`
- `order: 4`
- `hasSolution: true`

## 5) SSH – Einstiegsaufgaben
### Zielpfad
`src/content/exercises/linux/ssh-einstiegsaufgaben.md`

```md
---
title: SSH – Einstiegsaufgaben
description: Übe grundlegende SSH-Begriffe und typische Fernzugriffssituationen.
subject: linux
level: einfach
draft: false
---

Diese Übung hilft dir, die Grundidee von SSH, Fernzugriff und einfachen Nutzungsszenarien sicher einzuordnen.
```

### Spätere Zusatzmetadaten
- `section: ssh`
- `exerciseType: diagnose`
- `order: 5`
- `hasSolution: true`

---

# C. Web Development

## 1) HTML-Dokumentstruktur
### Zielpfad
`src/content/exercises/web-development/html-dokumentstruktur.md`

```md
---
title: HTML-Dokumentstruktur üben
description: Übe den Aufbau eines einfachen HTML-Dokuments.
subject: web-development
level: einfach
draft: false
---

Diese Übung hilft dir, die Grundstruktur eines HTML-Dokuments sicher zu erkennen und richtig zusammenzusetzen.
```

### Spätere Zusatzmetadaten
- `section: html`
- `exerciseType: code`
- `order: 1`
- `hasSolution: true`

## 2) HTML – Links, Bilder und Pfade
### Zielpfad
`src/content/exercises/web-development/html-links-bilder-pfade.md`

```md
---
title: Links, Bilder und Pfade üben
description: Übe, wie HTML-Dateien, Bilder und Verzeichnisse richtig zusammenhängen.
subject: web-development
level: einfach
draft: false
---

Diese Übung trainiert dein Verständnis für `href`, `src` und Dateipfade in kleinen HTML-Projekten.
```

### Spätere Zusatzmetadaten
- `section: pfade-und-struktur`
- `exerciseType: zuordnen`
- `order: 2`
- `hasSolution: true`

## 3) CSS-Syntax – Grundaufgaben
### Zielpfad
`src/content/exercises/web-development/css-syntax-grundaufgaben.md`

```md
---
title: CSS-Syntax – Grundaufgaben
description: Übe Selektoren, Eigenschaften und Werte in einfachen CSS-Regeln.
subject: web-development
level: einfach
draft: false
---

Diese Übung hilft dir, den Aufbau von CSS-Regeln sicher zu erkennen und typische Syntaxfehler zu vermeiden.
```

### Spätere Zusatzmetadaten
- `section: css`
- `exerciseType: code`
- `order: 3`
- `hasSolution: true`

## 4) Box-Modell – Grundaufgaben
### Zielpfad
`src/content/exercises/web-development/box-modell-grundaufgaben.md`

```md
---
title: Box-Modell – Grundaufgaben
description: Übe padding, border und margin im CSS-Box-Modell.
subject: web-development
level: mittel
draft: false
---

Diese Übung trainiert dein Verständnis für das Box-Modell und hilft dir, Abstände und Rahmen korrekt einzuordnen.
```

### Spätere Zusatzmetadaten
- `section: css`
- `exerciseType: challenge`
- `order: 4`
- `hasSolution: true`

---

# D. Informatik

## 1) Daten, Anweisungen und Ablauf zuordnen
### Zielpfad
`src/content/exercises/informatik/daten-anweisungen-und-ablauf-zuordnen.md`

```md
---
title: Daten, Anweisungen und Ablauf zuordnen
description: Übe die Grundbausteine von Programmen und Informatik-Strukturen.
subject: informatik
level: einfach
draft: false
---

Diese Übung hilft dir, Daten, Anweisungen und einfache Abläufe sicher zu unterscheiden und Grundideen der Informatik besser zu verstehen.
```

### Spätere Zusatzmetadaten
- `section: informatik-einstieg`
- `exerciseType: zuordnen`
- `order: 1`
- `hasSolution: true`

## 2) Aufbau eines C-Programms erkennen
### Zielpfad
`src/content/exercises/informatik/aufbau-eines-c-programms-erkennen.md`

```md
---
title: Aufbau eines C-Programms erkennen
description: Übe die wichtigsten Bestandteile einfacher C-Programme.
subject: informatik
level: einfach
draft: false
---

Diese Übung zeigt dir die Grundstruktur eines C-Programms und hilft dir, wichtige Bausteine wie `main()`, Variablen und Anweisungen sicher zu erkennen.
```

### Spätere Zusatzmetadaten
- `section: c-grundlagen`
- `exerciseType: code`
- `order: 2`
- `hasSolution: true`

## 3) printf()-Ausgabe lesen
### Zielpfad
`src/content/exercises/informatik/printf-ausgabe-lesen.md`

```md
---
title: printf()-Ausgabe lesen
description: Übe, kleine C-Programme zu lesen und ihre Ausgabe vorherzusagen.
subject: informatik
level: mittel
draft: false
---

Diese Übung trainiert das Lesen einfacher C-Ausgaben und hilft dir, kleine Programmbeispiele besser zu verstehen.
```

### Spätere Zusatzmetadaten
- `section: c-grundlagen`
- `exerciseType: code`
- `order: 3`
- `hasSolution: true`

## 4) Kontrollstrukturen in C erkennen
### Zielpfad
`src/content/exercises/informatik/kontrollstrukturen-in-c-erkennen.md`

```md
---
title: Kontrollstrukturen in C erkennen
description: Übe Bedingungen, Schleifen und typische Programmabläufe in C.
subject: informatik
level: mittel
draft: false
---

Diese Übung hilft dir, `if`, `else`, `while` und `for` sicher zu lesen und ihre Rolle im Programmablauf zu verstehen.
```

### Spätere Zusatzmetadaten
- `section: kontrollstrukturen`
- `exerciseType: diagnose`
- `order: 4`
- `hasSolution: true`

---

# E. Elektrotechnik

## 1) Netzwerkanalyse – Grundaufgaben
### Zielpfad
`src/content/exercises/elektrotechnik/netzwerkanalyse-grundaufgaben.md`

```md
---
title: Netzwerkanalyse – Grundaufgaben
description: Übe einfache elektrische Netzwerke systematisch zu lesen und zu analysieren.
subject: elektrotechnik
level: mittel
draft: false
---

Diese Übung hilft dir, einfache Netzwerke in Knoten, Zweige und Grundgrößen zu zerlegen und typische Rechenschritte besser einzuordnen.
```

### Spätere Zusatzmetadaten
- `section: netzwerkanalyse`
- `exerciseType: rechnen`
- `order: 1`
- `hasSolution: true`

## 2) Wechselstrom – Grundaufgaben
### Zielpfad
`src/content/exercises/elektrotechnik/wechselstrom-grundaufgaben.md`

```md
---
title: Wechselstrom – Grundaufgaben
description: Übe typische Einstiegsaufgaben zu Größen und Zusammenhängen im Wechselstrom.
subject: elektrotechnik
level: mittel
draft: false
---

Diese Übung trainiert dein Grundverständnis für Wechselstrom, wichtige Größen und typische Aufgabenarten in diesem Themenblock.
```

### Spätere Zusatzmetadaten
- `section: wechselstrom`
- `exerciseType: rechnen`
- `order: 2`
- `hasSolution: true`

## 3) Dioden – Grundaufgaben
### Zielpfad
`src/content/exercises/elektrotechnik/dioden-grundaufgaben.md`

```md
---
title: Dioden – Grundaufgaben
description: Übe Durchlassrichtung, Sperrrichtung und einfache Diodenschaltungen.
subject: elektrotechnik
level: einfach
draft: false
---

Diese Übung hilft dir, Diodensymbole, Stromrichtung und typische Grundfälle in einfachen Schaltungen sicher zu erkennen.
```

### Spätere Zusatzmetadaten
- `section: halbleiter`
- `exerciseType: diagnose`
- `order: 3`
- `hasSolution: true`

## 4) Arduino – Basisaufgaben
### Zielpfad
`src/content/exercises/elektrotechnik/arduino-basisaufgaben.md`

```md
---
title: Arduino – Basisaufgaben
description: Übe erste Grundlogiken mit LED, Taster und einfachen Arduino-Programmen.
subject: elektrotechnik
level: einfach
draft: false
---

Diese Übung begleitet den Einstieg in Arduino und hilft dir, einfache Hardware- und Codebeispiele besser zu lesen und anzuwenden.
```

### Spätere Zusatzmetadaten
- `section: mikrocontroller`
- `exerciseType: praxis`
- `order: 4`
- `hasSolution: true`

---

# Empfehlung für die erste echte Umsetzung
## Welle A
- Mathematik: lineare / quadratische Funktionen
- Linux: Shell / Rechte
- Web Development: HTML-Struktur / CSS-Syntax

## Welle B
- Mathematik: Analysis
- Linux: Shellskripte / SSH
- Informatik: C-Einstieg
- Elektrotechnik: Dioden / Netzwerkanalyse / Arduino

---

# Warum dieses Pack wichtig ist
Mit diesem Pack ist die erste `exercises`-Welle nicht mehr nur priorisiert, sondern bereits **konkret als Repo-Content vorbereitet**.

Das hilft direkt bei der nächsten echten Umsetzung:
- Pfade sind klar
- Frontmatter ist klar
- erste Aufgabentexte sind klar
- Aufgaben-Hub und Fachseiten können darauf aufbauen
