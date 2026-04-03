# Plattform – Iststand im Repo und nächste Meta-Planung

## Zweck dieser Datei
Diese Datei hält den **aktuellen Iststand der bereits vorhandenen Meta- und Plattformseiten im Repo** fest.

Sie ersetzt keine Fachplanung, sondern ergänzt sie:
- Was existiert bereits wirklich im Code?
- Welche Meta-Seiten sind schon angelegt?
- Welche Strukturen sind schon vorhanden?
- Welche Planung muss sich daran anpassen?

## Ausgangspunkt
Die bisherige Fachplanung wurde stark vom Altbestand her gedacht.

Im Repo selbst existiert aber bereits eine neue Plattformstruktur. Deshalb muss die weitere Meta-Planung **auf dem vorhandenen Astro-Aufbau** aufsetzen und darf nicht daran vorbeiplanen.

## Festgestellter Iststand im Repo
## 1) Technische Basis
Das Projekt läuft bereits auf **Astro**.

### Bestätigte Hinweise
- `package.json` nutzt `astro dev`, `astro build` und `astro preview`
- die Plattform ist also keine klassische Next-Struktur, sondern eine Astro-Struktur

### Konsequenz
Die weitere Planung für Meta-Seiten, Fachbereiche und Content muss sich an folgendem Muster orientieren:
- `src/pages/*`
- `src/layouts/*`
- `src/components/*`
- `src/content/*`
- `astro:content`-Collections

## 2) Globales Layout existiert bereits
Es gibt bereits ein zentrales Layout mit:
- `BaseLayout.astro`
- `Topbar.astro`
- `Footer.astro`
- Theme-Umschaltung
- Learn-Mode-Umschaltung

### Konsequenz
Die weitere Meta-Planung braucht **kein neues Grundlayout von null**.
Stattdessen muss sie auf der vorhandenen globalen Shell aufbauen.

## 3) Startseite existiert bereits
Die Startseite ist bereits angelegt und enthält:
- Hero-Bereich
- Sucheinstieg
- Fachbereichskarten
- Maskottchen-Visual

### Besonders wichtig
Die Startseite ist **nicht nur Platzhalter**, sondern schon eine reale Meta-Seite mit klarer Struktur.

### Konsequenz
Die weitere Planung für die Plattform muss die Startseite eher:
- verfeinern,
- inhaltlich angleichen,
- fachlich bereinigen,

statt sie komplett neu zu erfinden.

## 4) Fachbereichsübersicht existiert bereits
Es gibt bereits eine Seite für:
- `fachbereiche/index.astro`

Diese nutzt bereits eine Content-Collection für `subjects`.

### Konsequenz
Fachbereiche sind im Repo schon als **strukturierter Content-Typ** gedacht, nicht nur als lose statische Seiten.

Das ist wichtig für die weitere Planung:
- Fach-Landingpages sollten an `subjects` andocken.
- Die bisher geplanten Fachbereiche müssen mit den vorhandenen Slugs und Collections abgeglichen werden.

## 5) Suche existiert bereits
Es gibt bereits eine Suchseite mit:
- Suchfeld
- Schnellfiltern
- Karten-Resultaten
- einfachem clientseitigem Filterverhalten

### Konsequenz
Die Suche muss **nicht von null geplant** werden.

Aber:
- sie ist aktuell eher noch eine strukturierte Vorstufe
- sie sollte später sauber mit echten Fach-, Artikel- und Aufgabeninhalten verbunden werden

## 6) News existiert bereits
Es gibt bereits eine News-Seite mit:
- Feed-Struktur
- Filterchips
- Dummy-Einträgen

### Konsequenz
News ist bereits als Plattform-Bereich angelegt.
Die Meta-Planung muss also nicht erst entscheiden, **ob** es News geben soll, sondern eher:
- wie News in die Gesamtplattform eingebunden wird
- ob News in der Hauptnavigation so prominent bleiben soll
- wie echte Inhalte später aus der Collection kommen

## 7) Content-Collections existieren bereits
Im Repo sind bereits Content-Collections angelegt für:
- `subjects`
- `articles`
- `exercises`
- `news`

### Wichtig
Das ist der wichtigste Fund für die weitere Planung.

Denn damit ist klar:
- Fachbereiche sollen über `subjects` verwaltet werden
- Wissensseiten über `articles`
- Aufgaben über `exercises`
- News über `news`

### Konsequenz
Die bisherige Fachplanung in `docs/` muss künftig so gelesen werden:
- Zielseiten = spätere Inhalte für `articles`
- Aufgabenmigration = spätere Inhalte für `exercises`
- Fach-Masterpläne = Strukturvorlage für `subjects` und Bereichs-Landingpages

