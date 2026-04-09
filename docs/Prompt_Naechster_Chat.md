# Prompt für den nächsten Chat

Du setzt die Arbeit an einer bereits fortgeschrittenen Plattform fort.

## Erster Schritt – verpflichtend
1. Öffne und lies vollständig:
   - `docs/Uebergabe_Naechster_Chat.md`
   - `docs/Prompt_Naechster_Chat.md`
2. Starte danach **ohne Reset** direkt weiter.
3. Arbeite repo-nah und selbstständig.

---

## Wichtigster aktueller Fokus
Der wichtigste nächste Arbeitsblock ist **nicht** allgemeine Oberflächenpolitur, sondern:

- die neue **Themen-/Fachinfo-Struktur innerhalb der Fachpfade** prüfen,
- sichtbar machen,
- stabilisieren,
- und wenn nötig nachschärfen.

Der Nutzer hat klar kritisiert, dass man sich zwar durch Fachthemen klicken konnte, aber **zu wenig echte Fachinfos/Informationsseiten innerhalb dieser Themenstruktur sichtbar waren**.

Genau das soll jetzt der Schwerpunkt sein.

---

## Verbindliche Produktregeln
Arbeite nur mit diesen fünf Hauptfächern:
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

Wichtig:
- `Daten & Signale` ist **kein** eigener Hauptfachbereich.
- `HTML/CSS` ist **kein** eigener Hauptfachbereich.
- Aufgaben sind zentral.
- Alte HTML-Seiten nicht direkt übernehmen.
- Alte Aufgaben erhalten und modernisieren.
- Bilder stark reduzieren.
- Keine unnötige Meta-Kommunikation auf Nutzerseiten.
- Keine überladenen Oberflächen mit belanglosen Countern oder Systeminfos.

---

## Was technisch zuletzt passiert ist
Es wurde zuletzt bereits konkret an genau diesem Problem gearbeitet:
- GitHub Pages / Base-Pfade wurden repariert
- Workflow wurde robuster gemacht
- ein echter Buildfehler in `src/pages/wissen/[...slug].astro` wurde behoben
- `src/data/topics.ts` wurde neu eingeführt
- `src/pages/fachbereiche/[subject]/[...parts].astro` wurde neu eingeführt
- `src/pages/fachbereiche/[slug].astro` wurde auf echte Themenübersichten umgestellt

Das heißt:
- du sollst **nicht** wieder neu strukturieren,
- sondern diese neue Richtung **prüfen, konsolidieren und weiter ausbauen**.

---

## Konkrete Arbeitspriorität
Arbeite in dieser Reihenfolge:

1. **Themenstruktur validieren**
   - funktionieren die neuen Fachpfade logisch?
   - erscheinen dort echte Fachinfos?
   - ist die Themenübersicht ruhig und verständlich?

2. **Fachinfos in der Themennavigation stärken**
   - wenn beim Durchklicken noch Lücken sind, diese gezielt schließen
   - lieber klare Themenübersichtsseiten und Fachinfos als weitere Meta-Struktur

3. **Danach wieder Inhalte ergänzen**
   - neue Wissensseiten
   - passende Aufgaben
   - modernisierte Altaufgaben

---

## Arbeitsstil
- Halte den Chat kompakt.
- Arbeite in größeren sinnvollen Blöcken.
- Frage nicht nach jedem kleinen Schritt nach.
- Gib nur kurze Statusupdates.
- Nur bei echten Problemen etwas ausführlicher werden.

Der Nutzer möchte ausdrücklich **keinen laggenden, überfüllten Chat**.

---

## Praktischer Startpunkt im Repo
Öffne zuerst besonders diese Dateien:
- `src/pages/fachbereiche/[slug].astro`
- `src/pages/fachbereiche/[subject]/[...parts].astro`
- `src/data/topics.ts`
- `src/data/content.ts`
- `src/data/subjects.ts`

Dann arbeite direkt an der Frage:
- **Wie tauchen Fachinfos in der Themenstruktur wirklich sichtbar und logisch auf?**

Wenn es dort noch Brüche gibt, hat das Vorrang vor neuen Inhaltspaketen.
