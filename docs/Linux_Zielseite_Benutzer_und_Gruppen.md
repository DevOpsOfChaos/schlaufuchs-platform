# Linux – Zielseite `benutzer-und-gruppen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/benutzer-und-gruppen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einsteigerseite zum Mehrbenutzersystem unter Linux.

Die Seite soll erklären, warum Linux zwischen verschiedenen Benutzern und Gruppen unterscheidet und wie dieses Konzept mit Dateirechten zusammenhängt.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Rechte / Benutzerlogik

Sie kommt sinnvoll **nach**:
- `linux/dateirechte-grundlagen`
- `linux/chmod`

Und **vor**:
- `linux/dateibesitz-verstehen`
- `linux/chown`
- `linux/chgrp`
- spätere Admin-Seiten zur Benutzerverwaltung

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass Linux ein Mehrbenutzersystem ist
- dass nicht alle Nutzer dieselben Rechte haben
- was ein Benutzerkonto ist
- was eine Gruppe ist
- warum Gruppen für gemeinsame Zugriffe nützlich sind
- wie Benutzer, Gruppen und Dateirechte zusammenhängen
- wie man einfache Infos mit `whoami`, `id` und `groups` lesen kann

Die Seite soll **noch nicht** zeigen, wie Benutzer angelegt oder systemnah verwaltet werden.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- `useradd`
- `usermod`
- `groupadd`
- `/etc/passwd`
- `/etc/group`
- `/etc/shadow`
- tiefe Root- oder Admin-Workflows
- Besitzwechsel mit `chown` / `chgrp` im Detail
- Rechte mathematisch oder numerisch neu erklären

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_dateien.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_aufgabe_01.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_aufgabe_02.html`
- indirekt angrenzend: `linux/linux_dateisystem/linux_dateirechte.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- die Grundidee eines Mehrbenutzersystems verständlich machen
- ruhig, klar und menschlich formuliert sein
- mit kleinen alltagsnahen Beispielen arbeiten
- Benutzer, Gruppe und andere sauber einordnen
- einfache Linux-Befehle zur Orientierung zeigen
- später logisch zu Besitz und `chown` weiterführen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, warum das Thema wichtig ist.

