---
title: Dateien und Ordner – Grundlagen
description: Verstehe, wie Linux Dateien, Ordner und Pfade organisiert und warum diese Struktur die Basis für fast alle Terminal-Aufgaben bildet.
subject: linux
section: shell
level: einfach
tags: [linux, shell, dateien, ordner, pfade]
draft: false
---

Dateien und Ordner sind in Linux keine Nebensache, sondern die Grundlage für fast jede Arbeit im System. Wer im Terminal sicher arbeiten will, muss zuerst verstehen, **wo** er sich befindet, **was** dort liegt und **wie** diese Struktur gelesen wird.

## Überblick

Linux organisiert Informationen in einer Baumstruktur. Ganz oben steht das Wurzelverzeichnis `/`. Darunter liegen weitere Ordner, die wiederum Dateien und Unterordner enthalten.

Wichtig ist dabei:

- Dateien speichern Inhalte.
- Ordner strukturieren Inhalte.
- Pfade beschreiben, wo etwas liegt.
- Befehle im Terminal arbeiten fast immer mit dieser Struktur.

## Was ist eine Datei?

Eine Datei ist eine gespeicherte Einheit von Inhalt. Das kann zum Beispiel sein:

- Text
- Quellcode
- eine Konfigurationsdatei
- ein Bild
- ein ausführbares Programm

Eine Datei hat in Linux einen Namen und liegt an einem bestimmten Ort im Dateisystem.

## Was ist ein Ordner?

Ein Ordner, in Linux oft auch Verzeichnis genannt, fasst Dateien und andere Ordner zusammen. Er sorgt dafür, dass Inhalte nicht ungeordnet nebeneinander liegen.

Ein Ordner kann also:

- Dateien enthalten,
- Unterordner enthalten,
- und selbst Teil eines größeren Pfades sein.

## Warum ist die Struktur so wichtig?

Im Terminal arbeitet man nicht mit bunten Fenstern, sondern mit Befehlen. Diese Befehle müssen wissen, auf **welche Datei** oder **welchen Ordner** sie sich beziehen.

Darum solltest du immer beantworten können:

- In welchem Ordner bin ich gerade?
- Welche Dateien oder Unterordner liegen hier?
- Wie komme ich zu einem anderen Ort im Dateisystem?

## Typische Grundbefehle

Für den Einstieg sind drei Befehle besonders wichtig:

- `pwd` zeigt das aktuelle Verzeichnis
- `ls` zeigt den Inhalt eines Verzeichnisses
- `cd` wechselt in ein anderes Verzeichnis

### Beispiel

```bash
pwd
ls
cd dokumente
```

Die Denklogik dahinter ist wichtiger als das bloße Merken der Namen:

1. Ort feststellen
2. Inhalt prüfen
3. gezielt bewegen

## Dateien und Ordner unterscheiden

Am Anfang ist wichtig, dass du nicht alles als „irgendein Ding im System“ wahrnimmst. Eine Datei und ein Ordner haben unterschiedliche Aufgaben.

Ein typisches Missverständnis ist:
Man sieht einen Namen und denkt nicht darüber nach, ob er für einen Inhalt oder für eine Struktur steht.

Für die Praxis gilt:

- Dateien werden geöffnet, gelesen, kopiert oder bearbeitet.
- Ordner werden betreten, aufgelistet, erstellt oder gelöscht.

## Das Homeverzeichnis

Jeder Benutzer hat typischerweise ein eigenes Homeverzeichnis. Dort liegen persönliche Dateien, Einstellungen und Arbeitsbereiche.

Das Homeverzeichnis ist oft der Ausgangspunkt im Terminal. Wer Linux lernt, arbeitet am Anfang meist genau dort.

## Ordnung statt Zufall

Eine gute Ordnerstruktur hilft dabei,

- Dateien schneller zu finden,
- Fehler zu vermeiden,
- Projekte sauber zu organisieren,
- und Befehle sicherer auszuführen.

Chaotische Strukturen führen im Terminal schnell zu Unsicherheit, weil Pfade verwechselt oder falsche Dateien bearbeitet werden.

## Typische Anfängerfehler

Gerade am Anfang passieren oft diese Fehler:

- Man weiß nicht, in welchem Ordner man gerade ist.
- Man verwechselt Datei und Ordner.
- Man nutzt `cd`, ohne den Zielpfad wirklich zu verstehen.
- Man interpretiert die Ausgabe von `ls` zu ungenau.
- Man arbeitet „auf Verdacht“ statt zuerst den aktuellen Ort zu prüfen.

## Gute Arbeitsweise

Im Terminal ist eine ruhige Reihenfolge fast immer sinnvoll:

1. Aktuellen Ort prüfen
2. Inhalt ansehen
3. Erst dann den nächsten Befehl ausführen

Diese kleine Routine verhindert viele Fehler.

## Merksätze

- Dateien enthalten Inhalte, Ordner strukturieren Inhalte.
- Linux organisiert alles in einer Baumstruktur.
- Wer den aktuellen Ort nicht kennt, arbeitet unsicher.
- `pwd`, `ls` und `cd` gehören zu den wichtigsten Einstiegsbefehlen.
- Gute Orientierung im Dateisystem ist die Basis für fast alle weiteren Shell-Themen.
