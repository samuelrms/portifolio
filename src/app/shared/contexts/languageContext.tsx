import React, { createContext, useCallback, useContext } from "react";
import { Children } from "../interface";
import { usePersistedState } from "../hooks";

interface LanguageContextData {
  languageName: "enUS" | "ptBR";
  toggleLanguage: () => void;
}

const LanguageContext = createContext({} as LanguageContextData);

export const useAppLanguageContext = () => {
  return useContext(LanguageContext);
};

export const AppLanguageProvider: React.FC<Children> = ({ children }) => {
  const [languageName, setLanguageName] = usePersistedState<"ptBR" | "enUS">(
    "@language_local",
    null,
  );

  const toggleLanguage = useCallback(() => {
    setLanguageName(languageName !== "ptBR" ? "ptBR" : "enUS");
  }, [setLanguageName, languageName]);

  return (
    <LanguageContext.Provider value={{ languageName, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
