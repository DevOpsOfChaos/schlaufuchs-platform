---
title: SSH – Grundlagen
description: Verstehe, was SSH ist, wofür es genutzt wird und warum es für sicheren Fernzugriff wichtig ist.
subject: linux
section: ssh
level: einfach
tags: [ssh, fernzugriff, linux, sicherheit]
draft: false
---

SSH gehört zu den wichtigsten Werkzeugen im Linux-Umfeld, sobald man nicht mehr nur lokal am eigenen Rechner arbeitet. Es ermöglicht einen **sicheren Fernzugriff** auf andere Systeme.

## Was ist SSH?

SSH steht für **Secure Shell**. Es ist ein Verfahren, mit dem man sich über ein Netzwerk sicher mit einem anderen Rechner verbinden kann.

Typische Einsatzbereiche sind:

- Anmeldung auf einem entfernten Linux-System
- Verwaltung von Servern
- Ausführen von Befehlen aus der Ferne
- sicherer Zugriff auf Systeme ohne grafische Oberfläche

## Warum ist SSH so wichtig?

Viele Linux-Systeme werden nicht direkt vor Ort bedient. Gerade Server, virtuelle Maschinen oder entfernte Geräte werden oft über die Kommandozeile verwaltet.

SSH ist dafür zentral, weil es

- die Verbindung absichert,
- die Anmeldung schützt,
- Fernzugriff im Alltag praktikabel macht.

## Was passiert bei einer SSH-Verbindung?

Vereinfacht läuft eine Verbindung so ab:

- Ein Nutzer verbindet sich mit einem entfernten System.
- Das Zielsystem prüft den Zugriff.
- Nach erfolgreicher Anmeldung kann auf dem entfernten System gearbeitet werden.

Wichtig ist: Man arbeitet dann nicht mehr lokal, sondern auf einem anderen Rechner.

## Typische Begriffe im Umfeld von SSH

Im Einstieg solltest du vor allem diese Ideen sauber verstehen:

- **lokales System** und **entferntes System**
- **Anmeldung** am Zielsystem
- **sicherer Fernzugriff**
- Unterschied zwischen direkter lokaler Nutzung und Arbeit über Netzwerk

## Was du zuerst verstehen solltest

Am Anfang ist besonders wichtig:

- SSH ist ein Werkzeug für sicheren Fernzugriff.
- Man verbindet sich damit mit einem anderen System.
- Nach der Verbindung arbeitet man auf dem Zielsystem, nicht auf dem lokalen Rechner.

## Merksatz

SSH ermöglicht einen sicheren Zugriff auf entfernte Systeme und gehört damit zu den wichtigsten Praxiswerkzeugen im Linux-Alltag.
