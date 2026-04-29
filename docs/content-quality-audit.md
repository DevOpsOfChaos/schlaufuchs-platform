# Content-Qualitätsaudit

Diese Datei beschreibt den Audit-Modus für die Schlaufuchs-Inhalte. Die Arbeitsdatei liegt in `docs/content-quality-audit.csv`.

## Arbeitsregel ab v151/v152

Die Audit-Datei wird wie normale Repo-Dateien über kumulative Austausch-ZIPs gepflegt. Der Nutzer soll dafür keinen langen Build und keine komplette Qualitätsprüfung ausführen müssen.

Wichtig:

- Neue Content-Masse ist gestoppt, bis der Audit-Startbestand steht.
- ZIPs bleiben kumulativ für die von mir gelieferten Audit-Dateien.
- `npm run quality` ist nur eine spätere Kontrollprüfung, nicht Teil jedes Audit-Schritts.
- `npm run audit:content` ist nur ein optionales Hilfswerkzeug für schnelle lokale Inventarisierung. Es ist kein Pflichtschritt für den Nutzer.

## Zweck der CSV

Die CSV ist ein filterbarer Arbeitsstand für alle Seiten und Themen. Sie soll schrittweise erfassen:

- ob eine Seite geprüft wurde,
- ob die Qualität passt,
- ob Bilder, Aufgaben und Lösungen vorhanden und sinnvoll sind,
- ob Einordnung, Frontmatter, Umlaute, TopicPath und Didaktik stimmen,
- welche nächste Aktion sinnvoll ist.

## Statuswerte

`checked`:

- `no`
- `partial`
- `yes`

`quality_status`:

- `open`
- `ok`
- `improve`
- `critical`

`image_quality`:

- `none`
- `open`
- `ok`
- `improve`
- `critical`
- `not_needed`

`priority`:

- `low`
- `medium`
- `high`
- `urgent`

`next_action`:

- `none`
- `review`
- `add_image`
- `improve_text`
- `split_topic`
- `add_exercise`
- `add_solution`
- `fix_encoding`
- `fix_frontmatter`
- `merge_duplicate`
- `verify_navigation`

## Manuelle Audit-Regel

Automatische Werte sind nur Startwerte. Eine Seite gilt erst als geprüft, wenn sie wirklich gelesen wurde. Erst dann wird `checked` auf `partial` oder `yes` gesetzt.

## Qualitätsblock-Regel

Künftige Blöcke sollen klein bleiben:

- ca. 10–30 Seiten prüfen,
- Audit-Zeilen aktualisieren,
- nur gezielte Korrekturen vornehmen,
- keine neuen Massenpakete ohne Audit-Bezug.

## Fortschritt v153

Erster echter Inventarblock in der CSV:

- 54 Elektrotechnik-Überblicksseiten eingetragen.
- Schwerpunkt: ADC, digitale Eingänge/Ausgänge, Stromversorgung, Schutz, Bauteile und Fehlersuche.
- Bildspalten wurden dort vorbelegt, wo ein bekannter Overview-SVG-Pfad aus den v146-v150-Bildpaketen zugeordnet werden konnte.
- Aufgaben und Lösungen bleiben in diesem Block bewusst auf `open`, bis sie sauber gegen `src/content/exercises` und `src/content/solutions` gemappt werden.
- `checked` bleibt `no`: Die Seiten sind inventarisiert, aber noch nicht vollständig fachlich gelesen.

Nächster Schritt: weitere Fachbereiche/Restpfade blockweise ergänzen, danach je Block wirklich prüfen und Statuswerte von `open` auf `ok`, `improve` oder `critical` setzen.

## Fortschritt v154

- Dieselbe Audit-CSV wird weitergeführt; es wurde keine neue Teil-CSV begonnen.
- Die CSV enthält jetzt einen erweiterten Inventarblock mit Überblicksseiten aus den bekannten Bild-/Themenbeständen v148 bis v150.
- Ziel bleibt: erst ab sehr großen Tabellenständen eine weitere CSV beginnen, nicht bei kleinen Blöcken. Richtwert: mindestens 1000 Einträge pro CSV.
- Statuswerte bleiben bewusst offen, solange die Seiten nicht fachlich vollständig geprüft wurden.

