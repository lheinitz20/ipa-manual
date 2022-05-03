import { useRouter } from "next/router";

const Logo = ({ height }) => (
<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 483 322"><defs><style>{`.cls-1{fill:#8188a6;}.cls-2{fill:#b7caff;`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle className="cls-1" cx="161" cy="161" r="161"/><circle className="cls-2" cx="322" cy="161" r="161"/></g></g></svg>
);

const Vercel = ({ height = 20 }) => (
  <svg height={height} viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
);

const TITLE_WITH_TRANSLATIONS = {
  "de-CH": "Webbasierte Grafik-Animation für den DMA Infopoint",
  "en-US": "Web-based graphic animation for the DMA Infopoint",
  "fr-FR": "Animation graphique basée sur le Web pour l’Infopoint DMA",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "de-CH": "Eine Frage? Geben Sie uns Feedback →",
  "en-US": "Question? Give us feedback →",
  "fr-FR": "Une question? Donnez-nous vos commentaires →",
};

export default {
  projectLink: "https://github.com/lheinitz20/ipa-animation",
  docsRepositoryBase: "https://github.com/lheinitz20/ipa-manual",
  titleSuffix: " – Portfolio-Animation",
  darkMode: true,
  search: true,
  footer: false,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["de-CH"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo height={12} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={"Portfolio-Animation: " + (TITLE_WITH_TRANSLATIONS[locale] || "")}
        >
          Portfolio-Animation
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const { locale, route } = useRouter();

    const ogImage =
      meta.image ||
      (locale === "en-US" || locale === "fr-FR"
        ? `https://swr-card.vercel.app${
            /\/index\.+/.test(route) ? "" : "?title=" + title
          }`
        : "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg");

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – Portfolio-Animation" : "Portfolio-Animation: Webbasierte Grafik-Animation für den DMA Infopoint"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Portfolio-Animation" />
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "de-CH":
        return "Bearbeiten Sie diese Seite auf GitHub →";
      case "en-US":
        return "Edit this page on GitHub →";
      case "fr-FR":
        return "Modifier cette page sur GitHub →";
      default:
        return "Bearbeiten Sie diese Seite auf GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "de-CH":
        return (
          <a
            href="https://vercel.com/?utm_source=swr"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">Bereitgestellt von</span>
            <span className="mr-2">
              <Vercel />
            </span>
          </a>
        );
      case "en-US":
        return (
          <a
            href="https://vercel.com/?utm_source=swr"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">Powered by</span>
            <span className="mr-2">
              <Vercel />
            </span>
          </a>
        );
      case "fr-FR":
        return (
          <a
            href="https://vercel.com/?utm_source=swr"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">Propulsé par</span>
            <span className="mr-2">
              <Vercel />
            </span>
          </a>
        );
      default:
        return (
          <a
            href="https://vercel.com/?utm_source=swr"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-1">Bereitgestellt von</span>
            <span>
              <Vercel />
            </span>
          </a>
        );
    }
  },
  i18n: [
    { locale: "de-CH", text: "Deutsch" },
    { locale: "fr-FR", text: "Französisch" },
    { locale: "en-US", text: "Englisch" },
  ],
};
