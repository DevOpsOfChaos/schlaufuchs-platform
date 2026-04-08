# Übergabe für den nächsten Chat

## Kurzkontext
Dieses Projekt ist kein Astro-Startprojekt mehr, sondern ein laufender Neuaufbau einer ruhigen, modernen und professionellen Wissens- und Aufgabenplattform.

Der aktuelle Fokus liegt **nicht** mehr primär auf Grundstruktur, sondern auf:
- systematischem Inhaltsausbau,
- Auffrischung alter Aufgaben in neuer Form,
- sauberer PDF-/Drucklinie für Aufgaben,
- weiterer Verdichtung der Fachbereiche.

---

## Produktkern
Die Plattform arbeitet konsequent mit genau diesen fünf Hauptfächern:
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

Wichtige feste Regeln:
- `Daten & Signale` ist **kein** eigener Hauptfachbereich, sondern Teil von Elektrotechnik.
- `HTML/CSS` ist **kein** eigener Hauptfachbereich, sondern Teil von Web Development.
- Aufgaben sind **zentral** und nicht nur Zusatz.
- Alte HTML-Seiten werden **nicht 1:1 übernommen**.
- Alte Aufgaben sollen **erhalten bleiben**, aber fachlich und strukturell **neu aufgefrischt** werden.
- Bilder stark reduzieren und nur gezielt einsetzen.
- Keine doppelte Fachlogik aufbauen.
- Bei Build-/CI-Problemen zuerst alte Routen und falsche Importpfade prüfen.
- In Texten und Übergaben keine unnötigen Verweise auf private interne Strukturen.

---

## Was bereits steht

### Plattform und Produktoberfläche
Bereits modernisiert oder aufgebaut:
- Startseite
- Topbar / Navigation
- Footer
- Fachübersicht
- dynamische Fachdetailseiten
- Wissensseiten
- Aufgabenseiten
- globaler Aufgaben-Hub
- Suche
- News-Hub und News-Detailseiten
- Inhaltsstand-Seite
- Kontakt / Impressum / Datenschutz
- eigene 404-Seite
- Legacy-Weiterleitungen für alte Einstiege
- neue README

### Modi und Nutzung
Bereits vorhanden:
- Lernmodus
- Präsentationsmodus
- ruhige Standardansicht als Grundmodus
- Light-Mode-Startverhalten verbessert

### Technische Reife
Bereits vorhanden:
- Astro Content Collections für `subjects`, `articles`, `exercises`, `news`
- zentrale Fachlogik
- zentrale Content-Abfragen
- Inhaltsinventur / Priorisierung
- SEO-/Social-Metadaten
- `robots.txt`
- `sitemap.xml`
- GitHub-Actions-Workflow für Build + Pages-Deployment

### PDF-/Drucklinie für Aufgaben
Wichtig und neu:
- Jede Aufgabenseite hat jetzt einen direkten Weg in eine ruhige Druckansicht.
- Druckrouten liegen unter `/druck/aufgaben/...`.
- Diese Druckansichten sind ausdrücklich für **„Als PDF speichern / drucken“** vorbereitet.
- Das ist erst die Grundlage, aber die Richtung ist verbindlich: **PDF-Download für Aufgaben bleibt zentrale Produktfunktion**.

---

## Was inhaltlich bereits passiert ist
Es wurden mehrere echte Content-Wellen eingezogen.

Bereits aufgebaute oder ergänzte Themenblöcke umfassen unter anderem:

### Mathematik
- lineare Funktionen
- quadratische Funktionen
- Differentialrechnung
- lineare Gleichungssysteme
- passende Grundaufgaben dazu

### Informatik
- Kontrollstrukturen
- Eingabe und Ausgabe
- Variablen und Datentypen
- Programmstruktur
- aufgefrischte Bestandsaufgaben rund um C / Grundlogik

### Elektrotechnik
- Ohmsches Gesetz
- Logikgatter
- Dioden
- aufgefrischte Arduino-Basisaufgaben
- vorhandene ältere Grundlagen wie Computer / CPU / Netzwerkthemen wurden bereits eingebunden bzw. vorbereitet

### Linux
- Shell und Prompt
- chmod
- Benutzer und Gruppen
- SSH
- Shellskripte
- passende Grundaufgaben dazu

### Web Development
- HTML-Grundlagen
- HTML-Semantik
- Links, Bilder und Pfade
- CSS-Selektoren
- Box-Modell
- passende Grundaufgaben dazu

### Alte Aufgaben
Wichtig:
Mehrere frühere Aufgaben wurden bereits **neu formuliert und modernisiert**, statt entfernt zu werden.
Diese Richtung soll ausdrücklich fortgeführt werden.

---

## Wichtiges technisches Detail aus dem letzten Arbeitsblock
Es gab einen echten Schema-Fund:
- Das Exercises-Schema hatte zunächst kein `section`, obwohl neue Aufgaben-/Detaillogik dieses Feld bereits nutzte.
- Das wurde behoben.
- Die Aufgabenseiten sind jetzt gegen fehlendes `section` zusätzlich robuster abgesichert.

Wenn später wieder Content-Probleme auftauchen, zuerst an Schema-/Frontmatter-Konsistenz denken.

---

## Aktueller sinnvoller Fokus
Der nächste Chat soll den Schwerpunkt klar auf **Inhalt** legen.

Empfohlene Prioritäten:
1. Weitere Wissensseiten pro Fachbereich ergänzen.
2. Weitere Aufgaben ergänzen.
3. Alte Aufgaben systematisch aufgreifen und modernisieren.
4. Themenblöcke innerhalb der Fächer weiter verdichten.
5. PDF-/Drucklinie für Aufgaben später weiter ausbauen, aber nicht auf Kosten des Inhaltsausbaus.

Wichtig:
- Nicht wieder in langen Oberflächen-Schleifen hängen bleiben.
- Strukturarbeit nur dann priorisieren, wenn sie direkt dem Inhaltsausbau oder der PDF-Linie hilft.

---

## Arbeitsstil für den nächsten Chat
Der Nutzer hat ausdrücklich gesagt:
- nicht dauernd stoppen,
- in sinnvollen größeren Blöcken weiterarbeiten,
- möglichst wenig Chat-Müll erzeugen,
- Updates sehr kompakt halten,
- im Normalfall **ein Satz reicht**, außer der Nutzer fragt nach mehr.

Also:
- selbstständig weiterarbeiten,
- repo-nah arbeiten,
- lieber größere sinnvolle Fortschritte machen,
- nur echte Probleme kurz benennen.

---

## Konkrete Empfehlung für den nächsten Start
Sinnvoller nächster Block:
- pro Fach mindestens einen weiteren inhaltlich sauberen Themenblock ergänzen **oder**
- gezielt alte Bestandsaufgaben in neuer Struktur auffrischen,
- dabei Wissen und Aufgaben weiterhin parallel aufbauen.

Wenn zwischen neuer Wissensseite und aufgefrischter Altaufgabe gewählt werden muss, ist aktuell oft die **aufgefrischte Altaufgabe** besonders wertvoll, weil sie direkt das alte Nutzungskonzept respektiert.

---

## Letzter Stand vor dieser Übergabe
Vor dieser Übergabe wurden zuletzt große Inhaltswellen und die Druckansicht für Aufgaben direkt auf `main` weitergebaut.

Der nächste Chat soll daher **nicht bei null anfangen**, sondern direkt mit dem nächsten Inhaltsblock weitermachen.
