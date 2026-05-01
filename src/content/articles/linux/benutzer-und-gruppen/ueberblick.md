---
title: "Benutzer und Gruppen"
description: "Referenz zu Linux-Benutzern, Gruppen, UID, GID, root, sudo und dem Zusammenhang mit Dateirechten."
subject: "linux"
section: "Rechte und Sicherheit"
topicPath: ["benutzer-und-gruppen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: ["Benutzer und Gruppe verwechseln", "primäre und zusätzliche Gruppen gleichsetzen", "root oder sudo als Reparatur für Besitzprobleme verwenden", "Rechte ändern, ohne Besitzer und Gruppe zu prüfen", "Befehle kopieren, ohne aktuellen Benutzer und Gruppen zu kontrollieren"]
keyTakeaways: ["Linux ordnet Prozesse und Dateien Benutzer-IDs und Gruppen-IDs zu", "Dateirechte werden gegen Benutzer, Gruppe und andere geprüft", "root und sudo verschieben Berechtigungsgrenzen, ersetzen aber kein Rechtekonzept", "/etc/passwd, /etc/group und /etc/shadow sind zentrale Referenzdateien für lokale Konten"]
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Rechte und Sicherheit", "Benutzer", "Gruppen", "sudo"]
draft: false
---
# Benutzer und Gruppen unter Linux

Linux verwendet Benutzer und Gruppen als Identitäten für Prozesse, Dateien und Berechtigungsentscheidungen. Ein Benutzerkonto beschreibt, unter welcher Identität gearbeitet wird. Gruppen bündeln mehrere Benutzer, damit Rechte nicht für jede Person oder jeden Prozess einzeln verwaltet werden müssen.

## Einordnung

Benutzer und Gruppen gehören zum Grundmodell von Linux: Ein laufender Prozess besitzt eine Benutzer-ID und Gruppenmitgliedschaften. Eine Datei oder ein Verzeichnis besitzt einen Eigentümer, eine Gruppenzuordnung und Rechtebits. Wenn ein Prozess auf einen Pfad zugreift, prüft der Kernel diese Informationen zusammen.

Dadurch hängen mehrere Themen direkt zusammen:

- **Prozesse:** Ein Befehl läuft nicht abstrakt, sondern unter einer konkreten Benutzeridentität.
- **Dateisystem:** Dateien und Verzeichnisse speichern Besitzer, Gruppe und Rechte.
- **Rechte:** Lesen, Schreiben und Ausführen werden getrennt für Besitzer, Gruppe und andere bewertet.
- **Besitz:** `chown` und `chgrp` ändern nicht die Rechtebits, sondern die Zuordnung, gegen die Rechte geprüft werden.

## Benutzerkonto und UID

Ein Benutzerkonto ist eine lokale oder über Verzeichnisdienste bereitgestellte Identität. Typische Informationen sind Benutzername, UID, primäre Gruppe, Home-Verzeichnis und Login-Shell.

Die **UID** ist die numerische Benutzer-ID. Linux arbeitet intern mit dieser Zahl; der Benutzername ist die lesbare Darstellung. Der Benutzer `root` hat traditionell die UID `0` und besitzt administrative Sonderrechte.

Normale Personen können eigene Benutzerkonten haben. Dienste verwenden oft eigene Systembenutzer, etwa damit ein Webserver, eine Datenbank oder ein Hintergrunddienst mit begrenzten Rechten läuft. Das ist keine Dekoration, sondern ein Sicherheitsmechanismus: Ein Dienst soll nur das lesen und schreiben können, was er wirklich benötigt.

## Gruppen, GID und Gruppenmitgliedschaft

Eine Gruppe bündelt Benutzer oder Prozessidentitäten für gemeinsame Berechtigungen. Jede Gruppe besitzt eine **GID**, also eine numerische Gruppen-ID. Auch hier arbeitet das System intern mit der Zahl, während der Gruppenname die lesbare Form ist.

Bei Benutzern sind zwei Gruppenarten wichtig:

- **Primäre Gruppe:** Die Standardgruppe eines Benutzers. Neue Dateien erhalten häufig diese Gruppe, sofern keine Verzeichnisregel etwas anderes vorgibt.
- **Zusätzliche Gruppen:** Weitere Gruppen, deren Rechte der Benutzer in einer Sitzung nutzen kann.

Diese Unterscheidung ist praktisch wichtig. Wer nur die primäre Gruppe betrachtet, übersieht oft Zugriffe über zusätzliche Gruppen. Umgekehrt bedeutet die Existenz einer Gruppe nicht, dass ein Benutzer automatisch Mitglied ist.

## Zusammenhang mit Dateirechten

Eine lange Dateiliste zeigt Besitzer und Gruppe neben den Rechtebits:

```bash
ls -l projekt.txt
```

Beispiel:

```text
-rw-r----- 1 fox projekt 1280 May  1 10:20 projekt.txt
```

Die Datei gehört dem Benutzer `fox` und der Gruppe `projekt`. Die Rechte bedeuten:

| Bereich | Rechte | Wirkung |
| --- | --- | --- |
| Besitzer `fox` | `rw-` | lesen und schreiben |
| Gruppe `projekt` | `r--` | lesen |
| Andere | `---` | kein Zugriff |

Ob ein anderer Benutzer die Datei lesen darf, hängt also nicht nur von `r--` in der Gruppenspalte ab. Er muss auch zur Gruppe `projekt` gehören oder über einen anderen Mechanismus berechtigt sein. Wenn der Besitzer oder die Gruppe falsch ist, ist ein weiteres `chmod` oft die falsche Reparatur.

## root und sudo

`root` ist die administrative Identität mit weitreichenden Rechten. Diese Rechte sind für Systemverwaltung nötig, aber als Arbeitsmodus gefährlich: Ein falscher Pfad, eine zu breite Wildcard oder ein rekursiver Befehl kann sofort systemweite Folgen haben.

`sudo` führt einen einzelnen Befehl mit erhöhten Rechten aus, wenn die lokale sudoers-Konfiguration das erlaubt. Das ist eine kontrollierte Rechteerhöhung, keine fachliche Begründung für den Befehl.

Sinnvolle Grenze:

- Systemkonfiguration, Paketverwaltung oder Dienststeuerung können `sudo` benötigen.
- Dateien im eigenen Home-Verzeichnis sollten normalerweise ohne `sudo` bearbeitet werden.
- Wenn ein Projekt nur noch mit `sudo` funktioniert, sind häufig Besitzer, Gruppe, Pfad oder vorherige Befehle falsch gelaufen.

## Zentrale lokale Dateien

Die lokalen Kontoinformationen liegen auf klassischen Linux-Systemen in mehreren Textdateien. In produktiven Umgebungen können zusätzlich LDAP, Active Directory, SSSD, systemd-homed oder Containermechanismen beteiligt sein. Für das Grundmodell bleiben diese Dateien wichtige Referenzpunkte.

| Datei | Zweck |
| --- | --- |
| `/etc/passwd` | enthält Benutzerkonten mit Name, UID, GID, Kommentar, Home-Verzeichnis und Login-Shell |
| `/etc/group` | enthält Gruppen, GID und lokale Gruppenmitglieder |
| `/etc/shadow` | enthält Passwort-Hashes und Ablaufdaten; normalerweise nur für privilegierte Prozesse lesbar |

`/etc/passwd` enthält heute auf normalen Systemen nicht mehr die Passwort-Hashes. Der Name ist historisch; sensible Passwortdaten gehören nach `/etc/shadow`.

## Wichtige Befehle

Diese Befehle gehören auf Referenzebene zum Thema:

| Befehl | Rolle |
| --- | --- |
| `whoami` | zeigt den aktuellen Benutzernamen der Shell |
| `id` | zeigt UID, primäre GID und zusätzliche Gruppen |
| `groups` | zeigt Gruppenmitgliedschaften eines Benutzers |
| `useradd` / `adduser` | legt Benutzerkonten an; Verhalten und Komfort unterscheiden sich je nach Distribution |
| `usermod` | verändert bestehende Konten, zum Beispiel zusätzliche Gruppen |
| `chown` | ändert Besitzer und optional Gruppe eines Dateisystemeintrags |
| `chgrp` | ändert gezielt die Gruppenzuordnung eines Dateisystemeintrags |

Vor Änderungen ist Diagnose wichtiger als Aktion:

```bash
whoami
id
groups
ls -l projekt.txt
```

Erst danach ist klar, ob ein Problem an der aktuellen Identität, an Gruppenmitgliedschaften, an Besitzzuordnung oder an Rechtebits liegt.

## Benutzer und Gruppen ändern

Benutzer- und Gruppenverwaltung ist administrative Arbeit. `useradd`, `adduser` und `usermod` greifen in Konten, Home-Verzeichnisse, Gruppen und Anmeldemöglichkeiten ein. Die genauen Optionen unterscheiden sich zwischen Distributionen, deshalb gehört vor produktiven Änderungen ein Blick in die lokale Manpage.

Ein wichtiger Betriebsaspekt: Gruppenmitgliedschaften werden in bestehenden Sitzungen nicht immer sofort wirksam. Nach einer Änderung muss der betroffene Benutzer sich häufig neu anmelden oder eine neue Sitzung starten.

## Typische Fehler

- **Benutzer und Gruppe verwechseln:** Ein Benutzerkonto ist eine Identität; eine Gruppe ist eine gemeinsame Berechtigungsebene. Beide können denselben Namen haben, sind aber nicht dasselbe.
- **Primäre und zusätzliche Gruppen vermischen:** Die primäre Gruppe beeinflusst häufig neue Dateien. Zusätzliche Gruppen können trotzdem entscheidende Zugriffe erlauben.
- **root als Workaround benutzen:** `sudo` kann ein Symptom umgehen, aber falschen Besitz oder falsche Gruppen nicht sauber lösen.
- **Rechte ohne Besitzer und Gruppe ändern:** `chmod` verändert Rechtebits. Wenn Besitzer oder Gruppe falsch sind, bleibt die eigentliche Ursache bestehen.
- **Befehle ohne Kontext kopieren:** Vor `usermod`, `chown`, `chgrp` oder rekursiven Änderungen müssen aktueller Benutzer, Gruppen, Zielpfad und vorhandene Rechte geprüft werden.

## Beziehung zur Linux-Lernshell

Die Linux-Lernshell der Plattform passt zu diesem Thema als geschützter Ort für einfache Diagnosebefehle wie `whoami`, `id`, `groups` und das Lesen von Dateirechten. Für diese Referenzseite wird kein neues interaktives Modul angelegt; sie bleibt der fachliche Überblick zu Identitäten, Gruppen und Berechtigungsgrenzen.

## Verwandte Themen

- Shell-Arbeitsfluss: Befehle im richtigen Pfad, Benutzerkontext und Ausführungskontext prüfen.
- Dateirechte und Besitz: Rechtebits, Besitzer, Gruppe und andere gemeinsam lesen.
- Dateisystem und Pfade: Zielpfade eindeutig bestimmen, bevor Besitz oder Rechte geändert werden.
- sudo und Rechteerhöhung: administrative Befehle bewusst begrenzen.
- Shellskripte und Automatisierung: Skripte laufen oft unter anderen Benutzern, Gruppen und Umgebungen als interaktive Shells.

## Quellenhinweis

Diese Seite wurde fachlich mit dem legacy Schlaufuchs-Material `legacy/selected/linux/topic-sources/linux_benutzerverwaltung.html` abgeglichen. Zugehörige Quell-URL: `https://c-arts-modelle.de/schlaufuchs_web/linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0. Ein einzelner Autorenmarker war in der geprüften HTML-Datei nicht erkennbar. Text, Struktur und fachliche Einordnung wurden für die aktuelle Plattform neu geschrieben und adaptiert; legacy HTML, altes Layout und alte Gestaltung wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Rechteinhaber.
