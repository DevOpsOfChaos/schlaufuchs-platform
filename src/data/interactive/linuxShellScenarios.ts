export interface LinuxShellScenario {
  key: string;
  title: string;
  intro: string;
  prompt: string;
  startPath: string;
  suggestedCommands: string[];
  quickNotes?: string[];
  trySteps?: string[];
  entries: Array<{
    path: string;
    type: "dir" | "file";
    content?: string;
    perms?: string;
  }>;
}

export const linuxShellScenarios: Record<string, LinuxShellScenario> = {
  "shell/dateien-und-ordner": {
    key: "shell/dateien-und-ordner",
    title: "Dateien und Ordner ausprobieren",
    intro: "Nutze die Lernshell wie einen ruhigen Übungsraum. Prüfe zuerst deinen Ort, sieh dir dann den Inhalt an und bewege dich erst danach weiter.",
    prompt: "schlaufuchs@shell",
    startPath: "/home/fox",
    suggestedCommands: ["pwd","ls","cd dokumente","ls -l","tree","cat aufgaben.txt | sort | uniq","printf alpha:beta\\n | cut -d : -f 2","cat aufgaben.txt | wc","realpath lernplan.txt"],
    quickNotes: ["Starte mit Orientierung: pwd, ls, cd.","Nutze tree, wenn du Strukturen statt einzelner Dateinamen sehen willst.","Mit mkdir, touch, cp und mv kannst du auch selbst etwas aufbauen."],
    trySteps: ["Öffne zuerst mit pwd und ls deinen Ausgangspunkt.","Wechsle nach dokumente und lies mit cat eine Datei.","Probiere anschließend sort, uniq und wc auf einer kleinen Textdatei aus."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/dokumente", type: "dir", perms: "755" },
      { path: "/home/fox/projekte", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "Heute im Terminal zuerst mit pwd und ls orientieren.\n" },
      { path: "/home/fox/dokumente/lernplan.txt", type: "file", perms: "644", content: "1. pwd\n2. ls\n3. cd\n" },
      { path: "/home/fox/dokumente/aufgaben.txt", type: "file", perms: "644", content: "daten\ndatei\ndatei\nordner\npfad\n" },
      { path: "/home/fox/projekte/webseite", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/webseite/index.html", type: "file", perms: "644", content: "<h1>Hallo Welt</h1>\n" }
    ]
  },
  "shell/hilfe-im-terminal": {
    key: "shell/hilfe-im-terminal",
    title: "Hilfe im Terminal nutzen",
    intro: "Hier geht es nicht ums Raten, sondern ums Nachschlagen. Probiere vor allem man, help und kleine Kontrollbefehle aus.",
    prompt: "schlaufuchs@help",
    startPath: "/home/fox",
    suggestedCommands: ["man ls","help","which grep","cat beispiele/datei.txt | grep Hilfe","printf hallo\\nwelt\\n | wc","printf eins:zwei\\n | cut -d : -f 2"],
    quickNotes: ["Vergleiche man und help: beides hilft, aber mit anderem Fokus.","Nutze which, wenn du prüfen willst, ob ein Befehl in dieser Lernshell vorhanden ist."],
    trySteps: ["Sieh dir zuerst mit help an, welche Befehle die Lernshell kennt.","Vergleiche danach man ls mit einer echten kleinen Dateiarbeit.","Suche anschließend mit grep gezielt in einer Beispieldatei."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/beispiele", type: "dir", perms: "755" },
      { path: "/home/fox/beispiele/datei.txt", type: "file", perms: "644", content: "Hilfetexte lesen spart Fehler.\nMit grep kannst du gezielt nach Worten suchen.\n" }
    ]
  },
  "system/dateirechte": {
    key: "system/dateirechte",
    title: "Dateirechte lesen und verändern",
    intro: "Diese Lernshell zeigt dir Beispieldateien mit unterschiedlichen Rechten. Nutze ls -l, stat, cat und testweise chmod, um die Wirkung bewusst zu lesen.",
    prompt: "schlaufuchs@rechte",
    startPath: "/home/fox",
    suggestedCommands: ["ls -l","stat geheim.txt","chmod 640 geheim.txt","ls -l","cat geheim.txt | wc","file geheim.txt"],
    quickNotes: ["Erst lesen, dann ändern: ls -l oder stat geben dir den sauberen Ausgangspunkt.","Achte darauf, wie sich nur die Rechte ändern, nicht automatisch der Inhalt."],
    trySteps: ["Vergleiche erst mehrere Dateien mit ls -l.","Lies eine Datei mit stat genauer.","Ändere dann testweise ein Rechtebeispiel mit chmod und prüfe die Ausgabe erneut."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/geheim.txt", type: "file", perms: "600", content: "Nur der Besitzer soll alles lesen können.\n" },
      { path: "/home/fox/teaminfo.txt", type: "file", perms: "644", content: "Die Gruppe darf hier mitlesen.\n" },
      { path: "/home/fox/skript.sh", type: "file", perms: "755", content: "#!/bin/bash\necho Hallo\n" }
    ]
  },
  "praxis/terminal-nutzen": {
    key: "praxis/terminal-nutzen",
    title: "Ruhig im Terminal arbeiten",
    intro: "Diese Variante ist stärker auf Arbeitsweise ausgelegt. Probiere kleine Schritte aus und lies die Ausgaben bewusst.",
    prompt: "schlaufuchs@praxis",
    startPath: "/home/fox",
    suggestedCommands: ["pwd","ls","mkdir test","cd test","touch notiz.txt","cp ../start.txt kopie.txt","tree","cat kopie.txt | wc","history"],
    quickNotes: ["Arbeite in kleinen Schritten und kontrolliere nach fast jedem Befehl die Ausgabe.","Mit reset kannst du jederzeit zum Anfangszustand zurückgehen."],
    trySteps: ["Lege zuerst ein kleines Testverzeichnis an.","Erzeuge eine Datei und kopiere sie an einen zweiten Ort.","Nutze danach tree oder history, um deinen Weg kontrolliert nachzuvollziehen."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/start.txt", type: "file", perms: "644", content: "Arbeite in kleinen, kontrollierten Schritten.\n" }
    ]
  },
  "praxis/nano": {
    key: "praxis/nano",
    title: "nano ohne Druck ausprobieren",
    intro: "nano ist hier bewusst vereinfacht simuliert. Du kannst Dateien aufrufen und verstehen, was ein Editor macht, ohne eine echte Shell zu verlassen.",
    prompt: "schlaufuchs@nano",
    startPath: "/home/fox",
    suggestedCommands: ["ls","nano notizen.txt","cat notizen.txt","touch neu.txt","nano neu.txt","printf testnotiz > neu.txt","cat neu.txt","uname -a"],
    quickNotes: ["In der Lernshell ersetzt nano nicht alles, sondern erklärt den typischen Arbeitsablauf.","Öffne, lies, ändere gedanklich und kontrolliere dann den Dateinamen oder Inhalt."],
    trySteps: ["Öffne erst eine vorhandene Datei mit nano.","Prüfe danach mit cat, um welche Datei es geht.","Lege anschließend eine neue Datei an und simuliere den gleichen Ablauf noch einmal."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "In nano erst lesen, dann ändern, dann bewusst speichern.\n" }
    ]
  },
  "system/benutzer-und-gruppen": {
    key: "system/benutzer-und-gruppen",
    title: "Benutzer und Gruppen einordnen",
    intro: "Hier lässt sich vor allem beobachten, wem Dateien gehören und wie Rechte damit zusammenhängen. Fokus: lesen, vergleichen, einordnen.",
    prompt: "schlaufuchs@users",
    startPath: "/home/fox",
    suggestedCommands: ["whoami","groups","id","env","ls -l","stat projekt.txt","cat team.csv | cut -d : -f 1","cat team.csv | sort | uniq"],
    quickNotes: ["Die Ausgabe von id und groups hilft beim Einordnen von Benutzer und Gruppe.","Vergleiche diese Infos anschließend mit ls -l oder stat einer Datei."],
    trySteps: ["Sieh dir zuerst mit whoami, groups und id deine Identität an.","Vergleiche diese Informationen danach mit ls -l einer Datei.","Nutze stat, wenn du die gleiche Datei noch genauer lesen willst."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/projekt.txt", type: "file", perms: "664", content: "Projektdatei für die gemeinsame Gruppe.\n" },
      { path: "/home/fox/privat.txt", type: "file", perms: "600", content: "Nur für den Besitzer.\n" },
      { path: "/home/fox/team.csv", type: "file", perms: "644", content: "fox:adm\nlea:adm\nnoah:plugdev\n" }
    ]
  },
  "shell/pipes-und-umleitungen": {
    key: "shell/pipes-und-umleitungen",
    title: "Pipes und Umleitungen üben",
    intro: "Hier kannst du Datenflüsse in der Shell bewusst lesen: Was bleibt im Terminal, was wandert in eine Datei und was wird an den nächsten Befehl weitergereicht?",
    prompt: "schlaufuchs@pipes",
    startPath: "/home/fox",
    suggestedCommands: ["cat daten.txt | wc","cat daten.txt | grep alpha","printf test > notiz.txt","cat notiz.txt","printf neu >> notiz.txt","cat notiz.txt"],
    quickNotes: ["Markiere bei jeder Zeile erst die Operatoren |, > und >>.","Lies dann bewusst, wo die Ausgabe jeweils landet."],
    trySteps: ["Starte mit cat daten.txt | wc.","Vergleiche danach > und >> an derselben Datei.","Formuliere in Worten, warum Pipe und Umleitung nicht dasselbe sind."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/daten.txt", type: "file", perms: "644", content: "alpha\nbeta\nalpha\ngamma\n" },
      { path: "/home/fox/notiz.txt", type: "file", perms: "644", content: "start\n" }
    ]
  },
  "shell/textwerkzeuge-mit-grep-cut-und-wc": {
    key: "shell/textwerkzeuge-mit-grep-cut-und-wc",
    title: "grep, cut und wc gezielt einsetzen",
    intro: "Dieses Szenario ist auf kleine Textanalysen ausgelegt. Du suchst Zeilen, liest Felder aus und zählst Ergebnisse, statt alles im Kopf zu entwirren.",
    prompt: "schlaufuchs@text",
    startPath: "/home/fox",
    suggestedCommands: ["cat team.csv","cat team.csv | cut -d : -f 1","cat team.csv | grep adm","cat team.csv | wc","cat log.txt | grep Fehler | wc"],
    quickNotes: ["Frage zuerst: Suchen, ausschneiden oder zählen?", "Wenn Felder getrennt sind, prüfe bei cut bewusst den Trenner."],
    trySteps: ["Lies zuerst die Datei vollständig.","Probiere dann grep und cut getrennt.","Verbinde die Werkzeuge erst im dritten Schritt zu einer kleinen Analyse."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/team.csv", type: "file", perms: "644", content: "anna:adm\nmax:plugdev\nlea:adm\n" },
      { path: "/home/fox/log.txt", type: "file", perms: "644", content: "Info Start\nFehler Sensor\nInfo Ende\nFehler Timeout\n" }
    ]
  },
  "shell/find-und-dateisuche": {
    key: "shell/find-und-dateisuche",
    title: "Dateien gezielt mit find suchen",
    intro: "Hier übst du, Startpfad und Suchregel sauber zu trennen. Suche erst breit, dann gezielt nach Namen oder Typen.",
    prompt: "schlaufuchs@find",
    startPath: "/home/fox",
    suggestedCommands: ["pwd", "tree", "find . -name '*.md'", "find projekte -type d", "find projekte -name '*.txt'", "find dokumente -name '*plan*'"],
    quickNotes: ["Lege zuerst fest, wo die Suche beginnt.", "Nutze -name für Dateinamen und -type d oder -type f für Verzeichnis oder Datei.", "Schreibe Muster mit Sternen in Anführungszeichen."],
    trySteps: ["Sieh dir zuerst mit tree die Struktur an.", "Suche dann alle Markdown-Dateien im aktuellen Baum.", "Grenze danach die Suche auf projekte oder dokumente ein."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/dokumente", type: "dir", perms: "755" },
      { path: "/home/fox/dokumente/lernplan.md", type: "file", perms: "644", content: "Lernplan fuer die Woche\n" },
      { path: "/home/fox/dokumente/notiz.txt", type: "file", perms: "644", content: "Kurze Textnotiz\n" },
      { path: "/home/fox/projekte", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/app", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/app/readme.md", type: "file", perms: "644", content: "Projektbeschreibung\n" },
      { path: "/home/fox/projekte/app/todo.txt", type: "file", perms: "644", content: "Tests schreiben\n" },
      { path: "/home/fox/projekte/web", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/web/index.html", type: "file", perms: "644", content: "<h1>Projekt</h1>\n" }
    ]
  },
  "shell/dateien-mit-head-und-tail": {
    key: "shell/dateien-mit-head-und-tail",
    title: "Dateien mit head und tail lesen",
    intro: "Hier übst du, nicht immer die ganze Datei zu lesen. Schau dir Anfang und Ende gezielt an und vergleiche die Werkzeuge.",
    prompt: "schlaufuchs@lesen",
    startPath: "/home/fox",
    suggestedCommands: ["ls", "cat protokoll.log", "head protokoll.log", "tail protokoll.log", "head -n 3 zahlen.txt", "tail -n 2 zahlen.txt"],
    quickNotes: ["head zeigt den Anfang, tail das Ende.", "Vergleiche die Ausgaben bewusst mit cat.", "Gerade bei Protokollen ist das Ende oft besonders interessant."],
    trySteps: ["Lies erst eine Datei vollständig mit cat.", "Vergleiche danach dieselbe Datei mit head und tail.", "Nutze anschließend -n, um einen kleineren Ausschnitt zu wählen."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/protokoll.log", type: "file", perms: "644", content: "Start des Dienstes\nKonfiguration geladen\nPort geoeffnet\nAnfrage A verarbeitet\nAnfrage B verarbeitet\nDienst sauber beendet\n" },
      { path: "/home/fox/zahlen.txt", type: "file", perms: "644", content: "eins\nzwei\ndrei\nvier\nfuenf\nsechs\n" }
    ]
  },
  "shell/pfade-mit-basename-dirname-und-realpath": {
    key: "shell/pfade-mit-basename-dirname-und-realpath",
    title: "Pfade mit basename, dirname und realpath lesen",
    intro: "Hier geht es um genaue Pfadangaben. Zerlege Pfade in Dateiname, Verzeichnis und vollständigen Bezugspunkt.",
    prompt: "schlaufuchs@pfade",
    startPath: "/home/fox/projekte/app",
    suggestedCommands: ["pwd","basename /home/fox/projekte/app/config/settings.json","dirname /home/fox/projekte/app/config/settings.json","realpath ../app/config/settings.json","ls","tree"],
    quickNotes: ["Vergleiche dieselbe Pfadangabe mit mehreren Werkzeugen.", "Achte darauf, welcher Teil der Name und welcher Teil das Verzeichnis ist."],
    trySteps: ["Starte mit pwd und tree, damit du die Struktur ruhig vor Augen hast.", "Vergleiche danach basename und dirname an derselben Datei.", "Nutze realpath, um einen relativen Pfad eindeutig aufzulösen."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/projekte", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/app", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/app/config", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/app/config/settings.json", type: "file", perms: "644", content: '{"theme":"light","lang":"de"}\n' },
      { path: "/home/fox/projekte/app/README.md", type: "file", perms: "644", content: "Projekt App\nKonfigurationen liegen im Ordner config.\n" }
    ]
  },
  "shell/history-und-wiederkehrende-befehle": {
    key: "shell/history-und-wiederkehrende-befehle",
    title: "History und wiederkehrende Befehle nutzen",
    intro: "Diese Übung zeigt dir, wie wiederkehrende Befehle und der Verlauf zusammenhängen. Arbeite in kleinen Schritten und nutze history bewusst als Kontrollhilfe.",
    prompt: "schlaufuchs@history",
    startPath: "/home/fox",
    suggestedCommands: ["ls","cat notizen.txt","grep Fehler analyse.log","wc analyse.log","history","pwd"],
    quickNotes: ["History hilft nicht nur beim Wiederholen, sondern auch beim Nachvollziehen.", "Prüfe immer, ob ein früherer Befehl im aktuellen Verzeichnis noch sinnvoll ist."],
    trySteps: ["Führe zuerst ein paar kleine Lese- und Analysebefehle aus.", "Rufe danach history auf und vergleiche deinen Arbeitsweg.", "Überlege, welche Befehle du eher wiederholen als neu eintippen würdest."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "Kontrolliere Arbeitswege lieber schrittweise als hektisch.\n" },
      { path: "/home/fox/analyse.log", type: "file", perms: "644", content: "Start\nKonfiguration ok\nFehler A gefunden\nFehler B gefunden\nEnde\n" }
    ]
  },
  "shell/umgebungsvariablen-und-path": {
    key: "shell/umgebungsvariablen-und-path",
    title: "Umgebungsvariablen und PATH einordnen",
    intro: "Diese Lernshell macht Shell-Kontext sichtbar. Nutze env, pwd, which und realpath, um zu verstehen, was aktueller Ort, Heimatverzeichnis und Befehlsweg jeweils leisten.",
    prompt: "schlaufuchs@env",
    startPath: "/home/fox/projekte",
    suggestedCommands: ["pwd","env","which ls","which grep","realpath ../notizen.txt","basename /home/fox/projekte/app/config.json","dirname /home/fox/projekte/app/config.json"],
    quickNotes: ["PWD zeigt den aktuellen Ort, HOME das Benutzerverzeichnis.", "PATH hilft der Shell beim Finden von Befehlen.", "which zeigt, wo ein Befehl gefunden wird."],
    trySteps: ["Prüfe zuerst deinen aktuellen Ort mit pwd.", "Sieh dir dann mit env den Shell-Kontext an.", "Nutze danach which und realpath, um Befehlswege und Dateipfade bewusst zu trennen."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/notizen.txt", type: "file", perms: "644", content: "HOME und PWD sind nicht dasselbe.\n" },
      { path: "/home/fox/projekte", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/app", type: "dir", perms: "755" },
      { path: "/home/fox/projekte/app/config.json", type: "file", perms: "644", content: "{\"mode\": \"dev\"}\n" }
    ]
  },
  "shell/dateirechte-mit-ls-stat-und-chmod-lesen": {
    key: "shell/dateirechte-mit-ls-stat-und-chmod-lesen",
    title: "Dateirechte prüfen und ändern",
    intro: "Hier steht das Lesen von Rechten im Mittelpunkt. Nutze ls -l, stat und chmod, um Ausgangslage, Änderung und Wirkung geordnet zu beobachten.",
    prompt: "schlaufuchs@chmod",
    startPath: "/home/fox",
    suggestedCommands: ["ls -l","stat geheim.txt","stat teaminfo.txt","chmod 640 geheim.txt","ls -l","stat geheim.txt"],
    quickNotes: ["Erst lesen, dann ändern.", "chmod verändert Rechte, nicht den Inhalt.", "Vergleiche dieselbe Datei vor und nach einer Änderung."],
    trySteps: ["Verschaffe dir zuerst mit ls -l einen Überblick.", "Prüfe eine Datei danach genauer mit stat.", "Ändere anschließend testweise eine Rechtezahl mit chmod und kontrolliere erneut."],
    entries: [
      { path: "/", type: "dir", perms: "755" },
      { path: "/home", type: "dir", perms: "755" },
      { path: "/home/fox", type: "dir", perms: "755" },
      { path: "/home/fox/geheim.txt", type: "file", perms: "600", content: "Nur der Besitzer soll alles lesen können.\n" },
      { path: "/home/fox/teaminfo.txt", type: "file", perms: "644", content: "Die Gruppe darf hier mitlesen.\n" },
      { path: "/home/fox/skript.sh", type: "file", perms: "755", content: "#!/bin/bash\necho Hallo\n" }
    ]
  }
};