## 8) Hauptnavigation existiert bereits
Die Topbar hat aktuell Einträge für:
- Start
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development
- News

Zusätzlich:
- Such-Icon
- Learn-Mode-Toggle
- Präsentationsmodus-Platzhalter
- Theme-Toggle

## Auffällige Punkte im Iststand
### A. Kein eigener globaler Aufgabenpunkt in der Hauptnavigation
Obwohl `exercises` bereits als Collection existiert, gibt es aktuell keinen klaren globalen Navigationspunkt für Aufgaben.

### B. Web heißt im Repo aktuell `Web Development`
In der bisherigen Fachplanung wurde häufiger `HTML/CSS` gedacht.
Im Repo ist aber bereits die fachliche Oberbezeichnung `Web Development` angelegt.

### C. Startseite nutzt sowohl `Daten & Signale` als auch `Elektrotechnik`
Auf der Startseite tauchen aktuell beide Karten auf, beide verweisen aber auf Elektrotechnik-nahe Struktur.
Das muss später fachlich bereinigt werden.

### D. News ist bereits prominenter als Aufgaben
Das ist kein Fehler, aber eine bewusste Produktentscheidung, die überprüft werden sollte.

## Neue Schlussfolgerung für die Meta-Planung
Die Plattform muss jetzt **nicht mehr abstrakt neu geplant**, sondern auf dem vorhandenen Repo-Iststand weitergeführt werden.

## Was bereits vorhanden ist und weitergenutzt werden sollte
- `BaseLayout`
- Topbar / Footer
- Startseite
- Fachbereichsübersicht
- Suche
- News
- Content-Collections
- Learn Mode als globaler Zustand

## Was jetzt als Nächstes geplant werden sollte
## 1) Mapping zwischen Fachplanung und Content-Modell
Es braucht eine klare Zuordnung:
- Fachbereichs-Masterpläne → `subjects`
- Wissensseiten → `articles`
- Aufgabenmigration → `exercises`

## 2) Fachbereichs-Landingpages konkretisieren
Da Fachbereiche bereits im Repo vorgesehen sind, sollte der nächste Meta-Schritt sein:
- pro Fachbereich definieren,
  - welche Hero-Logik er hat,
  - welche Sektionen er zeigt,
  - wie Artikel und Aufgaben dort auftauchen,
  - wie Tiefenstruktur sichtbar wird

## 3) Aufgaben als sichtbare Plattform-Ebene nachziehen
Da Aufgaben in der neuen Strategie ausdrücklich erhalten bleiben und `exercises` bereits als Collection existiert, fehlt vor allem noch die saubere Plattformlogik dafür:
- globale Aufgabenübersicht?
- Aufgaben pro Fachbereich?
- Aufgaben direkt unter Fachbereichs-Landingpages?
- getrennte Übungs-Hubs?

## 4) Navigation schärfen
Die Hauptnavigation sollte später gezielt geprüft werden in Bezug auf:
- Fachbezeichnungen
- News-Priorität
- Aufgaben-Sichtbarkeit
- Verhältnis zwischen globaler und fachspezifischer Navigation

## 5) Startseite fachlich angleichen
Die Startseite ist schon gut, sollte aber später mit der neuen Fachplanung abgeglichen werden:
- Slugs
- Fachnamen
- Kartenlogik
- Trennung bzw. Verbindung von Elektrotechnik und Daten/Signale

## Empfohlene nächste konkrete Planungsdateien
Nach dieser Iststandsdatei sind die sinnvollsten nächsten Repo-basierten Planungen:

### A. `Plattform_Fachbereichs_Landingpages.md`
- einheitliche Struktur für Fach-Landingpages
- Hero
- Themenblöcke
- Wissensseiten
- Aufgabenblöcke
- Einstieg / Vertiefung

### B. `Plattform_Aufgaben_Integration.md`
- wie `exercises` sichtbar in die Plattform eingebaut werden
- global vs. fachspezifisch
- Aufgabenlisten, Filter, Schwierigkeitsgrade

### C. `Plattform_Navigation_und_Informationsarchitektur.md`
- Hauptnavigation
- Fachnavigation
- News, Suche, Aufgaben
- Prioritäten im UI

## Zusammenfassung
Die wichtigste neue Erkenntnis lautet:

**Die Meta-Struktur der Plattform ist im Repo bereits deutlich weiter als bisher angenommen.**

Deshalb muss die weitere Planung ab jetzt:
- auf Astro aufsetzen,
- die vorhandenen Collections respektieren,
- Startseite, Suche, News und Fachbereiche weiterentwickeln,
- und vor allem die fehlende Aufgaben-Sichtbarkeit als nächsten Meta-Schritt sauber ergänzen.
