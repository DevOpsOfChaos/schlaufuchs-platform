# Linux – Neuaufbau SSH und Fernzugriff

## Ziel dieses Schritts
Der alte SSH-Bereich wird **nicht übernommen**, sondern nur als kleine Inhaltsquelle für Grundidee, Begriffe und erste Beispiele genutzt.

Für den Relaunch soll das Thema **SSH / Fernzugriff** deutlich klarer und moderner aufgebaut werden:
- Einstieg ohne Admin-Overload
- sauberer Praxisbezug
- sichere Einordnung
- keine Bildübernahme
- keine unnötige Historienlast auf der Einsteigerseite

## Relevante Altseiten als Inhaltsquelle
### Kernseiten
- `linux/linux_shell/linux_ssh.html`
- `linux/linux_shell/linux_shell.html` (Abschnitt zur Secure Shell)

### Indirekt relevant
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
  - dort wird SSH als Fernzugriff im Serverkontext erwähnt

## Was wir aus dem Altbestand wirklich mitnehmen
### Inhaltlich brauchbar
- SSH steht für **Secure Shell**.
- SSH dient zur Administration oder Nutzung entfernter Systeme über ein Netzwerk.
- SSH ist verschlüsselt.
- SSH hat Telnet als unverschlüsselte Fernzugriffslösung abgelöst.
- OpenSSH ist die übliche Linux-Umgebung für Client/Server/Schlüssel-Tools.
- Ein typischer Login erfolgt mit:
```bash
ssh benutzername@host
```

### Nur als Hintergrund, nicht als Schwerpunkt auf der Einstiegsseite
- Telnet-Historie
- frühe Protokollgeschichte
- Windows-Tool-Hinweise wie PuTTY
- X11-Weiterleitung

## Was wir bewusst NICHT übernehmen
- das alte Layout
- historische Details als Hauptteil der Seite
- zu tiefe Protokollgeschichte
- zu viel Serveradministration auf der Einstiegsebene
- Bildersatz für Terminalbefehle
- unnötig verstreute Mini-Erklärungen

## Bildentscheidung
Für diesen Themenblock wird **kein Altbild übernommen**.

Grund:
- SSH ist ein text- und befehlsorientiertes Thema
- echte Terminalblöcke sind besser als Bilder
- die alte Darstellung liefert keinen Mehrwert, den man nicht sauberer als UI oder Code lösen könnte

## Neue Seitenzuordnung
## 1) Neue Seite: `linux/ssh-grundlagen`
**Ziel:** verstehen, was SSH ist und wofür man es nutzt.

**Inhalte:**
- Was ist SSH?
- Warum braucht man Fernzugriff?
- Warum ist SSH sicherer als unverschlüsselte Fernzugriffe?
- typische Einsatzfälle:
  - Server verwalten
  - auf einen Raspberry Pi zugreifen
  - auf einen anderen Linux-Rechner im Netzwerk gehen
- Grundaufbau des Befehls

**Kernbeispiel:**
```bash
ssh benutzername@host
```

**Nicht hier hinein:**
- Schlüsselpaar-Erzeugung im Detail
- komplexe Konfigurationsdateien
- SCP/SFTP im Detail
- Portweiterleitungen
- X11-Forwarding

## 2) Neue Seite: `linux/ssh-anmeldung-und-erste-schritte`
**Ziel:** erste echte Nutzung einer SSH-Verbindung.

**Inhalte:**
- Hostname oder IP-Adresse
- Benutzername
- erste Verbindung
- Fingerprint/Host-Trust in einfacher Sprache erklären
- Passwortanmeldung als Grundfall
- nach Login: typische erste Befehle
  - `pwd`
  - `ls`
  - `whoami`

**Wichtig:**
Host-Key-Prüfung erklären, aber nicht unnötig verkomplizieren.

## 3) Spätere Vertiefungsseite: `linux/ssh-schluessel`
**Ziel:** sichere Anmeldung moderner erklären.

**Inhalte:**
- öffentlicher und privater Schlüssel
- warum Schlüssel oft besser als Passwort sind
- Grundidee von `ssh-keygen`
- Schlüssel hinterlegen
- einfache Einordnung von `authorized_keys`

**Diese Seite erst später**, nicht direkt am Anfang.

## 4) Spätere Vertiefungsseite: `linux/ssh-dateiuebertragung-und-tools`
**Ziel:** angrenzende Werkzeuge getrennt halten.

