import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tranEng from "./assets/eng.json"
import tranUz from "./assets/uz.json"


const resources = {
  eng: {
    translation: tranEng
  },
  uz: {
    translation: tranUz
  }
}

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });


export default i18n