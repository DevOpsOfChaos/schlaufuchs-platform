export interface LinuxShellScenario {
  key: string;
  title: string;
  intro: string;
  prompt: string;
  startPath: string;
  suggestedCommands: string[];
  quickNotes?: string[];
  entries: Array<{
    path: string;
    type: "dir" | "file";
    content?: string;
    perms?: string;
  }>;
}

const createBaseEntries = () => [
  { path: "/", type: "dir", perms: "755" },
  { path: "/home", type: "dir", perms: "755" },
  { path: "/home/fox", type: "dir", perms: "755" },
  { path: "/home/fox/dokumente", type: "dir", perms: "755" },
  { path: "/home/fox/projekte", type: "dir", perms: "755" },
  { path: "/home/fox/projekte/app", type: "dir", perms: "755" },
  { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "Ruhig lesen, dann bewusst handeln.\n" },
  { path: "/home/fox/dokumente/aufgaben.txt", type: "file", perms: "644", content: "alpha\nbeta\nalpha\ngamma\n" },
  { path: "/home/fox/dokumente/protokoll.log", type: "file", perms: "644", content: "Start\nKonfiguration geladen\nFehler A\nEnde\n" },
  { path: "/home/fox/projekte/app/config.json", type: "file", perms: "644", content: '{"mode":"dev"}\n' },
  { path: "/home/fox/geheim.txt", type: "file", perms: "600", content: "Nur der Besitzer soll alles lesen können.\n" },
  { path: "/home/fox/teaminfo.txt", type: "file", perms: "644", content: "Die Gruppe darf hier mitlesen.\n" },
] satisfies LinuxShellScenario["entries"];

const createScenario = (key: string, title: string, intro: string, suggestedCommands: string[], quickNotes: string[] = []): LinuxShellScenario => ({
  key,
  title,
  intro,
  prompt: "schlaufuchs@shell",
  startPath: "/home/fox",
  suggestedCommands,
  quickNotes,
  entries: createBaseEntries(),
});

export const linuxShellScenarios: Record<string, LinuxShellScenario> = {
  "shell/pfade-mit-basename-dirname-und-realpath": createScenario(
    "shell/pfade-mit-basename-dirname-und-realpath",
    "Pfade mit basename, dirname und realpath lesen",
    "Vergleiche denselben Pfad mit mehreren Werkzeugen und trenne Dateiname, Verzeichnis und vollständigen Pfad bewusst voneinander.",
    ["pwd", "basename /home/fox/projekte/app/config.json", "dirname /home/fox/projekte/app/config.json", "realpath /home/fox/projekte/app/config.json", "tree"],
    ["Nutze zuerst pwd oder tree für die Orientierung.", "Vergleiche danach basename und dirname an derselben Datei."]
  ),
  "shell/history-und-wiederkehrende-befehle": createScenario(
    "shell/history-und-wiederkehrende-befehle",
    "History und wiederkehrende Befehle nutzen",
    "Arbeite in kleinen Schritten und nutze history bewusst als Kontrolle deines Arbeitswegs.",
    ["ls", "cat notizen.txt", "grep Fehler dokumente/protokoll.log", "history", "pwd"],
    ["History hilft nicht nur beim Wiederholen, sondern auch beim Nachvollziehen."]
  ),
  "shell/pipes-und-umleitungen": createScenario(
    "shell/pipes-und-umleitungen",
    "Pipes und Umleitungen verstehen",
    "Lies bei jedem Schritt bewusst, ob Ausgaben im Terminal bleiben oder weiterverarbeitet werden.",
    ["cat dokumente/aufgaben.txt", "grep alpha dokumente/aufgaben.txt", "wc dokumente/aufgaben.txt", "head dokumente/aufgaben.txt", "tail dokumente/aufgaben.txt"],
    ["Markiere erst den Operator, dann den Datenfluss."]
  ),
  "shell/textwerkzeuge-mit-grep-cut-und-wc": createScenario(
    "shell/textwerkzeuge-mit-grep-cut-und-wc",
    "grep, cut und wc gezielt einsetzen",
    "Hier geht es um kleine Textanalysen: suchen, ausschneiden und zählen statt raten.",
    ["cat dokumente/aufgaben.txt", "grep alpha dokumente/aufgaben.txt", "wc dokumente/aufgaben.txt", "head -n 2 dokumente/aufgaben.txt"],
    ["Frage zuerst: suchen, ausschneiden oder zählen?"]
  ),
  "shell/find-und-dateisuche": createScenario(
    "shell/find-und-dateisuche",
    "Dateien gezielt mit find suchen",
    "Trenne Startpfad und Suchmuster sauber und grenze die Suche dann Schritt für Schritt ein.",
    ["pwd", "tree", "find . -name '*.txt'", "find projekte -type d", "find dokumente -name '*protokoll*'"],
    ["Lege zuerst fest, wo die Suche beginnt."]
  ),
  "shell/dateien-mit-head-und-tail": createScenario(
    "shell/dateien-mit-head-und-tail",
    "Dateien mit head und tail lesen",
    "Lies nicht immer die ganze Datei, sondern vergleiche gezielt Anfang und Ende.",
    ["cat dokumente/protokoll.log", "head dokumente/protokoll.log", "tail dokumente/protokoll.log"],
    ["Gerade bei Protokollen ist das Ende oft besonders interessant."]
  ),
  "shell/umgebungsvariablen-und-path": createScenario(
    "shell/umgebungsvariablen-und-path",
    "Umgebungsvariablen und PATH einordnen",
    "Unterscheide zwischen aktuellem Ort, Heimatverzeichnis und dem Finden von Befehlen.",
    ["pwd", "man pwd", "basename /home/fox/projekte/app/config.json", "dirname /home/fox/projekte/app/config.json"],
    ["PWD zeigt den aktuellen Ort, HOME das Benutzerverzeichnis."]
  ),
  "shell/dateirechte-mit-ls-stat-und-chmod-lesen": createScenario(
    "shell/dateirechte-mit-ls-stat-und-chmod-lesen",
    "Dateirechte prüfen und ändern",
    "Lies erst die Ausgangslage und ändere Rechte dann bewusst mit einer numerischen Angabe.",
    ["ls", "cat geheim.txt", "chmod 640 geheim.txt", "cat geheim.txt", "ls"],
    ["chmod verändert Rechte, nicht automatisch den Inhalt."]
  ),
};

