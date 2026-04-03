# Linux – Zielseite `chown`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/chown` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche und praxisnahe Wissensseite zum Befehl `chown`.

Die Seite soll erklären, wie der **Eigentümer** einer Datei oder eines Ordners geändert wird und wie `chown` sich vom reinen Rechte-Ändern mit `chmod` unterscheidet.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Rechte / Benutzerlogik

Sie kommt sinnvoll **nach**:
- `linux/dateibesitz-verstehen`

Und **vor oder parallel zu**:
- `linux/chgrp`
- spätere Admin-Vertiefungen

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass `chown` den Eigentümer einer Datei oder eines Ordners ändert
- dass mit `chown` oft auch Eigentümer **und** Gruppe gemeinsam gesetzt werden können
- wann `chown` sinnvoll ist
- wie sich `chown` klar von `chmod` unterscheidet
- wie Änderungen in `ls -l` sichtbar werden

Die Seite soll **nicht** zu tief in Administrations- oder Deployment-Sonderfälle abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- tiefe Benutzeranlage mit `useradd`
- `usermod`
- Systemdateien wie `/etc/passwd`
- komplizierte Hosting- oder Webserver-Konfigurationen
- Besitzänderungen als Admin-Strategie für ganze Systeme
- lange Erklärungen zu UIDs/GIDs
- Spezialfälle wie `--reference` als Einsteigerfokus

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
- indirekt angrenzend: Besitz- und Rechtekontext aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- praktisch und ruhig formuliert sein
- Besitzänderungen verständlich machen
- kurze echte Befehlsbeispiele zeigen
- den Unterschied zu `chmod` klar halten
- reale Einsteigerfälle statt Admin-Exoten nutzen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was `chown` verändert.

### Inhalt
- Titel: `Eigentümer mit chown ändern`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit `chown` änderst du, welchem Benutzer eine Datei oder ein Ordner gehört.

## 2) Abschnitt: Was macht `chown`?
### Ziel
Den Befehl klar einordnen.

### Kernpunkte
- `chown` steht für „change owner“
- damit wird der Eigentümer geändert
- oft kann auch die Gruppe gleich mitgesetzt werden
- `chown` ändert **nicht** direkt die Rechte selbst

### Wichtige Abgrenzung
- `chmod` ändert Rechte
- `chown` ändert den Eigentümer

## 3) Abschnitt: Einfache Grundsyntax
### Ziel
Die häufigsten Formen früh zeigen.

### Beispiele
```bash
sudo chown anna datei.txt
sudo chown anna projektordner
sudo chown anna:team datei.txt
```

### Erklärung
- nur Benutzername: Eigentümer ändern
- Benutzername + Gruppe: Eigentümer und Gruppe gemeinsam setzen

### Wichtig
Einsteiger sollen zuerst nur die Grundformen sehen.

## 4) Abschnitt: Vorher / Nachher in `ls -l`
### Ziel
Die Wirkung von `chown` sichtbar machen.

### Beispiel vorher
```txt
-rw-r--r-- 1 root root 1200 Apr 3 10:15 notizen.txt
```

### Befehl
```bash
sudo chown anna notizen.txt
```

### Beispiel nachher
```txt
-rw-r--r-- 1 anna root 1200 Apr 3 10:15 notizen.txt
```

### Zweites Beispiel
```bash
sudo chown anna:team notizen.txt
```

Danach z. B.:
```txt
-rw-r--r-- 1 anna team 1200 Apr 3 10:15 notizen.txt
```

## 5) Abschnitt: Typische Praxisfälle
### Ziel
`chown` realistisch und verständlich machen.

### Praxisfall A – Datei gehört nach dem Erstellen der richtigen Person
Eine Datei wurde mit falschem Besitzer angelegt und soll `anna` gehören.

### Praxisfall B – Projektordner an Teamkontext anpassen
Ein Ordner soll `lina` gehören und zur Gruppe `webteam` gehören.

### Praxisfall C – mit `sudo` erstellte Datei zurückgeben
Eine Datei wurde versehentlich als `root` erzeugt und soll wieder dem normalen Benutzer gehören.

