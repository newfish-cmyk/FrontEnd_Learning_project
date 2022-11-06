import React from "react"
import {ThemeContextConsumer} from "./themeContext"

export default function Header(props) {
    return (
        <ThemeContextConsumer>
            {context =>(
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}