---
title: Prozesse
description: Prozesse beschreiben laufende Programme im System und helfen dabei zu verstehen, wie Aufgaben gestartet, verwaltet und beendet werden.
subject: informatik
section: Systemnah
level: einfach
tags:
  - Prozesse
  - Betriebssystem
  - Programm
  - Ausführung
  - System
draft: false
---

## Überblick

Ein Programm auf der Festplatte ist noch nicht dasselbe wie ein laufender Prozess. Erst wenn ein Programm gestartet wird, entsteht ein Prozess im Arbeitsspeicher.

Das Thema ist wichtig, weil es erklärt,

- warum mehrere Programme gleichzeitig laufen können,
- wie ein Betriebssystem Aufgaben verwaltet,
- was beim Starten und Beenden von Programmen passiert.

## Programm und Prozess unterscheiden

Ein **Programm** ist eine gespeicherte Datei mit Anweisungen.

Ein **Prozess** ist die laufende Ausführung dieses Programms.

### Beispiel

- Eine Textverarbeitung als installierte Software ist ein Programm.
- Die aktuell geöffnete Textverarbeitung ist ein Prozess.

Wird die Anwendung zweimal geöffnet, können daraus sogar mehrere Prozesse entstehen.

## Was gehört zu einem Prozess?

Zu einem Prozess gehören unter anderem:

- Programmanweisungen,
- Daten im Speicher,
- ein aktueller Zustand,
- benötigte Ressourcen wie Prozessorzeit.

## Typische Prozesszustände

Prozesse bleiben nicht immer in demselben Zustand.

Typische Zustände sind:

- **bereit**
- **laufend**
- **wartend**
- **beendet**

### Beispiel

Ein Programm wartet auf eine Eingabe.
Dann ist es nicht dauerhaft aktiv rechnend, sondern in einem Wartezustand.

## Warum das Betriebssystem Prozesse braucht

Das Betriebssystem sorgt dafür, dass viele Aufgaben scheinbar gleichzeitig laufen können.

Es verteilt:

- Rechenzeit,
- Speicher,
- Zugriffe auf Geräte,
- Prioritäten.

Dadurch kann ein Nutzer Musik hören, schreiben und im Browser arbeiten, obwohl der Prozessor immer nur Schritt für Schritt arbeitet.

## Prozess-ID

Jeder Prozess bekommt normalerweise eine Kennung.

Diese Kennung heißt oft **PID**.

Mit ihr kann das System Prozesse unterscheiden und gezielt verwalten.

## Vordergrund und Hintergrund

Manche Prozesse laufen sichtbar im Vordergrund, andere im Hintergrund.

Beispiele für Hintergrundprozesse:

- Updates,
- Druckdienste,
- Systemdienste,
- Netzwerkdienste.

Nicht jeder laufende Prozess ist also direkt als Fenster sichtbar.

## Prozesse beenden

Ein Prozess kann enden, wenn:

- seine Aufgabe abgeschlossen ist,
- er regulär geschlossen wird,
- ein Fehler auftritt,
- das Betriebssystem ihn beendet.

## Warum Prozesse in der Informatik wichtig sind

Das Thema verbindet Programmierung mit Betriebssystemen. Wer Prozesse versteht, versteht besser:

- wie Software tatsächlich ausgeführt wird,
- warum Ressourcen begrenzt sind,
- wie Systeme mehrere Aufgaben steuern,
- warum Fehler oder Blockierungen ein ganzes System beeinflussen können.

## Typische Fehler beim Verständnis

Häufige Denkfehler sind:

- Programm und Prozess werden gleichgesetzt.
- Man denkt, ein Prozess sei nur ein sichtbares Fenster.
- Man glaubt, mehrere Aufgaben liefen wirklich gleichzeitig auf einfache Weise.
- Man übersieht, dass Prozesse Ressourcen verbrauchen.

## Merksätze

- Ein Programm ist gespeichert, ein Prozess läuft.
- Ein gestartetes Programm wird zum Prozess.
- Prozesse haben Zustände und verbrauchen Ressourcen.
- Das Betriebssystem verwaltet Prozesse.
- Viele Systemvorgänge werden erst mit dem Prozessbegriff verständlich.
