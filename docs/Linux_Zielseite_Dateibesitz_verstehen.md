# Linux – Zielseite `dateibesitz-verstehen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/dateibesitz-verstehen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einsteigerseite zum Thema Dateibesitz unter Linux.

Die Seite soll erklären, dass Dateien und Ordner nicht nur Rechte besitzen, sondern auch einem **Eigentümer** und einer **Gruppe** zugeordnet sind.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Rechte / Benutzerlogik

Sie kommt sinnvoll **nach**:
- `linux/dateirechte-grundlagen`
- `linux/chmod`
- `linux/benutzer-und-gruppen`

Und **vor**:
- `linux/chown`
- `linux/chgrp`
- spätere Admin-Vertiefungen

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass Dateien und Ordner einem Benutzer gehören können
- dass Dateien und Ordner zusätzlich einer Gruppe zugeordnet sein können
- dass Rechte erst zusammen mit Eigentümer und Gruppe wirklich Sinn ergeben
- wie Eigentümer und Gruppe in `ls -l` sichtbar werden
- warum Besitz für Projekte, Teamarbeit und Systemorganisation wichtig ist

Die Seite soll **noch nicht** primär lehren, wie Besitz geändert wird. Das kommt auf `chown` und `chgrp`.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- `chown` im Detail
- `chgrp` im Detail
- `useradd`, `usermod`, `groupadd`
- `/etc/passwd`, `/etc/group`, `/etc/shadow`
- tiefe Admin- und Deployment-Beispiele
- rekursive Besitzänderungen
- Hosting-/Webserver-Spezialfälle als Hauptthema

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
- `linux/linux_dateisystem/linux_dateirechte.html`
- indirekt angrenzend: Benutzerverwaltungsdateien aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- die Begriffe Eigentümer und Gruppe endlich sichtbar machen
- an die bisherigen Rechte-Seiten anschließen
- mit kleinen alltagsnahen Beispielen arbeiten
- kurze, echte Terminalblöcke nutzen
- ruhig, verständlich und professionell formuliert sein
- einen klaren Übergang zu `chown` und `chgrp` bilden
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, worum es geht.

