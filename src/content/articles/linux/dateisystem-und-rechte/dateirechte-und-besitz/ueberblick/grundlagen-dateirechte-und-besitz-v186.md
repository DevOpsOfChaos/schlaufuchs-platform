---
title: "Grundlagen: Dateirechte und Besitz"
description: "Referenz zu Linux-Dateirechten, Besitz, Gruppen, chmod, chown und typischen Rechtefehlern."
subject: "linux"
section: "dateisystem-und-rechte"
topicPath: ["dateisystem-und-rechte", "dateirechte-und-besitz", "ueberblick", "grundlagen-dateirechte-und-besitz-v186"]
learningGoals: []
practiceIdeas: []
commonMistakes: ["Ausführrecht auf Verzeichnissen wie Ausführbarkeit einer Datei lesen", "chmod 777 als schnelle Reparatur verwenden", "Besitz, Gruppe und Rechte vermischen", "sudo einsetzen, obwohl Besitz oder Gruppenrechte falsch gesetzt sind"]
keyTakeaways: ["Dateirechte gelten getrennt für Besitzer, Gruppe und andere", "r, w und x bedeuten bei Dateien und Verzeichnissen nicht immer dasselbe", "chmod ändert Rechte, chown und chgrp ändern Besitz beziehungsweise Gruppenzuordnung", "sudo ist Rechteerhöhung, keine saubere Rechtekonfiguration"]
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "dateisystem-und-rechte", "dateirechte", "chmod", "chown"]
draft: false
---

# Dateirechte und Besitz unter Linux

Linux-Dateirechte regeln, welche Benutzer und Prozesse eine Datei oder ein Verzeichnis lesen, verändern oder ausführen dürfen. Die Entscheidung entsteht aus drei Ebenen: Benutzeridentität, Gruppenzugehörigkeit und den am Dateisystemeintrag gesetzten Rechten.

## Einordnung

Dateirechte gehören zum Zusammenspiel von Dateisystem, Benutzern, Gruppen und Prozessen. Eine Datei hat einen Besitzer und eine Gruppenzuordnung. Ein laufender Prozess läuft unter einer Benutzer-ID und mit bestimmten Gruppen. Wenn der Prozess auf einen Pfad zugreift, prüft der Kernel die passenden Rechte.

Das Modell ist bewusst grob: Es unterscheidet Besitzer, Gruppe und andere. Erweiterungen wie ACLs, Setuid, Setgid oder Sticky Bit bauen darauf auf, ändern aber nicht die Grundlogik dieser Seite.

## Besitzer, Gruppe und andere

Die klassischen Linux-Rechte werden für drei Klassen angegeben:

- **Besitzer** (`user`, `u`): das Benutzerkonto, dem der Dateisystemeintrag gehört.
- **Gruppe** (`group`, `g`): die Gruppenzuordnung des Dateisystemeintrags.
- **Andere** (`others`, `o`): alle Benutzer, die weder Besitzer sind noch über die passende Gruppe greifen.

Beim Erstellen einer Datei wird der aktuelle Benutzer typischerweise Besitzer. Die Gruppe ergibt sich aus der Umgebung, etwa aus der primären Gruppe des Benutzers oder aus Gruppenregeln des Verzeichnisses.

## Lesen, Schreiben und Ausführen

Die Grundrechte heißen `r`, `w` und `x`:

| Recht | Name | Bei Dateien | Bei Verzeichnissen |
| --- | --- | --- | --- |
| `r` | read | Inhalt lesen | Namen im Verzeichnis auflisten |
| `w` | write | Inhalt verändern | Einträge im Verzeichnis anlegen, löschen oder umbenennen |
| `x` | execute | Datei als Programm oder Skript starten | Verzeichnis betreten und Pfade darin durchlaufen |

Der wichtigste Stolperpunkt ist das Ausführrecht auf Verzeichnissen. Ein Verzeichnis mit `x` darf durchlaufen werden. Ohne `x` kann ein Prozess einen darunterliegenden Pfad nicht sinnvoll erreichen, selbst wenn der Name bekannt ist.

## Rechteanzeige mit `ls -l`

