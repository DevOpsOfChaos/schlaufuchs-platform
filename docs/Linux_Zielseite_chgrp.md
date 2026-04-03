# Linux – Zielseite `chgrp`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/chgrp` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zum Befehl `chgrp`.

Die Seite soll erklären, wie die **Gruppe** einer Datei oder eines Ordners geändert wird und wann das in Team- oder Projektkontexten sinnvoll ist.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Rechte / Benutzerlogik

Sie kommt sinnvoll **nach**:
- `linux/dateibesitz-verstehen`
- `linux/chown`

Oder alternativ eng parallel zu `chown`, wenn beide als zusammenhängender Block gebaut werden.

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass `chgrp` die Gruppenzuordnung einer Datei oder eines Ordners ändert
- wann es sinnvoll ist, nur die Gruppe statt auch des Eigentümers zu ändern
- wie `chgrp` sich von `chown` und `chmod` unterscheidet
- wie Änderungen in `ls -l` sichtbar werden
- warum Gruppen besonders für Zusammenarbeit wichtig sind

Die Seite soll **nicht** zu tief in Systemverwaltung oder Sonderfälle abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- Benutzeranlage und Gruppenanlage
- `useradd`, `groupadd`, `usermod`
- tiefe UID/GID-Erklärungen
- `/etc/group` als Hauptthema
- Server- oder Deployment-Spezialfälle als Schwerpunkt
- komplizierte Admin-Workflows
- vollständige Besitzlogik noch einmal von vorn erklären

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
- indirekt angrenzend: Rechte- und Besitzkontext aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- die Rolle von Gruppen im Datei-Kontext praktisch erklären
- ruhig und klar formuliert sein
- mit kleinen Team-/Projektbeispielen arbeiten
- `chgrp` klar von `chown` und `chmod` trennen
- kurze echte Befehlsbeispiele zeigen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was `chgrp` verändert.

### Inhalt
- Titel: `Gruppen mit chgrp ändern`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit `chgrp` änderst du, zu welcher Gruppe eine Datei oder ein Ordner gehört.

## 2) Abschnitt: Was macht `chgrp`?
### Ziel
Den Befehl klar einordnen.

### Kernpunkte
- `chgrp` steht für „change group“
- damit wird die Gruppenzuordnung geändert
- praktisch für gemeinsame Projektordner und Teamarbeit
- `chgrp` ändert **nicht** direkt die Rechte
- `chgrp` ändert **nicht automatisch** den Eigentümer

### Abgrenzung
- `chmod` = Rechte ändern
- `chown` = Eigentümer ändern
- `chgrp` = Gruppe ändern

## 3) Abschnitt: Einfache Grundsyntax
### Ziel
Die häufigste Nutzungsform früh zeigen.

### Beispiele
```bash
sudo chgrp webteam projektordner
sudo chgrp team datei.txt
```

### Erklärung
- zuerst der Gruppenname
- danach Datei oder Ordner

### Wichtig
Einsteiger brauchen zunächst nur diese einfache Grundform.

## 4) Abschnitt: Vorher / Nachher in `ls -l`
### Ziel
Die Wirkung sichtbar machen.

### Beispiel vorher
```txt
-rw-r--r-- 1 anna root 1200 Apr 3 10:15 notizen.txt
```

### Befehl
```bash
sudo chgrp team notizen.txt
```

### Beispiel nachher
```txt
-rw-r--r-- 1 anna team 1200 Apr 3 10:15 notizen.txt
```

### Aussage
Der Eigentümer bleibt gleich, aber die Gruppe ändert sich.

## 5) Abschnitt: Wann ist `chgrp` sinnvoll?
### Ziel
Den Mehrwert gegenüber `chown` verständlich machen.

### Praxisfall A – Projektordner für ein Team
Ein Ordner soll derselben Person gehören, aber für eine andere Arbeitsgruppe freigegeben werden.

### Praxisfall B – Datei bleibt bei der Person, aber das Team soll Zugang bekommen
Der Eigentümer bleibt `lina`, die Gruppe wird auf `webteam` gesetzt.

### Praxisfall C – Zusammenarbeit strukturieren
Mehrere Personen im selben Team sollen über Gruppenrechte auf Dateien zugreifen können.

