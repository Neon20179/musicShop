import React, { useState, useEffect, useRef } from 'react'

const LIGHT_THEME = {
    textColor: "#001700",
    bgColor: "#fff",
    supportBgColor: "#f7f7f7",

    greyColor: "#cccccc",
    maskColor: "204, 204, 204"
}

const DARK_THEME = {
    textColor: "#fff",
    bgColor: "#121212",
    supportBgColor: "#1f1f1f",

    greyColor: "#1b1b1b",
    maskColor: "0, 0, 0"
}

const ThemeToggle = () => {
    const defaultThemeColor = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    const [theme, setTheme] = useState(defaultThemeColor ? "light" : "dark")
    let moonIcon = useRef(null)
    let sunIcon = useRef(null)

    useEffect(() => {
        if (theme === "light") {
            moonIcon.style.transform = 'translateY(60px)'
            sunIcon.style.transform = 'none'

            document.documentElement.style.setProperty('--main-bg-color', LIGHT_THEME.bgColor);
            document.documentElement.style.setProperty('--header-bg-color', LIGHT_THEME.headerBgColor);
            document.documentElement.style.setProperty('--main-text-color', LIGHT_THEME.textColor);
            document.documentElement.style.setProperty('--support-bg-color', LIGHT_THEME.supportBgColor);
            document.documentElement.style.setProperty('--mask-color', LIGHT_THEME.maskColor);
            document.documentElement.style.setProperty('--grey', LIGHT_THEME.greyColor);
        } else if (theme === "dark") {
            moonIcon.style.transform = 'none'
            sunIcon.style.transform = 'translateY(60px)'

            document.documentElement.style.setProperty('--main-bg-color', DARK_THEME.bgColor);
            document.documentElement.style.setProperty('--header-bg-color', DARK_THEME.headerBgColor);
            document.documentElement.style.setProperty('--main-text-color', DARK_THEME.textColor);
            document.documentElement.style.setProperty('--support-bg-color', DARK_THEME.supportBgColor);
            document.documentElement.style.setProperty('--mask-color', DARK_THEME.maskColor);
            document.documentElement.style.setProperty('--grey', DARK_THEME.greyColor);
        }
    })

    return (
        <div className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <div className="moon-icon" ref={el => { moonIcon = el }}><img src="/static/media/moon_icon.png" /></div>
            <div className="sun-icon" ref={el => { sunIcon = el }}><img src="/static/media/sun_icon.png" /></div>
        </div>
    )
}

export default ThemeToggle