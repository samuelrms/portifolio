import { useAppLanguageContext } from "../contexts";
import { enUS, ptBR } from "../mocks";

export const useLanguage = () => {
  const { languageName } = useAppLanguageContext();

  const language = languageName === enUS ? enUS : ptBR;

  return language;
};
