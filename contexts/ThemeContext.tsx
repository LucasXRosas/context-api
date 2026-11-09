import { PropsWithChildren, createContext, useContext, useState } from "react";

// Passo 1: Shared Props
export type Theme = "light" | "dark";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Passo 2: createContext
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

// Passo 3: Provider
export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeContextValue: ThemeContextProps = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Passo 4: Consumer Hook
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme deve ser usado dentro de um ThemeContextProvider!");
  }

  return context;
}