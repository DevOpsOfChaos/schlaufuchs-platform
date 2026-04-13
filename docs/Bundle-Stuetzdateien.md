# Stützdateien im Bundle

Dieser Sammelstand enthält jetzt zusätzlich zentrale Stützdateien, damit die ausgetauschten Seiten später robuster mit dem Restzustand des Repos zusammenspielen.

Neu mit im Bundle:
- `files/src/data/content.ts`
- `files/src/data/subjects.ts`

## Warum das wichtig ist

Die geänderten Fachbereichs-, Wissens- und Aufgabenseiten hängen direkt an diesen Datenhilfen:
- Fachbereichstitel
- sichtbare Fachreihenfolge
- Themenpfade
- Inventar-/Suchlogik
- Zuordnung von Wissensseiten und Aufgaben

Wenn nur die Seiten, aber nicht die dazugehörigen Datenhilfen ersetzt werden, kann es leichter zu stillen Inkonsistenzen kommen.

## Bereinigung in `subjects.ts`

Im Bundle-Stand sind dabei die alten Lernmodus-Reste auch aus den Fachmetadaten entfernt:
- keine `learnModeTitle`
- keine `learnModeItems`

Das passt zum finalen Zielbild ohne Lernmodus.
