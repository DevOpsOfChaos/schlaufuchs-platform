# Linux – Zielseite `ssh-dateiuebertragung-und-tools`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/ssh-dateiuebertragung-und-tools` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Vertiefungsseite zu Dateiübertragung und angrenzenden Werkzeugen im SSH-Kontext.

Die Seite soll zeigen, dass SSH nicht nur zur Anmeldung genutzt wird, sondern auch für einfache Dateiübertragungen und typische Werkzeug-Erweiterungen.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- SSH / Fernzugriff

Sie kommt sinnvoll **nach**:
- `linux/ssh-grundlagen`
- `linux/ssh-anmeldung-und-erste-schritte`
- optional `linux/ssh-schluessel`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass SSH auch für Dateiübertragung genutzt werden kann
- was `scp` grob macht
- was `sftp` grob macht
- wann grafische Tools zusätzlich sinnvoll sein können
- dass Fernzugriff und Dateiübertragung zusammengehören, aber nicht dasselbe sind

Die Seite soll **nicht** zu einem vollständigen Tool-Katalog werden.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- komplette SCP- oder SFTP-Referenz
- Synchronisations-Tools im Vollausbau
- Mounting-Lösungen als Hauptfokus
- komplexe GUI-Client-Vergleiche
- SSH-Tunneling oder Portweiterleitung
- Server-Härtung

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_ssh.html`
- angrenzende SSH-Erwähnungen im Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- SSH als praktisches Werkzeug erweitern
- Dateiübertragung auf Einsteiger-Niveau erklären
- die wichtigsten Unterschiede zwischen Anmeldung und Transfer verständlich machen
- mit kleinen Beispielbefehlen arbeiten
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, dass SSH mehr als Login kann.

### Inhalt
- Titel: `Dateien über SSH übertragen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit SSH kannst du nicht nur auf entfernte Rechner zugreifen, sondern auch Dateien sicher zwischen Systemen übertragen.

## 2) Abschnitt: Fernzugriff ist nicht gleich Dateiübertragung
### Ziel
Den Unterschied sauber erklären.

### Inhalt
- `ssh` öffnet meist eine Shell-Sitzung
- Dateiübertragung nutzt oft verwandte Werkzeuge
- die Verbindungsidee bleibt ähnlich, der Zweck ist aber ein anderer

## 3) Abschnitt: `scp` einfach einordnen
### Ziel
Das häufigste Transfer-Werkzeug kurz erklären.

### Beispiel
```bash
scp datei.txt anna@server01:/home/anna/
```

### Erklärung
- lokale Datei wird auf das entfernte System kopiert
- Quelle und Ziel müssen klar unterschieden werden

### Optionales Gegenbeispiel
```bash
scp anna@server01:/home/anna/datei.txt .
```

## 4) Abschnitt: `sftp` grob einordnen
### Ziel
Eine zweite Transportform verständlich machen.

### Inhalt
- `sftp` erlaubt Dateiübertragung in einer interaktiven Sitzung
- es eignet sich für einfache Transfer-Aufgaben ohne direkte Shell-Arbeit
- für Einsteiger reicht die Grundidee, nicht alle Befehle

## 5) Abschnitt: Wann sind grafische Tools sinnvoll?
### Ziel
Praktische Alltagssituationen einordnen.

### Inhalt
- manchmal ist ein grafisches Werkzeug bequemer
- das ändert aber nichts an der Grundidee: Die Verbindung läuft im SSH-Kontext
- solche Tools sind Ergänzungen, nicht Ersatz für das Verständnis

## 6) Abschnitt: Typische Praxisfälle
### Ziel
Dateiübertragung greifbar machen.

### Praxisfall A – lokale Datei auf einen Server kopieren
### Praxisfall B – Konfigurationsdatei vom Zielsystem herunterladen
### Praxisfall C – kleine Änderungen vorbereiten und dann übertragen

## 7) Abschnitt: Häufige Anfängerfehler
### Ziel
Typische Missverständnisse früh auffangen.

### Beispiele
- Quelle und Ziel verwechseln
- lokalen und entfernten Pfad nicht auseinanderhalten
- denken, dass `scp` automatisch eine interaktive Shell öffnet
- SSH-Anmeldung und Dateiübertragung als dasselbe betrachten

## 8) Lernmodus / interaktive Module
### Modul A: Quelle oder Ziel?
Beispiel:
```bash
scp datei.txt anna@server01:/home/anna/
```

Fragen:
- Was ist lokal?
- Was ist entfernt?

### Modul B: Welches Werkzeug passt?
Situationen zuordnen:
- Shell öffnen
- Datei kopieren
- interaktive Dateiübertragung

### Modul C: Befehl lesen
Beispiel:
```bash
scp anna@server01:/home/anna/datei.txt .
```

Fragen:
- Woher kommt die Datei?
- Wohin wird sie kopiert?

### Modul D: Login oder Transfer?
Aussagen unterscheiden:
- `ssh` für Fernshell
- `scp` für Kopieren
- `sftp` für Transfer-Sitzung

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> SSH ermöglicht nicht nur Fernzugriff, sondern auch sichere Dateiübertragung – zum Beispiel mit `scp` oder `sftp`.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Später kannst du lernen, wie du SSH-Verbindungen zusätzlich absicherst und in Admin-Workflows sauber einsetzt.“

## Tonalität und Schreibregeln
Die Seite soll:
- praktisch und klar formuliert sein
- Werkzeuge nicht überladen erklären
- den Unterschied zwischen Login und Transfer sauber halten
- Einsteiger nicht mit zu vielen Clients verwirren

## Visuelle Regeln
- kompakte Beispielblöcke
- kleine Quelle-Ziel-Komponente
- keine Tool-Tabellenwüste
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Quelle-/Ziel-Komponente:
- lokale Datei
- Verbindung
- Zielsystem
- Richtung der Übertragung

### Warum
- Transferlogik ist als Flow klarer als mit Altgrafiken
- sehr gut für Lernmodus nutzbar
- Altmaterial bringt hier keinen starken Mehrwert

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `ssh`, `scp` und `sftp` nicht vermischen
- lokalen und entfernten Pfad klar trennen
- Dateiübertragung nicht als automatisch „grafisch“ darstellen
- Werkzeuge nicht zu tief erklären

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/ssh-anmeldung-und-erste-schritte`
- optional `linux/ssh-schluessel`

### Direkt danach / später
- `linux/ssh-sicherheit-und-admin-hinweise`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Quelle-/Ziel-Komponente
- 3–4 Lernmodus-Elemente
- 2–3 kurze Beispielblöcke
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den SSH-Bereich praxisnah erweitert
- ohne Altbilder auskommt
- direkt an reale Arbeitsabläufe anschließt
- Einsteigern schnell sichtbaren Nutzen liefert
