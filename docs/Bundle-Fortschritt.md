# Bundle-Fortschritt

Dieses Bundle ist als kumulativer Austauschstand gedacht. Immer nur die **neueste ZIP** ist relevant.

Aktuell enthalten:

- Routing- und Themenpfad-Bereinigung
- Entfernen von Lernmodus/Präsentationsmodus aus den Hauptseiten im Austauschstand
- neuer Wissensseiten-Standard v1
- neue einspaltige Wissens- und Aufgabenseiten
- überarbeitete Inhaltsseiten in Mathematik, Informatik, Linux, Web Development und Elektrotechnik
- universelle Linux-Lernshell mit mehreren Szenarien
- visuell vereinheitlichte Karten, Brotkrumen, Überblicksblöcke und Endbereiche
- verbesserte Lesefläche für Bilder, Tabellen, Codeblöcke und Widgets

- Neuer Block: weitere Inhalte auf Frontmatter-getriebene Praxis-/Fehler-/Merksatz-Struktur umgestellt und Linux-Lernshell um Pipes, tr und bessere Textarbeit erweitert.


## Großer Zusatzblock
- fehlende Praxis-/Fehler-/Merksatz-Metadaten an verbliebenen Wissensseiten ergänzt
- fehlende Hinweis-/Selbstkontroll-Metadaten an verbliebenen Aufgaben ergänzt
- Linux-Lernshell erweitert um seq, date, env, sleep, tee und comm
- YAML-Kanten mit Doppelpunkten in Beschreibungen bereinigt

- restliche fehlende Aufgaben-Tags sowie Hinweis-/Selbstkontrollblöcke ergänzt


## Zusatzblock April 12, 2026 – Inhaltsvertiefung

- mehrere bislang eher kurze Wissensseiten wurden inhaltlich deutlich verbreitert
- mehrere Aufgaben erhielten zusätzliche Teilaufgaben und genauere Arbeitsaufträge
- Fokus in diesem Schritt: ruhigere, ausführlichere Lernbarkeit statt nur Metadaten-Vollständigkeit


## Neuer Großblock

- mehrere bislang kürzere Wissensseiten deutlich vertieft
- mehrere Aufgaben mit stärkerer Arbeitslogik und Selbstkontrolle nachgezogen
- Linux-Lernshell erweitert um `awk`, `column`, `ps` und `uname -a`
- Shell-Szenarien um tabellarische und nummerierte Textarbeit ergänzt

## Update – Vollständiger Angleichungspass

Dieser Zwischenstand enthält einen weiteren breiten Angleichungspass über kurze Wissensseiten und kurze Aufgaben. Ziel war nicht nur Metadaten-Vollständigkeit, sondern auch eine inhaltlich gleichmäßigere Lerntiefe.

Zusätzlich wurde die Linux-Lernshell erneut verbreitert:

- `grep -i`
- `paste`
- mehr vorgeschlagene Befehle in mehreren Szenarien

Der Sammelstand bleibt kumulativ. Es zählt weiterhin nur die neueste ZIP.


## Neuer Großblock – Seitenstandard jetzt template-getrieben

In diesem Schritt wurde der Wissensseiten-/Aufgabenstandard nicht nur über Inhalte, sondern direkt über die Kernseiten selbst stärker vereinheitlicht.

Neu bzw. deutlich überarbeitet:

- `src/pages/wissen/[...slug].astro`
  - rendert jetzt den Überblicksblock direkt aus `learningGoals`
  - rendert Praxisideen, typische Fehler und Merksätze als feste Abschlussstruktur
  - bindet Linux-Themen bei passendem `topicPath` automatisch an die Lernshell an
  - zeigt passende Aufgaben und weitere Wissensseiten weiter unten im gleichen ruhigen Seitenfluss

- `src/pages/aufgaben/[...slug].astro`
  - rendert Hinweise und Selbstkontrolle jetzt über eine wiederverwendbare Komponente
  - bleibt einspaltig und ohne Sidebar
  - gleiche Navigations- und Kartenlogik wie Wissensseiten

