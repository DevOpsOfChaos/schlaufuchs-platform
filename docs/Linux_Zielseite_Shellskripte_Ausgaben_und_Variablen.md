# Linux – Zielseite `shellskripte-ausgaben-und-variablen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/shellskripte-ausgaben-und-variablen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu Ausgaben und Variablen in Shellskripten.

Die Seite soll zeigen, wie Skripte Text ausgeben, Variablen speichern und einfache Inhalte wiederverwenden.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Shellskripte

Sie kommt sinnvoll **nach**:
- `linux/shellskripte-grundlagen`

Und **vor**:
- `linux/shellskripte-eingaben`
- `linux/shellskripte-bedingungen-und-schleifen`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- wie `echo` in Skripten eingesetzt wird
- was Variablen sind
- wie Variablen gesetzt und wieder ausgegeben werden
- wie einfache Umgebungsvariablen wie `$USER`, `$HOME`, `$PWD` genutzt werden können
- warum Anführungszeichen im Skript wichtig sein können

Die Seite soll **noch nicht** tief in Bedingungen, Schleifen oder komplexe Variablenformen abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- `read` im Detail
- Arrays
- komplexe Parameterexpansion
- `if`, `for`, `while` im Detail
- Shell-Optionen und Subshells
- Bash-Spezialsyntax als Schwerpunkt

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_shellskripte_ausgaben.html`
- `linux/linux_shell/linux_shellskripte.html`
- Altaufgaben aus `linux_aufgaben_bashSkripte/*` als Ideenquelle

## Zielcharakter der neuen Seite
Die Seite soll:
- mit sehr kurzen Skriptbeispielen arbeiten
- `echo` und Variablen praktisch erklären
- typische Anfängerfehler sichtbar machen
- alltagsnahe Mini-Skripte zeigen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, worum es geht.

### Inhalt
- Titel: `Ausgaben und Variablen in Shellskripten`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit `echo` gibst du Texte oder Variableninhalte aus. Variablen helfen dir, Werte im Skript zu speichern und später wiederzuverwenden.

## 2) Abschnitt: Text mit `echo` ausgeben
### Ziel
Den einfachsten Einstieg zeigen.

### Beispiel
```bash
#!/bin/bash
echo "Hallo"
```

### Erklärung
- `echo` gibt Text aus
- das ist oft der einfachste Weg, um Ergebnisse sichtbar zu machen

## 3) Abschnitt: Was ist eine Variable?
### Ziel
Die Grundidee ohne Theorieballast erklären.

### Inhalt
- eine Variable speichert einen Wert
- der Wert kann später wieder genutzt werden
- so wird ein Skript flexibler und lesbarer

### Beispiel
```bash
#!/bin/bash
name="Anna"
echo "$name"
```

## 4) Abschnitt: Variablen setzen und ausgeben
### Ziel
Die Grundsyntax festigen.

### Wichtige Punkte
- kein Leerzeichen um das `=`
- Variablen beim Zugriff mit `$` verwenden

### Beispiel
```bash
#!/bin/bash
fach="Linux"
echo "Fach: $fach"
```

## 5) Abschnitt: Umgebungsvariablen kurz einführen
### Ziel
Sinnvolle Standardbeispiele zeigen.

### Beispiele
```bash
echo "$USER"
echo "$HOME"
echo "$PWD"
```

### Erklärung
- manche Variablen sind schon im System vorhanden
- sie liefern nützliche Informationen über den aktuellen Kontext

## 6) Abschnitt: Warum Anführungszeichen oft sinnvoll sind
### Ziel
Eine häufige Fehlerquelle früh abfangen.

### Inhalt
- mit Anführungszeichen bleiben Ausgaben meist robuster und klarer
- für den Einstieg reicht die Regel: Strings in `"..."` schreiben

### Beispiel
```bash
echo "Hallo $name"
```

## 7) Abschnitt: Typische Anfängerfehler
### Ziel
Fehlerquellen sichtbar machen.

### Beispiele
- `name = "Anna"` statt `name="Anna"`
- `echo name` statt `echo "$name"`
- Variable setzen, aber nie ausgeben
- Systemvariablen mit normalem Text verwechseln

## 8) Abschnitt: Kleine Praxisbeispiele
### Ziel
Das Thema mit Mini-Skripten festigen.

### Beispiel A – Begrüßung
```bash
#!/bin/bash
name="Lina"
echo "Hallo $name"
```

### Beispiel B – aktueller Benutzer
```bash
#!/bin/bash
echo "Aktueller Benutzer: $USER"
```

### Beispiel C – aktueller Ordner
```bash
#!/bin/bash
echo "Du bist in: $PWD"
```

## 9) Lernmodus / interaktive Module
### Modul A: Variable oder Text?
Beispiele unterscheiden:
- `echo "$USER"`
- `echo "USER"`
- `echo "$HOME"`

### Modul B: Fehler finden
Kurze Zeilen prüfen:
```bash
name = "Anna"
name="Anna"
echo name
echo "$name"
```

### Modul C: Mini-Skript zusammensetzen
Bausteine:
- `name="Tom"`
- `echo "Hallo $name"`
- Shebang

### Modul D: Ausgabe vorhersagen
Fragen:
- Was gibt das Skript aus?
- Ist es Text oder Variableninhalt?

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit Variablen speicherst du Werte im Skript und gibst sie mit `echo` gezielt wieder aus.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie dein Skript Informationen direkt vom Benutzer abfragen kann.“

## Tonalität und Schreibregeln
Die Seite soll:
- leicht und praktisch formuliert sein
- kurze Mini-Skripte nutzen
- Fehlerfreundlich erklären
- nicht in Bash-Sonderfälle abrutschen

## Visuelle Regeln
- sehr kompakte Codeblöcke
- kleine Vorher-/Nachher- bzw. Eingabe-/Ausgabe-Komponenten
- gute Lesbarkeit in Light/Dark Mode
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Variablen-/Ausgabe-Komponente:
- Variablenname
- gespeicherter Wert
- Ausgabe über `echo`

### Warum
- textbasiertes Thema
- neue UI ist klarer und interaktiver
- Altbilder wären hier fast immer nur schlechterer Codeersatz

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `=`-Syntax korrekt zeigen
- `$` beim Auslesen klar erklären
- Text und Variableninhalt nicht vermischen
- Umgebungsvariablen nicht zu tief technisch erklären

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/shellskripte-grundlagen`

### Direkt danach
- `linux/shellskripte-eingaben`
- später `linux/shellskripte-bedingungen-und-schleifen`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Variablen-/Ausgabe-Komponente
- 3–4 Lernmodus-Elemente
- 3–4 kurze Codeblöcke
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- Shellskripte sofort nützlicher macht
- sehr gut mit Mini-Beispielen funktioniert
- ohne Altbilder auskommt
- eine wichtige Grundlage für Eingaben und Steuerung legt
