# Linux – Zielseite `ssh-grundlagen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/ssh-grundlagen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einsteigerseite zum Thema SSH unter Linux.

Die Seite soll erklären, was SSH ist, wofür es genutzt wird und warum es für sicheren Fernzugriff wichtig ist.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- SSH / Fernzugriff

Sie kommt sinnvoll **nach**:
- `linux/shell-und-prompt`
- grundlegenden Terminal-Seiten

Und **vor**:
- `linux/ssh-anmeldung-und-erste-schritte`
- `linux/ssh-schluessel`
- spätere Vertiefungen zu Dateiübertragung oder Admin-Sicherheit

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was SSH ist
- warum man entfernte Rechner über das Netzwerk steuern kann
- warum SSH sicherer als unverschlüsselte Fernzugriffe ist
- in welchen typischen Situationen SSH genutzt wird
- wie der Grundaufbau eines SSH-Befehls aussieht

Die Seite soll **noch nicht** tief in Anmeldung, Schlüssel oder Konfiguration abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- Schlüsselerzeugung im Detail
- Host-Key-Management im Detail
- `scp` oder `sftp` als Schwerpunkt
- Portweiterleitungen
- X11-Forwarding
- Serverhärtung
- tiefe Historie zu Telnet oder Protokollversionen

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_ssh.html`
- `linux/linux_shell/linux_shell.html` (SSH-Erwähnungen)
- indirekt angrenzend: Benutzerverwaltungs- und Shell-Kontext aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- SSH als praktisches Werkzeug erklären
- Fernzugriff alltagsnah einordnen
- klar und ruhig formuliert sein
- mit kleinen Beispielbefehlen arbeiten
- eine saubere Brücke zu Anmeldung und Schlüsseln bilden
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, wofür SSH da ist.

### Inhalt
- Titel: `SSH verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit SSH kannst du dich sicher über ein Netzwerk auf einem anderen Rechner anmelden und dort in der Shell arbeiten.

## 2) Abschnitt: Was ist SSH?
### Ziel
Die Grundidee knapp und verständlich erklären.

### Kernpunkte
- SSH steht für **Secure Shell**
- damit kann man entfernte Systeme über das Netzwerk nutzen oder verwalten
- die Verbindung ist verschlüsselt
- SSH wird häufig für Linux-Rechner, Server oder Geräte im Heimnetz genutzt

## 3) Abschnitt: Warum ist SSH nützlich?
### Ziel
Den praktischen Wert greifbar machen.

### Praxisbeispiele
- auf einen Raspberry Pi im Netzwerk zugreifen
- einen Linux-Server verwalten
- auf einen anderen Rechner zugreifen, ohne direkt davor zu sitzen

### Form
3 kompakte Nutzenkarten statt langer Theorie

## 4) Abschnitt: Warum „secure“?
### Ziel
Sicherheit auf Einsteiger-Niveau einordnen.

### Inhalt
- SSH verschlüsselt die Verbindung
- dadurch sind Zugangsdaten und Befehle besser geschützt
- für Einsteiger reicht die Grundidee: SSH ist für sicheren Fernzugriff gedacht

### Wichtig
Nicht in Kryptodetails abgleiten.

## 5) Abschnitt: Wie sieht ein SSH-Befehl aus?
### Ziel
Die Grundform früh sichtbar machen.

### Beispiel
```bash
ssh benutzername@host
```

### Erklärung
- `ssh` startet den Verbindungsaufbau
- `benutzername` ist das Konto auf dem Zielsystem
- `host` ist z. B. ein Rechnername oder eine IP-Adresse

## 6) Abschnitt: Womit arbeitet man nach der Verbindung?
### Ziel
Die Verbindung zur Shell herstellen.

### Inhalt
- nach erfolgreicher Anmeldung arbeitet man meist in einer Shell
- viele bekannte Linux-Befehle funktionieren dort genauso weiter
- deshalb baut SSH logisch auf den bisherigen Terminal-Inhalten auf

## 7) Abschnitt: Typische Missverständnisse vermeiden
### Ziel
Einsteiger sauber abholen.

### Beispiele
- SSH ist kein eigener Rechner, sondern eine Verbindungsart
- SSH ist nicht nur für große Internet-Server gedacht
- SSH ist keine grafische Oberfläche, sondern meist Shell-Zugriff

## 8) Lernmodus / interaktive Module
### Modul A: SSH-Befehl zusammensetzen
Bausteine:
- `ssh`
- `anna`
- `@`
- `server01`

Ziel:
- korrekten Befehl zusammensetzen

### Modul B: Wofür würde SSH passen?
Situationen bewerten:
- Raspberry Pi im Heimnetz
- Linux-Server im Rechenzentrum
- lokale Datei umbenennen ohne Netzwerk

### Modul C: Was steckt im Befehl?
Beispiel:
```bash
ssh lina@192.168.0.25
```

Fragen:
- Was ist der Benutzername?
- Was ist das Zielsystem?

### Modul D: Sicher oder nicht?
Aussagen bewerten:
- SSH ist verschlüsselt
- SSH ist nur für Experten nutzbar
- SSH verbindet meist zu einer Shell

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit SSH kannst du dich sicher per Netzwerk auf einem anderen Rechner anmelden und dort in der Shell arbeiten.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie eine erste SSH-Anmeldung praktisch abläuft.“

## Tonalität und Schreibregeln
Die Seite soll:
- ruhig und praktisch formuliert sein
- nicht zu technisch werden
- SSH nicht mystifizieren
- kurze klare Beispiele zeigen
- Sicherheit verständlich, aber ohne Fachballast erklären

## Visuelle Regeln
- kompakte Beispielblöcke
- kleine Komponenten für Befehlsteile und Einsatzszenarien
- keine überbreiten Terminalfenster
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Verbindungs-Komponente:
- lokaler Nutzer
- Netzwerkverbindung
- Zielrechner
- Shell auf dem Zielsystem

### Warum
- die SSH-Idee ist als Flow verständlicher als als Altgrafik
- sehr gut für Lernmodus und Folge-Seiten nutzbar
- Altmaterial liefert hier keinen starken visuellen Mehrwert

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- SSH nicht mit Shell verwechseln
- SSH nicht nur auf Internet-Server beziehen
- `host` und `benutzername` klar trennen
- Sicherheit nicht überladen erklären

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/shell-und-prompt`

### Direkt danach
- `linux/ssh-anmeldung-und-erste-schritte`
- später `linux/ssh-schluessel`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Verbindungs-/Flow-Komponente
- 3–4 Lernmodus-Elemente
- 1–2 kurze Beispielblöcke
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den Linux-Bereich praxisnah erweitert
- ohne Altbilder auskommt
- eine starke Brücke zwischen Shell und echtem Einsatz baut
- späteren SSH-Seiten ein klares Fundament gibt
