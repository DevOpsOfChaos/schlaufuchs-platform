# Einspielreihenfolge und Robustheit

Dieser Sammelstand ist inzwischen breit genug, dass er nicht nur Inhaltsdateien, sondern auch wichtige Stützdateien enthält.

## Neu zusätzlich im Bundle

- `src/data/navigation/main.ts`
- `src/components/ui/ActionIcon.astro`
- `src/components/ui/ThemeToggle.astro`
- `src/utils/base.ts`

## Warum das wichtig ist

Diese Dateien werden von geänderten Layout-/Topbar-Seiten direkt genutzt. Dadurch ist der Austauschstand robuster und weniger davon abhängig, welcher Altstand gerade noch im Repo liegt.

## Reihenfolge beim finalen Einspielen

1. Pflichtlöschungen aus `REQUIRED_DELETE_FILES.txt` und `DELETE_OPTIONAL_OLD_FILES.txt` durchführen.
2. Danach den kompletten Inhalt aus `files/` über das Repo kopieren.
3. Dann Build laufen lassen.
4. Erst danach committen.

## Erwartung nach dem Einspielen

- keine Learn-/Presentation-Mode-Altlogik mehr im Austauschstand
- generische Leaf-Routen greifen sauber
- Wissens- und Aufgabenseiten laufen auf dem vereinheitlichten Standard
- die Linux-Lernshell ist breit, aber kontrolliert nutzbar
