# Linux – Neuaufbau Besitz, `chown` und `chgrp`

## Ziel dieses Schritts
Dieser Block baut auf **Dateirechten**, **`chmod`** und **Benutzer/Gruppen-Grundlagen** auf.

Die alten Linux-Seiten werden auch hier **nicht übernommen**, sondern nur als Quelle für Begriffe, Beispiele und Themenlogik verwendet. Der neue Aufbau soll klarer sein, weil der Altbestand Rechte, Benutzerverwaltung und administrative Systemdetails teilweise zu eng mischt.

## Warum dieser Block separat nötig ist
Im Altmaterial ist schon angelegt, dass Linux zwischen:
- Eigentümer
- Gruppe
- anderen Nutzern

unterscheidet.

Sobald diese Grundidee verstanden ist, folgt logisch die nächste Frage:
**Wer ist überhaupt Eigentümer einer Datei – und wie ändert man das?**

Genau dafür braucht der neue Aufbau einen eigenen Schritt zu:
- Besitz einer Datei
- Gruppenbesitz
- `chown`
- `chgrp`

Das soll aber **nicht** auf Anfängerseiten mit `/etc/passwd`, `useradd` oder `usermod` vermischt werden.

## Alte Quellseiten für diesen Block
Nur als Inhaltsquelle:

- `linux/linux_dateisystem/linux_dateirechte.html`
- `linux/linux_dateisystem/linux_dateisystem.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_tools.html`
- `linux/linux_benutzerverwaltung/linux_benutzerverwaltung_dateien.html`

## Was wir aus dem Altbestand mitnehmen
### Relevante Grundlagen
- Linux-Dateien haben einen Eigentümer.
- Linux-Dateien gehören auch einer Gruppe.
- `ls -l` zeigt Eigentümer und Gruppe sichtbar an.
- Benutzerkonten und Gruppen sind wichtig, damit nicht alle alles dürfen.
- `root` darf Besitz- und Systemänderungen durchführen.

### Was wir bewusst NICHT direkt übernehmen
- schwerfällige Admin-Erklärungen auf Einsteigerseiten
- direkte Arbeit an `/etc/passwd`, `/etc/group`, `/etc/shadow`
- zu frühes `useradd` / `usermod`
- unnötige Warnrhetorik statt klarer Erklärung
- alte Aufgabenblätter in ihrer bisherigen Form

## Neue Seitenzuordnung
## 1) Neue Seite: `linux/dateibesitz-verstehen`
**Ziel:** Eigentümer und Gruppe als Konzept verständlich machen.

**Inhalte:**
- Was bedeutet Besitz bei Dateien?
- Wo sieht man Eigentümer und Gruppe?
- `ls -l` lesen
- Zusammenhang mit Rechten
- typische Alltagssituationen

**Beispiele:**
- Datei gehört `anna`, Gruppe ist `team`
- Skript gehört `root`, Gruppe ist `root`
- Projektordner gehört `lina`, Gruppe ist `webteam`

**Nicht hier hinein:**
- komplexe Benutzerverwaltung
- `useradd`
- `/etc/shadow`
- rekursive Besitzänderungen im Detail

## 2) Neue Seite: `linux/chown`
**Ziel:** Besitzerwechsel sauber erklären.

**Inhalte:**
- Wofür `chown` da ist
- Syntax-Grundform
- Eigentümer ändern
- Eigentümer und Gruppe zusammen ändern
- typische Praxisfälle

**Beispielbefehle:**
```bash
sudo chown anna datei.txt
sudo chown anna:team projekt.txt
sudo chown -R anna:team projektordner
```

**Didaktik:**
- erst Bedeutung
- dann kleine Einzelbeispiele
- dann typische Fehlerquellen

## 3) Neue Seite: `linux/chgrp`
**Ziel:** Gruppenwechsel separat und klar halten.

**Inhalte:**
- Unterschied `chgrp` zu `chown`
- wann nur die Gruppe geändert wird
- typische Team-/Projektordner-Fälle

**Beispielbefehle:**
```bash
sudo chgrp webteam projektordner
sudo chgrp -R webteam freigabe
```

## 4) Spätere Vertiefungsseite: `linux/besitz-und-admin-workflows`
**Ziel:** typische Praxisfälle für Admin-Kontext bündeln.