## 6) Abschnitt: Rekursive Gruppenzuordnung kurz einordnen
### Ziel
`-R` erwähnen, aber nicht zum Hauptschwerpunkt machen.

### Beispiel
```bash
sudo chgrp -R webteam projektordner
```

### Erklärung
- wirkt auf Ordner und Unterinhalte
- nützlich bei Projektstrukturen
- bewusst einsetzen

## 7) Abschnitt: Häufige Fehler
### Ziel
Missverständnisse früh auffangen.

### Beispiele
- `chgrp` mit `chmod` verwechseln
- glauben, dass sich damit automatisch Rechte ändern
- glauben, dass auch der Eigentümer geändert wird
- rekursiv zu viel ändern
- Gruppe setzen, ohne zu prüfen, ob die Zugriffsrechte überhaupt passen

## 8) Lernmodus / interaktive Module
### Modul A: Welcher Befehl passt?
Aufgabe:
- „Die Datei soll weiter `anna` gehören, aber zur Gruppe `team` wechseln.“
- „Der Projektordner soll für `webteam` vorbereitet werden.“

Auswahl:
- `sudo chgrp team datei.txt`
- `sudo chown anna datei.txt`
- `chmod 775 projektordner`

Ziel:
- `chgrp` von `chown` und `chmod` unterscheiden

### Modul B: Was hat sich geändert?
Vorher/Nachher-Beispiel mit `ls -l`.

Fragen:
- Hat sich der Eigentümer geändert?
- Hat sich die Gruppe geändert?
- Sind die Rechte gleich geblieben?

### Modul C: Teamzugriff verstehen
Szenario:
- Datei gehört `lina`
- Gruppe ist `webteam`
- Rechte für Gruppe sind gesetzt

Frage:
- Warum ist `chgrp` hier sinnvoller als ein Eigentümerwechsel?

### Modul D: Rekursiv oder nicht?
Kleine Zuordnungsfrage:
- eine einzelne Datei
- ein kompletter Projektordner

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit `chgrp` änderst du, zu welcher Gruppe eine Datei oder ein Ordner gehört.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Im nächsten Schritt kannst du lernen, wie Besitz- und Gruppenwechsel in größeren Arbeitsabläufen zusammenspielen.“

Das kann gut zu:
- `linux/besitz-und-admin-workflows`
führen.

## Tonalität und Schreibregeln
Die Seite soll:
- praktisch und ruhig formuliert sein
- Teamarbeit verständlich machen
- keine unnötige Admin-Sprache verwenden
- Unterschiede zu `chown` und `chmod` klar halten
- nicht in Systemdateien oder Gruppenanlage abgleiten

## Visuelle Regeln
- kurze `ls -l`-Vorher/Nachher-Blöcke
- kompakte Gruppen-/Team-Komponente
- keine überbreiten Codefenster
- mobil sauber umbrechbar
- Light/Dark gut lesbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Team-/Gruppen-Komponente:
- Datei/Ordner
- Eigentümer
- Gruppe alt / neu
- Teammitglieder, die über Gruppenrechte profitieren

### Warum
- Gruppenlogik lässt sich als UI besser zeigen als mit Altgrafiken
- gute Wiederverwendbarkeit für `benutzer-und-gruppen`, `dateibesitz-verstehen` und `chgrp`
- kein Altbild bietet hier genug Qualität oder Mehrwert

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `chgrp` nicht als Rechte-Befehl darstellen
- Gruppenzuordnung und tatsächliche Zugriffsrechte nicht vermischen
- Eigentümeränderung und Gruppenänderung sprachlich sauber trennen
- `-R` nicht als Standardmodus verkaufen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/dateibesitz-verstehen`
- `linux/chown`

### Danach / später
- `linux/besitz-und-admin-workflows`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Gruppen-/Team-Komponente
- 2–4 Lernmodus-Elemente
- kurze `ls -l`-Vorher/Nachher-Beispiele
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- die Besitzlogik komplett macht
- ohne Altbilder auskommt
- Zusammenarbeit und Gruppenrechte verständlich macht
- direkt aus dem bisherigen Rechte- und Besitzblock folgt
