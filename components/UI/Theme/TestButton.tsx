import {useContext} from "react";
import {ThemeContext} from "@/components/UI/Theme/ThemeContext";

export const TestButton = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <button>{theme}</button>
    )
}