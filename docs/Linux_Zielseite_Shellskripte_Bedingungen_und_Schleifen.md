# Linux – Zielseite `shellskripte-bedingungen-und-schleifen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/shellskripte-bedingungen-und-schleifen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu einfachen Bedingungen und Schleifen in Shellskripten.

Die Seite soll erklären, wie ein Skript auf Situationen reagieren und kleine Abläufe wiederholen kann.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Shellskripte

Sie kommt sinnvoll **nach**:
- `linux/shellskripte-grundlagen`
- `linux/shellskripte-ausgaben-und-variablen`
- `linux/shellskripte-eingaben`

Und **vor**:
- spätere Datei-/Automationsseiten
- spätere komplexere Skriptlogik

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass Skripte mit Bedingungen auf Situationen reagieren können
- wie einfache `if`-Strukturen aussehen
- wie eine einfache `for`- oder `while`-Schleife funktioniert
- dass Bedingungen und Schleifen dabei helfen, Abläufe zu steuern und zu wiederholen
- wie kleine Praxisbeispiele in Skripten dadurch nützlicher werden

Die Seite soll **noch nicht** in komplexe Operatoren, verschachtelte Logik oder große Automatisierungen abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- tiefe Testoperatoren im Vollausbau
- komplizierte Dateiprüfungen als Hauptfokus
- `case` als Schwerpunkt
- verschachtelte Schleifen
- Arrays
- komplexe Fehlerbehandlung
- fortgeschrittene Bash-Sonderformen

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_shellskripte_kontrollstrukturen.html`
- `linux/linux_shell/linux_shellskripte.html`
- passende Altaufgaben als Ideenquelle

## Zielcharakter der neuen Seite
Die Seite soll:
- Bedingungen und Schleifen sehr niedrigschwellig einführen
- mit kleinen, echten Skriptbeispielen arbeiten
- erst die Grundidee, dann die Syntax zeigen
- nicht mit Spezialfällen überladen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, worum es geht.

### Inhalt
- Titel: `Bedingungen und Schleifen in Shellskripten`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Ein Skript wird erst richtig nützlich, wenn es auf Situationen reagieren oder einfache Abläufe wiederholen kann.

## 2) Abschnitt: Warum braucht ein Skript Bedingungen?
### Ziel
Den Nutzen vor der Syntax erklären.

### Kernpunkte
- nicht jede Situation ist gleich
- manchmal soll ein Skript nur unter bestimmten Bedingungen etwas tun
- Bedingungen machen Skripte flexibler

### Mini-Beispielidee
- wenn ein Name eingegeben wurde, gib eine Begrüßung aus
- wenn nicht, gib einen Hinweis aus

## 3) Abschnitt: Einfache `if`-Struktur
### Ziel
Die Grundform von Bedingungen zeigen.

### Beispiel
```bash
#!/bin/bash
read -p "Name: " name
if [ -n "$name" ]; then
  echo "Hallo $name"
fi
```

### Erklärung
- `if` startet die Bedingung
- `[ ... ]` prüft eine Aussage
- `then` startet den passenden Teil
- `fi` beendet die Struktur

### Wichtig
Die Bedingung nur so weit erklären, wie das Beispiel verständlich bleibt.

## 4) Abschnitt: `if` mit `else`
### Ziel
Die zweite Grundform zeigen.

### Beispiel
```bash
#!/bin/bash
read -p "Name: " name
if [ -n "$name" ]; then
  echo "Hallo $name"
else
  echo "Keine Eingabe erkannt"
fi
```

### Erklärung
- `else` beschreibt den Alternativfall

## 5) Abschnitt: Was ist eine Schleife?
### Ziel
Die Wiederholungs-Idee einfach erklären.

### Inhalt
- eine Schleife wiederholt einen Ablauf
- das spart Wiederholungen im Skript
- für den Einstieg reicht eine kleine Grundidee

## 6) Abschnitt: Einfache `for`-Schleife
### Ziel
Eine leicht lesbare Einstiegsschleife zeigen.

### Beispiel
```bash
#!/bin/bash
for fach in Linux HTML CSS
 do
  echo "$fach"
 done
