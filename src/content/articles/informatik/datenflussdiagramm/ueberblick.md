---
title: "Datenflussdiagramm"
description: "Überblick über Datenflussdiagramme als Darstellung von Eingaben, Verarbeitung, Speicher und Ausgaben."
subject: informatik
section: "Daten"
topicPath:
  - "datenflussdiagramm"
learningGoals:
  - "Du verstehst Datenflussdiagramme als Sicht auf Informationsbewegung."
  - "Du kannst Quelle, Prozess, Speicher und Senke unterscheiden."
  - "Du erkennst ihren Nutzen für Analyse und Kommunikation."
practiceIdeas: []
commonMistakes:
  - "Datenflussdiagramme mit Ablaufdiagrammen gleichzusetzen."
  - "Speicherorte und Verarbeitungsschritte nicht zu trennen."
keyTakeaways:
  - "Datenflussdiagramme zeigen, welche Daten wohin fließen und wo sie verarbeitet werden."
  - "Sie helfen, Schnittstellen, Verantwortlichkeiten und Risiken sichtbar zu machen."
recognizeSignals:
  - "Es geht um Eingaben, Verarbeitung, Speicher, Ausgabe oder Schnittstellen."
selfCheckPoints:
  - "Kann ich Datenfluss und Kontrollfluss voneinander unterscheiden?"
level: einfach
tags:
  - "informatik"
  - "datenfluss"
  - "modellierung"
  - "systemanalyse"
draft: false
---
# Datenflussdiagramm

Ein Datenflussdiagramm stellt dar, wie Informationen durch ein System wandern. Es konzentriert sich weniger auf die Reihenfolge einzelner Programmschritte, sondern auf Quellen, Verarbeitungen, Speicher und Ausgaben.

![Datenfluss zwischen Quelle, Prozess, Speicher und Ausgabe.](/schlaufuchs-platform/images/overviews/v146/datenflussdiagramm.svg)

*Datenfluss zwischen Quelle, Prozess, Speicher und Ausgabe.*

## Grundidee

Typische Elemente sind externe Akteure, Prozesse, Datenspeicher und Datenflüsse. Ein Formular kann Daten liefern, ein Service kann sie prüfen, eine Datenbank kann sie speichern und eine Auswertung kann Ergebnisse erzeugen. Das Diagramm zeigt, welche Informationen zwischen diesen Elementen übertragen werden.

## Bedeutung im Zusammenhang

Der Nutzen liegt in der Verständigung. Fachliche Beteiligte, Entwicklerinnen und Tester können erkennen, wo Daten entstehen, wo sie verändert werden und wo sie gespeichert werden. Auch Datenschutz und Sicherheit profitieren, weil sensible Datenflüsse sichtbar werden.

## Typische Anwendung

Datenflussdiagramme beantworten nicht jede Frage. Sie zeigen nicht automatisch genaue Timingdetails, UI-Layout oder Code-Struktur. Dafür eignen sie sich gut als gemeinsame Sprache vor der technischen Umsetzung.

## Abgrenzung

Ein häufiger Fehler ist, Datenfluss und Kontrollfluss zu vermischen. Ein Datenfluss zeigt Informationstransport, nicht zwangsläufig die exakte Ausführungsreihenfolge.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