## Fortschritt v155

Dritter Inventarblock:

- CSV weitergeführt, keine neue Datei begonnen.
- Zeilen ohne Header: 266
- Neu ergänzt: 59
- Schwerpunkt: ältere/grundlegende Artikeldateien sowie erste Aufgaben- und Lösungszeilen.
- Status bleibt Inventar, keine abschließende fachliche Qualitätsbewertung.


## Fortschritt v156

Vierter Inventarblock:

- dieselbe CSV weitergeführt,
- 155 zusätzliche Illustrations-/Assetzeilen aufgenommen,
- `content_type = illustration` für diese Zeilen verwendet,
- keine neue CSV begonnen,
- keine neuen Lernseiten erzeugt.

Diese Asset-Zeilen sind Hilfszeilen für spätere Seitenzuordnung und Bildqualitätsprüfung. Sie ersetzen nicht die fachliche Prüfung der Artikelseiten, Aufgaben oder Lösungen.

## Fortschritt v157

Fünfter Inventarblock:

- dieselbe CSV weitergeführt,
- Overview-SVGs aus `public/images/overviews/v146` bis `public/images/overviews/v150` ergänzt,
- keine neue CSV begonnen,
- keine neuen Lernseiten erzeugt,
- aktuelle CSV-Zeilen ohne Header: 664.

Diese Bildzeilen sind Hilfszeilen für die spätere Bild- und Zuordnungsprüfung. Sie ersetzen nicht die fachliche Prüfung der Seiten, Aufgaben und Lösungen.



## Fortschritt v158

Sechster Inventarblock:

- dieselbe CSV weitergeführt,
- 56 zusätzliche Audit-Zeilen aufgenommen,
- aktuelle CSV-Zeilen ohne Header: 720,
- keine neue CSV begonnen,
- keine neuen Lernseiten erzeugt.

Neu aufgenommen wurden eine verifizierte Informatik-Aufgabe mit passender Lösung, Fachbereichs-Contentdateien, wichtige Seiten-/Routen- und Strukturdateien sowie ein begrenzter Satz älterer Illustrationen. Diese Einträge sind weiterhin Inventarstatus: `checked = no`, `quality_status = open`.


## Fortschritt v159

Block 7 führt dieselbe CSV weiter. Neu aufgenommen wurden drei verifizierte Aufgabe/Lösung-Paarungen aus Mathematik, Linux und Web Development sowie weitere bekannte SVG-Illustrationen. Die Tabelle umfasst nun 785 Einträge ohne Header. Statuswerte bleiben überwiegend offen, weil dies weiterhin Inventarisierung und noch keine abgeschlossene Qualitätsprüfung ist.


## Fortschritt v160

Die Audit-CSV wurde in derselben Datei weitergeführt. Block v160 ergänzt ältere, flache Content-Bestände aus frühen Artikel-/Aufgaben-Wellen und zentrale technische Projektdateien. Die Einträge bleiben bewusst offen (`checked = no`, `quality_status = open`), weil sie inventarisiert, aber noch nicht fachlich abschließend geprüft wurden.

## Fortschritt v161 / Block 9

Dieser Block korrigiert den Arbeitsmodus: größere, stärker nutzbare Audit-Schritte statt vieler kleiner Pfad-Nachträge.

Änderungen:
- dieselbe CSV weitergeführt, keine neue Datei
- 7 fehlende Elektrotechnik-Feinstrukturartikel aus der aktuellen GitHub-Compare-Liste ergänzt
- automatisches Mapping über alle vorhandenen CSV-Zeilen verbessert:
  - Artikel ↔ mögliche Aufgaben
  - Aufgaben ↔ vorhandene oder fehlende Lösungen
  - Lösung ↔ vorhandene Aufgabe
  - Artikel ↔ passende SVG-Übersichtsbilder
- `no_duplicates` nach CSV-Prüfung auf `yes` gesetzt
- fehlende Lösungen bei Aufgaben klarer als `next_action=add_solution` markiert

