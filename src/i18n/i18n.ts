import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./resources";

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: "de",
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    }
});

export default i18n;
