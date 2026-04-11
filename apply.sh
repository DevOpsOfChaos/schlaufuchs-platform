#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(pwd)"

if [[ ! -d "$REPO_ROOT/src/pages" || ! -d "$REPO_ROOT/src/components" ]]; then
  echo "Bitte im Root von schlaufuchs-platform ausführen."
  exit 1
fi

echo "Ersetze Dateien ..."
mkdir -p "$(dirname "$REPO_ROOT/src/pages/fachbereiche/[subject]/[slug].astro")"
cp "$SCRIPT_DIR/files/src/pages/fachbereiche/[subject]/[slug].astro" "$REPO_ROOT/src/pages/fachbereiche/[subject]/[slug].astro"
mkdir -p "$(dirname "$REPO_ROOT/src/pages/fachbereiche/[subject]/[section]/[slug].astro")"
cp "$SCRIPT_DIR/files/src/pages/fachbereiche/[subject]/[section]/[slug].astro" "$REPO_ROOT/src/pages/fachbereiche/[subject]/[section]/[slug].astro"
mkdir -p "$(dirname "$REPO_ROOT/src/pages/fachbereiche/[subject]/[section]/[topic]/[slug].astro")"
cp "$SCRIPT_DIR/files/src/pages/fachbereiche/[subject]/[section]/[topic]/[slug].astro" "$REPO_ROOT/src/pages/fachbereiche/[subject]/[section]/[topic]/[slug].astro"
mkdir -p "$(dirname "$REPO_ROOT/src/components/content/MathLeafPage.astro")"
cp "$SCRIPT_DIR/files/src/components/content/MathLeafPage.astro" "$REPO_ROOT/src/components/content/MathLeafPage.astro"
mkdir -p "$(dirname "$REPO_ROOT/src/components/content/InformatikLeafPage.astro")"
cp "$SCRIPT_DIR/files/src/components/content/InformatikLeafPage.astro" "$REPO_ROOT/src/components/content/InformatikLeafPage.astro"
mkdir -p "$(dirname "$REPO_ROOT/src/components/content/WebLeafPage.astro")"
cp "$SCRIPT_DIR/files/src/components/content/WebLeafPage.astro" "$REPO_ROOT/src/components/content/WebLeafPage.astro"
mkdir -p "$(dirname "$REPO_ROOT/src/components/content/LinuxLeafPage.astro")"
cp "$SCRIPT_DIR/files/src/components/content/LinuxLeafPage.astro" "$REPO_ROOT/src/components/content/LinuxLeafPage.astro"

echo "Lösche alte statische Bereichs-index.astro-Dateien ..."
rm -f "$REPO_ROOT/src/pages/fachbereiche/mathematik/grundlagen/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/mathematik/funktionen/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/mathematik/geometrie/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/informatik/grundlagen/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/informatik/programmieren/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/informatik/systemnah/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/web-development/html/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/web-development/css/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/web-development/praxis/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/linux/shell/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/linux/system/index.astro"
rm -f "$REPO_ROOT/src/pages/fachbereiche/linux/praxis/index.astro"

echo "Fertig."
echo "Nächster Schritt: npm run build oder deine lokale Preview starten."