**Inhalte:**
- `scp`
- `sftp`
- optionale Tools / Clients
- wann grafische Lösungen sinnvoll sind

## 5) Spätere Vertiefungsseite: `linux/ssh-sicherheit-und-admin-hinweise`
**Ziel:** Admin-Kontext getrennt von Einstieg halten.

**Inhalte:**
- warum Root-Login sensibel ist
- sichere Passwortwahl
- Schlüsselnutzung
- typische Fehlkonfigurationen
- Port, Dienst, Firewall nur grob

## Neue Lernreihenfolge
1. `ssh-grundlagen`
2. `ssh-anmeldung-und-erste-schritte`
3. später `ssh-schluessel`
4. später `ssh-dateiuebertragung-und-tools`
5. später `ssh-sicherheit-und-admin-hinweise`

So bleibt der Lernpfad logisch:
- erst Sinn und Zweck
- dann erste Benutzung
- dann moderne Authentifizierung
- dann angrenzende Werkzeuge
- dann Admin-/Sicherheitsvertiefung

## Interaktive Module statt Altmaterial
### Modul 1: SSH-Befehl zusammensetzen
Bausteine:
- `ssh`
- `anna`
- `@`
- `server01`

Ziel:
- korrekten Befehl zusammensetzen

Erwartung:
```bash
ssh anna@server01
```

### Modul 2: Was gehört wohin?
Begriffe zuordnen:
- Benutzername
- Hostname
- IP-Adresse
- Passwort
- Verbindung

Ziel:
- SSH-Verbindung sprachlich sicher verstehen

### Modul 3: Erste Sitzung verstehen
Vorgegebene Session:
```txt
$ ssh anna@192.168.0.25
anna@192.168.0.25's password:
$ whoami
anna
$ pwd
/home/anna
```

Fragen:
- Mit welchem Benutzer wurde sich angemeldet?
- Auf welchem System wurde verbunden?
- In welchem Verzeichnis befindet sich der Benutzer?

### Modul 4: Sicher oder unsicher?
Aussagen bewerten:
- „Telnet sendet Daten unverschlüsselt.“
- „SSH verschlüsselt die Verbindung.“
- „SSH ist nur für Linux-Server im Internet da.“

Ziel:
- Grundverständnis zu Sicherheit und Einsatzzweck

### Modul 5: Nach der Anmeldung sinnvoll handeln
Kleine Auswahlübung:
- `pwd`
- `ls`
- `whoami`
- `cd`

Ziel:
- erste sinnvolle Befehle nach dem Login erkennen

## Didaktische Regeln für den Relaunch
- Einstieg nicht mit Protokollgeschichte überladen
- SSH zuerst als praktisches Werkzeug erklären
- Host/Fingerprint nur so tief wie nötig
- keine Angsttexte, sondern klare Sicherheitslogik
- Passwortlogin als Grundfall erklären, Schlüssel später nachziehen
- keine Bilder für Terminal oder Befehle
- keine echte externe Verbindung im Lernmodus
- nur sichere, vorbereitete Simulationen

## Verbindung zu anderen Linux-Blöcken
SSH verbindet sich sinnvoll mit:
- Shell / Terminal
- Benutzer und Gruppen
- Dateirechte
- Besitz / `chown`
- Shellskripte

Gerade deshalb sollte SSH **erst nach den Terminal-Grundlagen** auftauchen, aber noch vor tiefen Admin-Themen.

## Merksätze für die neuen Seiten
### SSH Grundlagen
> Mit SSH kannst du dich sicher per Netzwerk auf einem anderen Rechner anmelden und dort in der Shell arbeiten.

### SSH Anmeldung und erste Schritte
> Eine SSH-Verbindung besteht aus Benutzername, Zielsystem und einer sicheren Anmeldung.

### SSH Schlüssel
> SSH-Schlüssel ermöglichen eine sichere Anmeldung, ohne jedes Mal ein Passwort eintippen zu müssen.

## Konkreter Nutzen für den Relaunch
Dieser Block ist sinnvoll, weil er:
- den Linux-Bereich praxisnah erweitert
- ohne Altbilder auskommt
- gut in Fake-Konsole und Lernmodus passt
- Fernzugriff verständlich macht, ohne sofort in Admin-Überladung zu kippen
- Linux stärker mit realen Einsatzszenarien verbindet
