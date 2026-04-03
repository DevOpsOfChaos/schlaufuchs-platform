# Linux – Zielseite `dateirechte-grundlagen`

## Zweck dieser Datei
Diese Datei beschreibt **eine konkrete Zielseite** für den Relaunch.

Sie ist kein Altseiten-Import, sondern eine saubere Produktspezifikation für die neue Wissensseite `linux/dateirechte-grundlagen`.

Ziel ist eine fachlich saubere, verständliche und moderne Einsteigerseite, die das Rechte-Modell in Linux erklärt, ohne direkt in Admin-Tiefe oder Systemdateien abzurutschen.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Rechte / Benutzerlogik

Sie kommt **nach** grundlegender Terminal- und Dateisystemorientierung und **vor**:
- `chmod`
- `benutzer-und-gruppen`
- `dateibesitz-verstehen`

Damit ist sie die eigentliche Einstiegsseite für das Thema **Rechte**.

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass Linux-Rechte festlegen, wer etwas mit einer Datei oder einem Ordner tun darf
- dass es drei Rechte gibt: `r`, `w`, `x`
- dass diese Rechte für drei Klassen gelten: Eigentümer, Gruppe, andere
- wie man einfache Rechteangaben wie `rwxr-xr--` grob liest
- warum Rechte für Dateien und Verzeichnisse leicht unterschiedlich wirken

Die Seite soll **noch nicht** primär lehren, wie man Rechte ändert. Das kommt auf `chmod`.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- tiefe Erklärung von `chmod`-Syntax
- `chown`
- `chgrp`
- `/etc/passwd`
- `/etc/group`
- `/etc/shadow`
- Sonderrechte wie `setuid`, `setgid`, Sticky Bit im Detail
- Server-/Admin-Sonderfälle
- lange historische Herleitungen

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_dateisystem/linux_dateirechte.html`
- `linux/linux_dateisystem/linux_dateirechte_aufgabe_01.html`
- `linux/linux_dateisystem/linux_dateirechte_aufgabe_02.html`
- indirekt angrenzend: Benutzerverwaltungsseiten aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- klar und menschlich formuliert sein
- fachlich korrekt bleiben
- kurze, saubere Code-/Terminalblöcke nutzen
- sich visuell an die neue Schlaufuchs-Optik anlehnen
- eine starke visuelle Rechte-Erklärung enthalten
- den Lernmodus sinnvoll ergänzen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, worum es geht.

### Inhalt
- Titel: `Dateirechte verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Infopunkte
- optional Rück-Button im bestehenden Muster

### Beispiel-Einstiegstext
> Unter Linux ist nicht automatisch jeder Zugriff erlaubt. Dateirechte legen fest, wer eine Datei lesen, verändern oder ausführen darf.

## 2) Abschnitt: Warum gibt es Dateirechte?
### Ziel
Den Sinn der Rechte erklären, bevor die Zeichen eingeführt werden.

### Kernpunkte
- Linux ist ein Mehrbenutzersystem
- nicht alle Nutzer sollen alles ändern dürfen
- Rechte schützen Dateien, Ordner und Arbeitsbereiche
- Rechte sorgen für Ordnung in Projekten und Systemen

### Stil
- kurz
- alltagsnah
- keine Paniksprache

## 3) Abschnitt: Die drei Rechte `r`, `w`, `x`
### Ziel
Die drei Grundrechte isoliert und verständlich erklären.

### Erklärung
- `r` = lesen
- `w` = schreiben / ändern
- `x` = ausführen / betreten

### Wichtig
Unterschied Datei vs. Verzeichnis direkt knapp mitdenken:
- bei Datei: `x` = Datei ausführbar
- bei Verzeichnis: `x` = Verzeichnis betreten / darin arbeiten

### Vorschlag für Darstellung
Drei kleine Karten oder Kacheln:
- Lesen
- Schreiben
- Ausführen

Mit je einem einfachen Beispiel.

## 4) Abschnitt: Für wen gelten diese Rechte?
### Ziel
Die drei Klassen sauber einführen.

### Klassen
- Eigentümer (`u`)
- Gruppe (`g`)
- Andere (`o`)

### Erklärung
- Eigentümer: wem die Datei gehört
- Gruppe: gemeinsame Rechte für eine definierte Nutzergruppe
- Andere: alle übrigen Nutzer

### Vorschlag für Darstellung
Eine kompakte Dreispalten-Grafik oder UI-Komponente:
- Eigentümer
- Gruppe
- Andere

## 5) Abschnitt: Rechte lesen – Beispiel `rwxr-xr--`
### Ziel
Die Zeichenkette erstmals lesbar machen.

### Inhalt
- in Dreierblöcke aufteilen
- erster Block: Eigentümer
- zweiter Block: Gruppe
- dritter Block: Andere

### Beispielerklärung
`rwxr-xr--`
- Eigentümer: lesen, schreiben, ausführen
- Gruppe: lesen, ausführen
- Andere: lesen

### Wichtig
Hier **noch nicht** zu tief in Zahlennotation abgleiten. Höchstens ein kurzer Vorausblick:
- Diese Rechte kann man später auch numerisch schreiben.

