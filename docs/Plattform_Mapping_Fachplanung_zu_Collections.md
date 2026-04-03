# Plattform – Mapping von Fachplanung zu Collections

## Zweck dieser Datei
Diese Datei übersetzt die bereits erstellte Fachplanung in das **tatsächlich vorhandene Astro-Content-Modell** des Repos.

Sie beantwortet die zentrale Frage:

- Wie werden die geplanten Fachbereiche, Zielseiten und Aufgaben künftig in
  - `subjects`
  - `articles`
  - `exercises`
  - `news`

abgebildet?

## Ausgangslage im Repo
Im Repo sind bereits diese Collections definiert:
- `subjects`
- `articles`
- `exercises`
- `news`

Zusätzlich gibt es bereits eine Fachbereichsübersicht und eine globale Navigation, die mit Fach-Slugs arbeitet. fileciteturn95file0turn91file0turn94file0

## Grundregel für das Mapping
## 1) Fach-Masterpläne
Die bisher in `docs/` angelegten Fach-Masterpläne dienen künftig als Strukturvorlage für:
- `subjects`
- Fachbereichs-Landingpages
- innere Fachlogik

## 2) Zielseiten
Alle in `docs/` geplanten Wissensseiten sind künftig primär Kandidaten für:
- `articles`

## 3) Aufgabenmigration
Alle Aufgaben-Migrationsdokumente und Altaufgaben-Entscheidungen fließen künftig primär in:
- `exercises`

## 4) Plattform-/Meta-Dokumente
Diese bleiben in `docs/` als Planungsdokumente und werden **nicht** direkt zu `articles`.

## Fachbereichs-Mapping
## A. Mathematik
### Subject-Slug
- `mathematik`

### Gehört in `subjects`
- Mathematik als eigenständiger Fachbereich

### Geplante `articles`
- Funktionen und Graphen
- Analysis
- lineare Gleichungssysteme
- komplexe Zahlen
- Vektorgeometrie
- spätere Vertiefungen

### Geplante `exercises`
- alle mathematischen Aufgabenblöcke aus Altbestand
- insbesondere Funktionen, Differentialrechnung, Integralrechnung, LGS, Vektoren

## B. Informatik
### Subject-Slug
- `informatik`

### Gehört in `subjects`
- Informatik als eigenständiger Fachbereich

### Geplante `articles`
- Informatik-Einstieg
- Computer- und Programmiergrundlagen
- Programmieren mit C und Python
- Compiler/Interpreter/Paradigmen
- C-Grundlagen
- C-Kontrollstrukturen/Eingaben

### Geplante `exercises`
- Code-Leseaufgaben
- Ablauf-/Strukturaufgaben
- C-Grundaufgaben

## C. Linux
### Subject-Slug
- `linux`

### Gehört in `subjects`
- Linux als eigenständiger Fachbereich

### Geplante `articles`
- Shell, Dateien, Rechte, Benutzer, Besitz, SSH, Shellskripte

### Geplante `exercises`
- Terminal-, Rechte-, Shellskript- und SSH-Aufgaben

## D. Elektrotechnik
### Subject-Slug
- `elektrotechnik`

### Gehört in `subjects`
- Elektrotechnik als eigenständiger Fachbereich

### Geplante `articles`
- Computer/CPU
- Daten/Signale/Codierung
- Netzwerke/Protokolle
- Logikgatter
- Dioden
- MOSFETs
- elektrische Netzwerke
- Wechselstrom
- Mikrocontroller
- Arduino
- ESP32

### Geplante `exercises`
- Netzwerkanalyse
- Wechselstrom
- Halbleiteraufgaben
- Mikrocontroller-Projekte

## E. Web Development
### Subject-Slug
- `web-development`

### Gehört in `subjects`
- Web Development als eigenständiger Fachbereich

### Wichtige Festlegung
Die bisherige inhaltliche Doku spricht oft von `HTML/CSS`.
Im Repo ist der Fachbereich aber bereits als `web-development` verankert. fileciteturn94file0turn109file0

