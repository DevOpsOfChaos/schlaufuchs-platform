---
title: "Grundlagen: SSH und Fernzugriff"
description: "Allgemeiner Überblick über SSH, sichere Anmeldung, Schlüsselpaare und typische Einsatzbereiche beim Fernzugriff."
subject: linux
section: "System"
topicPath:
  - system
  - ssh-und-fernzugriff
  - grundlagen-ssh-und-fernzugriff
learningGoals:
  - "Du erklärst SSH als verschlüsselten Fernzugriff auf ein System."
  - "Du beschreibst den Unterschied zwischen Passwort- und Schlüsselanmeldung."
  - "Du ordnest öffentliche und private Schlüssel sicherheitsbezogen ein."
practiceIdeas: []
commonMistakes:
  - "Den privaten Schlüssel weiterzugeben."
  - "SSH nur als Terminalfenster zu sehen."
  - "Hostprüfung und Benutzeranmeldung zu verwechseln."
keyTakeaways:
  - "SSH ermöglicht verschlüsselten Zugriff auf entfernte Systeme."
  - "Schlüsselpaare trennen öffentlichen und privaten Schlüssel."
  - "Sicherer Fernzugriff braucht Identitätsprüfung, Berechtigungen und vorsichtigen Umgang mit Schlüsseln."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "linux"
  - "ssh"
  - "fernzugriff"
  - "schlüssel"
draft: false
---

## Begriff

**SSH** steht für Secure Shell. Es ist ein Protokoll und Werkzeug für verschlüsselten Fernzugriff auf andere Systeme. Über SSH kann man sich auf einem entfernten Rechner anmelden, Befehle ausführen, Dateien übertragen oder Dienste sicher tunneln.

SSH ist besonders in Linux-Umgebungen verbreitet, wird aber auch in vielen Entwicklungs-, Server- und Administrationsumgebungen genutzt.

## Verschlüsselter Fernzugriff

Ohne Verschlüsselung könnten Anmeldedaten und Befehle auf dem Netzwerkweg mitgelesen werden. SSH schützt die Verbindung kryptografisch. Dadurch können Benutzer auch über unsichere Netze sicherer mit einem entfernten System arbeiten.

Eine SSH-Verbindung besteht nicht nur aus einem Terminalfenster. Sie umfasst Verbindungsaufbau, Prüfung des Zielsystems, Benutzeranmeldung und verschlüsselte Kommunikation.

## Passwort und Schlüssel

Eine Anmeldung kann per Passwort oder per Schlüssel erfolgen. Bei der Schlüsselanmeldung besitzt der Benutzer ein Schlüsselpaar: einen privaten Schlüssel und einen öffentlichen Schlüssel. Der öffentliche Schlüssel darf auf dem Server hinterlegt werden. Der private Schlüssel bleibt geheim auf dem eigenen Gerät.

Der private Schlüssel ist besonders schützenswert. Wer ihn besitzt und nutzen kann, kann sich unter Umständen anmelden.

## Hostprüfung

Beim ersten Verbinden prüft SSH auch die Identität des Zielsystems. Der sogenannte Host Key hilft zu erkennen, ob man wirklich mit dem erwarteten Server spricht. Warnungen über geänderte Host Keys sollten ernst genommen werden, weil sie auf eine Änderung oder einen Angriff hinweisen können.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten können Schlüssel erzeugen, authorized_keys erklären oder Verbindungsfehler untersuchen. Diese Überblicksseite erklärt den allgemeinen Rahmen: SSH ist sicherer Fernzugriff durch verschlüsselte Verbindung und geprüfte Identität.

<div class="note-panel">
  <p><strong>Merke:</strong> Der öffentliche Schlüssel darf geteilt werden. Der private Schlüssel bleibt privat.</p>
</div>
