# Linux – Zielseite `besitz-und-admin-workflows`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/besitz-und-admin-workflows` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine spätere Vertiefungsseite zu Besitzänderungen, Gruppenlogik und typischen Admin-Abläufen rund um Dateien und Ordner.

Die Seite soll zeigen, wie die Themen `chmod`, `chown`, `chgrp`, Benutzer, Gruppen und Besitz in realistischeren Arbeitsabläufen zusammenspielen.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Rechte / Benutzerlogik

Sie kommt sinnvoll **nach**:
- `linux/dateirechte-grundlagen`
- `linux/chmod`
- `linux/benutzer-und-gruppen`
- `linux/dateibesitz-verstehen`
- `linux/chown`
- `linux/chgrp`

Sie ist **keine Einsteiger-Kernseite**, sondern eine spätere Vertiefung.

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- wie Rechte, Eigentümer und Gruppen in echten Arbeitsabläufen zusammenwirken
- wann `chmod`, `chown` oder `chgrp` jeweils passend sind
- warum saubere Besitzstrukturen wichtig sind
- wie typische Fehler in Team- oder Admin-Kontexten entstehen

Die Seite soll **nicht** in vollwertige Serveradministration oder komplexe Infrastruktur-Themen kippen.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- vollständige Benutzerverwaltung mit `useradd` / `usermod`
- tiefes Arbeiten an `/etc/passwd`, `/etc/group`, `/etc/shadow`
- vollständige Webserver- oder Deploymentkonfiguration
- ACLs oder Spezialrechte im Vollausbau
- Sicherheits-Hardening als Hauptthema
- systemweite Policies

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_dateien.html`
- `linux/linux_dateisystem/linux_dateirechte.html`
- angrenzende Altaufgaben als reine Ideenquelle

## Zielcharakter der neuen Seite
Die Seite soll:
- die bisherigen Einzelthemen in Praxisfälle übersetzen
- ruhig und professionell formuliert sein
- typische Fehlentscheidungen sichtbar machen
- zeigen, wann welcher Befehl wirklich passt
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, dass hier mehrere Linux-Themen zusammenkommen.

### Inhalt
- Titel: `Besitz, Gruppen und Rechte in Arbeitsabläufen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> In echten Linux-Arbeitsabläufen reicht es nicht, nur Rechte zu kennen. Entscheidend ist, wie Rechte, Eigentümer und Gruppen zusammenwirken.

## 2) Abschnitt: Warum Einzelwissen allein nicht reicht
### Ziel
Den Nutzen der Vertiefungsseite erklären.

### Kernpunkte
- Rechte beschreiben, was erlaubt ist
- Eigentümer und Gruppe bestimmen, für wen diese Regeln gelten
- in der Praxis treten Probleme oft auf, wenn eines davon nicht passt

## 3) Abschnitt: Wann nutze ich `chmod`, `chown` oder `chgrp`?
### Ziel
Die drei Befehle klar gegeneinander abgrenzen.

### Inhalt
- `chmod` = Rechte ändern
- `chown` = Eigentümer ändern
- `chgrp` = Gruppe ändern

### Form
Kompakte Vergleichskomponente mit realen Mini-Fällen

## 4) Abschnitt: Praxisfall – Projektordner für ein Team
### Ziel
Gruppenlogik sichtbar machen.

### Szenario
- Eigentümer: `lina`
- Gruppe: `webteam`
- Teammitglieder sollen mitarbeiten können

### mögliche Themen
- Gruppe passend setzen
- Rechte passend setzen
- Eigentümer nicht unnötig ändern

## 5) Abschnitt: Praxisfall – Datei gehört versehentlich `root`
### Ziel
Besitzkorrektur verständlich machen.

### Szenario
- Datei wurde mit `sudo` erstellt
- normaler Benutzer soll weiter damit arbeiten

### Inhalt
- warum `chmod` allein nicht das Kernproblem löst
- wann `chown` sinnvoll ist

## 6) Abschnitt: Praxisfall – Gruppe stimmt, Rechte aber nicht
### Ziel
Rechte und Gruppenzuordnung getrennt denken.

