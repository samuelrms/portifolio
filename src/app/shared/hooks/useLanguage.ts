import { useAppLanguageContext } from "../contexts";
import { enUS, ptBR } from "../mocks";

export const useLanguage = () => {
  const { languageName } = useAppLanguageContext();

  const language = languageName === "ptBR" ? enUS : ptBR;

  return language;
};
