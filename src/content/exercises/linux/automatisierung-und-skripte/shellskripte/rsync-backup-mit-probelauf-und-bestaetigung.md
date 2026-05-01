---
title: "rsync-Backup mit Probelauf und Bestätigung"
description: "Schreibe ein Bash-Skript, das ein Verzeichnis mit rsync zuerst trocken prüft und erst nach Bestätigung sichert."
subject: "linux"
section: "Automatisierung und Skripte"
topicPath: ["automatisierung-und-skripte", "shellskripte", "rsync-backup-mit-probelauf-und-bestaetigung"]
taskId: "linux-rsync-backup-mit-probelauf-und-bestaetigung"
tags: ["linux", "Automatisierung und Skripte", "Shellskripte", "rsync", "backup", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---

## Aufgabe

Schreibe ein Bash-Skript für ein lokales rsync-Backup.

Das Skript liegt in einem beliebigen Arbeitsverzeichnis und muss von jedem aktuellen Verzeichnis aus aufrufbar sein. Der Backup-Ordner wird nicht relativ zum Aufrufort bestimmt, sondern relativ zum Speicherort des Skripts.

## Ausgangsdaten

- Zu sicherndes Verzeichnis: `/home/jw/Testverzeichnis/`
- Backup-Hauptordner: `Sicherheitstest`
- Lage des Backup-Hauptordners: im übergeordneten Verzeichnis des Skriptordners
- Zielverzeichnis für die Sicherung: `Sicherheitstest/Testverzeichnis`

Beispiel: Liegt das Skript in `/home/jw/bin/backup.sh`, dann liegt der Backup-Hauptordner unter `/home/jw/Sicherheitstest`, und die Sicherung landet unter `/home/jw/Sicherheitstest/Testverzeichnis`.

## Anforderungen

1. Bestimme den Skriptordner aus dem Skriptpfad, nicht aus dem aktuellen Arbeitsverzeichnis.
2. Lege den Backup-Hauptordner an, falls er noch nicht existiert.
3. Leite den Namen des Zielverzeichnisses mit `basename` aus `/home/jw/Testverzeichnis/` ab.
4. Führe zuerst einen rsync-Probelauf aus:

   ```bash
   rsync -asHSvn "/home/jw/Testverzeichnis/" "<zielverzeichnis>"
   ```

5. Frage danach interaktiv ab, ob das Backup ausgeführt werden soll.
6. Führe das echte Backup nur bei der Antwort `j` aus:

   ```bash
   rsync -asHSv "/home/jw/Testverzeichnis/" "<zielverzeichnis>"
   ```

7. Gib aus, ob der Backup-Hauptordner bereits existierte, neu angelegt wurde, das Backup gestartet wurde oder abgebrochen wurde.

## Pfad- und Rechtehinweise

Das Skript darf nicht voraussetzen, dass es aus seinem eigenen Ordner gestartet wird. Alle selbst gebildeten Pfade müssen deshalb absolut oder aus einem eindeutig bestimmten Skriptpfad abgeleitet sein.

Der aufrufende Benutzer braucht Leserechte auf `/home/jw/Testverzeichnis/` und Schreibrechte im übergeordneten Verzeichnis des Skriptordners. Fehlende Rechte sollen nicht mit `sudo` verdeckt werden.

Der abschließende Slash in `/home/jw/Testverzeichnis/` ist Teil der Aufgabe: Es soll der Inhalt des Quellverzeichnisses in das Zielverzeichnis `Testverzeichnis` kopiert werden.

## Erwartete Abgabe

- ein vollständiges Bash-Skript,
- eine kurze Erklärung der verwendeten rsync-Optionen,
- eine Erklärung, wie Quellpfad und Zielpfad gebildet werden,
- eine kurze Begründung, warum der Probelauf vor der echten Ausführung steht.

## Quellenhinweis

Diese Aufgabe wurde aus dem legacy Schlaufuchs-Material `legacy/selected/linux/tasks/bash_rsync_backup` neu geschrieben und fachlich adaptiert. Zugehörige Ursprungsseite: `https://c-arts-modelle.de/schlaufuchs_web/linux/linux_aufgaben_bashSkripte/linux_bashSkripte_aufgabe_13.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; auf der Ursprungsseite ist der Autorenmarker JW mit Aktualisierungsdatum 07.05.2020 angegeben. Text, Aufgabenstruktur und Skriptanforderungen wurden für die aktuelle Plattform neu formuliert; legacy HTML, alte Gestaltung und alter Seitencode wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
