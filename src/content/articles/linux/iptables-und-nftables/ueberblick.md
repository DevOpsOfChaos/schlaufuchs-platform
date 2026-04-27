---
title: "iptables und nftables"
description: "iptables und nftables sind Werkzeuge beziehungsweise Systeme zur Paketfilterung unter Linux. nftables ist der moderne Nachfolger vieler klassischer iptables-Szena..."
subject: linux
section: "Netzwerk"
topicPath:
  - "iptables-und-nftables"
  - "ueberblick"
learningGoals:
  - "Du kannst iptables und nftables als allgemeinen Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte, typische Beispiele und wichtige Abgrenzungen."
  - "Du erkennst häufige Missverständnisse, bevor Spezialfälle oder Aufgaben folgen."
practiceIdeas: []
commonMistakes:
  - "Oft werden einzelne Regeln ad hoc ergänzt, ohne die Reihenfolge und das Gesamtkonzept zu verstehen."
keyTakeaways:
  - "iptables und nftables sind Werkzeuge beziehungsweise Systeme zur Paketfilterung unter Linux."
  - "Ein guter Überblick trennt Begriff, Zweck, Einsatzgrenzen und typische Fehlerbilder."
  - "Spezialfälle werden verständlicher, wenn das allgemeine Konzept vorher klar ist."
recognizeSignals:
  - "Es geht um iptables und nftables, wenn Begriffe, Entscheidungen oder Fehlerbilder dieses Themas die Erklärung bestimmen."
  - "Viele Einzelfälle wirken unübersichtlich, solange der Grundbegriff fehlt."
selfCheckPoints:
  - "Kann ich iptables und nftables in eigenen Worten erklären?"
  - "Kann ich ein Beispiel, eine Grenze und ein typisches Missverständnis nennen?"
level: einfach
tags:
  - "linux"
  - "firewall"
  - "netzwerk"
draft: false
---

# iptables und nftables

iptables und nftables sind Werkzeuge beziehungsweise Systeme zur Paketfilterung unter Linux.
nftables ist der moderne Nachfolger vieler klassischer iptables-Szenarien. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Netzwerk zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Regeln entscheiden anhand von Paketmerkmalen über Erlauben, Verwerfen oder Umleiten.
- Chains und Tabellen strukturieren Filterlogik.
- Distributionen können Kompatibilitätsschichten bereitstellen.
- Firewall-Regeln sollten dokumentiert und reproduzierbar sein.

## Beispiel im Zusammenhang

Ein Server lässt SSH zu, blockiert aber unerwartete eingehende Verbindungen über eine
Filterregel.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Firewall-Regeln ersetzen keine sicheren Dienste und keine korrekte Authentifizierung.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Oft werden einzelne Regeln ad hoc ergänzt, ohne die Reihenfolge und das Gesamtkonzept zu
verstehen.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

iptables und nftables ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
