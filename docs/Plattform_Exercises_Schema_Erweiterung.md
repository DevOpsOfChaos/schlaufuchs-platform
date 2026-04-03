# Plattform – empfohlene Erweiterung des `exercises`-Schemas

## Zweck dieser Datei
Diese Datei beschreibt, welche **minimalen und mittelfristig sinnvollen Erweiterungen** das bestehende `exercises`-Schema bekommen sollte, damit der geplante globale Aufgaben-Hub und die Fachbereichs-Aufgabenbereiche sauber funktionieren.

Sie ist bewusst **keine sofortige Code-Änderung**, sondern eine repo-nahe Planungsgrundlage.

## Ausgangslage im Repo
Die bestehende `exercises`-Collection enthält aktuell:
- `title`
- `description`
- `subject`
- `level`
- `draft`

Das ist eine gute Minimalbasis, aber für einen echten Aufgaben-Hub noch etwas zu dünn. fileciteturn112file0

## Ziel
Das Schema soll nicht unnötig kompliziert werden.
Es soll nur so weit erweitert werden, dass Aufgaben künftig:
- global gefiltert werden können
- sinnvoll auf Fachseiten erscheinen
- mit Wissensseiten verknüpft werden können
- verschiedene Aufgabenformate sichtbar machen

## Empfehlung: Stufenmodell
## Stufe 1 – sehr sinnvolle Minimalerweiterung
Diese Felder bringen sofort spürbaren Mehrwert und sollten priorisiert geprüft werden:

### `section`
Typ: `string`

#### Zweck
Ordnet die Aufgabe innerhalb des Fachbereichs einem Themenblock zu.

#### Beispiele
- Mathematik → `analysis`
- Linux → `shellskripte`
- Elektrotechnik → `mikrocontroller`
- Web Development → `css`

### `exerciseType`
Typ: Enum oder `string`

#### Zweck
Macht Aufgabenformate sichtbar und filterbar.

#### Beispielwerte
- `rechnen`
- `zuordnen`
- `code`
- `diagnose`
- `challenge`
- `praxis`

### `order`
Typ: `number`

#### Zweck
Erlaubt eine sinnvolle Reihenfolge innerhalb von Themenblöcken oder Fachbereichen.

### `hasSolution`
Typ: `boolean`

#### Zweck
Kennzeichnet, ob eine Aufgabe bereits eine sichtbare Lösung oder einen Lösungsweg hat.

## Stufe 2 – sehr nützliche Erweiterung für Plattformvernetzung
### `relatedArticle`
Typ: `string` oder Referenzlogik

#### Zweck
Verknüpft die Aufgabe mit einem passenden Artikel.

#### Nutzen
- `erst lesen, dann üben`
- Aufgabenhub kann zurück auf Wissensseiten verlinken
- Fach-Landingpages können Aufgaben und Artikel besser koppeln

### `tags`
Typ: `string[]`

#### Zweck
Erlaubt feinere Filterung und spätere Suche.

#### Beispiele
- `ableitung`
- `parabel`
- `chmod`
- `ssh`
- `arduino`

### `estimatedTime`
Typ: `number` oder `string`

#### Zweck
Hilft Lernenden abzuschätzen, wie groß eine Aufgabe ist.

## Stufe 3 – optionale spätere Plattform-Features
### `prerequisites`
Typ: `string[]`

#### Zweck
Zeigt, was man vorher verstanden haben sollte.

### `mode`
Typ: Enum oder `string`

#### Beispiele
- `solo`
- `interactive`
- `guided`
- `project`

### `featured`
Typ: `boolean`

#### Zweck
Ermöglicht kuratierte Einstiegsaufgaben im globalen Aufgaben-Hub.

## Empfohlenes Zielschema – pragmatisch
Eine gute mittlere Zielversion für `exercises` wäre:
- `title`
- `description`
- `subject`
- `section`
- `level`
- `exerciseType`
- `tags`
- `relatedArticle`
- `estimatedTime`
- `hasSolution`
- `order`
- `draft`

## Warum diese Erweiterung sinnvoll ist
## 1) Für den globalen Aufgaben-Hub
Ohne zusätzliche Metadaten kann der Hub zwar Aufgaben auflisten, aber nur sehr grob.

Mit zusätzlichen Feldern kann er:
- nach Fachbereich filtern
- nach Schwierigkeit filtern
- nach Typ filtern
- Fachblöcke besser sortieren
- kuratierte Einstiege anbieten

## 2) Für Fach-Landingpages
Fach-Landingpages brauchen Aufgabenblöcke, die mehr können als „zeige alles aus Fachbereich X“.

Mit `section`, `order` und `exerciseType` können Aufgaben sauberer im Fachkontext platziert werden.

## 3) Für die Suche
Die bestehende Suche arbeitet aktuell mit einem statischen Suchindex.
Wenn Aufgaben später systemisch aus Content-Daten gezogen werden, helfen diese Felder bei:
- Ergebnislabeln
- Filtern
- fachlicher Einordnung

## Repo-basierte wichtige Abstimmung
Das `subject`-Feld muss mit der späteren bereinigten Fachlogik konsistent bleiben.

### Das bedeutet besonders
- `web-development` statt separatem HTML/CSS-Hauptsubject
- `elektrotechnik` als Hauptsubject
- `daten-und-signale` langfristig eher als Sektion statt eigener konkurrierender Fachbereich

## Was vermieden werden sollte
- zu frühe Übermodellierung
- riesige Metadatensets ohne echte UI-Nutzung
- Aufgabenmodell und Artikelmodell unnötig identisch machen
- Felder einführen, die weder Hub noch Suche noch Fachseiten wirklich verwenden

## Empfohlene Reihenfolge für spätere Umsetzung
### Schritt 1
`section`, `exerciseType`, `order`, `hasSolution`

### Schritt 2
`relatedArticle`, `tags`, `estimatedTime`

### Schritt 3
optionale kuratierende oder lernpfadbezogene Felder

## Zusammenfassung
Das bestehende `exercises`-Schema ist eine gute Minimalbasis.

Für den geplanten Aufgaben-Hub und die Fachbereichs-Aufgabenlogik sollte es aber mittelfristig erweitert werden – besonders um:
- `section`
- `exerciseType`
- `order`
- `hasSolution`

Damit wird aus einer bloßen Aufgabenliste ein sauber filter- und vernetzbares Übungssystem.
