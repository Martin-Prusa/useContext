import {ReactNode, useState} from "react";
import {ThemeContext} from "@/components/UI/Theme/ThemeContext";

function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] = useState<string | null>(null)

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}