### Wichtig
Praxisfälle klein halten, nicht direkt in Deployment- oder Webserverfälle kippen.

## 6) Abschnitt: Rekursive Änderung kurz einordnen
### Ziel
`-R` erwähnen, aber nicht zum Hauptthema machen.

### Beispiel
```bash
sudo chown -R anna:team projektordner
```

### Erklärung
- `-R` wirkt rekursiv auf Unterordner und Dateien
- praktisch, aber mit Bedacht nutzen

### Stil
sachlich, ruhig, ohne Dramatisierung

## 7) Abschnitt: Häufige Fehler
### Ziel
Typische Missverständnisse früh auffangen.

### Beispiele
- `chown` mit `chmod` verwechseln
- Eigentümer ändern wollen, obwohl eigentlich nur Rechte fehlen
- falschen Benutzer angeben
- versehentlich rekursiv zu viel ändern
- glauben, dass `chown` ohne passende Rechte immer erlaubt ist

## 8) Lernmodus / interaktive Module
### Modul A: Welcher Befehl passt?
Aufgabe:
- „Die Datei soll `anna` gehören.“
- „Der Ordner soll `lina` gehören und die Gruppe `webteam` bekommen.“

Auswahl:
- `sudo chown anna datei.txt`
- `sudo chown lina:webteam projektordner`
- `chmod 644 datei.txt`

Ziel:
- `chown` und `chmod` unterscheiden

### Modul B: Vorher / Nachher lesen
Zeige `ls -l` vor und nach einem `chown`.

Fragen:
- Was hat sich geändert?
- Hat sich der Eigentümer geändert?
- Hat sich die Gruppe geändert?

### Modul C: Eigentümer oder Rechte?
Szenario:
- Datei gehört `root`
- Rechte sind `rw-r--r--`

Frage:
- Braucht man `chmod` oder `chown`, wenn die Datei `anna` gehören soll?

### Modul D: Rekursiv oder nicht?
Kleine Fallauswahl:
- einzelne Datei
- ganzer Projektordner

Ziel:
- `-R` sinnvoll einordnen

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit `chown` änderst du, welchem Benutzer eine Datei oder ein Ordner gehört.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Wenn du nur die Gruppe ändern willst, nutzt du `chgrp`."

## Tonalität und Schreibregeln
Die Seite soll:
- praktisch und verständlich formuliert sein
- nicht zu admin-lastig werden
- echte Mini-Beispiele zeigen
- Unterschiede zu `chmod` klar machen
- rekursive Änderungen nur vorsichtig und knapp einführen

## Visuelle Regeln
- keine überbreiten Codefenster
- kurze `ls -l`-Vorher/Nachher-Blöcke
- Benutzer- und Gruppenänderung visuell klar markieren
- mobil sauber umbrechbar
- Light/Dark gut lesbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Vorher/Nachher-Komponente:
- Datei/Ordner
- Eigentümer alt / neu
- Gruppe alt / neu
- optional passender Befehl darunter

### Warum
- `chown` ist ein Beziehungs- und Status-Thema, kein Bildthema
- neue UI ist viel klarer als Altgrafiken
- sehr gut für Lernmodus wiederverwendbar

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `chown` nicht mit `chmod` vermischen
- `sudo` erwähnen, aber nicht zum Hauptthema machen
- rekursive Änderung nicht als Standardlösung normalisieren
- Eigentümer und Gruppe sprachlich sauber trennen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/dateibesitz-verstehen`

### Direkt danach
- `linux/chgrp`

### Später angrenzend
- `linux/besitz-und-admin-workflows`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Vorher/Nachher-Besitz-Komponente
- 2–4 Lernmodus-Elemente
- kurze `ls -l`-Beispiele
- 1 Merksatz-Block
- 1 Übergang zu `chgrp`

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- direkt aus dem Besitz-Thema folgt
- ohne Altbilder auskommt
- den Unterschied zwischen Rechten und Besitz praktisch sichtbar macht
- spätere Admin-Themen vorbereitet, ohne sie vorzuziehen
