# Linux – Zielseite `pipes-und-befehle-kombinieren`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/pipes-und-befehle-kombinieren` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zur Pipe-Idee in der Linux-Shell.

Die Seite soll erklären, wie die Ausgabe eines Befehls direkt an einen anderen Befehl weitergegeben wird – und warum das eine der stärksten Ideen der Shell ist.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Shell-Grundlagen

Sie kommt sinnvoll **nach**:
- `linux/shell-und-prompt`
- `linux/streams-und-umleitungen`

Und **vor**:
- spätere Shell-Werkzeugseiten
- spätere Log-/Textverarbeitungsseiten
- Shellskript-Vertiefungen mit Tool-Kombinationen

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was eine Pipe ist
- was das Zeichen `|` bewirkt
- dass die Ausgabe eines Befehls direkt als Eingabe für den nächsten Befehl dienen kann
- wie einfache Befehle so kombiniert werden
- warum Pipes in der Shell so praktisch sind

Die Seite soll **noch nicht** in komplexe Tool-Ketten oder Spezialfälle abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- riesige Befehlsketten als Einstieg
- `grep`, `awk`, `sed` im Vollausbau
- Textverarbeitung als Spezialgebiet
- Prozessersetzung oder komplexe Shell-Syntax
- tiefe Logfile-Analysen als Hauptfokus
- Shellskripte im Detail

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_shell.html`
- `linux/linux_aufgaben/linux_aufgaben_shell.html`
- `linux/linux_shell/linux_shell_aufgabe_01.html`
- `linux/linux_shell/linux_shell_aufgabe_02.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- die Pipe-Idee visuell und praktisch erklären
- wenige, starke Beispiele verwenden
- klar zwischen Umleitung in Datei und Pipe zu anderem Befehl unterscheiden
- ruhig und zugänglich formuliert sein
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was eine Pipe macht.

### Inhalt
- Titel: `Pipes und Befehle kombinieren`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit einer Pipe gibst du die Ausgabe eines Befehls direkt an den nächsten Befehl weiter. So können einfache Werkzeuge zusammenarbeiten.

## 2) Abschnitt: Was ist eine Pipe?
### Ziel
Die Grundidee ohne Ballast erklären.

### Kernpunkte
- das Zeichen `|` verbindet zwei Befehle
- der erste Befehl erzeugt Ausgabe
- der zweite Befehl verarbeitet diese Ausgabe weiter
- so entsteht eine kleine Befehlskette

### Wichtiger Satz
Eine Pipe schickt Ausgabe nicht in eine Datei, sondern direkt an den nächsten Befehl.

## 3) Abschnitt: Pipe oder Umleitung?
### Ziel
Die häufigste Verwechslung früh vermeiden.

### Vergleich
```bash
ls > dateiliste.txt
ls | wc -l
```

### Erklärung
- `>` schreibt Ausgabe in eine Datei
- `|` gibt Ausgabe an einen anderen Befehl weiter

### Wichtig
Diesen Unterschied sehr klar machen.

## 4) Abschnitt: Erste einfache Beispiele
### Ziel
Die Pipe-Idee sofort praktisch machen.

### Beispiel A
```bash
ls | wc -l
```

### Einfache Erklärung
- `ls` liefert eine Liste
- `wc -l` zählt Zeilen
- Ergebnis: Anzahl der Einträge

### Beispiel B
```bash
cat notizen.txt | grep fehler
```

### Einfache Erklärung
- Dateiinhalt wird ausgegeben
- `grep` filtert Zeilen mit einem bestimmten Wort

### Wichtig
Tools nur so weit erklären, wie das Pipe-Prinzip sichtbar wird.

## 5) Abschnitt: Warum sind Pipes so nützlich?
### Ziel
Den Mehrwert greifbar machen.

### Nutzen
- kleine Werkzeuge lassen sich kombinieren
- Ergebnisse müssen nicht immer in Dateien zwischengespeichert werden
- Abläufe bleiben flexibel
- Shell-Arbeit wird leistungsfähiger

