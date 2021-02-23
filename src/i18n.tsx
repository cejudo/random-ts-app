import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./i18/en-US.json";
import esMX from "./i18/es-MX.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  enUS: {
    translation: enUS
  },
  esMX: {
    translation: esMX,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "enUS",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
