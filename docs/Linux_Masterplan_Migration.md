# Linux – Masterplan Migration und Neuaufbau

## Zweck dieser Datei
Diese Datei bündelt den bisherigen Linux-Neuaufbau in **eine zentrale Master-Struktur**.

Sie dient als Arbeitsgrundlage für den Relaunch und fasst zusammen:
- welche alten Linux-Inhalte nur noch als Quelle dienen
- welche neuen Seitenblöcke entstehen sollen
- welche Themen bereits im aktuellen System vorhanden sind
- in welcher Reihenfolge Linux sinnvoll weitergebaut wird
- wo Bilder entfallen
- wo interaktive Module statt Altmaterial eingesetzt werden

## Grundsatz für Linux
Die alte Linux-Seite dient nur noch als Quelle für:
- Themenstruktur
- mögliche Inhalte
- alte Beispiele
- einzelne eventuell brauchbare Bilder

Sie wird **nicht technisch übernommen**.
Alle Seiten werden neu geschrieben, neu strukturiert und in die neue Schlaufuchs-Logik überführt.

## Leitplanken aus der Übergabe
Für den Linux-Ausbau gelten weiter diese festen Regeln:
- Linux wird als erstes echtes Migrationsfeld ausgebaut.
- Alte Inhalte nur gezielt und nicht massenhaft migrieren.
- Interaktive Beispiele sind ausdrücklich gewünscht.
- Keine echte Befehlsausführung im Lernmodus.
- Nur vorbereitete Eingaben / Antworten.
- Merksatz ist auf jeder Seite Pflicht.
- Commit-Namen immer angeben.
- Kurze, professionelle Wissensseiten statt Altlasten. 

## Aktuell bereits vorhandene Linux-Seiten im neuen System
### Navigation
- `pwd`
- `cd`
- `pfade`

### Dateien
- `ls`
- `dateien-und-ordner`
- `mkdir`

### Befehle
- `hilfe-im-terminal`
- `grundbefehle`
- `dateibefehle`

Diese Seiten bilden bereits den Einstieg und müssen in der weiteren Linux-Struktur sauber eingeordnet bleiben.

## Ergebnis der bisherigen Altanalyse
### Was sich klar gezeigt hat
- Viele alte Linux-Seiten sind inhaltlich brauchbar, aber strukturell veraltet.
- Viele alte Aufgaben sind eher Materialsammlungen als gute Zielseiten.
- Ein großer Teil der Bildlogik ist überholt.
- Code, Konsole und viele Erklärungen dürfen **nicht als Bild übernommen** werden.
- Fachlich starke Themen lassen sich besser als neue Wissensseiten + sichere Lernmodule aufbauen.

### Bildregel für Linux
Grundsätzlich gilt:
- Codebilder: **raus**
- Terminalbilder: **raus**
- UI-/Deko-Bilder: **raus**
- schwache PNGs: **raus**
- einfache Erklärgrafiken: meist **neu bauen**
- nur einzelne wirklich starke, zeitlose Fachgrafiken dürfen überhaupt geprüft werden

## Zielstruktur für Linux im Relaunch
## A. Einstieg / Orientierung
Diese Ebene ist für den ersten Zugang gedacht.

### Bereits vorhanden
- `hilfe-im-terminal`
- `grundbefehle`
- `dateibefehle`
- `pwd`
- `cd`
- `pfade`
- `ls`
- `dateien-und-ordner`
- `mkdir`

### Rolle dieser Ebene
- erste Shell-Navigation
- erste Orientierung im Dateisystem
- erste Arbeitslogik im Terminal
- kurze, klare Seiten
- möglichst wenig Ballast

## B. Shell-Grundlagen als eigener Block
### Neue Zielseiten
- `linux/shell-und-prompt`
- `linux/streams-und-umleitungen`
- `linux/pipes-und-befehle-kombinieren`
- später `linux/shell-werkzeuge-kombinieren`