Eine lange Dateiliste zeigt Typ, Rechte, Besitzer und Gruppe:

```bash
ls -l
```

Beispielausgabe:

```text
-rwxr-xr-- 1 fox projekt 1280 May  1 10:20 deploy.sh
drwxr-x--- 2 fox projekt 4096 May  1 10:22 daten
```

Die erste Spalte wird von links nach rechts gelesen:

```text
-rwxr-xr--
| ||| ||| |||
| ||| ||| +++-- Rechte für andere: r--
| ||| +++------ Rechte für die Gruppe: r-x
| +++---------- Rechte für den Besitzer: rwx
+-------------- Typ: - für Datei, d für Verzeichnis
```

`-rwxr-xr--` bedeutet also: normale Datei, Besitzer darf lesen, schreiben und ausführen; die Gruppe darf lesen und ausführen; andere dürfen nur lesen.

## Symbolische Rechte mit `chmod`

`chmod` ändert Rechte. Die symbolische Schreibweise benennt Zielklasse, Operation und Recht:

```bash
chmod u+x deploy.sh
chmod g-w daten
chmod o-r geheim.txt
chmod u=rw,g=r,o= notizen.txt
```

Die Bausteine sind:

- `u`, `g`, `o`, `a` für Besitzer, Gruppe, andere oder alle.
- `+`, `-`, `=` für hinzufügen, entfernen oder exakt setzen.
- `r`, `w`, `x` für Lesen, Schreiben und Ausführen.

Symbolische Schreibweise ist gut, wenn nur ein bestimmtes Recht verändert werden soll. Sie macht die Absicht oft klarer als eine reine Zahlenangabe.

## Numerische Rechte mit `chmod`

Die numerische Schreibweise addiert die Werte der gesetzten Rechte:

| Wert | Recht |
| --- | --- |
| `4` | Lesen |
| `2` | Schreiben |
| `1` | Ausführen |

Jede der drei Ziffern steht für Besitzer, Gruppe und andere:

```bash
chmod 755 deploy.sh
chmod 640 bericht.txt
chmod 750 projekt
```

`755` bedeutet `rwxr-xr-x`. `640` bedeutet `rw-r-----`. `750` bedeutet `rwxr-x---`.

Numerische Rechte sind kompakt, aber sie setzen den kompletten Rechtezustand neu. Wer nur schnell eine Ziffer kopiert, kann dabei mehr öffnen oder schließen als beabsichtigt.

## Besitz und Gruppenzuordnung

Rechte allein reichen nicht aus. Wenn Besitzer oder Gruppe falsch sind, ist ein weiteres `chmod` oft nur Kosmetik.

```bash
chown fox bericht.txt
chown fox:projekt bericht.txt
chgrp projekt bericht.txt
```

`chown` ändert den Besitzer und kann zusätzlich die Gruppe setzen. `chgrp` ändert gezielt die Gruppenzuordnung. Auf vielen Systemen braucht ein normaler Benutzer für Besitzwechsel erhöhte Rechte, während Gruppenwechsel nur unter passenden Gruppenmitgliedschaften erlaubt ist.

## Root, sudo und Rechte

`root` ist der administrative Benutzer mit weitreichenden Rechten. `sudo` führt einen einzelnen Befehl mit erhöhten Rechten aus, wenn die lokale Konfiguration das erlaubt.

Das ist keine Ersatzlösung für falsche Dateirechte. Wenn eine Projektdatei versehentlich `root` gehört, kann `sudo` den Zugriff kurzfristig erzwingen, aber das Besitzproblem bleibt bestehen. Sauberer ist meist, Besitzer, Gruppe und benötigte Rechte zu prüfen und gezielt zu korrigieren.

Typische Prüffolge:

```bash
ls -l bericht.txt
id
```

Danach erst wird entschieden, ob `chmod`, `chown`, `chgrp` oder tatsächlich `sudo` fachlich passt.

## Dateien und Verzeichnisse im Vergleich

Bei Dateien ist `x` vor allem für Programme und Skripte relevant. Ein Shellskript braucht zusätzlich einen passenden Inhalt, etwa eine Shebang-Zeile, und muss vom aufrufenden Benutzer gelesen beziehungsweise ausgeführt werden können.

