---
title: "cd verstehen"
description: "Mit cd in andere Ordner wechseln und sich sicher durch das Dateisystem bewegen."
subject: linux
section: "Shell / Navigation"
level: einfach
tags:
  - cd
  - Shell
  - Navigation
draft: false
---

## Worum geht es?

Der Befehl `cd` steht für **change directory**.  
Damit wechselst du von deinem aktuellen Ort in einen anderen Ordner.

## Warum ist cd wichtig?

Viele Arbeiten im Terminal beginnen erst damit, dass du im **richtigen Verzeichnis** bist.

Wenn du im falschen Ordner arbeitest, können andere Befehle zwar korrekt sein, aber trotzdem am falschen Ort ausgeführt werden.

## Das einfachste Beispiel

```bash
cd dokumente
```

Damit wechselst du in den Ordner `dokumente`, wenn er im aktuellen Verzeichnis liegt.

## Wichtige Varianten

### Ein Verzeichnis nach oben

```bash
cd ..
```

Damit gehst du eine Ebene zurück.

### Ins Home-Verzeichnis

```bash
cd ~
```

Das bringt dich in dein Home-Verzeichnis.

### In einen absoluten Pfad

```bash
cd /home/user/projekte
```

Damit wechselst du direkt an einen vollständigen und eindeutigen Ort.

## Typische Anfängerfehler

### „cd zeigt nichts an.“

Das ist normal.  
Wenn `cd` funktioniert, kommt oft **keine Ausgabe**.

### „Ich dachte, ich bin schon im richtigen Ordner.“

Dann kombiniere `cd` mit `pwd`.  
Erst wechseln, dann prüfen.

### „Ich habe einen Namen eingegeben, aber es klappt nicht.“

Dann stimmt oft der Pfad nicht oder der Ordner liegt nicht am aktuellen Ort.

## Gute Kombination mit anderen Befehlen

`cd` wird oft zusammen mit diesen Befehlen genutzt:

- `pwd` zum Standort prüfen
- `ls` zum Inhalte ansehen
- `mkdir` zum neue Ordner anlegen
- `nano` oder andere Werkzeuge zum Bearbeiten von Dateien

## Merkhilfe

`cd` verändert deinen Arbeitsort im Terminal.
