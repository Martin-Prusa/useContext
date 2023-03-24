import {createContext} from "react";

type ThemeContextType = {
    theme: string | null
    setTheme: (t: string | null) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: null,
    setTheme: () => {}
})