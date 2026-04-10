export const mainNavigation = [
  {
    label: "Start",
    href: "/",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10.5 12 4l8 6.5"></path>
        <path d="M6.5 9.8V20h11V9.8"></path>
        <path d="M10 20v-5.5h4V20"></path>
      </svg>
    `,
  },
  {
    label: "Fachbereiche",
    href: "/fachbereiche",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="7" height="6" rx="1.4"></rect>
        <rect x="13" y="5" width="7" height="6" rx="1.4"></rect>
        <rect x="4" y="13" width="7" height="6" rx="1.4"></rect>
        <rect x="13" y="13" width="7" height="6" rx="1.4"></rect>
      </svg>
    `,
  },
  {
    label: "News",
    href: "/news",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="5" width="12" height="14" rx="1.8"></rect>
        <path d="M17 8h2a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H8"></path>
        <path d="M8 9h6M8 12h6M8 15h4"></path>
      </svg>
    `,
  },
] as const;