### Inhalt
- Titel: `Benutzer und Gruppen verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Linux ist für mehrere Benutzer gedacht. Deshalb ist wichtig, wem Dateien gehören und welche Gruppe auf sie zugreifen darf.

## 2) Abschnitt: Warum ist Linux ein Mehrbenutzersystem?
### Ziel
Den Sinn erklären, bevor neue Begriffe eingeführt werden.

### Kernpunkte
- mehrere Menschen können denselben Rechner oder Server nutzen
- jeder soll nur auf passende Bereiche zugreifen können
- persönliche Dateien und gemeinsame Projektordner brauchen klare Regeln
- Rechte und Gruppen sorgen für Ordnung und Sicherheit

### Stil
- alltagsnah
- ohne Server-Pathos
- keine unnötige Historie

## 3) Abschnitt: Was ist ein Benutzer?
### Ziel
Das Benutzerkonto einfach erklären.

### Inhalt
- ein Benutzerkonto steht für eine Person oder einen Systemnutzer
- ein Benutzer hat einen Namen
- Dateien können einem Benutzer gehören
- Befehle werden immer im Kontext eines Benutzers ausgeführt

### Passender Einsteigerbefehl
```bash
whoami
```

### Aussage
`whoami` zeigt, mit welchem Benutzer du gerade arbeitest.

## 4) Abschnitt: Was ist eine Gruppe?
### Ziel
Gruppen als gemeinsame Rechte-Ebene verständlich machen.

### Inhalt
- Gruppen fassen Benutzer logisch zusammen
- Gruppen sind nützlich für gemeinsame Dateien und Ordner
- eine Datei kann zu einer Gruppe gehören
- dadurch kann nicht nur der Eigentümer, sondern auch ein Team sinnvoll Rechte erhalten

### Einfaches Beispiel
- `lina` arbeitet im Team `webteam`
- ein Projektordner gehört der Gruppe `webteam`
- mehrere Personen können passend darauf zugreifen

## 5) Abschnitt: Wie hängen Benutzer, Gruppen und Rechte zusammen?
### Ziel
Die Verbindung zu den bisherigen Rechte-Seiten herstellen.

### Inhalt
- Rechte gelten für drei Ebenen:
  - Eigentümer
  - Gruppe
  - andere Nutzer
- Benutzer und Gruppen erklären, **für wen** Rechte gelten
- `chmod` ändert Rechte, aber nicht den Benutzer selbst

### Wichtiger Satz
Rechte sagen, **was** erlaubt ist. Benutzer und Gruppen sagen, **für wen** diese Regeln gelten.

## 6) Abschnitt: Einfache Befehle zum Nachschauen
### Ziel
Lernenden sofort nützliche Werkzeuge geben.

### Befehl 1 – `whoami`
```bash
whoami
```
Zeigt den aktuellen Benutzer.

### Befehl 2 – `groups`
```bash
groups
```
Zeigt, in welchen Gruppen der aktuelle Benutzer ist.

### Befehl 3 – `id`
```bash
id
```
Zeigt Benutzer-ID, Gruppen-ID und Gruppenzugehörigkeiten in kompakter Form.

### Wichtig
Nicht in UID/GID-Details versinken. Die Seite soll nur die Grundidee vermitteln.

## 7) Abschnitt: Kleine Praxisbeispiele
### Ziel
Das Thema konkret und anschaulich machen.

### Beispiel A – private Notizen
Eine Datei gehört `anna` und soll nicht von allen geändert werden.

### Beispiel B – gemeinsamer Projektordner
Ein Ordner gehört `lina`, die Gruppe ist `webteam`.
Andere Teammitglieder sollen mitarbeiten können.

### Beispiel C – anderer Benutzer ohne Gruppenzugehörigkeit
`tom` ist nicht in `webteam` und hat deshalb weniger Zugriff.

### Form
3 kompakte Karten statt langer Fließtext.

## 8) Abschnitt: Root kurz und sauber einordnen
### Ziel
Den Begriff erwähnen, ohne die Seite in Admin-Stimmung kippen zu lassen.

### Inhalt
- `root` ist ein besonders mächtiger Benutzer
- mit `root` können weitreichende Änderungen vorgenommen werden
- für Einsteiger reicht die Grundidee: `root` hat besonders viele Rechte

### Wichtig
Keine dramatischen Warntexte, sondern sachliche Einordnung.

## 9) Lernmodus / interaktive Module
Die Seite sollte 2–4 kleine interaktive Elemente bekommen.

### Modul A: Wer gehört wohin?
Zuordnungsübung:
- Benutzer
- Gruppe
- Datei
- Rechteblock

Ziel:
- die Begriffe sauber voneinander trennen

### Modul B: Wer darf was?
Mini-Szenario:
- Datei gehört `lina`
- Gruppe ist `webteam`
- `tom` ist nicht in `webteam`

Fragen:
- Wer ist Eigentümer?
- Wer gehört zur Gruppe?
- Wer zählt zu „andere“?

### Modul C: Befehl erkennen
Befehle zuordnen:
```bash
whoami
groups
id
```

Fragen:
- Welcher Befehl zeigt den aktuellen Benutzer?
- Welcher zeigt Gruppen?
- Welcher zeigt beides in kompakter Form?

### Modul D: Gruppenidee verstehen
Szenario:
- drei Nutzer arbeiten an einem Projekt
- zwei sind in `webteam`
- einer nicht

Frage:
- warum ist eine Gruppe hier sinnvoller als einzelne Sonderregeln für jede Datei?

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Benutzer und Gruppen legen fest, **für wen** Linux-Rechte gelten.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang zur nächsten Seite:
- „Als Nächstes lernst du, wie Eigentümer und Gruppenbesitz direkt an Dateien und Ordnern sichtbar werden.“

Das führt gut zu:
- `linux/dateibesitz-verstehen`

## Tonalität und Schreibregeln
Die Seite soll:
- ruhig und verständlich formuliert sein
- nicht zu technisch wirken
- keine internen Systemdateien als Hauptthema aufziehen
- alltagsnahe Team-/Projektbeispiele nutzen
- Einsteiger ernst nehmen, aber nicht überfordern

## Visuelle Regeln
- keine unnötig komplexen Tabellen
- Benutzer/Gruppe/Andere als kompakte Vergleichskomponente
- kleine Terminalblöcke statt großer Konsolenwände
- gute Lesbarkeit in Light/Dark Mode
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Vergleichs-Komponente:
- Benutzer
- Gruppe
- Andere
- dazu ein Beispielobjekt wie Datei oder Ordner

Optional auch ein kleines Team-Szenario als UI-Karte.

### Warum
- das Thema lebt von Beziehungen, nicht von alten Screenshots
- neue UI ist klarer und konsistenter
- passt besser zu Lernmodus und Folge-Seiten

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- Benutzerkonto nicht mit Eigentümer einer konkreten Datei gleichsetzen, ohne es zu erklären
- Gruppe nicht als „Ordnergruppe“ missverstehen lassen
- `chmod` nicht noch einmal vollständig erklären
- Root erwähnen, aber nicht dominieren lassen
- `id`/`groups` nur so tief erklären, wie es Einsteiger wirklich brauchen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/dateirechte-grundlagen`
- `linux/chmod`

### Direkt danach
- `linux/dateibesitz-verstehen`

### Später angrenzend
- `linux/chown`
- `linux/chgrp`
- `linux/systemdateien-benutzerverwaltung`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Vergleichskomponente für Benutzer / Gruppe / Andere
- 2–4 kleine Lernmodus-Elemente
- kurze Terminalblöcke mit `whoami`, `groups`, `id`
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter nächster Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- die Rechte-Strecke logisch fortsetzt
- ohne Altbilder auskommt
- inhaltlich viel Klarheit in den Linux-Bereich bringt
- spätere Seiten zu Besitz, `chown` und `chgrp` vorbereitet
- sich sehr gut mit kleinen interaktiven Team-/Rollenbeispielen umsetzen lässt
