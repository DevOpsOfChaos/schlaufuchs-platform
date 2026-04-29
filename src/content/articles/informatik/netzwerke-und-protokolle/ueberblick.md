---
title: "Netzwerke und Protokolle"
description: "Überblick über Netzwerke als Verbindung von Systemen und Protokolle als Regeln für Kommunikation."
subject: "informatik"
section: "Netzwerke"
topicPath: ["netzwerke-und-protokolle", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Netzwerke"]
draft: false
---
# Netzwerke und Protokolle

![Schaubild zu Netzwerken und Protokollen.](/schlaufuchs-platform/images/overviews/v148/netzwerke-und-protokolle.svg)

*Das Schaubild zeigt Client, Protokoll, Server und Antwort als Kommunikationsmodell.*



## Grundidee
Ein Netzwerk verbindet Systeme, damit sie Daten austauschen können. Damit dieser Austausch funktioniert, müssen Sender und Empfänger Regeln teilen. Diese Regeln heißen Protokolle. Sie legen fest, wie Daten adressiert, übertragen, bestätigt oder interpretiert werden.

## Adressierung
Adressen helfen, Systeme oder Dienste zu finden. Eine IP-Adresse bezeichnet ein Ziel im Netzwerk. Ein Port bezeichnet einen Dienst oder Endpunkt auf diesem Ziel. DNS übersetzt Namen in Adressen, damit Menschen nicht direkt mit Zahlen arbeiten müssen.

## Transport
TCP und UDP sind typische Transportprotokolle. TCP stellt eine verbindungsorientierte, geordnete Übertragung bereit. UDP ist einfacher und verzichtet auf viele Garantien, was für Echtzeit- oder einfache Anfrageprotokolle sinnvoll sein kann. Die Wahl hängt vom Anwendungsfall ab.

## Anwendung
Anwendungsprotokolle wie HTTP beschreiben, welche Bedeutung Nachrichten haben. Sie nutzen darunterliegende Transport- und Netzwerkschichten. Deshalb kann ein Problem auf verschiedenen Ebenen liegen: Name nicht auflösbar, Ziel nicht erreichbar, Port geschlossen oder Anwendung antwortet falsch.

## Fehlersuche
Netzwerkdiagnose braucht Ebenendenken. Zuerst wird geprüft, ob der Name stimmt, ob das Ziel erreichbar ist, ob der Port offen ist und ob das Protokoll korrekt gesprochen wird. Wer alle Ebenen vermischt, findet Fehler oft nur zufällig.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
