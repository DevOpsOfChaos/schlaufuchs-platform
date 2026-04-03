# Linux – Neuzuordnung für Terminal-Grundlagen und Dateisystem

## Ziel
Aus dem alten Linux-Bereich nur Themen, Beispiele und einzelne brauchbare Bildideen übernehmen.
Kein altes HTML, kein altes Layout, keine alte Navigationslogik.

## Bereits laut neuem Stand schon vorhanden
- `pwd`
- `cd`
- `pfade`
- `ls`
- `dateien-und-ordner`
- `mkdir`
- `hilfe-im-terminal`
- `grundbefehle`
- `dateibefehle`

Diese Inhalte also **nicht doppelt neu anlegen**, sondern nur bei Bedarf fachlich ergänzen.

---

## Alter Quellbereich: Terminal / Shell

### Alte Seiten als Inhaltsquelle
- `linux/linux_shell/linux_shell.html`
- `linux/linux_shell/linux_shell_aufgabe_01.html`
- `linux/linux_shell/linux_shell_aufgabe_02.html`

### Inhalt, den wir übernehmen
- Was eine Shell ist
- Unterschied Shell / Kernel / Terminal grob erklären
- Kommandozeile als textbasierte Systemsteuerung
- Standard-Idee: Eingabe, Ausgabe, Fehlermeldung
- einfache Alltagsbeispiele für Kommandos

### Inhalt, den wir **nicht** direkt übernehmen
- alte Begriffserklärungen mit schwerem Formulierungsstil
- alte Aufgabenblätter 1:1
- alte Bild-/Deko-Logik

### Neue Zuordnung im Relaunch
#### 1. `hilfe-im-terminal`
Bleibt Einstiegsseite für:
- Was ist Terminal?
- Was ist Shell?
- Warum ist die Kommandozeile nützlich?
- Eingabe / Ausgabe / Fehlerausgabe einfach erklären

#### 2. `grundbefehle`
Bleibt Sammelseite für erste Befehle:
- anzeigen
- wechseln
- anlegen
- kopieren
- verschieben
- löschen

#### 3. `dateibefehle`
Bleibt vertiefende Seite:
- praxisnahe Mini-Beispiele
- typische Kombinationen
- einfache Befehlsketten
- Fehlerfälle verständlich zeigen

### Neue interaktive Elemente
- Fake-Konsole mit vorbereiteten Eingaben
- kleine Demo für `stdout` vs `stderr`
- Mini-Szenario: „Datei anzeigen, Ausgabe speichern, Fehler protokollieren"

### Alte Aufgaben, neu verwertbar
Aus `linux_shell_aufgabe_02.html` lässt sich gut ein modernes Praxisbeispiel machen:
- Verzeichnisinhalt anzeigen
- Ausgabe in Datei umleiten
- Datei löschen
- Fehler in Log-Datei schreiben

Das sollte **kein altes Aufgabenblatt** bleiben, sondern ein kompakter interaktiver Praxisblock.

---

## Alter Quellbereich: Dateisystem

### Alte Seiten als Inhaltsquelle
- `linux/linux_dateisystem/linux_dateisystem.html`
- `linux/linux_dateisystem/linux_dateisystem_aufgabe_01.html`
- `linux/linux_aufgaben_dateisystem/linux_dateisystem_aufgabe_02.html`

### Inhalt, den wir übernehmen
- Dateisystem als Organisationsstruktur
- Baumstruktur mit Wurzelverzeichnis `/`
- Grundidee des FHS
- typische wichtige Verzeichnisse:
  - `/home`
  - `/root`
  - `/etc`
  - `/var/log`
  - `/dev`
- Softlink/Symlink nur knapp und modern erklären

### Inhalt, den wir **nicht** direkt übernehmen
- starre Schulbuchtexte
- reine Rechercheaufgaben
- alte FHS-Grafik 1:1

### Neue Zuordnung im Relaunch
#### 1. `pfade`
Bleibt als kompakte Seite für:
- absolute und relative Pfade
- Navigation zwischen Verzeichnissen
- Pfadangaben in Befehlen

