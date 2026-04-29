---
title: "Grundlagen: Absolute und relative Pfade"
description: "Allgemeiner Überblick über Pfade im Linux-Dateisystem und den Unterschied zwischen absoluter und relativer Adressierung."
subject: "linux"
section: "Shell"
topicPath: ["shell", "dateisystem-und-pfade", "absolute-und-relative-pfade", "ueberblick", "grundlagen-absolute-und-relative-pfade"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
## Begriff

Ein **Pfad** beschreibt, wo eine Datei oder ein Ordner im Dateisystem liegt. Unter Linux ist das Dateisystem hierarchisch aufgebaut. An der Spitze steht die Wurzel, die mit einem Schrägstrich dargestellt wird.

Pfade sind wichtig, weil Befehle und Programme wissen müssen, auf welche Datei oder welchen Ordner sie wirken sollen.

## Absolute Pfade

Ein absoluter Pfad beginnt an der Wurzel des Dateisystems. Er startet mit einem Schrägstrich. Ein Beispiel ist <code>/home/user/dokumente/notiz.txt</code>. Dieser Pfad ist unabhängig davon verständlich, in welchem Ordner man gerade arbeitet.

Absolute Pfade sind eindeutig, aber oft länger.

## Relative Pfade

Ein relativer Pfad beginnt beim aktuellen Arbeitsverzeichnis. Wenn man sich bereits in <code>/home/user</code> befindet, kann <code>dokumente/notiz.txt</code> dieselbe Datei meinen wie der absolute Pfad oben. Die Bedeutung hängt also vom aktuellen Ort ab.

Das aktuelle Verzeichnis wird oft mit <code>.</code> bezeichnet. Das übergeordnete Verzeichnis wird mit <code>..</code> bezeichnet.

## Arbeitsverzeichnis

Die Shell besitzt immer ein aktuelles Arbeitsverzeichnis. Der Befehl pwd zeigt es an. Der Befehl cd wechselt es. Viele Missverständnisse entstehen, wenn ein relativer Pfad von einem anderen Arbeitsverzeichnis aus gelesen wird als erwartet.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln Befehle wie cd, pwd, basename, dirname oder realpath. Diese Überblicksseite erklärt den allgemeinen Rahmen: Pfade sind Adressen im Dateisystem, und relative Pfade brauchen immer einen Bezugspunkt.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein relativer Pfad ist nur zusammen mit dem aktuellen Arbeitsverzeichnis eindeutig.</p>
</div>
