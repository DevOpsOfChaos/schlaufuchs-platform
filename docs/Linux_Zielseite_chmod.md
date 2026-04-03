# Linux – Zielseite `chmod`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/chmod` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für die Wissensseite rund um das gezielte Ändern von Dateirechten unter Linux.

Die Seite baut direkt auf `linux/dateirechte-grundlagen` auf und soll Lernenden zeigen, **wie** Rechte praktisch verändert werden – zuerst einfach, dann systematisch.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Rechte / Benutzerlogik

Sie kommt **nach**:
- `linux/dateirechte-grundlagen`

Und **vor**:
- `linux/benutzer-und-gruppen`
- `linux/dateibesitz-verstehen`
- `linux/chown`
- `linux/chgrp`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass `chmod` Dateirechte ändert
- dass Rechte symbolisch und numerisch gesetzt werden können
- wie einfache symbolische Befehle wie `u+x` oder `g-w` funktionieren
- wie typische Zahlencodes wie `644`, `755` oder `600` gelesen werden
- wann bestimmte Rechte in typischen Praxisfällen sinnvoll sind

Die Seite soll **nicht** tief in Admin-Sonderfälle oder Spezialbits abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- `chown`
- `chgrp`
- Besitzwechsel
- `/etc/passwd`
- `/etc/group`
- `setuid`, `setgid`, Sticky Bit ausführlich
- Sicherheits-Sonderfälle auf Serverebene
- rekursive Massenänderungen als Hauptfokus
- komplizierte Produktions-/Hosting-Fälle

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_dateisystem/linux_dateirechte.html`
- `linux/linux_dateisystem/linux_dateirechte_aufgabe_01.html`
- `linux/linux_dateisystem/linux_dateirechte_aufgabe_02.html`
- indirekt angrenzend: Aufgaben und Benutzerlogik aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- praktisch und handlungsorientiert sein
- kurze, gut lesbare Befehlsbeispiele nutzen
- symbolische und numerische Schreibweise **klar getrennt** erklären
- häufige Anfängerfehler sichtbar machen
- sich visuell an die neue Schlaufuchs-Optik anlehnen
- mindestens 2–3 interaktive Rechte-/`chmod`-Module enthalten
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was `chmod` tut.

### Inhalt
- Titel: `Rechte mit chmod ändern`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit `chmod` kannst du festlegen, wer eine Datei oder einen Ordner lesen, ändern oder ausführen darf.

## 2) Abschnitt: Was macht `chmod`?
### Ziel
Den Befehl fachlich klar einordnen.

### Kernpunkte
- `chmod` steht für „change mode“
- damit werden Rechte geändert
- der Befehl wirkt auf Dateien und Ordner
- `chmod` ändert **nicht** den Eigentümer

### Wichtig
Hier den Unterschied zu `chown` und `chgrp` knapp markieren, aber nicht ausführen.

## 3) Abschnitt: Symbolische Schreibweise
### Ziel
Den zugänglichsten Einstieg zuerst erklären.

### Inhalt
#### Zielgruppen
- `u` = Eigentümer
- `g` = Gruppe
- `o` = Andere
- optional `a` = alle

#### Operatoren
- `+` = Recht hinzufügen
- `-` = Recht entfernen
- `=` = genau festlegen

#### Rechte
- `r`
- `w`
- `x`

### Beispiele
```bash
chmod u+x script.sh
chmod g-w projekt.txt
chmod o=r info.txt
chmod a+r readme.txt
```

### Wichtig
- erst einfache Einzelfälle
- nicht zu viele Zielgruppen auf einmal kombinieren
- Symbolik wirklich lesen lassen, nicht nur zeigen

## 4) Abschnitt: Numerische Schreibweise
### Ziel
Die häufigen Zahlencodes verständlich machen.

### Inhalt
- `r = 4`
- `w = 2`
- `x = 1`
- Rechte werden pro Block addiert

### Beispiele
- `7 = rwx`
- `6 = rw-`
- `5 = r-x`
- `4 = r--`
- `0 = ---`

### Typische Gesamtbeispiele
```bash
chmod 644 notizen.txt
chmod 755 script.sh
chmod 600 geheim.txt
```

### Erklärung
- erste Zahl = Eigentümer
- zweite Zahl = Gruppe
- dritte Zahl = Andere

## 5) Abschnitt: Symbolisch oder numerisch?
### Ziel
Beide Schreibweisen richtig einordnen.

### Inhalt
- symbolisch ist oft gut zum gezielten Ändern
- numerisch ist oft gut für einen kompletten Zielzustand

### Vergleichsbeispiele
- `chmod u+x script.sh`
- `chmod 755 script.sh`

### Wichtiger Punkt
Hier klar sagen:
- symbolisch verändert gezielt einzelne Teile
- numerisch setzt oft das gesamte Rechtebild neu

## 6) Abschnitt: Typische Praxisfälle
### Ziel
`chmod` alltagsnah machen.

### Praxisfall A – Skript ausführbar machen
```bash
chmod u+x script.sh
```

### Praxisfall B – private Datei schützen
```bash
chmod 600 geheim.txt
```

### Praxisfall C – normale Textdatei lesbar halten
```bash
chmod 644 notizen.txt
```

### Praxisfall D – Ordner für Arbeit vorbereiten
```bash
chmod 755 projektordner
```

### Wichtig
Keine wahllosen Extrembeispiele wie `777` als normale Empfehlung.

## 7) Abschnitt: Häufige Fehler
### Ziel
Anfängerfehler früh auffangen.

### Beispiele
- Rechte mit Besitz verwechseln
- `chmod` auf falsche Datei anwenden
- numerische Rechte setzen, ohne zu merken, dass alle drei Blöcke neu gesetzt werden
- `x` bei Dateien und Ordnern gleich deuten
- `777` als Standardlösung missverstehen

### Stil
ruhig, sachlich, ohne Angstton

## 8) Abschnitt: Rechte vor und nach `chmod` prüfen
### Ziel
Änderung sichtbar machen.

### Beispiel mit `ls -l`
```txt
-rw-r--r-- 1 anna team 1200 Apr 3 10:15 script.sh
```

Dann:
```bash
chmod u+x script.sh
```

Danach:
```txt
-rwxr--r-- 1 anna team 1200 Apr 3 10:15 script.sh
```

### Ziel
Lernende sollen sehen, dass `chmod` nicht abstrakt ist, sondern direkt sichtbare Änderungen erzeugt.

## 9) Lernmodus / interaktive Module
Die Seite sollte direkt mehrere kleine Module bekommen.

### Modul A: Rechte-Matrix anklicken
Nutzer aktiviert Rechte für:
- Eigentümer
- Gruppe
- Andere

Ausgabe:
- symbolisch
- numerisch

Beispiel:
- Eigentümer: `rwx`
- Gruppe: `r-x`
- Andere: `r--`

Ergebnis:
- `rwxr-xr--`
- `754`

### Modul B: Welcher `chmod`-Befehl passt?
Aufgabe:
- „Mache das Skript für den Eigentümer ausführbar.“
- „Entferne Schreibrechte für die Gruppe.“
- „Setze die Datei auf privat.“

Auswahl:
- `chmod u+x script.sh`
- `chmod g-w projekt.txt`
- `chmod 600 geheim.txt`

### Modul C: Symbolisch oder numerisch lesen
Zuordnungsübung:
- `chmod 644 datei.txt`
- `chmod 755 script.sh`
- `chmod u+x start.sh`

Fragen:
- Was ändert sich?
- Wird gezielt angepasst oder vollständig gesetzt?

### Modul D: Vorher / Nachher erkennen
Kurze `ls -l`-Zeilen vor und nach einem `chmod` vergleichen.

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit `chmod` änderst du Dateirechte gezielt für Eigentümer, Gruppen und andere Nutzer.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang zur nächsten Seite:
- „Als Nächstes lernst du, warum Linux zwischen Eigentümer, Gruppe und anderen Nutzern unterscheidet.“

Oder alternativ:
- Übergang zu `benutzer-und-gruppen`

## Tonalität und Schreibregeln
Die Seite soll:
- praktisch und ruhig formuliert sein
- keine unnötige Fachsprache stapeln
- Befehle knapp erklären
- Beispiele möglichst realistisch halten
- Lernende nicht mit Sonderfällen überladen

## Visuelle Regeln
- keine überbreiten Codefenster
- symbolische und numerische Darstellung optisch klar trennen
- gute Lesbarkeit in Light/Dark Mode
- interaktive Rechte-Komponente kompakt und wiederverwendbar bauen
- mobile Umbrüche mitdenken

## Bild- und Grafikentscheidung
### Altbild `permissions.png`
**Nicht direkt übernehmen.**

### Stattdessen neu bauen
Empfohlen als kombinierte UI-Komponente:
- linke Seite: Rechte-Matrix
- rechte Seite: Ausgabe als `rwxr-xr--` und `754`
- optional kleine `chmod`-Beispielbox darunter

### Warum
- direkt für mehrere Seiten wiederverwendbar
- konsistent mit `dateirechte-grundlagen`
- besser erweiterbar für Lernmodus
- optisch deutlich professioneller als Altgrafik

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- symbolisch und numerisch nicht durcheinander erklären
- `chmod` nicht als Besitzwechsel darstellen
- `x` bei Verzeichnissen nicht vergessen
- `600`, `644`, `755` korrekt und alltagsnah einordnen
- `777` nicht als bequeme Standardlösung normalisieren

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/dateirechte-grundlagen`

### Direkt danach
- `linux/benutzer-und-gruppen`

### Später angrenzend
- `linux/dateibesitz-verstehen`
- `linux/chown`
- `linux/chgrp`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 5–7 Content-Abschnitte
- 1 wiederverwendbare Rechte-/`chmod`-Komponente
- 3–4 Lernmodus-Elemente
- kurze `ls -l`-Vorher/Nachher-Beispiele
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter früher Build-Kandidat ist
Diese Zielseite eignet sich besonders gut, weil sie:
- direkt an die Rechte-Grundlagen anschließt
- viele alte Erklärreste sauber modernisieren kann
- fast keine Altbilder braucht
- interaktiv sehr stark funktioniert
- fachlich viel Mehrwert mit wenig visuellem Ballast liefert
