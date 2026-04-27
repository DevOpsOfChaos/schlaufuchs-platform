---
title: "Benutzer und Gruppen"
description: "Einordnung von Benutzern und Gruppen als Grundlage des Linux-Rechtesystems."
subject: linux
section: "Rechte und Sicherheit"
topicPath:
  - benutzer-und-gruppen
  - ueberblick
learningGoals:
  - "Du kannst das Thema allgemein einordnen und von verwandten Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte und typische Anwendungsfälle."
  - "Du erkennst häufige Missverständnisse und prüfst Aussagen auf Plausibilität."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Fehler ist, Rechte zu weit zu öffnen, statt Gruppenzugehörigkeit sauber zu setzen."
keyTakeaways:
  - "Linux unterscheidet Benutzerkonten und Gruppen."
  - "Die genaue Bedeutung hängt vom Zusammenhang, den Einheiten und den Randbedingungen ab."
recognizeSignals:
  - "Das Thema taucht auf, wenn Begriffe, Beispiele oder Fehlerbilder aus diesem Bereich erklärt und eingeordnet werden sollen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten erklären, ohne sofort eine Spezialaufgabe zu rechnen?"
level: einfach
tags:
  - "linux"
  - "benutzer"
  - "gruppen"
  - "rechte"
draft: false
---

# Benutzer und Gruppen

![Schaubild zu Benutzern und Gruppen.](/schlaufuchs-platform/images/overviews/v149/benutzer-und-gruppen.svg)

*Das Schaubild zeigt Identität, Gruppenmitgliedschaft und Rechtezuordnung.*



## Begriff und Zweck

Linux unterscheidet Benutzerkonten und Gruppen. Dateien, Prozesse und Zugriffe sind mit diesen Identitäten verbunden. Gruppen ermöglichen, Rechte gemeinsam zu vergeben, ohne jedem Benutzer einzeln Sonderrechte zu geben. Dieses Modell ist Grundlage für Mehrbenutzerbetrieb und Systemschutz.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- UID und Benutzername
- GID und Gruppenname
- Dateibesitzer und Gruppenzuordnung
- primäre und zusätzliche Gruppen

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Eine Datei kann einem Benutzer und einer Gruppe gehören. Leserechte für die Gruppe ermöglichen gemeinsame Projektarbeit. Mitgliedschaft in Gruppen wie `docker`, `www-data` oder `sudo` kann besondere Möglichkeiten eröffnen, muss aber bewusst vergeben werden.

## Abgrenzung

Benutzer sind nicht nur menschliche Konten. Viele Dienste laufen unter eigenen Systembenutzern, damit ein kompromittierter Dienst nicht automatisch vollständige Systemrechte besitzt. Gruppen sind also auch ein Sicherheitswerkzeug.

## Häufige Missverständnisse

Ein häufiger Fehler ist, Rechte zu weit zu öffnen, statt Gruppenzugehörigkeit sauber zu setzen. `chmod 777` löst kurzfristig Zugriffsprobleme, entfernt aber wichtige Schutzgrenzen und ist selten die richtige Lösung.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