### Szenario
- Datei gehört schon der richtigen Gruppe
- Zugriff klappt trotzdem nicht wie erwartet

### Inhalt
- Gruppenzuordnung reicht allein nicht
- Rechte müssen dazu passen

## 7) Abschnitt: Typische Fehlmuster
### Ziel
Probleme systematisch sichtbar machen.

### Beispiele
- `chmod 777` als schnelle Notlösung betrachten
- Eigentümer ändern, obwohl eigentlich nur Rechte fehlen
- Gruppe setzen, aber Rechte vergessen
- rekursiv zu viel ändern
- Root-Probleme mit falschem Werkzeug lösen wollen

## 8) Abschnitt: Saubere Grundmuster für Einsteiger und Fortgeschrittene
### Ziel
Positive Handlungslogik vermitteln.

### Beispiele
- erst Problem erkennen: Rechte, Eigentümer oder Gruppe?
- dann den passenden Befehl wählen
- Änderungen sichtbar mit `ls -l` prüfen
- kleine, gezielte Änderungen vor pauschalen Lösungen bevorzugen

## 9) Lernmodus / interaktive Module
### Modul A: Welcher Befehl passt?
Situationen zuordnen:
- Eigentümer falsch
- Gruppe falsch
- Rechte falsch

### Modul B: Fehlerdiagnose
Kurzszenario:
- Datei gehört `root`
- Gruppe ist `team`
- Rechte sind `rw-r--r--`

Frage:
- Was ist das eigentliche Problem?

### Modul C: Vorher / Nachher in `ls -l`
Mehrere Fälle lesen und erkennen:
- Eigentümer geändert
- Gruppe geändert
- Rechte geändert

### Modul D: Gute Lösung oder schlechte Notlösung?
Aussagen bewerten:
- „Einfach `777` setzen.“
- „Erst prüfen, ob Eigentümer oder Rechte das Problem sind.“

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> In echten Linux-Arbeitsabläufen musst du unterscheiden, ob ein Problem bei Rechten, Eigentümer oder Gruppe liegt – erst dann ist der passende Befehl klar.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Später kannst du diese Logik mit SSH, Dateiübertragung oder weiteren Admin-Themen kombinieren.“

## Tonalität und Schreibregeln
Die Seite soll:
- professionell und ruhig formuliert sein
- nicht moralisch oder belehrend wirken
- echte Problemsituationen verständlich machen
- keine Komplettlösung für jede Admin-Lage versprechen

## Visuelle Regeln
- kleine Vergleichs- und Diagnose-Komponenten
- kurze `ls -l`-Blöcke
- klare Vorher-/Nachher-Darstellungen
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen sind zwei kleine Komponenten:
- Diagnose-Matrix: Rechte / Eigentümer / Gruppe
- Vorher-/Nachher-Komponente für reale Fälle

### Warum
- Praxisfälle profitieren mehr von klaren UI-Diagnosen als von Altgrafiken
- sehr gut für Lernmodus nutzbar
- Altmaterial liefert hier keinen visuellen Mehrwert

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- Rechte-, Besitz- und Gruppenproblem nicht vermischen
- `777` nicht normalisieren
- Vertiefung nicht in komplettes Admin-Handbuch kippen lassen
- reale Fälle klein und lehrreich halten

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/chmod`
- `linux/chown`
- `linux/chgrp`

### Später angrenzend
- SSH-Sicherheit
- Dateiübertragung
- weitere Linux-Admin-Vertiefungen

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 5–7 Content-Abschnitte
- 2 Diagnose-/Vergleichskomponenten
- 3–4 Lernmodus-Elemente
- 2–3 kurze `ls -l`-Beispiele
- 1 Merksatz-Block
- 1 Ausblick auf angrenzende Themen

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den Rechte-/Besitz-Block fachlich abrundet
- ohne Altbilder auskommt
- viele typische Linux-Fehler in eine saubere Lernlogik übersetzt
- den Übergang zu praxisnaheren Admin-Themen vorbereitet