Wichtig: `checked=no` bleibt korrekt. Dieser Block ist Inventarisierung und strukturelles Mapping, keine abgeschlossene fachliche Qualitätsprüfung.

## Fortschritt v162

Block 10 ergänzt 32 weitere sichere Content-Zeilen aus geprüften GitHub-Commitlisten früher Fundamentals-Waves. Zusätzlich wurde das Mapping nach `subject` und `topic_path` erneut über die vorhandenen Artikel- und Aufgabenzeilen gezogen.

Wichtig: Die neuen Zeilen sind inventarisiert, aber nicht fachlich abgeschlossen geprüft. Deshalb bleiben `checked = no` und `quality_status = open` erhalten.


## Fortschritt v163 / Block 11

Block 11 arbeitet effizienter über einen größeren GitHub-Compare-Block statt über einzelne Stichproben. Ergänzt wurden 88 sichere Artikel-/Überblicksseiten aus dem Ausbau bis v128, vor allem tiefere Überblicksseiten unter Elektrotechnik, Informatik, Linux, Mathematik und Web Development.

Die CSV umfasst nun 950 Einträge. Es wurde bewusst keine zweite CSV angefangen, weil die vereinbarte Schwelle von mindestens etwa 1000 Einträgen noch nicht erreicht ist. `checked = no` und `quality_status = open` bleiben korrekt, da weiterhin Inventarisierung und grobe Einordnung laufen.

## Fortschritt v164 / Block 12

- Dieselbe CSV weitergeführt; keine neue Audit-Datei begonnen.
- Gesamtbestand: 1070 Einträge.
- Neu in diesem Block: 120 Einträge.
- Ergänzt wurden sichere Nachträge aus Artikel-/News-Hinweisen sowie virtuelle `topic_node`-Zeilen aus vorhandenen Content-Pfadhierarchien.
- `topic_node`-Zeilen sind keine neuen Lernseiten, sondern Audit-Zeilen für Themen-/Navigationsknoten.
- Zweck: Themen sauberer einordnen, fehlende/teilweise Überblicksseiten erkennen und später gezielt prüfen.

## Fortschritt v165 / Block 13

- Dieselbe CSV weitergeführt; keine neue Audit-Datei begonnen.
- Gesamtbestand: 1333 Einträge.
- Neu in diesem Block: 263 virtuelle `topic_node`-Zeilen.
- Zusätzlich wurden 110 bestehende `topic_node`-Zeilen bei `has_article`, `has_exercises` und `has_solutions` aus den bereits inventarisierten Content-Pfaden nachgezogen.
- Zweck: Themenebene vollständiger machen, damit Einordnung, Feingliederung und fehlende Aufgaben/Lösungen später gefiltert geprüft werden können.
- `topic_node`-Zeilen sind keine neuen Lernseiten; `checked=no` und `quality_status=open` bleiben korrekt.
## Fortschritt v166 / Block 14

- Dieselbe CSV weitergeführt; keine neue Audit-Datei begonnen.
- Gesamtbestand: 1425 Einträge.
- Neu in diesem Block: 92 virtuelle Strukturzeilen.
  - 86 `section_node`-Zeilen für erkannte Fachbereichs-/Abschnittskombinationen.
  - 6 `subject_node`-Zeilen für die Hauptfachbereiche.
- Zusätzlich wurden bestehende `topic_node`-Zeilen stärker als Arbeitsliste eingeordnet:
  - Themen mit Artikel, aber ohne Aufgabe: `next_action=add_exercise`.
  - Themen mit Aufgabe, aber ohne direkt erkannte Artikelseite: `recommended_fix_type=add_overview_or_link_existing_article`.
  - Themen mit Aufgabe, aber ohne Lösung: `next_action=add_solution`.
- Zweck: Die Audit-Datei bildet jetzt nicht nur einzelne Dateien und Themenpfade ab, sondern auch Fachbereichs- und Abschnittsebene für spätere Navigations-/Einordnungsprüfung.
- `section_node`- und `subject_node`-Zeilen sind keine neuen Lernseiten; `checked=no` und `quality_status=open` bleiben korrekt.


