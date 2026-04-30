---
title: "Grundlagen: High-Side und Low-Side schalten"
description: "Allgemeiner Überblick über Lastschalten auf Plus- oder Masseseite, Bezugspunkte und Treiberfragen."
subject: "elektrotechnik"
section: "Schaltungen"
topicPath: ["schaltungen", "high-side-und-low-side-schalten", "ueberblick", "grundlagen-high-side-und-low-side-schalten"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Schaltungen"]
draft: false
---
![High-Side und Low-Side schalten](/schlaufuchs-platform/images/overviews/elektrotechnik/high-side-und-low-side-schalten.svg)

## Überblick

**High-Side und Low-Side schalten** ist ein wichtiges Orientierungsthema in der Elektrotechnik. Es hilft, eine Schaltung, einen Messwert oder einen Fehlerfall nicht isoliert zu betrachten, sondern als Zusammenhang aus Ursache, Wirkung, Grenze und Prüfung.

Die Seite ist bewusst allgemein angelegt. Sie soll zuerst klären, worum es fachlich geht, bevor einzelne Aufgaben, Messsituationen oder Spezialfälle bearbeitet werden.

## Grundidee

Ob auf der Plus- oder Masseseite geschaltet wird, beeinflusst Bezug, Sicherheit und Treiberanforderung. Darum ist der Strompfad wichtiger als die Position im Bild.

Entscheidend ist dabei, den Zusammenhang nicht nur aus einem einzelnen Bauteilnamen oder einem einzelnen Messwert abzuleiten. In der Praxis entstehen viele Fehler dadurch, dass Normalzustand, Fehlerfall und Gegenprobe nicht sauber getrennt werden.

## Wichtige Begriffe

- **High-Side**: wichtiger Begriff im Zusammenhang mit High-Side und Low-Side schalten.
- **Low-Side**: wichtiger Begriff im Zusammenhang mit High-Side und Low-Side schalten.
- **Lastpfad**: wichtiger Begriff im Zusammenhang mit High-Side und Low-Side schalten.
- **Steuersignal**: wichtiger Begriff im Zusammenhang mit High-Side und Low-Side schalten.

Diese Begriffe sind keine isolierten Vokabeln. Sie beschreiben Rollen innerhalb einer Schaltung, eines Messablaufs oder einer technischen Entscheidung.

## Typische Denkweise

Eine gute Prüfung beginnt meist mit drei Fragen:

1. Welcher Zustand ist im Normalfall erwartet?
2. Welcher Fehlerfall soll erkannt, verhindert oder eingegrenzt werden?
3. Welche Messung oder Gegenprobe kann die Vermutung bestätigen oder widerlegen?

Erst danach lohnt sich der Blick auf konkrete Zahlen, Bauteile, Codeausschnitte oder Detailseiten.

## Typische Missverständnisse

- Nur das Schaltsymbol zu betrachten und den Bezugspunkt zu ignorieren.
- High-Side und Low-Side nach Lage im Bild statt nach Strompfad zu unterscheiden.
- Gate- oder Basisansteuerung ohne Bezug zur Lastspannung zu bewerten.

## Beispiel

Ein typischer Praxisfall ist eine Schaltung, die scheinbar „manchmal“ funktioniert. Ohne ruhige Einordnung wird schnell ein Bauteil getauscht oder Code geändert. Sinnvoller ist, zuerst die fachliche Rolle der Signale, Strompfade, Grenzwerte und Messpunkte zu klären.

Das Beispiel zeigt: Die entscheidende Frage ist selten nur „welches Bauteil ist beteiligt?“. Wichtiger ist, welche Aufgabe dieses Bauteil im System erfüllt und welche Aussage eine Messung wirklich erlaubt.

## Abgrenzung

Diese Überblicksseite ersetzt keine Detailseite. Einzelne Seiten können konkrete Rechnungen, Schaltbilder, Messungen oder Programmbeispiele behandeln. Hier geht es um den gemeinsamen Rahmen: Begriff, Zweck, Zusammenhang und typische Fehlerquellen.

## Merksätze

- Low-Side schaltet häufig den Rückweg nach Masse.
- High-Side schaltet die Versorgung zur Last.
- Die Ansteuerung hängt vom Bezugspunkt und vom Bauteiltyp ab.
