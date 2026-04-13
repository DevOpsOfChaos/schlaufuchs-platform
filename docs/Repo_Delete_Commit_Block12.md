# Commit-Vorschlag nach physischer Legacy-Löschung

```text
refactor(routing): entferne historische statische fachpfad-leafs und alte leaf-datenquellen

- lösche verbliebene statische index.astro-leafseiten unter src/pages/fachbereiche
- entferne alte informatik-, mathematik- und linux-leaf-datenquellen
- lasse fachpfad-leafs nur noch über die generischen redirect-routen und /wissen laufen
- reduziere alte routing-kollisionen zwischen statischen leaf-pfaden und neuer topicPath-logik
- bereinige den repo-stand für den anschließenden build- und router-check
```
