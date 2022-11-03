import React from "react"
import ReactDOM from "react-dom/client"

import Main from "./Main"
import Avatar from "./Avatar"
import Footer from "./Footer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <div className="Card">
        <Avatar />
        <Main />
        <Footer />
    </div>
)