Bei Verzeichnissen ist `x` ein Zugangsrecht. Ein Benutzer kann ein Verzeichnis mit gesetztem `x` betreten oder als Pfadbestandteil durchlaufen. Zum Auflisten der enthaltenen Namen ist zusätzlich `r` nötig. Zum Anlegen, Löschen oder Umbenennen von Einträgen ist `w` auf dem Verzeichnis nötig; für praktische Nutzung wird dabei fast immer auch `x` gebraucht.

## Beispiele

Eine neue Datei anlegen und die Rechte lesen:

```bash
touch bericht.txt
ls -l bericht.txt
```

Eine Datei nur für Besitzer schreibbar und für die Gruppe lesbar machen:

```bash
chmod 640 bericht.txt
```

Ein Skript für den Besitzer ausführbar machen:

```bash
chmod u+x deploy.sh
```

Ein Projektverzeichnis für Besitzer und Gruppe nutzbar machen, aber vor anderen schließen:

```bash
mkdir projekt
chmod 750 projekt
```

Die Gruppe eines Projektverzeichnisses setzen:

```bash
chgrp projekt projekt
```

## Typische Fehler

- **Ausführrecht bei Verzeichnissen falsch lesen:** `x` heißt dort nicht "Programm starten", sondern "betreten oder durchlaufen".
- **`chmod 777` als bequeme Reparatur verwenden:** Damit erhalten alle Benutzer Lesen, Schreiben und Ausführen. Das beseitigt oft nur das Symptom und öffnet unnötig viel Zugriff.
- **Besitzer, Gruppe und andere vermischen:** Eine Datei kann für den Besitzer beschreibbar, für die Gruppe lesbar und für andere komplett gesperrt sein. Diese drei Blöcke müssen getrennt gelesen werden.
- **Dateirechte mit Shell-Syntax verwechseln:** Ein Befehl kann syntaktisch korrekt sein und trotzdem an Rechten scheitern. Umgekehrt repariert `chmod` keine falschen Pfade, Quotes oder Optionen.
- **`sudo` statt Rechtekorrektur nutzen:** Wenn normale Arbeit nur noch mit `sudo` gelingt, ist häufig Besitz, Gruppe oder Arbeitsort falsch.

## Beziehung zur Linux-Lernshell

Die Linux-Lernshell der Plattform unterstützt bereits eine vorbereitete Umgebung zum Lesen einfacher Dateirechte, unter anderem über die Shell-Seite zu `ls`, `stat` und `chmod`. Für diese Referenzseite wird kein neues interaktives Modul angelegt; sie bleibt der fachliche Überblick zu Modell, Schreibweisen und typischen Fehlentscheidungen.

## Verwandte Themen

- Shell-Arbeitsfluss: Befehle erst im richtigen Pfad und Benutzerkontext ausführen.
- Dateien und Verzeichnisse: Pfade, Dateitypen und Verzeichnisstruktur einordnen.
- Benutzer und Gruppen: Benutzeridentität, Gruppenzugehörigkeit und Systemkonten verstehen.
- `chmod`: Rechte gezielt symbolisch oder numerisch ändern.
- Besitz und Gruppenwechsel: `chown` und `chgrp` als eigene Ebene behandeln.
- Shellskripte: Ausführbarkeit, Shebang und Aufrufkontext sauber trennen.

## Quellenhinweis

Diese Seite wurde fachlich mit dem legacy Schlaufuchs-Material `legacy/selected/linux/topic-sources/linux_dateirechte.html` abgeglichen. Zugehörige Quell-URL: `https://c-arts-modelle.de/schlaufuchs_web/linux/linux_dateisystem/linux_dateirechte.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0. Ein einzelner Autorenmarker war in der geprüften HTML-Datei nicht erkennbar. Text und Struktur wurden für die aktuelle Plattform neu geschrieben und adaptiert; legacy HTML, altes Layout, alte Bilddateien und das legacy Diagramm `linux/linux_dateisystem/bilder/permissions.png` wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Rechteinhaber.
