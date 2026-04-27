---
title: "SELinux und AppArmor"
description: "Allgemeiner Überblick über Mandatory Access Control mit SELinux und AppArmor."
subject: "linux"
section: "Sicherheit"
topicPath:
  - "selinux-und-apparmor"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig werden blockierte Zugriffe vorschnell durch Abschalten des Schutzsystems behoben. Besser ist es, Policy, Pfade und Dienstverhalten gezielt zu prüfen."
keyTakeaways:
  - "SELinux und AppArmor fügen Linux eine zusätzliche Sicherheitsgrenze hinzu. Sie sind anfangs komplex, verbessern aber die Schadensbegrenzung."
  - "Diese Mechanismen ersetzen keine Updates, Rechtepflege oder sichere Konfiguration. Sie begrenzen Schäden, wenn andere Schutzschichten versagen."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "fortgeschritten"
tags:
  - "linux"
  - "sicherheit"
  - "selinux"
  - "apparmor"
draft: false
---

# SELinux und AppArmor

SELinux und AppArmor sind Sicherheitsmechanismen, die Prozesse zusätzlich zu klassischen Dateirechten auf erlaubte Aktionen beschränken.

Selbst wenn ein Prozess mit bestimmten Nutzerrechten läuft, soll er nicht beliebig auf alle theoretisch erreichbaren Ressourcen zugreifen können.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Profile oder Policies beschreiben, was ein Prozess tun darf.
- Verstöße werden protokolliert und können Zugriffe blockieren.
- Die Systeme unterscheiden sich in Modell, Verwaltung und typischer Distributionseinbindung.

## Abgrenzung

Diese Mechanismen ersetzen keine Updates, Rechtepflege oder sichere Konfiguration. Sie begrenzen Schäden, wenn andere Schutzschichten versagen.

## Beispiele

- Ein Webserver darf Webseiten ausliefern, aber nicht beliebige Home-Verzeichnisse lesen.
- Ein Container oder Dienst kann durch ein Profil zusätzlich eingegrenzt werden.

## Häufiges Missverständnis

Häufig werden blockierte Zugriffe vorschnell durch Abschalten des Schutzsystems behoben. Besser ist es, Policy, Pfade und Dienstverhalten gezielt zu prüfen.

## Kurz zusammengefasst

SELinux und AppArmor fügen Linux eine zusätzliche Sicherheitsgrenze hinzu. Sie sind anfangs komplex, verbessern aber die Schadensbegrenzung.
