---
title: "mkdir verstehen"
description: "Mit mkdir neue Ordner anlegen und sauberere Strukturen im Dateisystem aufbauen."
subject: linux
section: "Shell / Dateien"
level: einfach
tags:
  - mkdir
  - Shell
  - Dateien
draft: false
---

## Worum geht es?

Der Befehl `mkdir` wird genutzt, um **neue Ordner** anzulegen.

Gerade am Anfang ist das wichtig, weil gute Ordnerstrukturen dir später viel Arbeit sparen.

## Das einfachste Beispiel

```bash
mkdir projekt
```

Damit legst du im aktuellen Verzeichnis einen neuen Ordner mit dem Namen `projekt` an.

## Warum ist mkdir wichtig?

Mit `mkdir` kannst du:

- neue Projekte vorbereiten
- Inhalte sauber strukturieren
- Übungsordner anlegen
- zwischen Themen klarer unterscheiden

## Häufiger Einsatz

Ein typischer Ablauf kann so aussehen:

```bash
mkdir linux
cd linux
mkdir shell
```

So baust du Schritt für Schritt eine Struktur auf.

## Ein nützlicher Gedanke

Dateien allein reichen oft nicht aus.  
Erst mit passenden Ordnern wird ein System übersichtlich.

## Typische Anfängerfehler

### „Ich dachte, der Ordner ist schon da.“

Dann prüfe mit `ls`, ob er wirklich existiert.

### „mkdir gibt keine große Ausgabe zurück.“

Das ist normal. Viele Terminal-Befehle sind still, wenn sie erfolgreich waren.

### „Ich habe zu früh oder am falschen Ort angelegt.“

Dann lohnt sich der Blick mit `pwd`, bevor du neue Strukturen erstellst.
