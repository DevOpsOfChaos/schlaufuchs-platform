# Linux – Neuaufbau Shell, Streams, Umleitungen und Pipes

## Ziel dieses Schritts
Der alte Bereich zur Linux-Shell wird **nicht übernommen**, sondern nur als Inhaltsquelle für Themen, Begriffe und typische Beispiele genutzt.

Für den Relaunch wird der Bereich deutlich sauberer getrennt. Im Altbestand stehen auf einer einzigen Seite noch zusammen:
- Shell-Grundidee
- Prompt
- Shell-Typen
- Kommunikationskanäle / Streams
- Umleitungen
- Pipes
- Shellskripte
- SSH

Genau diese Vermischung lösen wir im neuen Aufbau auf.

## Relevante Altseiten als Inhaltsquelle
### Kernseiten
- `linux/linux_shell/linux_shell.html`

### Aufgaben-/Übungsseiten
- `linux/linux_aufgaben/linux_aufgaben_shell.html`
- `linux/linux_shell/linux_shell_aufgabe_01.html`
- `linux/linux_shell/linux_shell_aufgabe_02.html`

### Bereits ausgelagerte angrenzende Themen
- `linux/linux_shell/linux_shellskripte.html` und Unterseiten
- `linux/linux_shell/linux_ssh.html`

Diese angrenzenden Themen sind für den Relaunch bereits bzw. künftig **eigene Blöcke** und gehören nicht mehr auf dieselbe Grundlagenseite.

## Was wir aus dem Altbestand wirklich mitnehmen
### Inhaltlich brauchbar
- Die Shell ist die textbasierte Kommunikationsschicht zwischen Benutzer und System.
- Der Prompt ist die Eingabeaufforderung.
- Unter Linux ist meist `bash` die typische Einstiegsshell.
- Es gibt drei Standardkanäle:
  - `stdin` (0)
  - `stdout` (1)
  - `stderr` (2)
- Umleitungen mit `>`, `>>`, `2>`, `2>>` sind grundlegend.
- Pipes mit `|` verbinden die Ausgabe eines Befehls mit der Eingabe eines anderen.

### Didaktisch ebenfalls brauchbar
- schriftliche Fragen zur Shell-Grundidee
- kleine Aufgaben zu Umleitungen
- Fehlerausgaben in Datei protokollieren

## Was wir bewusst NICHT übernehmen
- die alte Sammelseite in dieser Form
- die Vermischung mit Shellskripten und SSH
- Bildersatz für textbasierte Inhalte
- zu viel Theorie über Shell-Typen auf der Einstiegsebene
- Aufgabenblätter als eigene Seiten
- veraltete oder unnötig sperrige Formulierungen

## Bildentscheidung
### `linux_shell_jw_web.png`
**Nicht übernehmen.**

Grund:
- typische alte Erklärgrafik
- Shell/Kernel-Beziehung lässt sich moderner und klarer als kleine SVG oder UI-Komponente darstellen
- auf einer neuen Seite ist die Erklärung mit Layout + Kurzdiagramm sauberer als ein Altbild

### Für diesen Block generell
- keine Code- oder Terminalbilder übernehmen
- Streams und Umleitungen lieber als echte Demo-Blöcke oder Mini-Komponenten darstellen

## Neue Seitenzuordnung
## 1) Neue Seite: `linux/shell-und-prompt`
**Ziel:** verstehen, was die Shell ist und was der Prompt bedeutet.

**Inhalte:**
- Unterschied zwischen Betriebssystem, Terminal und Shell in einfacher Sprache
- was die Shell tut
- was der Prompt ist
- warum Befehle hier eingegeben werden
- warum Shell-Arbeit auch ohne grafische Oberfläche funktioniert
- `bash` als typischer Standardfall

**Kernidee:**
Die Shell nimmt Befehle entgegen, wertet sie aus und startet passende Aktionen.

**Nicht hier hinein:**
- ausführliche Umleitungslogik
- Shellskripte im Detail
- SSH im Detail

## 2) Neue Seite: `linux/streams-und-umleitungen`
**Ziel:** Ein- und Ausgaben der Shell verständlich machen.

**Inhalte:**
- `stdin`, `stdout`, `stderr`
- warum normale Ausgabe und Fehler getrennt sind
- Umleitungen:
  - `>`
  - `>>`
  - `2>`
  - `2>>`
- typische Praxisfälle:
  - Ausgabe in Datei schreiben
  - Fehler separat protokollieren
  - bestehende Datei überschreiben vs. anhängen