```

### Erklärung
- die Schleife geht die Werte nacheinander durch
- für jeden Wert wird der Block ausgeführt

## 7) Abschnitt: Einfache `while`-Schleife
### Ziel
Eine zweite Schleifenidee knapp einordnen.

### Beispiel
```bash
#!/bin/bash
zahl=1
while [ "$zahl" -le 3 ]
 do
  echo "$zahl"
  zahl=$((zahl + 1))
 done
```

### Erklärung
- solange die Bedingung wahr ist, läuft die Schleife weiter
- für den Einstieg reicht die Grundidee

### Wichtig
Nicht zu tief in Rechenoperatoren oder arithmetische Details abtauchen.

## 8) Abschnitt: Typische Praxisbeispiele
### Ziel
Bedingungen und Schleifen alltagsnah machen.

### Praxisfall A – Begrüßung nur bei Eingabe
Mit `if` prüfen, ob ein Name vorhanden ist.

### Praxisfall B – Mehrere Begriffe ausgeben
Mit `for` nacheinander mehrere Werte anzeigen.

### Praxisfall C – Kleiner Zähler
Mit `while` von 1 bis 3 zählen.

## 9) Abschnitt: Typische Anfängerfehler
### Ziel
Missverständnisse früh auffangen.

### Beispiele
- `if` nicht mit `fi` schließen
- `then` vergessen
- Schleifenanfang und -ende verwechseln
- zu große Skripte bauen, bevor die Grundidee sitzt
- Bedingungen im Beispiel nicht wirklich verstehen, sondern nur abschreiben

## 10) Lernmodus / interaktive Module
### Modul A: Teile der `if`-Struktur zuordnen
Bausteine:
- `if`
- `[ ... ]`
- `then`
- `fi`

### Modul B: Wann erscheint welche Ausgabe?
Kleines `if`/`else`-Beispiel lesen und Ergebnis vorhersagen.

### Modul C: Schleife erkennen
Beispiele unterscheiden:
- normale Ausgabezeile
- `for`-Schleife
- `while`-Schleife

### Modul D: Reihenfolge im Schleifenbeispiel
Bausteine sortieren:
- `for fach in Linux HTML CSS`
- `do`
- `echo "$fach"`
- `done`

## 11) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Bedingungen helfen deinem Skript zu entscheiden, Schleifen helfen ihm beim Wiederholen.

## 12) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Später kannst du damit Dateien prüfen, wiederkehrende Abläufe automatisieren und kleine Werkzeuge bauen.“

## Tonalität und Schreibregeln
Die Seite soll:
- ruhig und einfach formuliert sein
- Grundideen vor Syntax erklären
- nur sehr kleine Skriptbeispiele nutzen
- keine Spezialfälle priorisieren
- Einsteiger nicht mit Operatorlisten überrollen

## Visuelle Regeln
- kompakte Codeblöcke
- kleine Ablauf-/Entscheidungskomponenten
- gute Lesbarkeit in Light/Dark Mode
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen sind zwei kleine Komponenten:
- Entscheidungsfluss für `if` / `else`
- Wiederholungsfluss für Schleifen

### Warum
- Logik lässt sich als Flow besser erklären als als Altgrafik
- gute Wiederverwendbarkeit
- passt ideal zum Lernmodus

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `if` und `fi` sauber paaren
- `for` und `while` nicht unnötig gegeneinander ausspielen
- Bedingungen nicht zu technisch erklären
- Rechenlogik in `while` nur so weit wie nötig zeigen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/shellskripte-eingaben`

### Danach / später
- `linux/shellskripte-dateien-und-automation`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 5–7 Content-Abschnitte
- 2 kleine Flow-Komponenten
- 3–4 Lernmodus-Elemente
- 3–4 kurze Codeblöcke
- 1 Merksatz-Block
- 1 Übergang zu späteren Praxisseiten

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den Shellskript-Kernbereich abschließt
- mit sehr kleinen Beispielen viel Verständnis erzeugt
- ohne Altbilder auskommt
- direkt in Richtung Automatisierung vorbereitet
