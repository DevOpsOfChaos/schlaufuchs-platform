# Linux – Neuaufbau Rechte, Benutzerklassen und `chmod`

## Ziel dieses Schritts
Der alte Linux-Bereich wird hier **nicht übernommen**, sondern nur als Inhaltsquelle verwendet. Für den Relaunch wird das Thema **Dateirechte / Benutzerklassen / chmod** neu geordnet, sprachlich modernisiert und stärker interaktiv aufgebaut.

Dieser Block soll im neuen Aufbau **klarer getrennt** werden als im Altbestand, weil dort Dateirechte, Benutzerverwaltung und administrative Systemdateien teilweise zu eng vermischt sind.

## Alte Quellseiten für diesen Block
Nur als Quelle für Themen, Begriffe und Beispiele:

- `linux/linux_dateisystem/linux_dateirechte.html`
- `linux/linux_dateisystem/linux_dateirechte_aufgabe_01.html`
- `linux/linux_dateisystem/linux_dateirechte_aufgabe_02.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_dateien.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_aufgabe_01.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_aufgabe_02.html`

## Kernaussagen, die wir aus dem Altbestand mitnehmen
### Dateirechte
- Linux kennt die Grundrechte `r`, `w`, `x`.
- Rechte werden für drei Klassen vergeben:
  - Eigentümer / User (`u`)
  - Gruppe (`g`)
  - Andere (`o`)
- Es gibt eine symbolische Darstellung wie `rwxr-xr--`.
- Es gibt eine numerische Darstellung wie `754`.
- Sonderrechte existieren, sind aber **nicht Einstiegsebene**.

### Benutzer und Gruppen
- Linux ist ein Mehrbenutzersystem.
- Benutzerkonten und Gruppen dienen vor allem der Trennung von Zuständigkeiten und Rechten.
- `root` muss inhaltlich erwähnt werden, aber ohne unnötige Paniksprache.
- Befehle wie `id` und `groups` sind für Einsteiger sinnvoll.
- `useradd`, `/etc/passwd`, `/etc/group`, `/etc/shadow` sind eher **Fortgeschrittenen-/Admin-Stoff**.

## Neue Seitenzuordnung
## 1) Neue Kernseite: `linux/dateirechte-grundlagen`
**Ziel:** Einstieg in das Rechte-Modell.

**Inhalte:**
- Was sind Dateirechte?
- Die drei Rechte `r`, `w`, `x`
- Die drei Klassen `u`, `g`, `o`
- Unterschied Datei vs. Verzeichnis
- Lesen von `ls -l`
- einfache Beispiele

**Nicht hier hinein:**
- `useradd`
- `/etc/shadow`
- komplizierte Admin-Workflows
- Sonderrechte im Detail

## 2) Neue Kernseite: `linux/chmod`
**Ziel:** Rechte wirklich ändern können.

**Inhalte:**
- `chmod` symbolisch: `u+x`, `g-w`, `o=r`
- `chmod` numerisch: `644`, `755`, `600`
- typische Praxisfälle:
  - Textdatei
  - Skript ausführbar machen
  - private Datei schützen

**Didaktik:**
- numerisch und symbolisch nicht mischen, sondern nacheinander erklären
- erst Bedeutung, dann Beispiele, dann Übung

## 3) Neue Kernseite: `linux/benutzer-und-gruppen`
**Ziel:** verstehen, warum Rechte überhaupt in Klassen aufgeteilt sind.

**Inhalte:**
- Benutzer vs. Gruppe
- Eigentümer einer Datei
- Gruppenidee in einfachen Beispielen
- `id`
- `groups`

**Optional später:**
- `chown`
- `chgrp`

## 4) Spätere Vertiefungsseite: `linux/systemdateien-benutzerverwaltung`
**Ziel:** Admin-Wissen separat halten.

**Inhalte:**
- `/etc/passwd`
- `/etc/group`
- `/etc/shadow`
- was dort ungefähr steht
- warum man diese Dateien nicht manuell für Anfängerübungen anfassen sollte

**Wichtig:** Diese Seite darf **nicht** mit Einstieg und Dateirechten vermischt werden.

## Was aus dem Altbestand bewusst nicht direkt übernommen wird
- das alte Seitenlayout
- die alten Aufgabenblätter in ihrer bisherigen Form
- die alte Bildlogik
- unnötig verstreute Mini-Unterseiten
- abschreckende oder überdramatische Root-Formulierungen
- tiefe Admin-Dateien auf Einsteigerseiten

## Bildentscheidung
### `bilder/permissions.png`
**Nicht direkt übernehmen.**

Grund:
- typische Altgrafik
- inhaltlich leicht als echte UI-Komponente nachbaubar
- im neuen Design sauberer als eigenständige Grafik oder React-/SVG-Komponente lösbar

**Neu bauen statt übernehmen:**
- Rechte-Matrix für `u / g / o`
- Umschalter für `r / w / x`
- Live-Anzeige von symbolischer und numerischer Notation

## Interaktive Module statt alter Bilder/Aufgaben
### Modul 1: Rechte-Matrix
User klickt an:
- User: `r w x`
- Group: `r - x`
- Others: `r - -`

Ausgabe:
- symbolisch: `rwxr-xr--`
- numerisch: `754`

### Modul 2: `ls -l` lesen
Vorgegebene Zeilen wie:
```txt
-rw-r--r-- 1 anna team 1200 Apr 3 10:15 notizen.txt
drwxr-x--- 2 anna team 4096 Apr 3 10:20 projekt
```

Dazu Fragen:
- Ist es eine Datei oder ein Verzeichnis?
- Wer darf schreiben?
- Wer darf ausführen?

### Modul 3: `chmod`-Trainer
Vorgegebene Aufgaben:
- „Mache das Skript ausführbar für den Eigentümer“
- „Sorge dafür, dass nur der Eigentümer lesen und schreiben darf“
- „Gib der Gruppe Leserechte“

Nur vorbereitete Eingaben/Antworten, keine echte Befehlsausführung.

### Modul 4: Benutzer und Gruppen verstehen
Kleine Demo:
- Datei gehört `lina`
- Gruppe ist `webteam`
- anderer Benutzer `tom`

Frage:
- Wer darf was?
- Was ändert sich, wenn `tom` Mitglied von `webteam` ist?

## Merksätze für die neuen Seiten
### Dateirechte Grundlagen
> Dateirechte legen fest, **wer** eine Datei lesen, ändern oder ausführen darf.

### chmod
> Mit `chmod` änderst du Rechte gezielt für Eigentümer, Gruppen und andere.

### Benutzer und Gruppen
> Benutzer und Gruppen sorgen dafür, dass auf einem Linux-System nicht alle alles dürfen.

## Konkrete Build-Reihenfolge
1. `dateirechte-grundlagen`
2. `chmod`
3. `benutzer-und-gruppen`
4. optional später `systemdateien-benutzerverwaltung`

## Reduktionsregel für diesen Block
Alles, was nur als Bild erklärt wurde, wird zuerst geprüft, ob es stattdessen besser ist als:
- echter Codeblock
- interaktive Mini-Komponente
- kompakte Infografik
- kurze Vergleichstabelle

Wenn ja, **kein Bild übernehmen**.

## Empfehlung für die Umsetzung im Repo
Dieser Block eignet sich sehr gut als nächstes echtes Migrationspaket, weil er:
- fachlich wichtig ist
- überschaubar bleibt
- viele alte Bild-/Aufgabenreste durch moderne UI ersetzen kann
- gut zum vorhandenen Lernmodus und zu sicheren interaktiven Modulen passt
