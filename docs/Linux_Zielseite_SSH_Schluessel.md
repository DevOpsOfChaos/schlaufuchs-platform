# Linux – Zielseite `ssh-schluessel`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/ssh-schluessel` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Vertiefungsseite zu SSH-Schlüsseln.

Die Seite soll erklären, warum SSH-Schlüssel praktisch sind, wie das Prinzip von öffentlichem und privatem Schlüssel auf Einsteiger-Niveau funktioniert und warum diese Methode oft bequemer und sicherer als reine Passwortanmeldung ist.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- SSH / Fernzugriff

Sie kommt sinnvoll **nach**:
- `linux/ssh-grundlagen`
- `linux/ssh-anmeldung-und-erste-schritte`

Und **vor**:
- spätere Seiten zu Dateiübertragung
- spätere Sicherheits- und Admin-Hinweise

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was ein privater und ein öffentlicher Schlüssel ist
- warum SSH-Schlüssel eine gute Anmeldemethode sind
- dass der private Schlüssel geheim bleibt
- dass der öffentliche Schlüssel auf dem Zielsystem hinterlegt wird
- wie das Prinzip grob mit `ssh-keygen` und `authorized_keys` zusammenhängt

Die Seite soll **nicht** als tiefes Kryptografie- oder Admin-Tutorial gebaut werden.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- kryptografische Details
- komplette Key-Härtung und Policy-Fragen
- Agent-Forwarding
- Hardware-Keys als Hauptfokus
- tiefe `~/.ssh/config`-Workflows
- Unternehmens- oder Server-Härtung im Detail

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_ssh.html`
- indirekt angrenzend: SSH-Kontext aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- SSH-Schlüssel verständlich entmystifizieren
- klar zwischen öffentlichem und privatem Schlüssel unterscheiden
- mit kleinen, echten Befehlsbeispielen arbeiten
- nur die Grundidee zeigen, keine Admin-Wand
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, warum SSH-Schlüssel wichtig sind.

### Inhalt
- Titel: `SSH-Schlüssel verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> SSH-Schlüssel ermöglichen eine sichere Anmeldung auf entfernten Systemen, ohne dass du jedes Mal ein Passwort eintippen musst.

## 2) Abschnitt: Warum überhaupt SSH-Schlüssel?
### Ziel
Den Nutzen vor der Technik erklären.

### Kernpunkte
- bequemer als ständige Passwort-Eingabe
- oft sicherer als reine Passwortanmeldung
- in vielen Linux- und Serverumgebungen üblich

## 3) Abschnitt: Öffentlich und privat – die Grundidee
### Ziel
Das Schlüsselprinzip einfach machen.

### Inhalt
- privater Schlüssel bleibt auf deinem eigenen System
- öffentlicher Schlüssel darf auf dem Zielsystem hinterlegt werden
- zusammen ermöglichen sie die Anmeldung

### Wichtiger Satz
Der private Schlüssel bleibt geheim – der öffentliche Schlüssel wird verteilt.

## 4) Abschnitt: Schlüssel erzeugen grob einordnen
### Ziel
`ssh-keygen` auf Einsteiger-Niveau einführen.

### Beispiel
```bash
ssh-keygen
```

### Erklärung
- damit kann ein Schlüsselpaar erzeugt werden
- danach gibt es einen privaten und einen öffentlichen Schlüssel
- für den Einstieg reicht die Grundidee, nicht jeder Einzelschritt

## 5) Abschnitt: Öffentlichen Schlüssel hinterlegen
### Ziel
Den nächsten logischen Schritt verständlich machen.

### Inhalt
- der öffentliche Schlüssel wird auf dem Zielsystem hinterlegt
- dort kann er z. B. in `authorized_keys` landen
- danach kann das System den passenden privaten Schlüssel erkennen

### Wichtig
Nur Grundidee, keine tiefe Dateiverwaltung.

## 6) Abschnitt: Was bleibt geheim?
### Ziel
Einen der wichtigsten Punkte klar verankern.

