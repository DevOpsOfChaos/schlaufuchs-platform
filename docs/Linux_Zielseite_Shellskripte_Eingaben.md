# Linux – Zielseite `shellskripte-eingaben`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/shellskripte-eingaben` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu Benutzereingaben in Shellskripten.

Die Seite soll erklären, wie ein Skript mit `read` Informationen vom Benutzer abfragt und weiterverwendet.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Shellskripte

Sie kommt sinnvoll **nach**:
- `linux/shellskripte-grundlagen`
- `linux/shellskripte-ausgaben-und-variablen`

Und **vor**:
- `linux/shellskripte-bedingungen-und-schleifen`
- spätere Automations- und Dateiprüfungsseiten

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- wie `read` funktioniert
- wie Eingaben in Variablen gespeichert werden
- wie man eine Eingabe wieder ausgibt
- wie `read -p` einen Prompt direkt im Befehl erzeugen kann
- wie kleine interaktive Skripte aufgebaut sind

Die Seite soll **noch nicht** tief in Validierung, Menüsysteme oder komplexe Eingabelogik abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- komplexe Eingabeprüfung
- Menüs und Case-Strukturen als Hauptthema
- Schleifen für wiederholte Eingaben im Detail
- Dateieingaben oder Prozess-Eingaben
- erweiterte Shell-Optionen

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_shellskripte_eingaben.html`
- `linux/linux_shell/linux_shellskripte.html`
- passende Altaufgaben als reine Ideenquelle

## Zielcharakter der neuen Seite
Die Seite soll:
- interaktive Skripte einfach einführen
- sehr kurze Beispiele nutzen
- klar zeigen, wie Eingabe und Ausgabe zusammenhängen
- ruhig und zugänglich formuliert sein
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was hier neu dazukommt.

### Inhalt
- Titel: `Eingaben in Shellskripten`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit `read` kann dein Skript Informationen direkt vom Benutzer abfragen und später weiterverwenden.

## 2) Abschnitt: Warum braucht ein Skript Eingaben?
### Ziel
Den Nutzen vor der Syntax zeigen.

### Kernpunkte
- Skripte können flexibel auf Benutzereingaben reagieren
- ein Skript muss nicht immer mit festen Werten arbeiten
- Eingaben machen kleine Hilfsprogramme interaktiv

## 3) Abschnitt: Die Grundidee von `read`
### Ziel
Den einfachsten Fall zeigen.

### Beispiel
```bash
#!/bin/bash
read name
echo "$name"
```

### Erklärung
- `read` wartet auf Eingabe
- die Eingabe wird in einer Variablen gespeichert
- danach kann sie weiterverwendet werden

## 4) Abschnitt: Eingabe mit Frage kombinieren
### Ziel
Die erste wirklich nutzbare Form zeigen.

### Beispiel 1
```bash
#!/bin/bash
echo "Wie heißt du?"
read name
echo "Hallo $name"
```

### Beispiel 2
```bash
#!/bin/bash
read -p "Wie heißt du? " name
echo "Hallo $name"
```

### Erklärung
- `read -p` spart eine zusätzliche `echo`-Zeile
- für Einsteiger sind beide Varianten okay

## 5) Abschnitt: Eingabe in Variablen weiterverwenden
### Ziel
Die Verbindung zur Variablen-Seite festigen.

### Inhalt
- Eingabe landet in einer Variablen
- diese Variable kann mit `echo` wieder ausgegeben werden
- später kann sie auch in Bedingungen verwendet werden

## 6) Abschnitt: Kleine Praxisbeispiele
### Ziel
Das Thema mit Mini-Skripten festigen.

### Beispiel A – Name abfragen
```bash
#!/bin/bash
read -p "Name: " name
echo "Hallo $name"
```

### Beispiel B – Lieblingsfach
```bash
#!/bin/bash
read -p "Lieblingsfach: " fach
echo "Du magst $fach"
```

### Beispiel C – einfacher Ordnername
```bash
#!/bin/bash
read -p "Ordnername: " ordner
echo "Gewählter Name: $ordner"
```

## 7) Abschnitt: Typische Anfängerfehler
### Ziel
Fehlerquellen früh auffangen.

### Beispiele
- `read` ohne Variablenname
- Variable abfragen, aber nie ausgeben
- `echo name` statt `echo "$name"`
- denken, dass `read` automatisch prüft, ob die Eingabe sinnvoll ist

## 8) Lernmodus / interaktive Module
### Modul A: Welche Zeile fragt etwas ab?
Auswahl:
- `echo "Hallo"`
- `read name`
- `name="Anna"`

### Modul B: Prompt und Variable zuordnen
Bausteine:
- `read -p "Wie heißt du? " name`
- `echo "Hallo $name"`

### Modul C: Eingabe → Variable → Ausgabe
Ablaufkarten ordnen:
- Nutzer tippt Eingabe
- `read` speichert sie
- `echo` gibt sie aus

### Modul D: Fehler finden
Kurze Beispiele bewerten:
```bash
read
read name
echo "$name"
echo name
```

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit `read` kann dein Skript Eingaben vom Benutzer abfragen und in Variablen speichern.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie dein Skript mit Bedingungen reagiert oder Abläufe wiederholt.“

## Tonalität und Schreibregeln
Die Seite soll:
- leicht und direkt formuliert sein
- mit sehr kleinen Beispielen arbeiten
- Eingaben als natürliche Erweiterung von Variablen erklären
- nicht in Sonderfälle abdriften

## Visuelle Regeln
- sehr kompakte Codeblöcke
- kleine Ablauf-Komponente für Eingabe → Variable → Ausgabe
- gute Lesbarkeit in Light/Dark Mode
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine interaktive Eingabe-Komponente:
- Frage
- Eingabefeld
- gespeicherte Variable
- Ausgabevorschau

### Warum
- Shellskript-Eingaben lassen sich interaktiv sehr gut zeigen
- Altbilder wären hier nur statische Ersatzdarstellungen
- hohe Wiederverwendbarkeit für Lernmodus

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `read` nicht überkomplex erklären
- Eingaben und Variablen klar verbinden
- `read -p` als praktische Erweiterung zeigen, aber nicht als Pflicht darstellen
- keine implizite Validierungslogik vorspiegeln

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/shellskripte-ausgaben-und-variablen`

### Direkt danach
- `linux/shellskripte-bedingungen-und-schleifen`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Eingabe-/Ablauf-Komponente
- 3–4 Lernmodus-Elemente
- 3–4 kurze Codeblöcke
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- Shellskripte sofort interaktiver macht
- logisch auf Variablen aufbaut
- ohne Altbilder auskommt
- eine starke Grundlage für Bedingungen und kleine Skript-Tools schafft
