import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationArm from "./locales/arm/translation.json";
import translationEn from "./locales/en/translation.json";

const resources = {
  arm: { translation: translationArm },
  en: { translation: translationEn },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "arm",
    fallbackLng: "arm",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
