---
title: "Grundlagen: IP-Adressen und Ports"
description: "Allgemeiner Überblick über IP-Adressen, Ports und die Zuordnung von Netzwerkverbindungen zu Diensten."
subject: informatik
section: "Netzwerke und Dienste"
topicPath:
  - netzwerke-und-dienste
  - ip-adressen-und-ports
  - grundlagen-ip-adressen-und-ports
learningGoals:
  - "Du erklärst IP-Adressen als Adressierung von Geräten oder Schnittstellen im Netzwerk."
  - "Du beschreibst Ports als Zuordnung zu Diensten auf einem System."
  - "Du unterscheidest Zielsystem und Dienst innerhalb einer Netzwerkverbindung."
practiceIdeas: []
commonMistakes:
  - "IP-Adresse und Port als dasselbe zu behandeln."
  - "Einen Port für eine Sicherheitsgarantie zu halten."
  - "Nur den Server zu betrachten und lokale Ports zu ignorieren."
keyTakeaways:
  - "Die IP-Adresse hilft, ein Ziel im Netzwerk zu finden."
  - "Der Port hilft, den passenden Dienst auf dem Zielsystem anzusprechen."
  - "Eine Netzwerkverbindung wird durch mehrere Angaben gemeinsam beschrieben."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "informatik"
  - "netzwerke"
  - "ip-adresse"
  - "port"
  - "dienste"
draft: false
---

## Begriff

**IP-Adressen** und **Ports** gehören zu den Grundbegriffen von Netzwerken. Eine IP-Adresse hilft dabei, ein Gerät oder eine Netzwerkschnittstelle erreichbar zu machen. Ein Port hilft, auf diesem System einen bestimmten Dienst anzusprechen.

Zusammen beantworten sie zwei verschiedene Fragen: Wohin soll die Verbindung gehen, und welcher Dienst soll dort erreicht werden?

## IP-Adressen

Eine IP-Adresse ist eine Adresse innerhalb eines IP-Netzwerks. Sie kann zu einem Rechner, Router, Server, Smartphone oder einer virtuellen Netzwerkschnittstelle gehören. Es gibt IPv4- und IPv6-Adressen. IPv4-Adressen bestehen typischerweise aus vier Zahlenblöcken, IPv6-Adressen aus längeren hexadezimalen Schreibweisen.

IP-Adressen können öffentlich oder privat sein. Private Adressen werden häufig in Heim- und Schulnetzen verwendet und sind nicht direkt aus dem Internet erreichbar.

## Ports

Ein Port ist eine Nummer, über die ein Dienst auf einem System angesprochen wird. Ein Webserver verwendet häufig Port 80 für HTTP und Port 443 für HTTPS. SSH verwendet oft Port 22. Die Portnummer allein sagt aber nicht sicher, welcher Dienst tatsächlich läuft; sie ist eine Konvention und Konfiguration.

Ports ermöglichen, dass ein System mehrere Netzwerkdienste gleichzeitig anbieten kann.

## Verbindung als Kombination

Eine konkrete Verbindung wird nicht nur durch eine IP-Adresse beschrieben. Protokoll, Zieladresse, Zielport und lokale Verbindungsdaten gehören zusammen. Deshalb kann derselbe Rechner gleichzeitig Webseiten ausliefern, SSH anbieten und andere Dienste betreiben.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten können DNS, HTTP, Client-Server-Prinzip oder Firewall-Regeln behandeln. Diese Überblicksseite erklärt den allgemeinen Rahmen: IP-Adresse findet das System, Port adressiert den Dienst.

<div class="note-panel">
  <p><strong>Merke:</strong> Die IP-Adresse sagt „welcher Rechner“, der Port sagt „welcher Dienst auf diesem Rechner“.</p>
</div>
