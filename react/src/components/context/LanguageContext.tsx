import { createContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const LanguageContext = createContext<{
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}>({ language: "", setLanguage: () => "" });

export default function LangContextProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("español");

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
