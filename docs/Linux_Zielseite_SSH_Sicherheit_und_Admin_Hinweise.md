# Linux – Zielseite `ssh-sicherheit-und-admin-hinweise`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/ssh-sicherheit-und-admin-hinweise` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine spätere Vertiefungsseite zu sicherer SSH-Nutzung und typischen Admin-Hinweisen.

Die Seite soll eine ruhige, klare Einordnung geben, wie SSH-Verbindungen sinnvoll abgesichert werden und welche typischen Punkte in der Praxis wichtig sind.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- SSH / Fernzugriff

Sie kommt sinnvoll **nach**:
- `linux/ssh-grundlagen`
- `linux/ssh-anmeldung-und-erste-schritte`
- `linux/ssh-schluessel`
- optional `linux/ssh-dateiuebertragung-und-tools`

Sie ist **keine Einsteiger-Kernseite**, sondern eine spätere Vertiefung.

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- warum sichere SSH-Nutzung mehr ist als nur „es funktioniert“
- warum Passwörter, Schlüssel und Zielsystem-Vertrauen wichtig sind
- warum Root-Zugriffe und weitreichende Rechte mit Bedacht eingesetzt werden
- welche Grundprinzipien in Admin-Kontexten sinnvoll sind

Die Seite soll **nicht** zu einer vollständigen Hardening-Checkliste oder Profi-Anleitung werden.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- vollständige SSH-Server-Härtung
- Firewall- und Netzwerkdesign im Detail
- Unternehmensrichtlinien
- Portweiterleitungen
- komplexe Policy- oder Compliance-Themen
- kryptografische Tiefenerklärung
- vollständige `sshd_config`-Referenz

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_ssh.html`
- indirekt angrenzende Admin-/Benutzerkontexte aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- Sicherheit ruhig und professionell einordnen
- keine Angstsprache verwenden
- typische Fehler und gute Grundmuster erklären
- klar zwischen Einsteigerwissen und Admin-Vertiefung unterscheiden
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, worum es auf dieser Vertiefungsseite geht.

### Inhalt
- Titel: `SSH sicher nutzen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> SSH ist für sicheren Fernzugriff gedacht. Damit das auch praktisch stimmt, kommt es auf einen sauberen Umgang mit Zugängen, Schlüsseln und Zielsystemen an.

## 2) Abschnitt: Sicherheit beginnt vor dem ersten Login
### Ziel
Die Grundhaltung erklären.

### Kernpunkte
- richtige Zielsysteme verwenden
- Benutzernamen und Zugänge bewusst einsetzen
- nicht blind auf unbekannte Ziele verbinden

## 3) Abschnitt: Passwort oder Schlüssel?
### Ziel
Die beiden Grundwege einordnen.

### Inhalt
- Passwortanmeldung ist einfach, aber nicht immer ideal
- SSH-Schlüssel sind oft bequemer und robuster
- die Entscheidung hängt vom Szenario ab, aber Schlüssel sind in vielen Umgebungen Standard

## 4) Abschnitt: Zielsysteme wiedererkennen
### Ziel
Host-Trust einfach erklären.

### Inhalt
- bei der ersten Verbindung merkt sich dein System das Ziel
- spätere Warnungen sollte man nicht blind ignorieren
- für Einsteiger reicht die Grundidee: Verbindungswarnungen haben einen Zweck

## 5) Abschnitt: Root und weitreichende Rechte
### Ziel
Root-Zugriffe sachlich einordnen.

### Inhalt
- Root hat sehr weitgehende Möglichkeiten
- für normale Arbeit ist ein normaler Benutzer oft sinnvoller
- administrative Schritte sollten bewusst und nicht gedankenlos erfolgen

### Wichtig
Keine Paniktexte, sondern sachliche Verantwortung.

## 6) Abschnitt: Typische gute Grundmuster
### Ziel
Positive Handlungslogik vermitteln.

### Beispiele
- normale Benutzerkonten bevorzugen
- SSH-Schlüssel sinnvoll nutzen
- Zugänge ordentlich verwalten
- nicht unnötig viele Systeme und Schlüssel durcheinanderbringen

## 7) Abschnitt: Typische Fehler
### Ziel
Probleme früh erkennbar machen.

### Beispiele
- privaten Schlüssel weitergeben
- Warnhinweise ignorieren
- Root-Login als Standard denken
- Passwörter oder Verbindungsdaten unordentlich handhaben
- mehrere Zielsysteme nicht sauber auseinanderhalten

## 8) Lernmodus / interaktive Module
### Modul A: Gute Idee oder schlechte Idee?
Aussagen bewerten:
- „Ich teile meinen privaten Schlüssel.“
- „Ich prüfe, ob das Zielsystem stimmt.“
- „Ich nutze immer direkt Root, obwohl es nicht nötig ist.“

### Modul B: Passwort oder Schlüssel?
Situationen grob einordnen:
- einmaliger Testzugang
- wiederkehrender Admin-Zugriff
- strukturierte Arbeitsumgebung

### Modul C: Warnhinweis ernst nehmen?
Kurze Situationen bewerten:
- erste Verbindung
- unerwartete Zielwarnung

### Modul D: Benutzer oder Root?
Mini-Szenarien zuordnen:
- normale Alltagsarbeit
- spätere Admin-Aufgabe

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Sichere SSH-Nutzung bedeutet nicht nur verbinden zu können, sondern Zugänge, Schlüssel und Zielsysteme bewusst und sauber zu verwalten.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Später kannst du diese Sicherheitslogik mit Dateiübertragung, Admin-Workflows und sauberer Rechteverwaltung kombinieren.“

## Tonalität und Schreibregeln
Die Seite soll:
- ruhig und professionell formuliert sein
- keine Angstkommunikation benutzen
- Grundprinzipien erklären statt Regelwände aufzubauen
- Einsteiger nicht mit Hardening-Details erschlagen

## Visuelle Regeln
- kompakte Prinzipien-Karten
- kleine Entscheidungs-/Sicherheits-Komponenten
- keine Tabellenwüsten
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Sicherheits-Prinzipien-Komponente:
- Zielsystem prüfen
- Zugangsmethode wählen
- Schlüssel schützen
- Rechte bewusst einsetzen

### Warum
- Prinzipien lassen sich als UI klarer vermitteln als mit Altgrafiken
- gute Wiederverwendbarkeit
- Altmaterial bietet hier keinen visuellen Mehrwert

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- Sicherheit nicht mit Panik verwechseln
- Root-Thema nicht dramatisieren, aber klar einordnen
- Warnhinweise nicht technisch überladen erklären
- keine unvollständigen Pseudo-Admin-Anleitungen geben

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/ssh-schluessel`
- optional `linux/ssh-dateiuebertragung-und-tools`

### Angrenzend
- spätere Admin-/Server-Themen
- Besitz- und Rechte-Workflows

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 4–6 Content-Abschnitte
- 1 Sicherheits-Prinzipien-Komponente
- 3–4 Lernmodus-Elemente
- 1–2 kleine Beispiel-/Entscheidungsblöcke
- 1 Merksatz-Block
- 1 Ausblick auf spätere Vertiefung

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den SSH-Bereich fachlich sauber abrundet
- ohne Altbilder auskommt
- Sicherheit verständlich macht, ohne Einsteiger zu verlieren
- eine klare Brücke zu späteren Admin-Themen schafft
