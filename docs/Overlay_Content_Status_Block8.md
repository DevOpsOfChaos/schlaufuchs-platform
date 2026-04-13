# Overlay Content Status – Block 8

## Summen nach Fachbereich

| Fachbereich | Wissensseiten | Aufgaben |
|---|---:|---:|
| elektrotechnik | 9 | 9 |
| informatik | 4 | 4 |
| linux | 7 | 7 |
| mathematik | 3 | 3 |
| web-development | 7 | 7 |

## Inhaltliche Wirkung dieses Blocks

- Fachbereichs-, Wissens- und Aufgabenübersichten zeigen jetzt zusätzlich Themenpfad-Hotspots.
- Catch-all-Themenpfade brechen bei leeren Pfaden nicht mehr auf kaputte `/wissen/...`-Ziele.
- Die Themennavigation verwendet jetzt konsolidierte Helper aus `src/data/topics.ts` statt mehrerer leicht unterschiedlicher Eigenlogiken.

## Prüfpunkte nach dem Einspielen

1. mehrere Fachbereichsseiten aufrufen und prüfen, ob Hotspots sinnvoll erscheinen
2. mehrere Catch-all-Pfade öffnen, darunter echte Themenpfade und leere Pfade
3. Leaf-Weiterleitungen unter `/fachbereiche/...` prüfen
4. `/wissen` und `/aufgaben` auf Mobilbreite und Scanbarkeit prüfen
5. danach lokalen Astro-Build und Router-Kollisionen prüfen