### Zweck
- Shell verständlich machen
- Prompt erklären
- Standardkanäle / Streams erklären
- Umleitungen und Pipes sauber einführen

### Wichtig
Shell bleibt getrennt von:
- SSH
- Shellskripten
- Rechteverwaltung
- Benutzerverwaltung

## C. Dateisystem / Struktur
### Bereits vorhanden bzw. vorbereitet
- `pwd`
- `cd`
- `pfade`
- `ls`
- `dateien-und-ordner`
- `mkdir`

### Bereits geplante Neuordnung
- Terminal-Grundlagen und Dateisystem wurden bereits separat strukturiert
- Verzeichnisstruktur-Grafiken sollen wenn nötig **neu gebaut** werden
- Deko-Bilder und alte Shellgrafiken entfallen

## D. Dateirechte / chmod / Benutzerklassen
### Neue Zielseiten
- `linux/dateirechte-grundlagen`
- `linux/chmod`
- `linux/benutzer-und-gruppen`
- später `linux/systemdateien-benutzerverwaltung`

### Zweck
- Rechte logisch und lesbar erklären
- `u`, `g`, `o` sauber aufbauen
- symbolische und numerische Rechte verständlich machen
- Benutzer-/Gruppenidee vom Admin-Kontext entkoppeln

### Bildregel
- `permissions.png` nicht direkt übernehmen
- Rechte-Matrix lieber neu als UI/SVG oder interaktive Komponente bauen

## E. Besitz / chown / chgrp
### Neue Zielseiten
- `linux/dateibesitz-verstehen`
- `linux/chown`
- `linux/chgrp`
- später `linux/besitz-und-admin-workflows`

### Zweck
- Eigentümer und Gruppe verständlich machen
- Zusammenhang zu Rechten schließen
- `chown` und `chgrp` getrennt und sauber erklären
- Admin-Tiefe erst später

## F. Shellskripte
### Neue Zielseiten
- `linux/shellskripte-grundlagen`
- `linux/shellskripte-ausgaben-und-variablen`
- `linux/shellskripte-eingaben`
- `linux/shellskripte-bedingungen-und-schleifen`
- später `linux/shellskripte-dateien-und-automation`

### Zweck
- den alten verteilten Skriptbereich stark reduzieren
- viele Altaufgaben in sichere Lernmodule überführen
- keine Bilder für Code oder Konsoleninhalt übernehmen

## G. SSH / Fernzugriff
### Neue Zielseiten
- `linux/ssh-grundlagen`
- `linux/ssh-anmeldung-und-erste-schritte`
- später `linux/ssh-schluessel`
- später `linux/ssh-dateiuebertragung-und-tools`
- später `linux/ssh-sicherheit-und-admin-hinweise`

### Zweck
- SSH früh verständlich machen, aber ohne Admin-Überladung
- Fernzugriff praxisnah erklären
- Passwortlogin als Einstieg, Schlüssel später

## H. Spätere Linux-Erweiterungen
Diese Themen sind sinnvoll, aber nicht erste Priorität:
- erweiterte Shell-Werkzeuge
- Dateisuche / Filter / Textwerkzeuge
- Cron / Automatisierung
- Prozesse / Dienste
- Paketverwaltung
- Logs
- Systemdateien und Admin-Kontext

Diese Blöcke sollten erst nach sauberem Abschluss der Kernstrecke kommen.

## Empfohlene Gesamt-Reihenfolge für den Linux-Ausbau
## Phase 1 – Fundament sichern
1. bestehende Einstiegsseiten sauber einordnen
2. Terminal + Dateisystem sauber halten
3. Shell-Grundlagen als eigenen Block ergänzen

## Phase 2 – Rechte und Benutzerlogik
4. `dateirechte-grundlagen`
5. `chmod`
6. `benutzer-und-gruppen`
7. `dateibesitz-verstehen`
8. `chown`
9. `chgrp`

