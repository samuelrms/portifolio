import React, { createContext, useCallback, useContext } from "react";
import { Children } from "../interface";
import { usePersistedState } from "../hooks";
import { enUS, ptBR } from "../mocks";

interface LanguageContextData {
  languageName: typeof enUS | typeof ptBR;
  toggleLanguage: () => void;
}

const LanguageContext = createContext({} as LanguageContextData);

export const useAppLanguageContext = () => {
  return useContext(LanguageContext);
};

export const AppLanguageProvider: React.FC<Children> = ({ children }) => {
  const [languageName, setLanguageName] = usePersistedState<
    typeof enUS | typeof ptBR
  >("@language_local", ptBR);

  const toggleLanguage = useCallback(() => {
    setLanguageName((oldLanguageName) =>
      oldLanguageName === ptBR ? enUS : ptBR,
    );
  }, [setLanguageName]);

  return (
    <LanguageContext.Provider value={{ languageName, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