### Form
3–4 kompakte Nutzenkarten

## 6) Abschnitt: Von einfach zu sinnvoll kombinieren
### Ziel
Nicht nur Syntax, sondern Denkweise vermitteln.

### Inhalt
- erst überlegen: Welcher Befehl erzeugt passende Ausgabe?
- dann: Welcher zweite Befehl kann damit arbeiten?
- Pipes verbinden Werkzeuge mit klaren Aufgaben

### Beispielhafte Denkschritte
- Liste erzeugen
- zählen
- filtern
- weiterleiten

## 7) Abschnitt: Typische Anfängerfehler
### Ziel
Missverständnisse früh abfangen.

### Beispiele
- `|` mit `>` verwechseln
- beide Befehle getrennt statt verbunden denken
- nicht verstehen, was der zweite Befehl eigentlich mit der Ausgabe macht
- zu schnell zu komplexe Ketten bauen wollen

## 8) Lernmodus / interaktive Module
### Modul A: Pipe oder Umleitung?
Befehle unterscheiden:
```bash
ls > datei.txt
ls | wc -l
cat notizen.txt | grep test
```

Fragen:
- Welche Zeile schreibt in eine Datei?
- Welche verbindet zwei Befehle?

### Modul B: Was macht der zweite Befehl?
Beispiel:
```bash
ls | wc -l
```

Fragen:
- Was liefert `ls`?
- Was macht `wc -l` damit?

### Modul C: Pipe-Kette zusammensetzen
Bausteine:
- `cat notizen.txt`
- `|`
- `grep fehler`

Ziel:
- korrekten Befehl aufbauen

### Modul D: Ausgabefluss verstehen
Visuelle Zuordnung:
- Befehl A erzeugt Text
- Pipe verbindet
- Befehl B verarbeitet Text weiter

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit einer Pipe leitest du die Ausgabe eines Befehls direkt an den nächsten Befehl weiter.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Später kannst du mehrere kleine Shell-Werkzeuge kombinieren und so immer stärkere Abläufe bauen.“

## Tonalität und Schreibregeln
Die Seite soll:
- praktisch und verständlich formuliert sein
- nicht in Tool-Details ertrinken
- mit wenigen, starken Beispielen arbeiten
- den Unterschied zu Umleitungen klar halten
- Einsteiger nicht mit langen Ketten überfordern

## Visuelle Regeln
- kompakte Beispielblöcke
- klare Flow-Komponente für Befehl A → Pipe → Befehl B
- kleine Vergleichskomponente für Pipe vs. Umleitung
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Ablauf-/Flow-Komponente:
- Ausgabe von Befehl A
- Pipe
- Weiterverarbeitung in Befehl B

Optional mit einem Beispiel wie:
- `ls`
- `|`
- `wc -l`

### Warum
- Pipe-Logik ist visuell als Flow viel klarer als über Altgrafiken
- hohe Wiederverwendbarkeit
- passt sauber zum Lernmodus

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- Pipe nicht als Datei-Umleitung erklären
- Werkzeuge nicht zu tief erklären, wenn die Pipe-Idee im Vordergrund steht
- Beispielbefehle klein und überschaubar halten
- nicht zu früh in Expertenmuster abrutschen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/shell-und-prompt`
- `linux/streams-und-umleitungen`

### Später angrenzend
- `linux/shell-werkzeuge-kombinieren`
- `linux/shellskripte-dateien-und-automation`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Flow-Komponente für Pipe-Abläufe
- 3–4 Lernmodus-Elemente
- kleine Beispielblöcke
- 1 Merksatz-Block
- 1 Übergang zu späteren Werkzeugseiten

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- die Shell-Grundlagen sinnvoll vervollständigt
- ohne Altbilder auskommt
- mit wenigen Beispielen viel Verständnis erzeugt
- eine starke Brücke zu späteren Linux- und Shellskript-Seiten bildet