## Phase 3 – produktive Shell-Arbeit
10. `shellskripte-grundlagen`
11. `shellskripte-ausgaben-und-variablen`
12. `shellskripte-eingaben`
13. `shellskripte-bedingungen-und-schleifen`

## Phase 4 – Fernzugriff
14. `ssh-grundlagen`
15. `ssh-anmeldung-und-erste-schritte`

## Phase 5 – Vertiefung
16. Pipes-/Werkzeugkombinationen ausbauen
17. Shellskripte-Datei-/Automationsfälle
18. SSH-Schlüssel und sichere Admin-Hinweise
19. Benutzerverwaltungsdateien / Systemdateien

## Interaktive Standards für Linux
Linux eignet sich besonders gut für wiederverwendbare Modul-Typen.

### 1) Fake-Konsole
Für:
- Navigation
- `ls`
- `pwd`
- `cd`
- einfache Fehlermeldungen
- erste SSH-Sitzungen
- kleine Shellskript-Demos

### 2) Befehl-Zusammensetzen
Für:
- `ssh benutzer@host`
- `chmod`
- `chown`
- `chgrp`

### 3) Code-/Skript-Bausteine sortieren
Für:
- Shebang
- `echo`
- `read`
- `if`
- `for`
- `while`

### 4) Rechte-Matrix / Besitzerlogik
Für:
- `u / g / o`
- `r / w / x`
- symbolisch vs. numerisch
- Eigentümer / Gruppe / andere

### 5) Mini-Quiz im Lernmodus
Für:
- Verständnisfragen
- Zuordnungen
- Fehlererkennung
- kleine Praxisfälle

## Linux-spezifische Qualitätsregeln
- keine doppelten Titel
- keine überbreiten Codefenster
- Light/Dark gut lesbar
- Codeblöcke kompakt und professionell
- fachlich korrekte Aussagen
- keine Angsttexte
- kein Admin-Overload auf Einsteigerseiten
- jede Seite mit klarem Merksatz abschließen

## Bild- und Grafikentscheidungen im Linux-Bereich
### Sicher raus
- Code-Screenshots
- Terminal-Screenshots
- Deko-Grafiken
- alte Shellgrafiken
- kleine schwache PNGs

### Eher neu bauen
- Verzeichnisstruktur
- Rechte-Matrix
- eventuell übersichtliche Linux-Architekturdiagramme

### Optional prüfbar
- einzelne zeitlose Fachgrafiken, wenn sie fachlich stark und optisch noch tragbar sind

## Bereits entstandene Teilpläne
Diese Master-Datei bündelt inhaltlich folgende Teilpläne:
- `docs/Linux_Migrationsgrundlage_Schritt_1.md`
- `docs/Linux_Neuzuordnung_Terminal_Dateisystem.md`
- `docs/Linux_Neuaufbau_Rechte_Benutzerklassen_chmod.md`
- `docs/Linux_Neuaufbau_Besitz_chown_chgrp.md`
- `docs/Linux_Neuaufbau_Shellskripte.md`
- `docs/Linux_Neuaufbau_SSH_Fernzugriff.md`
- `docs/Linux_Neuaufbau_Shell_Streams_Umleitungen.md`

## Nächster sinnvoller Arbeitsschritt
Nach diesem Masterplan ist der sinnvollste nächste Schritt **nicht** noch mehr Analyse, sondern die erste echte Umsetzungsphase im neuen Linux-Bereich.

Empfohlen:
1. eine Zielseite auswählen
2. finale Seitenstruktur + Content-Blueprint festlegen
3. passende interaktive Module definieren
4. erst dann Umsetzung im eigentlichen Code

## Empfehlenswerte erste echte Build-Kandidaten
- `linux/dateirechte-grundlagen`
- `linux/shell-und-prompt`
- `linux/shellskripte-grundlagen`

Diese drei eignen sich am besten, weil sie:
- stark vom Altmaterial profitieren
- aber kaum Altbilder brauchen
- interaktiv sehr gut funktionieren
- viele spätere Seiten vorbereiten