**Inhalte:**
- Besitz nach Kopieren/Deployments korrigieren
- Webserver-/Projektordner-Beispiele
- wann `sudo` nötig ist
- warum Besitzwechsel gefährlich werden kann, wenn man ganze Verzeichnisse falsch umstellt

**Wichtig:**
Diese Seite erst **nach** den Grundlagen.

## Empfohlene Reihenfolge im Relaunch
1. `dateirechte-grundlagen`
2. `chmod`
3. `benutzer-und-gruppen`
4. `dateibesitz-verstehen`
5. `chown`
6. `chgrp`
7. später `besitz-und-admin-workflows`

So bleibt der Lernweg logisch:
- erst Rechte verstehen
- dann Benutzerklassen verstehen
- dann Besitz verstehen
- dann Besitz ändern

## Inhaltliche Trennung, die wir sauber halten müssen
### Anfängerbereich
- lesen von `ls -l`
- Eigentümer
- Gruppe
- Rechte
- einfache `chmod`-Beispiele
- einfache `chown`-/`chgrp`-Beispiele

### Fortgeschritten / Admin
- `useradd`
- `usermod`
- `/etc/passwd`
- `/etc/group`
- `/etc/shadow`
- rekursive Besitzänderungen auf Systemebene
- Service-/Webserver-Besitzkonflikte

## Interaktive Module statt alter Bilder
Für diesen Block werden **keine alten Bilder übernommen**.

Alles Relevante lässt sich besser als echte UI-Komponente oder sichere Terminal-Simulation lösen.

### Modul 1: `ls -l` Besitz lesen
Vorgegebene Ausgabe:
```txt
-rw-r--r-- 1 anna team 1200 Apr 3 10:15 notizen.txt
drwxrwxr-x 2 lina webteam 4096 Apr 3 10:20 projekt
-rwxr-x--- 1 root admin  320 Apr 3 10:25 deploy.sh
```

Fragen:
- Wem gehört die Datei?
- Welche Gruppe ist eingetragen?
- Wer darf schreiben?
- Welche Zeile ist ein Verzeichnis?

### Modul 2: Besitzerwechsel zuordnen
Aufgabe:
- „Die Datei gehört aktuell `root`, soll aber `anna` gehören.“
- „Der Ordner soll `lina` gehören und zur Gruppe `webteam` gehören.“

Antwort als Auswahl oder vorbereitete Eingabe:
- `sudo chown anna datei.txt`
- `sudo chown lina:webteam projektordner`

### Modul 3: `chown` oder `chgrp`?
Kartenübung:
- nur Gruppe ändern
- Eigentümer und Gruppe ändern
- nur Eigentümer ändern

Ziel:
- richtigen Befehl zuordnen

### Modul 4: Sicherer Admin-Fall
Beispiel:
- Webprojekt wurde als `root` kopiert
- Webserver braucht Gruppenrechte

Frage:
- Welche Besitzstruktur wäre sinnvoll?
- Warum ist blindes `chmod 777` keine gute Lösung?

## Wichtige didaktische Regeln
- `chmod` und `chown` nicht auf derselben Einstiegsseite vermischen
- zuerst immer Bedeutung, dann Befehl
- Praxisfälle klein und realistisch halten
- nicht unnötig in Server- oder Hosting-Sonderfälle abgleiten
- keine echten Systemänderungen im Lernmodus
- nur vorbereitete Eingaben / Antworten

## Merksätze für die neuen Seiten
### Dateibesitz verstehen
> Rechte sagen, **was** erlaubt ist – Eigentümer und Gruppe sagen, **für wen** diese Regeln gelten.

### chown
> Mit `chown` änderst du den Eigentümer einer Datei oder eines Ordners.

### chgrp
> Mit `chgrp` änderst du die Gruppe, zu der eine Datei oder ein Ordner gehört.

## Bildentscheidung
Für diesen Themenblock wird aktuell **kein Altbild übernommen**.

Grund:
- kein wirklich starkes Alt-Asset für Besitzwechsel gefunden
- Befehle und Struktur lassen sich als echte UI besser darstellen
- Bildübernahme würde hier kaum Mehrwert bringen

## Konkreter Nutzen für den Relaunch
Dieser Schritt ist sinnvoll, weil er:
- die Linux-Lernstrecke logisch erweitert
- die Verbindung zwischen Rechten und Benutzerverwaltung schließt
- typische Anfängerfehler sauber abfängt
- ohne Altbild-Müll auskommt
- sich gut an den vorhandenen Lernmodus und die Fake-Konsole anschließt
