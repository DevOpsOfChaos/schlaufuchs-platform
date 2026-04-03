# Linux – Neuaufbau Shellskripte

## Ziel dieses Schritts
Der alte Bereich zu Shellskripten wird **nicht übernommen**, sondern nur als Quelle für Themen, Beispielideen und typische Anfängeraufgaben genutzt.

Für den Relaunch wird der Bereich deutlich schlanker, klarer und moderner aufgebaut. Statt vieler verstreuter Mini-Seiten und Aufgabenblätter soll es wenige starke Zielseiten mit echter Lernlogik geben.

## Relevante Altseiten als Inhaltsquelle
### Kernseiten
- `linux/linux_shell/linux_shellskripte.html`
- `linux/linux_shell/linux_shellskripte_ausgaben.html`
- `linux/linux_shell/linux_shellskripte_eingaben.html`
- `linux/linux_shell/linux_shellskripte_kontrollstrukturen.html`

### Aufgaben-/Übungsseiten
- `linux/linux_shell/linux_shellskripte_aufgabe_01.html`
- `linux/linux_shell/linux_shellskripte_aufgabe_02.html`
- `linux/linux_shell/linux_shellskripte_aufgabe_03.html`
- `linux/linux_shell/linux_shellskripte_aufgabe_04.html`
- `linux/linux_aufgaben_bashSkripte/linux_bashSkripte_aufgabe_05.html`
- `linux/linux_aufgaben_bashSkripte/linux_bashSkripte_aufgabe_06.html`
- weitere spätere Aufgaben bis `..._aufgabe_15.html`

## Was wir aus dem Altbestand wirklich mitnehmen
### Inhaltlich brauchbar
- Was ein Shellskript ist
- Shebang / Interpreter-Idee
- Skriptdatei erstellen
- Skript ausführbar machen
- Kommentare
- Variablen-Grundlagen
- `echo` für Ausgaben
- `read` für Eingaben
- `test` / `[ ]` für Bedingungen
- `if`, `for`, `while` als Grundformen

### Ebenfalls brauchbar als Übungsquelle
- kleine Konsolenbeispiele
- einfache Variablenübungen
- kleine Eingabe-/Ausgabe-Skripte
- erste Dateiprüfungen
- kleine Ablaufsteuerung

## Was wir bewusst NICHT übernehmen
- die alte Seitenstruktur
- die vielen einzelnen Aufgabenblätter als eigene Seiten
- unnötige Wiederholungen zwischen Shell, Skript, Ausgabe und Aufgaben
- veraltete Formulierungen
- unruhige oder kleinteilige Didaktik
- Bildersatz für Inhalte, die besser als echter Codeblock darstellbar sind

## Bildentscheidung
Für diesen Themenblock wird **kein Altbild übernommen**.

Grund:
- Shellskripte sind ein textbasiertes Thema
- Code und Terminaldarstellung müssen echte UI-Komponenten sein
- Bilder würden hier fast immer nur Code oder Konsole schlechter ersetzen

## Neue Seitenzuordnung
## 1) Neue Seite: `linux/shellskripte-grundlagen`
**Ziel:** Einstieg in Shellskripte.

**Inhalte:**
- Was ist ein Shellskript?
- Warum nutzt man Skripte?
- Textdatei + Befehlsfolge + Interpreter
- Shebang `#!/bin/bash`
- Skript speichern
- Skript ausführen
- Ausführungsrecht kurz einordnen
- Kommentare

**Beispielkern:**
```bash
#!/bin/bash
echo "Hallo Welt"
```

**Nicht hier hinein:**
- lange Kontrollstrukturen
- zu viele Variablendetails
- komplexe Dateilogik

## 2) Neue Seite: `linux/shellskripte-ausgaben-und-variablen`
**Ziel:** erste echte Skriptkommunikation.

**Inhalte:**
- `echo`
- Variablen lesen und ausgeben
- einfache Umgebungsvariablen wie `$USER`, `$HOME`, `$PWD`
- Quoting-Grundidee
- typische Anfängerfehler

**Passende Altideen:**
- Ausgabe von Variablen
- Unterschied zwischen `echo $USER` und `echo USER`
- kleines Begrüßungsskript

## 3) Neue Seite: `linux/shellskripte-eingaben`
**Ziel:** Benutzereingaben sauber einführen.

**Inhalte:**
- `read`
- Prompt mit `read -p`
- Eingabe in Variablen speichern
- einfache interaktive Skripte

**Beispielkern:**
```bash
#!/bin/bash
read -p "Wie heißt du? " name
echo "Hallo $name"
```

## 4) Neue Seite: `linux/shellskripte-bedingungen-und-schleifen`
**Ziel:** Ablaufsteuerung auf Einstiegsebene.

**Inhalte:**
- `test` bzw. `[ ]`
- einfache Bedingungen
- `if`
- `for`
- `while`
- kleine Praxisbeispiele

