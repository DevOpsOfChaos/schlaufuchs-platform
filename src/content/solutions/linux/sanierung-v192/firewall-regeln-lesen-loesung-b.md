---
title: "Lösung: Firewall-Regeln lesen: Aufgabe B"
description: "Musterlösung zur Aufgabe linux-v192-019b im Linuxblock v192."
subject: "linux"
section: "adminpraxis-und-betrieb"
topicPath: ["sanierung-v192", "firewall-regeln-lesen-loesung-b"]
taskId: "linux-v192-019b"
relatedExercise: "linux/sanierung-v192/firewall-regeln-lesen-aufgabe-b"
tags: ["linux", "adminpraxis-und-betrieb", "loesung"]
draft: false
---
## Musterlösung zu `linux-v192-019b`

Ausgangsauftrag: Erweitere die Grundidee zu „Firewall-Regeln lesen“ um Risiko, Rückweg und einen konkreten Kontrollbefehl oder Kontrollhinweis.

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