**Wichtig:**
Gefahr des Überschreibens klar erklären, aber ohne unnötige Dramatisierung.

## 3) Neue Seite: `linux/pipes-und-befehle-kombinieren`
**Ziel:** die Grundidee von Pipes verständlich machen.

**Inhalte:**
- was eine Pipe ist
- wie `|` funktioniert
- Ausgabe eines Befehls als Eingabe für den nächsten
- erste einfache Beispiele

**Praxisbeispiele:**
```bash
ls | wc -l
cat datei.txt | grep fehler
```

**Wichtig:**
Nur Grundprinzip und einfache Beispiele. Keine überladene Tool-Sammlung.

## 4) Spätere Vertiefungsseite: `linux/shell-werkzeuge-kombinieren`
**Ziel:** Shell als Arbeitsumgebung praxisnah erweitern.

**Inhalte:**
- mehrere Befehle sinnvoll verketten
- erste Filter- und Suchwerkzeuge
- kleine Logfile-/Textverarbeitungsbeispiele
- saubere Übergänge zu Shellskripten

## Neue Lernreihenfolge
1. `shell-und-prompt`
2. `streams-und-umleitungen`
3. `pipes-und-befehle-kombinieren`
4. später `shell-werkzeuge-kombinieren`

Angrenzende Themen bleiben bewusst separat:
- `shellskripte-*`
- `ssh-*`

## Klare Trennung zu anderen Linux-Blöcken
### Gehört hierhin
- Shell-Grundidee
- Prompt
- Standardkanäle
- Umleitungen
- Pipes

### Gehört NICHT hierhin
- Dateisystem-Navigation im Detail
- Rechteverwaltung
- `chmod`
- `chown`
- SSH-Login im Detail
- Shellskripte ausführlich
- Benutzerverwaltung

## Interaktive Module statt Altaufgaben
### Modul 1: Terminal, Shell oder Betriebssystem?
Begriffe zuordnen:
- Terminal
- Shell
- Kernel / System

Ziel:
- die Begriffe sauber auseinanderhalten

### Modul 2: Prompt verstehen
Vorgegebene Zeile:
```txt
anna@server:~$ 
```

Fragen:
- Was ist davon der Prompt?
- Wo beginnt die Eingabe?
- Welche Info steckt schon im Prompt?

### Modul 3: Was passiert mit der Ausgabe?
Befehle vergleichen:
```bash
ls > datei.txt
ls >> datei.txt
rm bliblablub.txt 2> error.log
```

Fragen:
- Welche Datei wird überschrieben?
- Welche Ausgabe wird angehängt?
- Wo landen Fehler?

### Modul 4: Pipe-Grundidee
Bausteine zuordnen:
- Befehl 1 erzeugt Text
- Pipe `|`
- Befehl 2 verarbeitet Text weiter

Ziel:
- Funktionsprinzip verstehen, ohne gleich viele Spezialtools zu lernen

### Modul 5: Fehler oder normale Ausgabe?
Kurze Beispiele bewerten:
- Was ist `stdout`?
- Was ist `stderr`?
- Warum ist die Trennung nützlich?

## Didaktische Regeln für den Relaunch
- Terminal und Shell sprachlich sauber trennen
- Prompt früh erklären, weil er ständig sichtbar ist
- Streams nur so technisch wie nötig erklären
- Umleitungen immer mit sichtbarem Ergebnis zeigen
- Pipes erst mit einfachen Befehlen erklären
- Shellskripte und SSH nicht wieder in diesen Block hineinziehen
- keine Bilder für Code oder Terminalausgaben
- Aufgaben aus dem Altbestand in Mini-Module und Lernmodus überführen

## Merksätze für die neuen Seiten
### Shell und Prompt
> Die Shell ist die textbasierte Schnittstelle, über die du dem System Befehle gibst.

### Streams und Umleitungen
> Mit Umleitungen steuerst du, wohin normale Ausgaben und Fehlermeldungen geschrieben werden.

### Pipes und Befehle kombinieren
> Mit einer Pipe leitest du die Ausgabe eines Befehls direkt an den nächsten Befehl weiter.

## Konkreter Nutzen für den Relaunch
Dieser Block ist wichtig, weil er:
- die Linux-Grundlagen sprachlich deutlich sauberer macht
- den alten Sammelblock in echte Lernschritte zerlegt
- ohne Bildübernahme auskommt
- perfekt für sichere Demo-Module geeignet ist
- eine starke Basis für Shellskripte, SSH und spätere Automatisierung schafft
