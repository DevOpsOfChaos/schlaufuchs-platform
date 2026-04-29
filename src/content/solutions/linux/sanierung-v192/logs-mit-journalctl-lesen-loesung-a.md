---
title: "Lösung: Logs mit journalctl lesen: Aufgabe A"
description: "Musterlösung zur Aufgabe linux-v192-010a im Linuxblock v192."
subject: "linux"
section: "adminpraxis-und-betrieb"
topicPath:
  - "adminpraxis-und-betrieb"
  - "logging-und-diagnose"
  - "logs-mit-journalctl-lesen"
  - "loesung-a"
taskId: "linux-v192-010a"
relatedExercise: "linux/sanierung-v192/logs-mit-journalctl-lesen-aufgabe-a"
tags:
  - "logging-und-diagnose"
  - "logs"
  - "journalctl"
  - "lesen"
  - "linux"
  - "adminpraxis"
  - "betrieb"
  - "loesung"
  - "v192"
draft: false
---

## Musterlösung zu `linux-v192-010a`

Ausgangsauftrag: Finde in einer Logbeschreibung die wahrscheinlich erste Ursache.

Eine mögliche Lösung ist:

1. **Beobachtung:** Der aktuelle Zustand wird zuerst beschrieben, zum Beispiel über Status, Log, Rechte, Pfad, Port oder Zeitplan.
2. **Kontext:** Betroffen ist genau ein benannter Bereich: Benutzer, Gruppe, Dienst, Datei, Netzwerkziel, Mount oder geplanter Job.
3. **Eingriff:** Die Änderung bleibt klein und passt direkt zur Beobachtung. Es wird nicht gleichzeitig an mehreren Stellen korrigiert.
4. **Risiko:** Eine Nebenwirkung wird benannt, etwa falsche Rechte, Dienstunterbrechung, Datenverlust, offener Port oder fehlender Autostart.
5. **Rückweg:** Vorheriger Zustand, Backup, deaktivierbare Regel oder dokumentierter Ursprungswert bleiben verfügbar.
6. **Kontrolle:** Nach der Änderung wird mit Statusausgabe, Logzeile, Testzugriff oder Dateiprüfung kontrolliert, ob das Ziel erreicht wurde.

## Beispielhafte Formulierung

„Ich ändere nur den betroffenen Punkt, notiere den Ausgangszustand und prüfe danach mit einer passenden Ausgabe, ob der Fehler verschwunden ist. Falls nicht, stelle ich den vorherigen Zustand wieder her und prüfe die nächste Hypothese.“

## Warum das passt

Die Lösung ist sicher, weil sie Linux-Administration nicht als Befehlsraten behandelt. Beobachtung, Änderung, Risiko, Rückweg und Kontrolle bleiben sichtbar getrennt.
