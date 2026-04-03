# Linux – Zielseite `ssh-anmeldung-und-erste-schritte`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/ssh-anmeldung-und-erste-schritte` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zur ersten praktischen SSH-Nutzung.

Die Seite soll zeigen, wie eine erste Verbindung aufgebaut wird, was bei der Anmeldung passiert und welche ersten Befehle nach einem Login sinnvoll sind.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- SSH / Fernzugriff

Sie kommt sinnvoll **nach**:
- `linux/ssh-grundlagen`

Und **vor**:
- `linux/ssh-schluessel`
- spätere Seiten zu Dateiübertragung, Sicherheit oder Admin-Hinweisen

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- wie eine erste SSH-Verbindung aufgebaut wird
- welche Rolle Benutzername, Hostname oder IP-Adresse spielen
- wie eine einfache Passwortanmeldung abläuft
- was ein Host-Key-Hinweis grob bedeutet
- welche ersten Befehle nach dem Login sinnvoll sind

Die Seite soll **noch nicht** tief in Schlüssel, Konfigurationsdateien oder Sicherheitsrichtlinien abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- `ssh-keygen` im Detail
- `authorized_keys`
- Konfigurationsdateien wie `~/.ssh/config`
- Portangaben und Spezialoptionen als Hauptthema
- Dateiübertragung mit `scp` oder `sftp`
- Serverhärtung
- Root-Login-Diskussionen im Detail

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_ssh.html`
- indirekt angrenzend: Shell- und Benutzerkontext aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- die erste SSH-Sitzung praktisch erklären
- kurze, realistische Beispielblöcke nutzen
- Passwortanmeldung als Einstieg zeigen
- den Host-Key-Hinweis in einfacher Sprache einordnen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was hier praktisch gelernt wird.

### Inhalt
- Titel: `Erste SSH-Anmeldung`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Mit einem SSH-Befehl, einem Benutzernamen und dem Zielsystem kannst du dich auf einem anderen Rechner anmelden und dort arbeiten.

## 2) Abschnitt: Was brauchst du für die Verbindung?
### Ziel
Die Grundbausteine klar benennen.

### Kernpunkte
- Benutzername auf dem Zielsystem
- Hostname oder IP-Adresse
- Zugang über Passwort oder später Schlüssel

### Beispiel
```bash
ssh anna@192.168.0.25
```

## 3) Abschnitt: So läuft eine erste Anmeldung ab
### Ziel
Den praktischen Ablauf greifbar machen.

### Beispielhafte Sitzung
```txt
$ ssh anna@192.168.0.25
anna@192.168.0.25's password:
```

### Erklärung
- Verbindung wird gestartet
- Passwort wird abgefragt
- bei Erfolg landet man in einer Shell auf dem Zielsystem

### Wichtig
Klar sagen, dass Passwort-Eingaben im Terminal oft nicht sichtbar dargestellt werden.

## 4) Abschnitt: Host-Key-Hinweis einfach erklärt
### Ziel
Einen typischen Moment der ersten Anmeldung verständlich machen.

### Inhalt
- beim ersten Verbindungsaufbau kann das System einen Hinweis zur Identität des Zielrechners zeigen
- vereinfacht gesagt hilft dieser Schritt dabei, das Zielsystem wiederzuerkennen
- für Einsteiger reicht die Grundidee: der Rechner merkt sich bekannte Ziele

### Wichtig
Nur Einsteiger-Niveau, keine Kryptodetails.

## 5) Abschnitt: Was tun nach dem Login?
### Ziel
Die erste Sitzung sinnvoll nutzen.

### Sinnvolle erste Befehle
```bash
whoami
pwd
ls
```

### Erklärung
- `whoami` zeigt den aktuellen Benutzer
- `pwd` zeigt das aktuelle Verzeichnis
- `ls` zeigt den Inhalt des Verzeichnisses

## 6) Abschnitt: Typische Praxisfälle
### Ziel
SSH-Nutzung alltagsnah machen.

### Praxisfall A – Raspberry Pi im Heimnetz
Per SSH auf ein Gerät im lokalen Netzwerk zugreifen.

### Praxisfall B – Linux-Rechner aus der Ferne verwalten
Sich auf einem anderen System anmelden und dort Befehle ausführen.

### Praxisfall C – Nachsehen statt direkt davor sitzen
Kurze Kontrolle eines Systems ohne physischen Zugriff.

## 7) Abschnitt: Häufige Anfängerfehler
### Ziel
Missverständnisse früh auffangen.

### Beispiele
- Benutzername des lokalen Rechners mit dem des Zielrechners verwechseln
- denken, dass Passwortzeichen im Terminal erscheinen müssen
- nicht wissen, ob Hostname oder IP-Adresse gemeint ist
- erwarten, dass nach dem Login automatisch eine grafische Oberfläche erscheint

## 8) Lernmodus / interaktive Module
### Modul A: SSH-Befehl lesen
Beispiel:
```bash
ssh lina@server01
```

Fragen:
- Was ist der Benutzername?
- Was ist das Zielsystem?

### Modul B: Was passiert zuerst?
Ablaufkarten ordnen:
- Befehl eingeben
- Verbindung aufbauen
- Passwort eingeben
- Shell auf dem Zielsystem nutzen

### Modul C: Sinnvolle erste Befehle
Auswahl:
- `whoami`
- `pwd`
- `ls`
- `chmod`

Fragen:
- Welche Befehle helfen direkt nach dem Login bei der Orientierung?

### Modul D: Lokaler oder entfernter Rechner?
Kurze Szenarien bewerten:
- „Du willst auf einen Raspberry Pi im Heimnetz zugreifen.“
- „Du willst eine lokale Datei nur umbenennen.“

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Für eine erste SSH-Anmeldung brauchst du Benutzername, Zielsystem und eine gültige Anmeldemethode – danach arbeitest du auf dem entfernten Rechner in einer Shell.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie SSH-Schlüssel eine sichere Anmeldung ohne ständige Passwort-Eingabe ermöglichen.“

## Tonalität und Schreibregeln
Die Seite soll:
- praktisch und zugänglich formuliert sein
- typische erste Fragen direkt beantworten
- keine unnötige Sicherheitsdramatisierung enthalten
- die erste Verbindung nachvollziehbar machen

## Visuelle Regeln
- kompakte Terminalbeispiele
- kleine Ablauf-Komponente für den Login-Prozess
- keine überbreiten Konsolenfenster
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Login-Ablauf-Komponente:
- Nutzer
- SSH-Befehl
- Zielsystem
- Passwort / Anmeldung
- Shell nach Login

### Warum
- praktischer Ablauf ist als Schritt-für-Schritt-UI viel verständlicher
- Altmaterial hat hier keinen relevanten Mehrwert
- gut für Lernmodus wiederverwendbar

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- lokaler und entfernter Benutzer nicht vermischen
- Passwortanzeige im Terminal korrekt einordnen
- Hostname und IP-Adresse verständlich erklären
- Host-Key-Hinweis nur so tief erklären wie nötig

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/ssh-grundlagen`

### Direkt danach
- `linux/ssh-schluessel`

### Später angrenzend
- `linux/ssh-dateiuebertragung-und-tools`
- `linux/ssh-sicherheit-und-admin-hinweise`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Login-/Ablauf-Komponente
- 3–4 Lernmodus-Elemente
- 2–3 kurze Terminalblöcke
- 1 Merksatz-Block
- 1 Übergang zur nächsten Seite

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- SSH direkt praktisch macht
- ohne Altbilder auskommt
- sehr gut mit sicheren Demo-Sitzungen umgesetzt werden kann
- eine starke Grundlage für Schlüssel und spätere Fernzugriffsthemen schafft