### Inhalt
- Titel: `Dateibesitz verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Unter Linux hat eine Datei nicht nur Rechte, sondern gehört auch einem Benutzer und meist auch einer Gruppe.

## 2) Abschnitt: Warum gehört eine Datei jemandem?
### Ziel
Den Sinn von Besitz erklären, bevor technische Darstellung kommt.

### Kernpunkte
- Dateien entstehen im Kontext eines Benutzers
- persönliche Dateien sollen zuordenbar sein
- Teamordner brauchen eine Gruppenzuordnung
- Besitz hilft, Rechte sinnvoll anzuwenden

### Stil
- alltagsnah
- ohne unnötige Systemtiefe

## 3) Abschnitt: Eigentümer und Gruppe
### Ziel
Die beiden Begriffe sauber einführen.

### Inhalt
- Eigentümer: wem die Datei direkt gehört
- Gruppe: welcher Gruppe die Datei zugeordnet ist
- zusammen bestimmen sie, welche Rechte für wen relevant sind

### Beispiel
- Datei gehört `anna`
- Gruppe ist `team`
- daraus ergibt sich, welche Nutzer in Eigentümer-, Gruppen- oder Andere-Kategorie fallen

## 4) Abschnitt: Besitz in `ls -l` erkennen
### Ziel
Die Begriffe in echter Terminaldarstellung wiederfinden.

### Beispiel
```txt
-rw-r--r-- 1 anna team 1200 Apr 3 10:15 notizen.txt
drwxr-x--- 2 lina webteam 4096 Apr 3 10:20 projekt
```

### Erklärung
- nach dem Rechteblock erscheinen Eigentümer und Gruppe
- `anna team` bzw. `lina webteam` zeigen, wem das Objekt gehört und welcher Gruppe es zugeordnet ist
- der Rest der Zeile kann vorerst zweitrangig bleiben

## 5) Abschnitt: Warum ist Besitz wichtig?
### Ziel
Die Begriffe mit echter Nutzung verbinden.

### Praxisfälle
- private Datei gehört einer einzelnen Person
- Projektordner gehört einem Benutzer und einer Teamgruppe
- andere Benutzer haben weniger Rechte, wenn sie nicht zur Gruppe gehören

### Form
3 kompakte Karten oder kleine Szenarien

## 6) Abschnitt: Rechte und Besitz zusammen denken
### Ziel
Die Verbindung zu den bisherigen Seiten festigen.

### Inhalt
- Rechte sagen, **was** erlaubt ist
- Eigentümer und Gruppe sagen, **für wen** die Regeln gelten
- ohne Eigentümer und Gruppe wären die Rechteblöcke nur halbe Information

### Wichtiger Satz
Erst zusammen ergeben Rechte, Eigentümer und Gruppe ein vollständiges Zugriffsmodell.

## 7) Abschnitt: Wo sieht man den aktuellen Benutzer?
### Ziel
Den Lernenden eine einfache Verbindung zur eigenen Sitzung geben.

### Befehl
```bash
whoami
```

### Kurzfunktion
Zeigt, mit welchem Benutzer gerade gearbeitet wird.

Optional ergänzend:
```bash
id
```

Aber nur kurz, nicht zu tief.

## 8) Lernmodus / interaktive Module
### Modul A: Wem gehört die Datei?
Beispielzeile:
```txt
-rw-r--r-- 1 anna team 1200 Apr 3 10:15 notizen.txt
```

Fragen:
- Wer ist Eigentümer?
- Welche Gruppe ist eingetragen?

### Modul B: Wer zählt zu „Gruppe“, wer zu „Andere“?
Szenario:
- Datei gehört `lina`
- Gruppe ist `webteam`
- `tom` ist nicht in `webteam`

Fragen:
- Wer ist Eigentümer?
- Wer profitiert von Gruppenrechten?
- Wer fällt unter „andere“?

### Modul C: Rechte und Besitz zusammendenken
Beispiel:
- Eigentümer: `anna`
- Gruppe: `team`
- Rechte: `rw-r-----`

Fragen:
- Was darf `anna`?
- Was darf ein Mitglied von `team`?
- Was dürfen andere Nutzer?

### Modul D: `ls -l` lesen
Kurze Zeilen mit Datei- und Ordnerbeispielen erkennen.

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Rechte sagen, **was** erlaubt ist – Eigentümer und Gruppe zeigen, **für wen** diese Regeln gelten.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Im nächsten Schritt lernst du, wie man Eigentümer mit `chown` oder Gruppen mit `chgrp` gezielt ändert.“

## Tonalität und Schreibregeln
Die Seite soll:
- ruhig und verständlich formuliert sein
- nicht trocken oder bürokratisch wirken
- mit echten, kleinen Praxisfällen arbeiten
- keine Admin-Sonderfälle aufblähen
- die Verbindung zu Rechten klar halten

## Visuelle Regeln
- keine unnötig großen Tabellen
- Eigentümer / Gruppe / Andere als kompakte Vergleichskomponente
- `ls -l`-Blöcke kurz und gut lesbar
- mobil sauber umbrechbar
- Light/Dark gut lesbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Besitz-Komponente:
- Objekt: Datei oder Ordner
- Eigentümer
- Gruppe
- Rechtezuordnung zu Eigentümer / Gruppe / Andere

### Warum
- fachlich klarer
- besser kombinierbar mit Folge-Seiten zu `chown` und `chgrp`
- kein Altbild liefert hier genug Mehrwert

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- Besitz nicht mit Rechten verwechseln
- Eigentümer nicht automatisch mit „einziger Nutzer“ gleichsetzen
- Gruppe nicht als bloße Ordnerkategorie missverstehen
- `whoami`/`id` nur so tief erklären, wie es Einsteiger brauchen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/dateirechte-grundlagen`
- `linux/chmod`
- `linux/benutzer-und-gruppen`

### Direkt danach
- `linux/chown`
- `linux/chgrp`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Besitz-/Rechte-Komponente
- 2–4 Lernmodus-Elemente
- kurze `ls -l`-Beispiele
- 1 Merksatz-Block
- 1 Übergang zu `chown` / `chgrp`

## Warum diese Seite ein guter nächster Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- die Rechte-Strecke logisch vervollständigt
- ohne Altbilder auskommt
- fachlich viel Klarheit bringt
- `chown` und `chgrp` direkt vorbereitet
- sich sehr gut mit kleinen Besitz-/Team-Szenarien umsetzen lässt