## Fortschritt v167

- Dieselbe Audit-CSV wird weitergeführt; es wurde keine neue Teil-CSV begonnen.
- Die CSV enthält jetzt 1772 Einträge.
- Neu ist ein eigener Arbeitslisten-Typ `audit_action` mit 347 Einträgen.
- Diese Aktionszeilen sind virtuelle Audit-Zeilen, keine Lernseiten. Sie helfen, fehlende Aufgaben, Lösungen, Überblicksseiten und Bilder gezielt zu filtern.
- Bestehende Artikel-, Aufgaben- und Themenzeilen wurden stärker priorisiert, ohne sie fachlich als geprüft zu markieren.

Regel für `audit_action`:

- `checked=no` bleibt korrekt.
- `quality_status=open` bleibt korrekt.
- `recommended_fix_type` benennt die eigentliche Lücke.
- Der Pfad unter `audit/actions/...` ist ein stabiler Audit-Schlüssel, keine Datei, die im Content-Baum erzeugt werden muss.


## Fortschritt v168 / Block 16

Die Haupt-CSV wurde weitergeführt und enthält jetzt zusätzlich:

- `audit_batch`: gebündelte Arbeitsblöcke aus vorhandenen Audit-Aktionen
- `audit_phase`: übergeordnete Prüfschritte für den Audit-Prozess

Diese Zeilen sind virtuelle Arbeitszeilen, keine neuen Lernseiten. Sie helfen beim Filtern nach konkreten nächsten Blöcken, zum Beispiel `priority=high` und `next_action=add_solution`.


## Fortschreibung v169 / Block 17

Block 17 ergänzt keine neuen Lernseiten. Die bestehende CSV wurde um größere Arbeitsansichten erweitert:

- `audit_sprint`: Sprint-Vorschläge aus mehreren Batches.
- `audit_lane`: übergreifende Arbeitslinien.
- `audit_subject_plan`: Fachbereichspläne aus den vorhandenen Batches.

Damit bleibt `docs/content-quality-audit.csv` die Hauptdatei. Für den nächsten produktiven Qualitätsblock soll bevorzugt nach `content_type = audit_sprint`, `priority = high` und `next_action = add_solution` gefiltert werden.


## Stand v170

Die Audit-Tabelle wurde deutlich größer weitergeführt: 7374 Zeilen. Neu sind vor allem `review_checkpoint`-Zeilen, die vorhandene Seiten und Themen in konkrete Prüfschritte zerlegen. Dadurch können spätere Qualitätsblöcke nach Fachbereich, Aktion und Priorität gefiltert werden, statt erneut manuell Orientierung aufzubauen.

## Fortschritt v171

- Die Audit-Tabelle wurde auf 12.494 Einträge erweitert.
- Neu ergänzt wurden konkrete `quality_gate`-Prüfpunkte pro Artikel, Aufgabe, Lösung, Thema, Abschnitt und Fachbereich.
- Zusätzlich wurden `quality_gate_bundle`-Zeilen ergänzt, damit große Abarbeitungsblöcke nach Fachbereich, Priorität und nächster Aktion filterbar sind.
- Keine neuen Lernseiten wurden erzeugt.


## v172

Der Audit enthält jetzt 24.580 Zeilen. v172 ergänzt große Remediation-Queues aus vorhandenen Prüfpunkten. damit offene Punkte direkt als Arbeitsliste filterbar sind.

## v173 – Zweite CSV und Verification Queue

Die erste Audit-Datei bleibt erhalten und wurde nicht weiter aufgebläht. Ab v173 gibt es zusätzlich `docs/content-quality-audit-002.csv` mit identischem Header.

Zweck der zweiten Datei:

- Verification-Schritte nach vorhandenen Remediation-Schritten festhalten,
- größere Work Packages bilden,
- die erste CSV als Inventar-/Gate-/Remediation-Basis stabil halten,
- Git-Diffs und Filterarbeit übersichtlicher machen.