### Konsequenz
- HTML/CSS wird als **Kernbereich innerhalb von Web Development** gedacht
- keine separate globale `subjects`-Fachwelt für HTML/CSS

### Geplante `articles`
- HTML-Grundlagen
- HTML-Semantik und Struktur
- Links/Bilder/Pfade
- CSS-Grundlagen
- Box-Modell und Layouts

### Geplante `exercises`
- HTML-Struktur
- Pfadlogik
- CSS-Syntax
- Box-Modell- und Layout-Aufgaben

## Zentrale Inkonsistenz im aktuellen Repo
## `daten-und-signale` existiert in `articles` und `exercises`, aber nicht sauber als globaler Fachbereich
In `content.config.ts` ist `daten-und-signale` aktuell als möglicher `subject`-Wert für `articles` und `exercises` vorhanden. fileciteturn95file0

Gleichzeitig:
- die Hauptnavigation führt keinen eigenen Fachbereich `daten-und-signale` fileciteturn94file0
- die Startseite zeigt `Daten & Signale`, verlinkt aber auf `elektrotechnik` fileciteturn109file0
- die Fachplanung ordnet Daten/Signale bereits sinnvoll als Block **innerhalb von Elektrotechnik** ein

## Empfehlung zur Auflösung
### Zielbild
`daten-und-signale` wird **nicht** als eigener globaler Fachbereich geführt.

### Stattdessen
- `elektrotechnik` bleibt das globale Subject
- `daten-signale-und-codierung` wird eine wichtige Sektion / Artikelgruppe innerhalb von Elektrotechnik

### Konsequenz für später
Mittelfristig sollte geprüft werden, ob `daten-und-signale` als eigener `subject`-Enum-Wert wirklich nötig ist oder besser in die Elektrotechnik-Sektionslogik überführt wird.

## Empfohlene Struktur unterhalb der Subjects
Da `articles` aktuell Felder wie `subject`, `section`, `level`, `tags` enthalten, bietet sich folgendes Modell an: fileciteturn95file0

### Beispiel
#### Mathematik
- `subject: mathematik`
- `section: funktionen`
- `section: analysis`
- `section: algebra`
- `section: vektorgeometrie`

#### Linux
- `subject: linux`
- `section: einstieg`
- `section: rechte-und-benutzer`
- `section: shell`
- `section: shellskripte`
- `section: ssh`

#### Elektrotechnik
- `subject: elektrotechnik`
- `section: computer-und-cpu`
- `section: daten-und-kommunikation`
- `section: halbleiter`
- `section: netzwerke-und-wechselstrom`
- `section: mikrocontroller`

#### Web Development
- `subject: web-development`
- `section: html`
- `section: css`
- `section: praxis`

## Empfohlenes Mapping der bisherigen `docs/`-Planung
## `docs/*Masterplan*`
→ Strukturvorlage für `subjects` und Landingpages

## `docs/*Zielseite*`
→ spätere Kandidaten für einzelne `articles`

## `docs/*Aufgaben_Migration*`
→ Strukturvorlage für spätere `exercises`

## `docs/Plattform_*`
→ Planungs- und IA-Dokumente, bleiben in `docs/`

## Konkrete Folge für die nächste Phase
Die Inhalte im Repo sollten künftig nicht mehr frei erfundenen Platzhalterpfaden folgen, sondern direkt aus diesem Mapping:
- Fachbereich korrekt wählen
- Sektion korrekt wählen
- Seite als Artikel oder Aufgabe korrekt einordnen

## Zusammenfassung
Die Fachplanung passt grundsätzlich gut zum vorhandenen Astro-Modell.

Die wichtigste Korrektur lautet:
- `HTML/CSS` → unter `web-development`
- `Daten & Signale` → als Sektion unter `elektrotechnik`, nicht als konkurrierender Hauptfachbereich

Damit ist jetzt klarer, wie die bereits erarbeiteten Fach- und Aufgabenpläne später konkret in `subjects`, `articles` und `exercises` übersetzt werden sollen.
