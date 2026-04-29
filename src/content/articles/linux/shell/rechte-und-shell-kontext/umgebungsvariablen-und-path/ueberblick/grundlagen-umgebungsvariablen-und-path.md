---
title: "Grundlagen: Umgebungsvariablen und PATH"
description: "Allgemeiner Überblick über Umgebungsvariablen, den PATH und die Frage, warum Befehle in der Shell gefunden werden."
subject: "linux"
section: "Shell"
topicPath: ["shell", "rechte-und-shell-kontext", "umgebungsvariablen-und-path", "ueberblick", "grundlagen-umgebungsvariablen-und-path"]
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

**Umgebungsvariablen** sind benannte Werte, die Programmen beim Start als Kontext mitgegeben werden. Sie können Pfade, Spracheinstellungen, Konfigurationen oder andere Informationen enthalten. Der **PATH** ist eine besonders wichtige Umgebungsvariable in der Shell.

Der PATH legt fest, in welchen Verzeichnissen die Shell nach ausführbaren Programmen sucht, wenn ein Befehl ohne vollständigen Pfad eingegeben wird.

## Umgebungsvariablen

Eine Variable wie HOME kann auf das Home-Verzeichnis verweisen. LANG kann Spracheinstellungen beschreiben. Programme können solche Werte auslesen und ihr Verhalten daran anpassen.

Nicht jede Shell-Variable ist automatisch eine Umgebungsvariable. Erst exportierte Variablen werden an gestartete Programme weitergegeben. Dadurch entsteht ein Unterschied zwischen lokalem Shell-Zustand und Umgebung eines Prozesses.

## PATH

Der PATH besteht aus einer Liste von Verzeichnissen. Unter Linux sind diese Verzeichnisse durch Doppelpunkte getrennt. Gibt man einen Befehl wie ls ein, durchsucht die Shell diese Verzeichnisse in Reihenfolge und startet das erste passende ausführbare Programm.

Deshalb kann derselbe Befehlsname je nach PATH auf unterschiedliche Programme zeigen. Die Reihenfolge im PATH ist also sicherheits- und praxisrelevant.

## Temporär und dauerhaft

Eine Änderung in einer aktuellen Shell gilt zunächst nur für diese Sitzung oder für daraus gestartete Prozesse. Dauerhafte Änderungen werden meist in Shell-Startdateien oder Profilkonfigurationen eingetragen. Dabei ist Vorsicht wichtig, weil ein fehlerhafter PATH grundlegende Befehle schwer auffindbar machen kann.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Befehle wie echo, export, which oder das Bearbeiten von Profil-Dateien. Diese Überblicksseite erklärt den gemeinsamen Rahmen: Umgebungsvariablen beschreiben Prozesskontext, PATH steuert die Befehlssuche.

<div class="note-panel">
  <p><strong>Merke:</strong> Wenn ein Befehl ohne Pfadangabe funktioniert, liegt das meist am PATH. Die Shell sucht nicht überall, sondern nur in der dort festgelegten Reihenfolge.</p>
</div>