**Wichtig:**
Nur Grundformen. Nicht zu früh zu viele Sonderfälle, Operatoren und Syntaxvarianten mischen.

## 5) Spätere Vertiefungsseite: `linux/shellskripte-dateien-und-automation`
**Ziel:** spätere Zusammenführung realistischer Mini-Automationen.

**Inhalte:**
- Dateien prüfen
- einfache Kopier-/Sortieraufgaben
- kleine Automationsabläufe
- saubere Verbindung zu `chmod`, Rechten und Dateisystem

**Hierhin gehören später Altaufgaben wie:**
- Textdateien in Unterordner kopieren
- Ausgaben zusätzlich in Datei schreiben
- Datei existiert / existiert nicht

## Neue Lernreihenfolge
1. `shellskripte-grundlagen`
2. `shellskripte-ausgaben-und-variablen`
3. `shellskripte-eingaben`
4. `shellskripte-bedingungen-und-schleifen`
5. später `shellskripte-dateien-und-automation`

So bleibt der Aufbau logisch:
- erst Skriptidee
- dann Ausgabe
- dann Variablen
- dann Eingabe
- dann Steuerung
- dann Praxisfälle

## Alte Aufgaben sinnvoll neu verteilen
### Früh nutzbar
#### Aus den Altaufgaben direkt übernehmbar als Idee
- Kommentar / Shebang erkennen
- Variablen wie `$PATH`, `$PWD`, `$HOME`, `$HOST` ausgeben
- Unterschied zwischen `$USER` und `USER`
- kleines Begrüßungsskript

Diese Aufgaben gehören **nicht** als eigene Seiten, sondern:
- in interaktive Lernkarten
- in Mini-Quizfragen
- in eingebettete Übungsblöcke

### Später nutzbar
- Datei mit `read` einlesen und Existenz prüfen
- Textdateien kopieren und Rechte anpassen
- Ausgabe zusätzlich in Datei schreiben

Diese Aufgaben gehören eher in:
- Vertiefungsbereich
- Lernmodus
- sichere Fake-Konsole

## Interaktive Module statt alter Aufgabenblätter
### Modul 1: Shebang-Check
Zeige kurze Skriptanfänge und frage:
- welcher Einstieg ist korrekt?
- was ist ein Kommentar?
- warum ist `#!/bin/bash` sinnvoll?

### Modul 2: Variablen-Ausgabe
Vorgegebene Befehle:
```bash
echo $USER
echo USER
echo $HOME
```

Fragen:
- Welche Zeile gibt Variableninhalt aus?
- Welche gibt nur Text aus?

### Modul 3: Mini-Skript-Bausteine sortieren
Bausteine wie:
- Shebang
- Kommentar
- `read`
- `echo`

Nutzer ordnet sie zu einem kleinen Skript.

### Modul 4: Bedingung verstehen
Beispiel:
```bash
if [ -f "$datei" ]; then
  echo "Datei gefunden"
fi
```

Fragen:
- Was prüft `-f`?
- Wann erscheint die Ausgabe?

### Modul 5: Schleifen-Grundidee
Einfaches `for`- oder `while`-Beispiel mit Erklärung, ohne direkt in komplexe Syntax abzurutschen.

## Didaktische Regeln für den Relaunch
- keine riesigen Codewüsten
- Codeblöcke kurz und lesbar halten
- jede neue Syntax erst mit einem Minimalbeispiel erklären
- `chmod` nur dort erwähnen, wo das Skript ausführbar gemacht wird
- Shellskript-Seiten nicht mit kompletter Linux-Administration vermischen
- alte Aufgaben nicht 1:1 übernehmen, sondern in UI-Module umformen
- keine Bilder für Code oder Terminalinhalte

## Merksätze für die neuen Seiten
### Shellskripte Grundlagen
> Ein Shellskript ist eine Textdatei, in der mehrere Terminalbefehle in sinnvoller Reihenfolge stehen.

### Ausgaben und Variablen
> Mit `echo` gibst du Text oder Variableninhalte aus und machst dein Skript verständlich.

### Eingaben
> Mit `read` kann dein Skript Informationen direkt vom Benutzer abfragen.

### Bedingungen und Schleifen
> Bedingungen und Schleifen sorgen dafür, dass ein Skript auf Situationen reagieren und Abläufe wiederholen kann.

## Konkreter Nutzen für den Relaunch
Dieser Block eignet sich sehr gut für den weiteren Ausbau, weil er:
- ohne Bildübernahme auskommt
- viele alte Aufgaben in moderne Module umwandeln kann
- gut zum Lernmodus passt
- mit Fake-Konsole und sicheren Codebeispielen stark wirkt
- einen klaren Übergang von Linux-Grundlagen zu Automatisierung schafft
