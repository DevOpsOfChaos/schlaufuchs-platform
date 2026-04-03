# Schlaufuchs Linux – Migrationsgrundlage Schritt 1

## Ziel
Der alte Linux-Bereich wird **nicht übernommen**. Er dient nur als Quelle für:
- Themen
- Beispiele
- Aufgabenideen
- einzelne prüfenswerte Bilder

## Bestand im alten Linux-Bereich
- 45 HTML-Seiten im Ordner `linux/`
- davon 13 inhaltlich relevante Haupt-/Unterseiten
- mehrere Aufgabenseiten
- 2 leere/defekte HTML-Dateien
- nur 9 tatsächlich referenzierte Bildpfade

## Leere oder unbrauchbare Seiten
- `linux/linux_dateisystem/Dateirechte unter LINUX.html`
- `linux/linux_shell/Linux Shell.html`

## Hauptthemen, die inhaltlich verwertbar sind

### 1. Grundlagen
Quelle:
- `linux/linux_grundlagen/linux_grundlagen.html`

Inhalte:
- Linux basiert auf UNIX
- Mehrbenutzer-System
- Open Source / freie Nutzung
- grundlegende UNIX-Konzepte

Bewertung:
- als **kompakte Einstiegsseite** nutzbar
- Historienteil nur knapp halten

---

### 2. Dateisystem
Quellen:
- `linux/linux_dateisystem/linux_dateisystem.html`
- `linux/linux_dateisystem/linux_dateirechte.html`

Inhalte:
- Verzeichnisstruktur / FHS
- grundlegende Datei- und Ordnerbefehle
- `ls`, `cd`, `pwd`, Dateiinhalte anzeigen
- symbolische Links
- Rechteverwaltung
- Oktalnotation / symbolische Notation

Bewertung:
- **sehr guter Kernbereich**
- daraus lassen sich moderne Unterseiten bauen

---

### 3. Shell
Quellen:
- `linux/linux_shell/linux_shell.html`
- `linux/linux_shell/linux_ssh.html`

Inhalte:
- was ist die Shell
- Prompt
- Shell-Typen
- Ein-/Ausgabe-Kanäle
- Umleitungen / Weiterleitungen
- SSH-Grundidee

Bewertung:
- **gut verwertbar**, aber textlich neu schreiben
- SSH nur als kompakte Infoseite

---

### 4. Shell-Skripte
Quellen:
- `linux/linux_shell/linux_shellskripte.html`
- `linux/linux_shell/linux_shellskripte_ausgaben.html`
- `linux/linux_shell/linux_shellskripte_eingaben.html`
- `linux/linux_shell/linux_shellskripte_kontrollstrukturen.html`

Inhalte:
- Skriptaufbau
- Shebang
- Kommentare
- Variablen
- `echo`
- `read`
- `test`
- `if`, `for`, `while`

Bewertung:
- **inhaltlich wertvoll**
- ideal für neue interaktive Beispiele
- alter Aufbau ist zu kleinteilig und sollte zusammengeführt werden

---

### 5. Benutzerverwaltung
Quellen:
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_dateien.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`

Inhalte:
- Benutzer und Gruppen
- reale Nutzer / Systemnutzer
- root / nobody
- UID / GID
- `/etc/passwd`, `/etc/group`, `/etc/shadow`
- `useradd`, `passwd`, `usermod`

Bewertung:
- **sehr guter Fachblock**
- gut geeignet für spätere Ausbauphase

## Aufgabenmaterial
Es gibt mehrere Aufgabenübersichten und Einzelaufgaben.
Die Inhalte sind als **Ideenpool** brauchbar, aber nicht 1:1.

Nützlich:
- Shell-Aufgaben
- Dateisystem-Aufgaben
- Benutzerverwaltungs-Aufgaben
- Bash-Skript-Aufgaben

Empfehlung:
- Aufgaben später als **Kurztest / Übungsblock / Praxisaufgabe** neu aufbauen
- keine alte Aufgabenstruktur übernehmen

## Bildprüfung

### Behalten / evtl. neu nachbauen
1. `linux/linux_dateisystem/bilder/linux_verzeichnisstruktur_01_web.png`
   - kleines FHS-Schaubild
   - Inhalt brauchbar
   - optisch zu alt/zu klein
   - **Empfehlung: neu als saubere SVG/Grafik nachbauen**

2. `linux/linux_dateisystem/bilder/permissions.png`
   - Thema brauchbar
   - Gestaltung veraltet
   - **Empfehlung: neu als moderne Rechte-Grafik bauen**

3. `linux/linux_grundlagen/bilder/Unix_timeline_en_web.png`
   - fachlich brauchbar
   - eher optional
   - **Empfehlung: nur übernehmen, wenn Historie wirklich gebraucht wird**

### Eher verwerfen
1. `linux/css/JW_Linux_Computer_OC.png`
   - dekorativ, alt, nicht nötig
   - **verwerfen**

2. `linux/linux_shell/bilder/linux_shell_jw_web.png`
   - rein dekorativ, schwach
   - **verwerfen**

3. `linux/css/tux.svg`
   - nur Maskottchen / Deko
   - **nur optional für kleine visuelle Akzente**

### Grundregel für Linux-Bilder
- Code niemals als Bild
- Screenshots möglichst gar nicht
- Diagramme lieber neu als SVG/Komponente
- nur fachlich starke Grafiken prüfen

## Empfohlene neue Linux-Struktur

### Fachbereichsseite Linux
- kurzer Einstieg
- Themenkarten
- kein Ballast

### Themenblock 1: Terminal-Grundlagen
- Was ist die Shell?
- Prompt verstehen
- `pwd`
- `ls`
- `cd`
- Pfade

### Themenblock 2: Dateien und Ordner
- Dateien anzeigen
- Ordner anlegen
- Struktur verstehen
- FHS einfach erklärt
- symbolische Links

### Themenblock 3: Rechte und Nutzer
- Dateirechte
- Besitzer / Gruppe / andere
- Oktalnotation
- Benutzer und Gruppen
- wichtige Systemdateien

### Themenblock 4: Shell-Skripte
- Skriptaufbau
- Variablen
- Ausgaben
- Eingaben
- Bedingungen
- Schleifen

### Ergänzende Infoseiten
- SSH
- UNIX-Hintergrund
- Sicherheit / typische Fehler

## Was direkt nicht übernommen werden sollte
- alte Navigation
- altes Layout
- verstreute Kleinstseiten
- dekorative Altgrafiken
- Impressum / Alttechnik / JS-Struktur

## Empfohlene Reihenfolge für den Neuaufbau
1. Terminal-Grundlagen
2. Dateien und Ordner
3. Rechte
4. Shell-Skripte
5. Benutzerverwaltung
6. SSH / Zusatzwissen

## Nächster praktischer Schritt
Als Nächstes sollte aus dem Altmaterial **nur der Teil Terminal-Grundlagen + Dateisystem** extrahiert werden:
- `linux/linux_shell/linux_shell.html`
- `linux/linux_dateisystem/linux_dateisystem.html`
- `linux/linux_dateisystem/linux_dateirechte.html`

Daraus bauen wir dann:
- finale Themenliste
- neue Seitenzuordnung
- Liste der Altbeispiele, die übernommen werden dürfen
- Liste der Bilder, die neu gemacht werden
