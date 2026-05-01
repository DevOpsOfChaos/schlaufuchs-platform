---
title: "Lösung – rsync-Backup mit Probelauf und Bestätigung"
description: "Musterlösung für ein Bash-Skript, das ein lokales rsync-Backup zuerst trocken prüft und danach bestätigt ausführt."
subject: "linux"
section: "Automatisierung und Skripte"
topicPath: ["automatisierung-und-skripte", "shellskripte", "rsync-backup-mit-probelauf-und-bestaetigung"]
taskId: "linux-rsync-backup-mit-probelauf-und-bestaetigung"
relatedExercise: "src/content/exercises/linux/automatisierung-und-skripte/shellskripte/rsync-backup-mit-probelauf-und-bestaetigung"
tags: ["linux", "Automatisierung und Skripte", "Shellskripte", "rsync", "backup", "loesung"]
draft: false
---

## Musterlösung

```bash
#!/usr/bin/env bash
set -euo pipefail

backup_ordner="Sicherheitstest"
quelle="/home/jw/Testverzeichnis/"

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
backup_root="$(dirname -- "$script_dir")/$backup_ordner"
backup_name="$(basename -- "$quelle")"
backup_ziel="$backup_root/$backup_name"

if [[ -d "$backup_root" ]]; then
  echo "Der Ordner existiert: $backup_root"
else
  mkdir -- "$backup_root"
  echo "Der Ordner wurde angelegt: $backup_root"
fi

echo "Probelauf:"
rsync -asHSvn -- "$quelle" "$backup_ziel"

read -r -p "Soll das Backup so ausgeführt werden? (j/n): " antwort

if [[ "$antwort" == "j" ]]; then
  echo "Backup wird ausgeführt:"
  rsync -asHSv -- "$quelle" "$backup_ziel"
else
  echo "Kein Backup."
fi
```

## Pfadbildung

`script_dir` wird aus `${BASH_SOURCE[0]}` und `dirname` gebildet. Dadurch hängt der Backup-Ort nicht davon ab, aus welchem Arbeitsverzeichnis das Skript gestartet wurde.

`backup_root` liegt eine Ebene über dem Skriptordner und heißt `Sicherheitstest`. Aus `/home/jw/Testverzeichnis/` liefert `basename` den Namen `Testverzeichnis`; daraus entsteht als Zielpfad:

```text
<uebergeordneter-skriptordner>/Sicherheitstest/Testverzeichnis
```

Die Variablen werden in Anführungszeichen verwendet, damit Pfade mit Leerzeichen nicht in mehrere Argumente zerlegt werden.

## rsync-Optionen

- `-a` aktiviert den Archivmodus und übernimmt unter anderem Verzeichnisse rekursiv, Rechte, Zeiten und symbolische Links.
- `-s` schützt Argumente bei rsync-Aufrufen vor unerwünschter Shell-Auswertung auf der Gegenseite; lokal schadet die Option nicht.
- `-H` erhält Hardlinks, soweit rsync sie erkennen kann.
- `-S` behandelt Sparse-Dateien platzsparend.
- `-v` gibt sichtbare Informationen aus.
- `-n` ist der Probelauf und führt keine Änderungen aus.

Der erste Aufruf nutzt `-n`, damit sichtbar wird, was rsync übertragen würde. Erst nach der Bestätigung mit `j` läuft derselbe Abgleich ohne `-n`.

## Quell- und Zielpfad

Der Quellpfad endet bewusst mit `/`:

```bash
"/home/jw/Testverzeichnis/"
```

Bei rsync bedeutet das: Der Inhalt dieses Verzeichnisses wird in das Ziel kopiert. Das Ziel ist das Verzeichnis `.../Sicherheitstest/Testverzeichnis`. Ohne den abschließenden Slash beim Quellpfad wäre die Zielstruktur anders zu prüfen, weil dann stärker das Quellverzeichnis selbst als Eintrag im Ziel im Vordergrund steht.

## Sicherheitsprüfungen

`set -euo pipefail` bricht bei nicht abgefangenen Fehlern, nicht gesetzten Variablen und Pipeline-Fehlern früher ab. Das ersetzt keine fachliche Prüfung, verhindert aber typische stille Folgefehler.

Das Skript setzt keine erhöhten Rechte ein. Wenn der Benutzer `/home/jw/Testverzeichnis/` nicht lesen oder den Backup-Ordner nicht anlegen kann, soll der Fehler sichtbar bleiben. Ein Backup-Skript, das Rechteprobleme pauschal mit `sudo` überdeckt, verschiebt das eigentliche Problem nur.

## Verwandte Referenzen

- Shell-Arbeitsfluss: Arbeitsverzeichnis, Benutzerkontext und Befehlsargumente prüfen.
- Pfade mit `basename`, `dirname` und `realpath`: Skriptpfade und Zielpfade sauber zerlegen.
- Dateirechte und Besitz: Leserechte auf der Quelle und Schreibrechte am Ziel einordnen.

## Quellenhinweis

Diese Lösung wurde aus dem legacy Schlaufuchs-Material `legacy/selected/linux/tasks/bash_rsync_backup` neu geschrieben und technisch gehärtet. Verwendete legacy Dateien: `linux_bashSkripte_aufgabe_13.html`, `aufgabe13.sh` und `aufgabe13_lsg.sh`. Zugehörige Ursprungsseite: `https://c-arts-modelle.de/schlaufuchs_web/linux/linux_aufgaben_bashSkripte/linux_bashSkripte_aufgabe_13.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; auf der Ursprungsseite ist der Autorenmarker JW mit Aktualisierungsdatum 07.05.2020 angegeben. Text, Erklärung und Skript wurden für die aktuelle Plattform neu geschrieben und adaptiert; legacy HTML, alte Gestaltung und die ungehärtete Skriptfassung wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