### Inhalt
- der private Schlüssel darf nicht weitergegeben werden
- der öffentliche Schlüssel ist dafür gedacht, verteilt zu werden
- diese Trennung ist zentral

## 7) Abschnitt: Typische Praxisfälle
### Ziel
Die Methode alltagsnah machen.

### Praxisfall A – häufiger Zugriff auf einen Server
Wiederkehrende Anmeldung ohne ständiges Passwort.

### Praxisfall B – Raspberry Pi oder Heimserver
Sicherer und bequemer Zugriff im Netzwerk.

### Praxisfall C – eigene Arbeitsumgebung strukturieren
SSH-Zugang sauber und reproduzierbar nutzen.

## 8) Abschnitt: Häufige Anfängerfehler
### Ziel
Missverständnisse früh auffangen.

### Beispiele
- öffentlichen und privaten Schlüssel verwechseln
- privaten Schlüssel weitergeben wollen
- denken, dass beide Schlüssel auf dasselbe Ziel kopiert werden müssen
- erwarten, dass man ohne vorbereitete Einrichtung sofort ohne Passwort einloggen kann

## 9) Lernmodus / interaktive Module
### Modul A: Öffentlich oder privat?
Zuordnungsübung:
- bleibt geheim
- darf auf Zielsystem
- gehört auf den eigenen Rechner

### Modul B: Reihenfolge verstehen
Ablaufkarten ordnen:
- Schlüsselpaar erzeugen
- öffentlichen Schlüssel hinterlegen
- Verbindung nutzen

### Modul C: Was wäre ein Fehler?
Aussagen bewerten:
- „Den privaten Schlüssel teile ich mit anderen.“
- „Der öffentliche Schlüssel darf auf dem Zielsystem liegen.“
- „SSH-Schlüssel ersetzen nicht die SSH-Verbindung, sondern die Anmeldemethode.“

### Modul D: Begriffspaare zuordnen
- `ssh-keygen`
- öffentlicher Schlüssel
- privater Schlüssel
- `authorized_keys`

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Bei SSH-Schlüsseln bleibt der private Schlüssel geheim, während der öffentliche Schlüssel auf dem Zielsystem hinterlegt wird.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Später kannst du lernen, wie du mit SSH auch Dateien überträgst oder deine Verbindung weiter absicherst.“

## Tonalität und Schreibregeln
Die Seite soll:
- ruhig und entmystifizierend formuliert sein
- keine Kryptografie-Vorlesung werden
- die Grundidee klar halten
- Einsteiger nicht mit Konfigurationsdetails überladen

## Visuelle Regeln
- kleine Beziehungs-/Flow-Komponente für öffentlich vs. privat
- kompakte Beispielblöcke
- keine überbreiten Terminalfenster
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Schlüssel-Komponente:
- eigener Rechner
- privater Schlüssel
- öffentlicher Schlüssel
- Zielsystem mit `authorized_keys`

### Warum
- die Beziehungslogik ist als UI viel verständlicher
- hohe Wiederverwendbarkeit für spätere SSH-Seiten
- Altmaterial hat hier keinen starken visuellen Wert

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- privat und öffentlich nicht vertauschen
- `authorized_keys` nur grob erklären
- Schlüsselerzeugung nicht zu tief ausrollen
- Sicherheit klar, aber ohne Angstsprache erklären

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/ssh-anmeldung-und-erste-schritte`

### Später angrenzend
- `linux/ssh-dateiuebertragung-und-tools`
- `linux/ssh-sicherheit-und-admin-hinweise`

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Flow-Komponente für Schlüsselbeziehungen
- 3–4 Lernmodus-Elemente
- 1–2 kurze Befehlsbeispiele
- 1 Merksatz-Block
- 1 Übergang zu späteren Vertiefungen

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den SSH-Bereich sinnvoll abrundet
- ohne Altbilder auskommt
- eine wichtige moderne Anmeldemethode verständlich macht
- spätere Sicherheits- und Toolseiten sauber vorbereitet