const linuxShellAliases: Record<string, string> = {
  "system/benutzer-und-gruppen-grundlagen": "system/benutzer-und-gruppen",
  "benutzer-und-gruppen-grundlagen": "system/benutzer-und-gruppen",
  "benutzer-und-gruppen": "system/benutzer-und-gruppen",
  "dateirechte": "system/dateirechte",
  "dateirechte-mit-ls-stat-und-chmod-lesen": "shell/dateirechte-mit-ls-stat-und-chmod-lesen",
  "umgebungsvariablen-und-path": "shell/umgebungsvariablen-und-path",
  "nano": "praxis/nano",
  "terminal-nutzen": "praxis/terminal-nutzen",
  "find-und-dateisuche": "shell/find-und-dateisuche",
  "dateien-mit-head-und-tail": "shell/dateien-mit-head-und-tail",
  "pfade-mit-basename-dirname-und-realpath": "shell/pfade-mit-basename-dirname-und-realpath",
  "history-und-wiederkehrende-befehle": "shell/history-und-wiederkehrende-befehle",
};

export const getLinuxShellScenario = (key: string) => {
  if (linuxShellScenarios[key]) return linuxShellScenarios[key];
  const alias = linuxShellAliases[key];
  if (alias && linuxShellScenarios[alias]) return linuxShellScenarios[alias];

  const compactKey = key.split("/").filter(Boolean).join("/");
  if (linuxShellScenarios[compactKey]) return linuxShellScenarios[compactKey];

  const suffixMatch = Object.keys(linuxShellScenarios).find((scenarioKey) =>
    compactKey === scenarioKey.split("/").at(-1) || compactKey.endsWith(`/${scenarioKey.split("/").at(-1)}`),
  );

  return suffixMatch ? linuxShellScenarios[suffixMatch] : null;
};
