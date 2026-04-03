# Plattform – Zielseite `aufgaben-hub`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `aufgaben-hub` als **erste repo-nahe Plattformseite**, die aus der bisherigen Planung logisch folgt.

Sie baut ausdrücklich auf dem vorhandenen Astro-Setup auf:
- `exercises`-Collection existiert bereits
- Suche existiert bereits
- Fachbereiche existieren bereits
- Fach-Landingpages sind geplant

Die Seite soll die bisher fehlende sichtbare Aufgaben-Ebene der Plattform schließen.

## Warum genau diese Seite als erster Plattform-Baustein?
Im Repo existiert bereits das inhaltliche Datenmodell für Aufgaben über `exercises`, aber es gibt aktuell noch keine eigene Aufgaben-Seite unter `/aufgaben`. Gleichzeitig fehlt Aufgaben in der globalen Navigation und in der Plattformwahrnehmung noch die Sichtbarkeit als eigener Lernmodus. fileciteturn112file0turn100file0turn94file0

## Rolle der Seite in der Plattform
Die Seite gehört in den Abschnitt:
- Plattform
- globale Meta-Seiten

Sie ist kein Fachbereich und keine Wissensseite, sondern eine **globale Übungs- und Aufgabenübersicht**.

## Geplanter Pfad
### Zielpfad
- `/aufgaben`

### Bedeutung
Die Seite soll ein globaler Einstieg sein für Nutzer, die nicht zuerst lesen, sondern gezielt üben wollen.

## Ziel der Seite
Die Seite soll vier Dinge gleichzeitig leisten:
1. Aufgaben global sichtbar machen
2. Aufgaben nach Fachbereich filterbar machen
3. Aufgaben nach Schwierigkeit und Typ sortierbar machen
4. von hier in Fachbereiche, Artikel und konkrete Übungen weiterführen

## Datenbasis
### Primäre Datenquelle
- `exercises`

### Sekundäre Andockpunkte
- `subjects` für Fachbezug
- optional `articles`, wenn Aufgaben später direkt mit Wissensseiten verknüpft werden

## Wichtigste inhaltliche Annahme
Die Seite darf **nicht** bloß eine lange Liste aller Aufgaben sein.

Sie muss ein echter Aufgaben-Hub sein, der:
- Einstieg
- Struktur
- Filterbarkeit
- Priorisierung

sichtbar macht.

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, dass dies der globale Übungsbereich ist.

### Inhalt
- Titel: `Aufgaben und Übungen`
- kurzer Erklärungssatz
- 2–3 Nutzungswege als Schnelloptionen

### Beispiel-Text
> Hier findest du Aufgaben aus allen Fachbereichen – zum Wiederholen, Anwenden und Vertiefen.

### Schnellaktionen
- `Nach Fachbereich filtern`
- `Mit leichten Aufgaben starten`
- `Zu den neuesten Übungen`

## 2) Schnellfilter oben
### Ziel
Schon im ersten sichtbaren Bereich Orientierung geben.

### Empfohlene Filter
- Fachbereich
- Schwierigkeitsgrad
- Aufgabentyp

### Fachbereiche
- Mathematik
- Informatik
- Linux
- Elektrotechnik
- Web Development

### Schwierigkeitsgrad
- einfach
- mittel
- fortgeschritten

### Aufgabentypen (später)
- Rechnen
- Zuordnen
- Code
- Diagnose
- Challenge
- Praxis

## 3) Aufgaben-Highlights
### Ziel
Nicht nur filtern, sondern kuratierte Einstiege bieten.

### Mögliche Sektionen
- `Beliebte Einstiegsaufgaben`
- `Neu hinzugefügt`
- `Zum Wiederholen`
- `Praxisaufgaben`

### Warum
Damit der Hub nicht nur technisch filterbar ist, sondern auch produktiv führt.

## 4) Fachbereichsblöcke
### Ziel
Die Aufgaben auch fachweise sichtbar machen.

### Aufbau
Pro Fachbereich ein kompakter Block mit:
- Fachname
- Kurzbeschreibung
- 3–6 wichtige Aufgaben
- Link zu allen Aufgaben des Fachbereichs

### Besonders wichtig für
- Mathematik
- Elektrotechnik
- Linux

