import {useEffect, useState} from "react";

export const DarkThemeSwitcher = () => {

    const [isDarkMode, setDarkMode] = useState(
        false
    )

    useEffect(() => {
        const local = localStorage.getItem('is-dark-mode')
        setDarkMode(local === "true")
    }, [])

    useEffect(() => {
        const test = isDarkMode
        localStorage.setItem('is-dark-mode', String(test))
    }, [isDarkMode])

    const handleClick = () => {
        setDarkMode(!isDarkMode)
    }


    return (
        <div className="wrapper">
            <button
                style={{
                    border: 'none',
                    backgroundColor: isDarkMode ? 'black' : 'white',
                    color: isDarkMode ? 'white' : 'black',
                }}
                aria-label="Dark Mode"
                onClick={() => handleClick()}
            >
                Toggle
                {isDarkMode ? ' 🌑' : ' 🔆'}
            </button>
        </div>
    )
}