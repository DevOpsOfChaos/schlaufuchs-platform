export interface LegacyLeafSection {
  title: string;
  text: string;
  tone?: string;
}

export interface LegacyLeafPage {
  title: string;
  eyebrow: string;
  description: string;
  mascot?: string;
  sections: LegacyLeafSection[];
}

interface CreateLegacyLeafPageStoreOptions {
  subjectTitle: string;
  mascot?: string;
  eyebrow?: string;
  tonePrefix?: string;
}

const humanizeSlug = (value: string) =>
  value
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const buildFallbackPage = (slug: string, options: CreateLegacyLeafPageStoreOptions): LegacyLeafPage => {
  const title = humanizeSlug(slug || "thema");
  const eyebrow = options.eyebrow ?? "Historischer Fachpfad";
  const tone = options.tonePrefix ?? "legacy";

  return {
    title,
    eyebrow,
    description: `${title} wird nicht mehr als alte statische Leaf-Infoseite gepflegt, sondern über die kanonische Wissensansicht oder den Themenpfad aufgelöst.`,
    mascot: options.mascot,
    sections: [
      {
        title: "Einordnung",
        text: `Dieser alte Fachpfad aus ${options.subjectTitle} ist nur noch ein Legacy-Einstiegspunkt und soll nicht mehr als zweite fachliche Detailansicht bestehen bleiben.`,
        tone: `${tone}-a`,
      },
      {
        title: "Kanonischer Zielstand",
        text: "Wenn zu diesem Pfad bereits eine echte Wissensseite existiert, wird der Pfad auf /wissen weitergeleitet. Andernfalls bleibt nur die Themenebene als sicherer Einstieg bestehen.",
        tone: `${tone}-b`,
      },
      {
        title: "Bereinigungshinweis",
        text: "Dieser Datensatz ist bewusst generisch gehalten, damit verbliebene statische Leaf-Dateien keine alten Platzhaltertexte mehr konservieren.",
        tone: `${tone}-c`,
      },
    ],
  };
};

export const createLegacyLeafPageStore = (options: CreateLegacyLeafPageStoreOptions) =>
  new Proxy<Record<string, LegacyLeafPage>>({} as Record<string, LegacyLeafPage>, {
    get(_target, property) {
      if (typeof property !== "string") return undefined;
      return buildFallbackPage(property, options);
    },
    has() {
      return true;
    },
    ownKeys() {
      return [];
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: false,
        configurable: true,
      };
    },
  });
