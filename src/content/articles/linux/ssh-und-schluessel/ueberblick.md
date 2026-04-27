---
title: "SSH und Schlüssel"
description: "Überblick über SSH als sichere Fernverbindung und Schlüssel als Authentifizierungsgrundlage."
subject: linux
section: "Netzwerk und Administration"
topicPath:
  - "ssh-und-schluessel"
  - "ueberblick"
learningGoals:
  - "Du verstehst SSH als verschlüsselte Verbindung zu entfernten Systemen."
  - "Du kennst den Unterschied zwischen Passwort- und Schlüsselanmeldung."
  - "Du kannst private und öffentliche Schlüssel begrifflich trennen."
practiceIdeas: []
commonMistakes:
  - "Den privaten Schlüssel weiterzugeben."
  - "SSH-Schlüssel mit Passwörtern gleichzusetzen."
keyTakeaways:
  - "SSH ermöglicht sichere Fernzugriffe und Dateiübertragungen."
  - "Der private Schlüssel bleibt geheim, der öffentliche Schlüssel darf verteilt werden."
recognizeSignals:
  - "Es geht um Login auf Server, Git-Zugriff, public key, private key, known_hosts oder Remote-Shell."
selfCheckPoints:
  - "Kann ich erklären, warum der private Schlüssel niemals auf den Server kopiert werden sollte?"
level: einfach
tags:
  - "linux"
  - "ssh"
  - "schlüssel"
draft: false
---

# SSH und Schlüssel

![Schaubild zu SSH und Schlüsseln.](/schlaufuchs-platform/images/overviews/v148/ssh-und-schluessel.svg)

*Das Schaubild zeigt Client, Schlüssel und Server bei der Anmeldung ohne Passwort.*



## Grundidee
SSH ist ein Protokoll für sichere Verbindungen zu entfernten Rechnern. Es wird für Remote-Shells, Dateiübertragungen, Git-Zugriffe und administrative Aufgaben genutzt. Die Verbindung ist verschlüsselt und schützt damit Anmeldedaten und übertragene Inhalte.

## Schlüsselprinzip
Bei der Anmeldung mit Schlüsseln gibt es ein Schlüsselpaar. Der öffentliche Schlüssel wird auf dem Zielsystem hinterlegt. Der private Schlüssel bleibt lokal und geheim. Der Server prüft, ob der Client den passenden privaten Schlüssel besitzt, ohne dass dieser übertragen wird.

## Private Schlüssel schützen
Ein privater Schlüssel ist ein Zugangsnachweis. Er sollte nicht geteilt, nicht in Repositories gespeichert und nach Möglichkeit mit einer Passphrase geschützt werden. Wenn ein privater Schlüssel verloren geht oder veröffentlicht wird, muss der zugehörige öffentliche Schlüssel auf Zielsystemen entfernt werden.

## known_hosts
SSH prüft auch die Identität des Servers. In known_hosts werden bekannte Server-Schlüssel gespeichert. Warnungen über geänderte Host-Schlüssel sollten ernst genommen werden, weil sie auf legitime Änderungen, aber auch auf Angriffe oder falsche Ziele hinweisen können.

## Einordnung
SSH ist kein einzelner Befehl, sondern eine Grundlage vieler Werkzeuge. scp, sftp, Git über SSH und Port-Forwarding nutzen dieselbe Vertrauensbasis. Wer Schlüssel, Rechte und Zielnamen sauber versteht, vermeidet viele typische Zugriffsprobleme.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
