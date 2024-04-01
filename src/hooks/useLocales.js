import { useTranslation } from "react-i18next";
import { allLangs, defaultLang } from "../config";
import { LOCAL_STORAGE_KEYS } from "../constants/app-constants";
import LocalUtils from "../utils/localUtils";

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();

  const langStorage = LocalUtils.get(LOCAL_STORAGE_KEYS.LOCALE) || "";

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    t: (text, options) => translate(text, options),
    currentLang,
    allLangs,
  };
}
