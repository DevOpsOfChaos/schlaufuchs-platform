---
title: "Grundlagen: Ports und Dienste"
description: "Allgemeiner Überblick über Netzwerkdienste, Ports, lokale Prozesse und typische Prüfwege unter Linux."
subject: "linux"
section: "Netzwerk"
topicPath: ["netzwerk", "ports-und-dienste", "ueberblick", "grundlagen-ports-und-dienste"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Netzwerk"]
draft: false
---
## Begriff

Ein **Port** ist ein nummerierter Endpunkt für Netzwerkkommunikation. Während eine IP-Adresse ein Gerät oder eine Netzwerkschnittstelle adressiert, unterscheidet der Port verschiedene Dienste auf diesem System.

Ein **Dienst** ist ein Programm oder Prozess, der eine bestimmte Aufgabe bereitstellt, zum Beispiel SSH, Webserver, Datenbank oder Druckdienst. Wenn ein Dienst Netzwerkverbindungen annimmt, lauscht er auf einem Port.

## Warum Ports gebraucht werden

Ein Server kann gleichzeitig viele Aufgaben anbieten. Ohne Ports wäre nicht klar, ob eine Verbindung zum Webserver, zum SSH-Dienst oder zu einer Datenbank gehören soll. Die Portnummer ergänzt deshalb die Adresse um die Frage: Welcher Dienst ist gemeint?

Typische Beispiele sind Port 22 für SSH, Port 80 für HTTP und Port 443 für HTTPS. In echten Systemen können Dienste aber auch auf anderen Ports laufen.

## Dienst, Prozess und Verbindung

Ein laufender Prozess ist noch nicht automatisch ein erreichbarer Netzwerkdienst. Der Prozess muss auf einer Adresse und einem Port lauschen. Außerdem dürfen Firewall, Routing und Bind-Adresse den Zugriff nicht verhindern.

Deshalb ist bei Netzwerkfehlern wichtig, mehrere Ebenen getrennt zu prüfen: Läuft der Dienst? Lauscht er auf dem erwarteten Port? Ist der Port lokal offen? Ist er von außen erreichbar?

## Typische Prüfidee

Unter Linux wird oft zuerst lokal geprüft, ob ein Dienst lauscht. Danach wird die Firewall betrachtet. Erst danach ergibt es Sinn, entfernte Clients oder DNS-Namen als Ursache zu vermuten. Eine ruhige Reihenfolge verhindert, dass man Netzwerkprobleme zu früh an der falschen Stelle sucht.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Befehle wie `ss`, `systemctl`, Firewall-Regeln oder SSH-Konfiguration. Diese Überblicksseite erklärt den allgemeinen Rahmen: Ports ordnen Verbindungen Diensten zu, und Dienste müssen laufen, lauschen und erreichbar sein.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Port ist nicht der Dienst selbst. Er ist der nummerierte Zugangspunkt, über den ein Dienst erreichbar sein kann.</p>
</div>
