---
title: "Referrer Policy"
description: "Überblick über Referrer Policy und die Steuerung, welche Herkunftsinformationen bei Webanfragen weitergegeben werden."
subject: "web-development"
section: "Sicherheit"
topicPath: ["referrer-policy", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Sicherheit"]
draft: false
---
# Referrer Policy

## Begriff

Referrer Policy legt fest, ob und wie viel von der aktuellen URL beim Laden anderer Ressourcen oder beim Folgen von Links mitgesendet wird.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Sie schützt sensible Pfadinformationen und reduziert unnötige Weitergabe von Nutzungs- oder Kontextdaten.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Der Referrer kann Domain, Pfad und manchmal Query-Informationen enthalten.
- Policies unterscheiden zwischen gleicher Herkunft, fremder Herkunft und Downgrade auf HTTP.
- Sie kann per Header oder Meta-Angabe gesetzt werden.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Referrer Policy ist ein Datenschutz- und Sicherheitsbaustein, ersetzt aber keine Geheimhaltung sensibler Daten in URLs.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

strict-origin-when-cross-origin sendet extern meist nur die Herkunft, intern aber genauere Informationen.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Viele Fehler entstehen, wenn Tokens oder persönliche Daten in URLs stehen und allein auf Referrer Policy vertraut wird.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Referrer Policy steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
