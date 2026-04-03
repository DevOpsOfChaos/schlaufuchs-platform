# Linux – Zielseite `shellskripte-grundlagen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/shellskripte-grundlagen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einsteigerseite zu Shellskripten unter Linux.

Die Seite soll erklären, was ein Shellskript ist, warum es nützlich ist und wie ein einfaches Skript aufgebaut und ausgeführt wird.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Shellskripte

Sie kommt sinnvoll **nach**:
- `linux/shell-und-prompt`
- `linux/streams-und-umleitungen`
- erste Terminal-Grundlagen

Und **vor**:
- `linux/shellskripte-ausgaben-und-variablen`
- `linux/shellskripte-eingaben`
- `linux/shellskripte-bedingungen-und-schleifen`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was ein Shellskript ist
- warum man mehrere Befehle in einer Datei sammeln kann
- was der Shebang `#!/bin/bash` bedeutet
- wie ein einfaches Skript gespeichert und gestartet wird
- warum Ausführungsrechte bei Skripten wichtig sind
- wozu Kommentare in Skripten dienen

Die Seite soll **noch nicht** tief in Variablen, Eingaben oder Kontrollstrukturen abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- Variablen im Detail
- `read` im Detail
- `if`, `for`, `while` im Detail
- komplexe Dateiprüfungen
- fortgeschrittene Shell-Optionen
- Debugging als Schwerpunkt
- lange Vergleiche zwischen Bash und anderen Shells

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_shellskripte.html`
- `linux/linux_shell/linux_shellskripte_aufgabe_01.html`
- `linux/linux_shell/linux_shellskripte_aufgabe_02.html`
- `linux/linux_aufgaben_bashSkripte/linux_bashSkripte_aufgabe_05.html`
- weitere Altaufgaben als reine Ideenquelle

## Zielcharakter der neuen Seite
Die Seite soll:
- Shellskripte einfach und motivierend einführen
- mit kurzen, echten Codebeispielen arbeiten
- klar zwischen Skriptdatei und interaktiver Shell unterscheiden
- direkt an `chmod` andocken, ohne den Fokus zu verlieren
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, warum Shellskripte nützlich sind.

### Inhalt
- Titel: `Shellskripte verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Ein Shellskript ist eine Textdatei, in der mehrere Terminalbefehle in sinnvoller Reihenfolge stehen. So kannst du Abläufe wiederverwenden und automatisieren.

## 2) Abschnitt: Was ist ein Shellskript?
### Ziel
Die Grundidee verständlich erklären.

### Kernpunkte
- ein Shellskript ist eine Textdatei
- darin stehen Shell-Befehle
- diese Befehle können nacheinander ausgeführt werden
- dadurch spart man Wiederholungen und macht Abläufe nachvollziehbar

## 3) Abschnitt: Warum sind Shellskripte praktisch?
### Ziel
Den Mehrwert greifbar machen.

### Beispiele
- wiederkehrende Befehle nicht jedes Mal neu tippen
- kleine Abläufe strukturieren
- Eingaben, Ausgaben und Prüfungen später kombinieren
- einfache Automatisierung vorbereiten

## 4) Abschnitt: Der erste Zeilenanfang – Shebang
### Ziel
`#!/bin/bash` knapp und verständlich erklären.

### Beispiel
```bash
#!/bin/bash
```

### Erklärung
- der Shebang gibt an, mit welchem Interpreter das Skript ausgeführt werden soll
- für den Einstieg reicht `#!/bin/bash`
- nicht unnötig in Pfad- oder Kompatibilitätsdetails abgleiten

## 5) Abschnitt: Ein erstes Mini-Skript
### Ziel
Den Einstieg so klein wie möglich halten.

### Beispiel
```bash
#!/bin/bash
echo "Hallo Welt"
```

### Erklärung
- erste Zeile: Shell festlegen
- zweite Zeile: Text ausgeben

## 6) Abschnitt: Speichern und ausführen
### Ziel
Den praktischen Ablauf zeigen.

### Beispielschritte
- Datei z. B. als `hallo.sh` speichern
- ausführbar machen:
```bash
chmod u+x hallo.sh
```
- dann starten:
```bash
./hallo.sh
```

### Wichtig
Hier `chmod` nur kurz als notwendiger Schritt einordnen.

## 7) Abschnitt: Kommentare im Skript
### Ziel
Saubere Skriptstruktur früh zeigen.

### Beispiel
```bash
#!/bin/bash
# Gibt eine Begrüßung aus
echo "Hallo Welt"
```

### Erklärung
- Kommentare helfen beim Verstehen
- sie werden nicht als Befehl ausgeführt

## 8) Abschnitt: Shell-Eingabe vs. Skriptdatei
### Ziel
Einen wichtigen Denkfehler früh verhindern.

### Inhalt
- in der Shell tippst du Befehle direkt ein
- im Skript sammelst du Befehle in einer Datei
- ein Skript ist also eine gespeicherte Befehlsfolge

## 9) Lernmodus / interaktive Module
### Modul A: Was gehört in ein Skript?
Bausteine zuordnen:
- Shebang
- Kommentar
- `echo`
- Dateiname

### Modul B: Reihenfolge im Mini-Skript
Bausteine sortieren:
- `#!/bin/bash`
- `echo "Hallo Welt"`

### Modul C: Wie wird das Skript gestartet?
Auswahl:
- `./hallo.sh`
- `ls hallo.sh`
- `chmod u+x hallo.sh`

Fragen:
- Was macht die Datei ausführbar?
- Was startet sie?

### Modul D: Kommentar oder Befehl?
Kurze Zeilen erkennen:
```bash
# Das ist ein Kommentar
echo "Test"
```

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Ein Shellskript ist eine Textdatei, in der mehrere Befehle gespeichert und gemeinsam ausgeführt werden können.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie Skripte Ausgaben erzeugen und mit Variablen arbeiten.“

## Tonalität und Schreibregeln
Die Seite soll:
- motivierend und verständlich formuliert sein
- nicht zu technisch einsteigen
- mit sehr kurzen Beispielen arbeiten
- Begriffe sofort erklären
- keine großen Codewüsten erzeugen

## Visuelle Regeln
- kompakte Codeblöcke
- kleine Ablauf-Komponente für „Datei speichern → ausführbar machen → starten“
- gute Lesbarkeit in Light/Dark Mode
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Ablauf-/Code-Komponente:
- Skriptdatei
- Shebang
- Befehl
- Start über `./datei.sh`

### Warum
- Shellskripte sind ein textbasiertes Thema
- echte Codeblöcke sind klarer als Bilder
- hohe Wiederverwendbarkeit für weitere Skriptseiten

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- Shellskript nicht mit Shell verwechseln
- Shebang nicht überkomplex erklären
- `chmod` nur kurz andocken, nicht die Seite kapern lassen
- Skriptstart und Dateiinhalte klar trennen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/shell-und-prompt`

### Direkt danach
- `linux/shellskripte-ausgaben-und-variablen`
- `linux/shellskripte-eingaben`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Ablauf-Komponente
- 3–4 Lernmodus-Elemente
- 2–3 kurze Codeblöcke
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den Einstieg in Automatisierung eröffnet
- ohne Altbilder auskommt
- sehr gut mit kurzen Demos funktioniert
- die Basis für alle späteren Skriptseiten legt
