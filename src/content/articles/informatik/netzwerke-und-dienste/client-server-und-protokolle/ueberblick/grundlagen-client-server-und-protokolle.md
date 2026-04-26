---
title: "Grundlagen: Client, Server und Protokolle"
description: "Allgemeiner Überblick über das Client-Server-Prinzip und die Rolle von Protokollen in Netzwerken."
subject: informatik
section: "Netzwerke und Dienste"
topicPath:
  - netzwerke-und-dienste
  - client-server-und-protokolle
  - grundlagen-client-server-und-protokolle
learningGoals:
  - "Du erklärst das Client-Server-Prinzip."
  - "Du beschreibst Protokolle als Regeln für Kommunikation."
  - "Du unterscheidest Dienst, Adresse und Nachricht."
practiceIdeas: []
commonMistakes:
  - "Server nur als besonders starken Computer zu verstehen."
  - "Protokoll und Programm gleichzusetzen."
  - "Adresse, Port und Dienst nicht zu unterscheiden."
keyTakeaways:
  - "Ein Client stellt eine Anfrage, ein Server stellt einen Dienst bereit."
  - "Protokolle legen fest, wie Nachrichten aufgebaut und verstanden werden."
  - "Netzwerkkommunikation braucht Adressen, Regeln und Rollen."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - informatik
  - netzwerk
  - client-server
  - protokoll
draft: false
---
## Begriff

Das **Client-Server-Prinzip** beschreibt eine Rollenverteilung in Netzwerken. Ein Client fordert etwas an, ein Server stellt einen Dienst bereit. Ein **Protokoll** legt fest, wie diese Kommunikation abläuft.

## Rollen

Ein Client kann ein Browser, eine App oder ein anderes Programm sein. Er sendet eine Anfrage. Der Server wartet auf Anfragen und antwortet mit Daten, Statusinformationen oder Fehlermeldungen. Ein Gerät kann je nach Situation Client und Server sein.

## Protokolle

Ein Protokoll ist ein Regelwerk. Es beschreibt, wie Nachrichten aufgebaut sind, welche Reihenfolge sinnvoll ist und wie Fehler behandelt werden. HTTP, DNS, TCP und IP sind bekannte Beispiele aus unterschiedlichen Schichten der Netzwerkkommunikation.

## Warum diese Trennung hilft

Viele Netzwerkprobleme werden übersichtlicher, wenn man Rollen und Ebenen trennt: Ist die Adresse erreichbar? Antwortet der Dienst? Wird das richtige Protokoll verwendet? Ist die Anfrage gültig?

<div class="note-panel">
  <p><strong>Merke:</strong> Netzwerke funktionieren nicht nur durch Kabel oder Funk. Entscheidend sind Rollen, Adressen und gemeinsame Protokolle.</p>
</div>