## 6) Abschnitt: Datei und Verzeichnis unterscheiden
### Ziel
Einen der häufigsten Stolpersteine früh entschärfen.

### Inhalt
Beispielvergleich:
- Datei: `x` bedeutet ausführbar
- Verzeichnis: `x` bedeutet betretbar / zugreifbar

### Form
Kurzer Vergleichsblock mit zwei Spalten:
- Datei
- Verzeichnis

## 7) Abschnitt: Rechte in `ls -l` erkennen
### Ziel
Rechte in realen Terminalausgaben wiedererkennen.

### Beispielblock
```txt
-rwxr-xr-- 1 anna team 1200 Apr 3 10:15 script.sh
drwxr-x--- 2 anna team 4096 Apr 3 10:20 projekt
```

### Erklärung
- erste Stelle zeigt Datei oder Verzeichnis
- danach folgen die Rechteblöcke
- später kommen weitere Informationen wie Eigentümer und Gruppe

### Wichtig
Hier nur lesen lernen, nicht alles auf einmal erklären.

## 8) Abschnitt: Typische Beispiele aus der Praxis
### Ziel
Das Thema alltagsnah machen.

### Beispiele
- ein Skript darf nur der Eigentümer ändern
- ein Projektordner ist für eine Gruppe zugänglich
- eine private Datei ist nicht für alle lesbar

### Form
3 kompakte Beispielkarten statt Fließtext

## 9) Lernmodus / interaktive Module
Die Seite sollte direkt 2–3 kleine interaktive Einheiten bekommen.

### Modul A: Rechte-Kacheln zuordnen
Nutzer ordnet zu:
- `r`
- `w`
- `x`

mit Bedeutungen:
- lesen
- ändern
- ausführen / betreten

### Modul B: Rechtekette lesen
Beispiel:
`rwxr-xr--`

Fragen:
- Was darf der Eigentümer?
- Was darf die Gruppe?
- Was dürfen andere?

### Modul C: Datei oder Verzeichnis?
Beispiel:
```txt
-rw-r--r--
drwxr-xr-x
```

Fragen:
- Welche Zeile ist eine Datei?
- Welche ist ein Verzeichnis?
- Was bedeutet `x` jeweils?

### Modul D: Mini-`ls -l`-Lesetest
Kurze Ausgabe lesen und Kerninfos erkennen.

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Dateirechte legen fest, **wer** eine Datei oder einen Ordner lesen, ändern oder ausführen darf.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang zur nächsten Seite:
- „Im nächsten Schritt lernst du, wie man Rechte mit `chmod` gezielt verändert.“

## Tonalität und Schreibregeln
Die Seite soll:
- klar und ruhig formuliert sein
- keine unnötigen Fachwörter häufen
- Fachbegriffe nur dort einsetzen, wo sie sofort erklärt werden
- nicht belehrend oder trocken wirken
- Einsteiger ernst nehmen, aber nicht überfordern

## Visuelle Regeln
- keine überbreiten Codefenster
- Rechteblöcke gut lesbar in Light und Dark Mode
- kleine kompakte Vergleichskomponenten statt großer Wandgrafiken
- nicht mit Tabellen überladen
- mobile Umbrüche sauber mitdenken

## Bild- und Grafikentscheidung
### Altbild `permissions.png`
**Nicht direkt übernehmen.**

### Stattdessen neu bauen
Am besten als kleine eigene UI-/SVG-Komponente:
- 3 Spalten: Eigentümer / Gruppe / Andere
- 3 Zeilen: Lesen / Schreiben / Ausführen
- aktiv/inaktiv visuell klar
- optional Live-Ausgabe einer Rechtekette

### Warum
- fachlich präziser
- optisch konsistenter
- besser in Light/Dark Mode
- einfacher erweiterbar für Lernmodus und `chmod`

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `x` bei Dateien und Verzeichnissen nicht gleich erklären, sondern bewusst unterscheiden
- Eigentümer / Gruppe / Andere nicht mit `chmod`-Syntax verwechseln
- Rechtebeschreibung nicht mit Besitzwechsel vermischen
- `rwxr-xr--` langsam lesen, nicht zu früh zu viele Sonderfälle ergänzen

## Verbindung zu anderen Zielseiten
### Direkte Folgeseiten
- `linux/chmod`
- `linux/benutzer-und-gruppen`

### Spätere Anschlussseiten
- `linux/dateibesitz-verstehen`
- `linux/chown`
- `linux/chgrp`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 visuelle Rechte-Komponente
- 2–4 Lernmodus-Elemente
- 1 Merksatz-Block
- 1 kurzer Übergang zur nächsten Seite

## Warum diese Seite ein guter erster Build-Kandidat ist
Diese Zielseite eignet sich besonders gut als erste echte Umsetzung, weil sie:
- fachlich zentral ist
- wenig Altmaterial technisch braucht
- fast ohne Bildübernahme auskommt
- visuell gut als neue Komponente gebaut werden kann
- viele spätere Linux-Seiten vorbereitet
