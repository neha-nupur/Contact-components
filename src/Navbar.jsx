import React from "react"

export default function Navbar(){
    return (
        <nav>
            <h3 className="nav--logo_text">Contact Components</h3>
            <a className="nav--menu" href="#">Home</a>
            <a className="nav--menu" href="#">About</a>
            <a className="nav--menu" href="https://www.linkedin.com/in/nehanupur/">Contact Me</a>
            <a className="nav--menu" href="#">Blogs</a>
        </nav>
    )
}