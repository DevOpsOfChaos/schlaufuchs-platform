Schlaufuchs Leaf Cleanup Bundle

Anwendung:
1. ZIP im Root von schlaufuchs-platform entpacken
2. Im Repo-Root ausführen:
   bash apply.sh

Was gemacht wird:
- 3 generische Leaf-Routen werden auf echte Wissensseiten-Redirects umgestellt
- 4 alte Leaf-Komponenten (Math/Informatik/Web/Linux) bekommen Redirect-Verhalten
- 12 alte statische Bereichs-index.astro-Dateien werden gelöscht, damit [...parts].astro wieder greift

Wenn du das Skript nicht nutzen willst:
- Inhalte aus files/ über das Repo kopieren und ersetzen
- danach alle Pfade aus DELETE_THESE_FILES.txt löschen
