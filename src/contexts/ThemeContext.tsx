import { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
export interface IContext {
  isDark: boolean | null;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<IContext | null>(null);

export default function ThemeContextProvider({ children }: IProps) {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(!isDark);
  }
  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
