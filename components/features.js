import { useRouter } from "next/router";

import styles from "./features.module.css";

const Feature = ({ text, icon }) => (
  <div className={styles.feature}>
    {icon}
    <h4>{text}</h4>
  </div>
);

const TITLE_WITH_TRANSLATIONS = {
  "de-CH": "Webbasierte Grafik-Animation für den DMA Infopoint",
  "fr-FR": "Animation graphique basée sur le Web pour l’Infopoint DMA",
  "en-US": "Web-based graphic animation for the DMA Infopoint",
};

// Transaltions for Features
const FEATURES_WITH_TRANSLATIONS = {
  "en-US": {
    lightweight: "Flexible",
    realtime: "Fast",
    suspense: "Taxable",
    remoteLocal: "Remote + Local",
  },
  "de-CH": {
    lightweight: "Flexibel",
    realtime: "Schnell",
    suspense: "Steuerbar",
    remoteLocal: "Remote + Lokal",
  },
  "fr-FR": {
    lightweight: "Flexibilité",
    realtime: "Vite",
    suspense: "Contrôlable",
    remoteLocal: "Remote + Local",
  },
};

export default () => {
  const { locale, defaultLocale } = useRouter();

  const featureText = (key) =>
    FEATURES_WITH_TRANSLATIONS[locale]?.[key] ??
    FEATURES_WITH_TRANSLATIONS[defaultLocale][key]; // Fallback for missing translations

  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">
        {TITLE_WITH_TRANSLATIONS[locale]}
      </p>
      <div className={styles.features}>
        <Feature
          text={featureText("lightweight")}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          }
        />
        <Feature
          text={featureText("realtime")}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          }
        />
        <Feature
          text={featureText("suspense")}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="10" y1="15" x2="10" y2="9"></line>
              <line x1="14" y1="15" x2="14" y2="9"></line>
            </svg>
          }
        />
        <Feature
          text={featureText("remoteLocal")}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"></path>
            </svg>
          }
        />
      </div>
    </div>
  );
};