const linuxShellAliases: Record<string, string> = {
  "umgebungsvariablen-und-path": "shell/umgebungsvariablen-und-path",
  "dateirechte-mit-ls-stat-und-chmod-lesen": "shell/dateirechte-mit-ls-stat-und-chmod-lesen",
  "find-und-dateisuche": "shell/find-und-dateisuche",
  "dateien-mit-head-und-tail": "shell/dateien-mit-head-und-tail",
  "pfade-mit-basename-dirname-und-realpath": "shell/pfade-mit-basename-dirname-und-realpath",
  "history-und-wiederkehrende-befehle": "shell/history-und-wiederkehrende-befehle",
  "pipes-und-umleitungen": "shell/pipes-und-umleitungen",
  "textwerkzeuge-mit-grep-cut-und-wc": "shell/textwerkzeuge-mit-grep-cut-und-wc",
};

const humanize = (value: string) => value.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");

export const getLinuxShellScenario = (key: string) => {
  if (linuxShellScenarios[key]) return linuxShellScenarios[key];
  const alias = linuxShellAliases[key];
  if (alias && linuxShellScenarios[alias]) return linuxShellScenarios[alias];
  const compactKey = key.split("/").filter(Boolean).join("/");
  if (linuxShellScenarios[compactKey]) return linuxShellScenarios[compactKey];
  const suffix = compactKey.split("/").at(-1) ?? compactKey;
  const suffixAlias = linuxShellAliases[suffix];
  if (suffixAlias && linuxShellScenarios[suffixAlias]) return linuxShellScenarios[suffixAlias];
  if (!compactKey.includes("shell") && !suffix) return null;
  return createScenario(
    compactKey || "shell/generisch",
    humanize(suffix || "linux-shell"),
    "Nutze diese Lernshell als ruhigen Übungsraum: erst orientieren, dann bewusst ausprobieren.",
    ["pwd", "ls", "tree", "cat notizen.txt", "history"],
    ["Starte mit Orientierung und lies Ausgaben bewusst."]
  );
};
