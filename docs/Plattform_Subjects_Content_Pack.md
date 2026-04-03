# Plattform – Subject Content Pack für die erste echte Befüllung

## Zweck dieser Datei
Diese Datei enthält die **konkret vorbereiteten Inhalte** für die erste Befüllungswelle der `subjects` im Repo.

Sie dient als direkt nutzbare Vorlage für die bestehenden Dateien unter:
- `src/content/subjects/mathematik/index.md`
- `src/content/subjects/linux/index.md`
- `src/content/subjects/web-development/index.md`
- `src/content/subjects/informatik/index.md`
- `src/content/subjects/elektrotechnik/index.md`

Zusätzlich enthält sie eine klare Entscheidung zum aktuellen Sonderfall:
- `src/content/subjects/daten-und-signale/index.md`

## Hintergrund
Die bestehenden Subject-Dateien sind bereits angelegt, aber noch relativ knapp.

Gleichzeitig ist inzwischen fachlich klar:
- welche fünf Hauptfächer die Plattform wirklich trägt
- wie die Fächer beschrieben werden sollen
- wie Einstieg und Aufgabenlogik daran andocken

## Hauptentscheidung
### Die globalen Hauptfächer der Plattform sind:
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

### Nicht als eigener konkurrierender Hauptfachbereich führen:
- Daten & Signale

### Begründung
`Daten & Signale` ist fachlich sinnvoll, aber im neuen Modell als **Themenblock innerhalb von Elektrotechnik** stärker und konsistenter.

---

# 1) Mathematik
## Zielpfad
`src/content/subjects/mathematik/index.md`

## Empfohlener Inhalt
```md
---
title: Mathematik
slug: mathematik
description: Funktionen, Analysis, Algebra und Vektorgeometrie mit klarem Fokus auf Verstehen und Üben.
order: 1
accent: rose
---

Mathematik auf Schlaufuchs verbindet Grundlagen, Rechenwege und Aufgaben. Der Einstieg führt über Funktionen und Graphen, danach folgen Analysis, Algebra und räumliche Mathematik in klaren Lernblöcken.
```

## Fachrolle
- stärkster Aufgabenbereich
- zentral für Übung, Wiederholung und Fachverständnis

## Einstiegspfad
- Funktionen und Graphen

---

# 2) Informatik
## Zielpfad
`src/content/subjects/informatik/index.md`

## Empfohlener Inhalt
```md
---
title: Informatik
slug: informatik
description: Informatik verständlich, strukturiert und praxisnah – von Grundideen bis zu ersten C-Programmen.
order: 2
accent: sky
---

Informatik auf Schlaufuchs verbindet algorithmisches Denken, Computer- und Programmiergrundlagen sowie den Einstieg in C. Der Bereich führt von Fachverständnis über Code-Struktur bis zu ersten Übungsformaten.
```

## Fachrolle
- Einstieg in Informatik und Programmierung
- Brücke zwischen Denken, Struktur und Code

## Einstiegspfad
- Informatik-Einstieg

---

# 3) Elektrotechnik
## Zielpfad
`src/content/subjects/elektrotechnik/index.md`

## Empfohlener Inhalt
```md
---
title: Elektrotechnik
slug: elektrotechnik
description: Grundlagen, Signale, Schaltungen, Bauelemente und Mikrocontroller in einem klar gegliederten Fachbereich.
order: 3
accent: amber
---

Elektrotechnik auf Schlaufuchs verbindet technische Grundlagen, Rechen- und Schaltungsverständnis, Kommunikationstechnik sowie Mikrocontroller-Praxis. Der Bereich führt von Signalen und Logik bis zu Netzwerkanalyse und Arduino-/ESP32-Projekten.
```

## Fachrolle
- breitester Technikbereich
- verbindet Theorie, Aufgaben und Praxis

## Einstiegspfad
- Computer und CPU-Grundlagen

---

# 4) Linux
## Zielpfad
`src/content/subjects/linux/index.md`

## Empfohlener Inhalt
```md
---
title: Linux
slug: linux
description: Shell, Rechte, Benutzer, SSH und Shellskripte mit starkem Fokus auf Praxis und Systemverständnis.
order: 4
accent: emerald
---

Linux auf Schlaufuchs erklärt den Umgang mit Shell, Dateien, Rechten, Benutzern und typischen Werkzeugen im Alltag. Der Bereich führt vom Einstieg in die Shell bis zu Skripten, SSH und ersten Admin-Workflows.
```

## Fachrolle
- Praxis- und Systemfach
- sehr gute Verbindung von Wissen und Üben

## Einstiegspfad
- Shell und Prompt

---

# 5) Web Development
## Zielpfad
`src/content/subjects/web-development/index.md`

## Empfohlener Inhalt
```md
---
title: Web Development
slug: web-development
description: HTML, CSS und moderne Web-Grundlagen mit direktem Fokus auf Struktur, Gestaltung und kleine Praxisaufgaben.
order: 5
accent: violet
---

Web Development auf Schlaufuchs bündelt den Einstieg in HTML und CSS. Der Bereich führt von Seitenstruktur und Semantik über Links, Bilder und Pfade bis zu CSS-Grundlagen, Box-Modell und Layouts.
```

## Fachrolle
- klarer Web-Einstieg
- direkte Code-/Preview- und Aufgabenlogik

## Einstiegspfad
- HTML-Grundlagen

---

# 6) Daten & Signale
## Aktueller Pfad
`src/content/subjects/daten-und-signale/index.md`

## Empfohlene Entscheidung
Diese Datei soll **mittelfristig nicht mehr als eigenständiger globaler Subject-Eintrag geführt** werden.

## Zielbild
- `daten-und-signale` nicht als konkurrierendes Hauptfach behandeln
- Inhalte stattdessen als Sektion / Artikelgruppe unter `elektrotechnik` einordnen

## Begründung
Das ist fachlich und plattformlogisch konsistenter mit:
- Navigation
- Fach-Landingpage Elektrotechnik
- Startseite
- Aufgaben-Hub

## Bis zur echten Bereinigung
Falls die Datei vorübergehend bestehen bleibt, sollte sie im Produkt **nicht** als gleichrangiger Hauptfachbereich ausgerollt werden.

---

# Empfohlene Reihenfolge für die echte Repo-Anpassung
## Welle A
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

## Welle B
- `daten-und-signale` als Subject-Eintrag bereinigen oder aus der globalen Fachsicht entfernen

---

# Warum dieses Content Pack wichtig ist
Mit diesem Pack ist die erste Subject-Befüllung nicht mehr abstrakt, sondern inhaltlich direkt vorbereitet.

Es legt fest:
- welche fünf Hauptfächer die Plattform sichtbar trägt
- wie diese Fächer beschrieben werden
- welche Reihenfolge und Rolle sie haben
- und wie der Sonderfall `daten-und-signale` später sauber aufgelöst werden soll