## 5) Ergebnisliste / Aufgabenraster
### Ziel
Das eigentliche Hub-Herzstück.

### Darstellung pro Karte
- Titel
- Kurzbeschreibung
- Fachbereich
- Schwierigkeitsgrad
- optional Typ
- optional verknüpfter Artikel

### Interaktionen
- filtern
- sortieren
- auf Detailseite wechseln

## 6) Einstieg vs. Vertiefung
### Ziel
Nicht alle Aufgaben gleich behandeln.

### Empfehlung
Zusätzliche Gruppen oder Sortiermöglichkeiten:
- `Zum Einstieg`
- `Zum Festigen`
- `Zum Vertiefen`

## 7) Verknüpfung zu Artikeln
### Ziel
Aufgaben nicht isoliert stehen lassen.

### Empfehlung
Wenn möglich später pro Aufgabe anzeigen:
- `passender Artikel`
- `erst lesen, dann üben`
- `zurück zur Wissensseite`

## 8) Optionaler Bereich: Aufgabenformate erklären
### Ziel
Gerade bei gemischten Formaten kurz Orientierung geben.

### Kleine Legende
- Rechenaufgabe
- Zuordnungsübung
- Code-Aufgabe
- Praxis-Challenge

## Repo-basierte Anforderungen
## 1) `exercises` ist die richtige Datenbasis
Da die Collection bereits existiert, muss der Aufgaben-Hub darauf aufbauen und sie sichtbar machen. fileciteturn112file0

## 2) Die Suche spricht Aufgaben schon an, aber noch nicht systemisch genug
Die Suchseite wirbt bereits mit „Themen, Aufgaben und Lernseiten durchsuchen“, die echte Produktlogik für Aufgaben ist aber noch nicht sichtbar genug. fileciteturn109file0turn100file0

## 3) Die Hauptnavigation hat aktuell keinen globalen Aufgabenpunkt
Dadurch fehlt dem Hub noch sein natürlicher Einstieg in die Plattform-IA. fileciteturn94file0

## Empfohlene UI-Logik
## Variante für Phase 1
- statische oder halb-dynamische Seite
- liest `exercises`
- filtert client- oder buildseitig nach Fach und Level
- zeigt Aufgaben in Kartenform

## Variante für Phase 2
- stärker collection-getrieben
- mit Typen, Tags und Verknüpfungen
- mit optionaler Verbindung zu `articles`

## Minimale Inhaltsanforderung für den Launch des Hubs
Damit die Seite nicht leer wirkt, sollte sie mindestens zeigen:
- mindestens 1–3 Aufgaben je Hauptfachbereich
- sichtbare Fachfilter
- sichtbare Schwierigkeitsfilter
- Aufgabenkarten mit klarer Kennzeichnung

## Priorität für die ersten Inhalte
### Sehr hoch
- Mathematik
- Elektrotechnik
- Linux

### Danach
- Web Development
- Informatik

## Was vermieden werden sollte
- eine reine Datenliste ohne Einstieg
- nur ein Filterformular ohne kuratierte Einstiege
- Aufgaben ohne Fachkontext
- Aufgabenhub ohne Rückbezug zu Fach-Landingpages
- News oder Suche prominenter als Üben, obwohl Aufgaben hier Hauptzweck sind

## Spätere Ausbaustufen
### Stufe 1
Globaler Aufgaben-Hub mit Fach- und Levelfilter

### Stufe 2
Verknüpfung mit Artikeln und Fach-Landingpages

### Stufe 3
Interaktive Aufgabenformate und Typfilter

### Stufe 4
Persönlichere Lernpfade / Wiedereinstieg / zuletzt bearbeitet

## Warum diese Seite der beste erste Plattform-Baustein ist
Diese Seite ist der beste nächste Meta-Schritt, weil sie:
- schon vorhandene Repo-Strukturen nutzt
- eine echte Produktlücke schließt
- die Aufgabenstrategie sichtbar macht
- alle Fachbereiche miteinander verbindet
- und die spätere Umsetzungsphase stark entlastet

## Zusammenfassung
Der Aufgaben-Hub unter `/aufgaben` ist die sinnvollste erste repo-nahe Plattformseite, weil er das vorhandene `exercises`-Modell endlich sichtbar in die Produktoberfläche übersetzt.