#### 2. `dateien-und-ordner`
Bleibt als Grundseite für:
- Dateien vs Ordner
- Struktur im Dateisystem
- Arbeiten mit Verzeichnissen

#### 3. neue oder erweiterte Infoseite: `linux-dateisystem` oder Einbau in bestehende Seitenstruktur
Soll bündeln:
- Baumstruktur des Systems
- Wurzelverzeichnis
- wichtige Standardordner
- FHS kurz und verständlich

Falls keine zusätzliche Seite gewünscht ist, dann Inhalt aufteilen auf:
- `pfade`
- `dateien-und-ordner`
- `grundbefehle`

### Neue interaktive Elemente
- klickbare Verzeichnisbaum-Demo
- kleine „Wo liegt was?“-Zuordnung
- Fake-Konsole für Navigation mit `pwd`, `cd`, `ls`

### Alte Aufgaben, neu verwertbar
Aus `linux_dateisystem_aufgabe_01.html` wird ein modernes Lernmodul:
- Ordnerstruktur für Befehlsübersicht anlegen
- Textdateien zu Befehlen erstellen
- Inhalte mit Editor ergänzen

Aus `linux_dateisystem_aufgabe_02.html` wird ein kurzes Zuordnungsquiz:
- Wo liegen Nutzerverzeichnisse?
- Wo liegt die Passwort-/Konfigurationsverwaltung?
- Wo liegen Logs?
- Wofür steht FHS?

---

## Alter Quellbereich: Rechte

### Alte Seiten als Inhaltsquelle
- `linux/linux_dateisystem/linux_dateirechte.html`
- `linux/linux_dateisystem/Dateirechte unter LINUX.html`

### Inhalt, den wir übernehmen
- `r`, `w`, `x`
- Benutzerklassen `u`, `g`, `o`
- Unterschied Datei / Verzeichnis kurz erklären
- Grundidee von `chmod`

### Inhalt, den wir **nicht** direkt übernehmen
- alte Rechtegrafik 1:1
- überladene Tabellenoptik

### Empfehlung
Nicht in den ersten Schritt mischen.
Rechte als **nächsten Linux-Block** nach Terminal + Dateisystem bauen.

---

## Bildentscheidungen für diesen Schritt

### Neu bauen statt übernehmen
- `linux_verzeichnisstruktur_01_web.png`
  - zu schmal und alt
  - besser als saubere responsive SVG oder React-Komponente

- `linux_shell_jw_web.png`
  - kleine Erklärgrafik, wirkt alt
  - besser direkt im Layout mit Text + einfachem Diagramm lösen

### Optional übernehmen, eher nur als Zwischenlösung
- `Unix_timeline_en_web.png`
  - fachlich okay, aber kein Muss für Kernnavigation
  - eher optional auf einer Grundlagen-Seite

### Später neu bauen
- `permissions.png`
  - Inhalt brauchbar, Darstellung alt
  - besser komplett neu als moderne Rechte-Matrix

### Weglassen
- dekorative Linux-/Tux-Bilder
- alte Computer-Illustrationen

---

## Reihenfolge für die Umsetzung
1. `hilfe-im-terminal` fachlich nachziehen
2. `grundbefehle` auf alte Shell-/Dateisystembeispiele prüfen und ergänzen
3. `dateibefehle` mit echten Praxisblöcken schärfen
4. FHS / Verzeichnisstruktur sauber in bestehende Seiten einbauen oder neue Infoseite anlegen
5. danach erst `rechte` als eigener Block

---

## Klarer Umsetzungssatz
Für **Terminal + Dateisystem** übernehmen wir fast nur:
- Themen
- Begriffe
- Beispiele
- Aufgabenideen

Wir übernehmen **nicht**:
- altes HTML
- alte Seitenstruktur
- alte Deko-Bilder
- Code als Bild
- Aufgabenblätter 1:1