- neue Komponenten:
  - `SupportChecklist.astro`
  - `ContentMediaFrame.astro`

- `base.css` erweitert um globale, ruhigere Standards für:
  - Lernkarten / Beispielkarten
  - Bilder und Figuren
  - Codeblöcke und Inline-Code
  - Tabellen
  - Blockquotes

Ziel dieses Blocks: Alle bereits angereicherten Inhalte im Bundle wirken dadurch deutlich einheitlicher, auch wenn einzelne Markdown-Dateien intern noch unterschiedliche Schwerpunkte setzen.

## Neuer großer Durchgang

- Linux-Lernshell erneut erweitert: `grep -v`, `sort -u`, `uniq -d`, `wc -l/-w/-m`, `cut -c` und breitere Hilfetexte.
- Weitere kürzere Wissensseiten und Aufgaben mit zusätzlichen Transfer- und Einordnungsabschnitten verbreitert.
- Bundle-Stand erneut als vollständiges Austauschpaket gezippt.

- Neuer Sammelschritt: Linux-Shell breiter gemacht (grep -v/-c, sort -r/-u, uniq -c/-d, rmdir, mkdir -p, find -type) und Bundle-Inhaltsinventar ergänzt.

- Weiterer breiter Normalisierungspass: zusätzliche Shell-Befehle (df, du, printenv, readlink, ln -s, rev, fmt), viele kurze Aufgaben um Transfer-/Begründungsaufgaben ergänzt und mehrere kürzere Wissensseiten um Erkennungs-/Mini-Check-Blöcke verbreitert.


## Neuer breiter Inhalts- und Reflexionspass

In diesem Stand wurden Wissensseiten und Aufgaben flächig um zwei ruhige Standardblöcke ergänzt:

- **Woran du das Thema erkennst** auf Wissensseiten
- **Mini-Check für dich** auf Wissensseiten
- **Transfer und Einordnung** auf Aufgaben
- **Kurzreflexion** auf Aufgaben

Zusätzlich wurde die Linux-Lernshell in der Referenz und Hilfe weiter beruhigt und erweitert.


## Neuer Großblock – Shell und QA weiter verbreitert

- Linux-Lernshell erneut verbreitert um `hostname`, `uptime`, `cal`, `cmp`, `sha256sum` und `md5sum`.
- Szenarien um zusätzliche Startbefehle und Vergleichs-/Prüfsummenbeispiele ergänzt.
- Dokumentation im Bundle erweitert um einen eigenen Shell-Funktionsstand und eine manuelle QA-Checkliste.

- Breiter Vertiefungspass über mehrere kürzere Wissensseiten und Aufgaben; Fokus auf ruhigere Anwendungs- und Begründungsblöcke.


## Weiterer Shell-Ausbau

- Linux-Lernshell erweitert um `printenv`, `hostname`, `uptime`, `df`, `du`, `diff`, `cmp`, `md5sum`, `sha256sum`, `fold`, `expand` und breitere `paste`-Nutzung.
- Szenarien um passendere Startbefehle und zusätzliche Vergleichs-/Formatierungsbeispiele ergänzt.


## Neuer Block: Themenpfad-nahe Empfehlungen

- `wissen/[...slug].astro` und `aufgaben/[...slug].astro` filtern verwandte Inhalte jetzt stärker über echten Themenpfad-Fit.
- Kartenmetadaten zeigen ruhigere Themenlabels.
- Dadurch werden Abschlussbereiche fachlich enger und weniger zufällig.


## Neuer Block: Themenpfad-Korrektur und ruhigere Empfehlungen

- doppelte Themenpfade im Bundle bereinigt
- Meta-Chips und Kartenlabels ruhiger themenbezogen
- Empfehlungsbereiche auf Wissen/Aufgaben enger am gleichen Themenpfad

- Neuer bundelweiter Standardpass: fehlende sichtbare Wissensseiten-/Aufgabenabschnitte automatisch ergänzt und QA-Zählung aktualisiert.
