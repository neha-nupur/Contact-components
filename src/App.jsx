import React from "react"
import Contact from "./Contact"
import Navbar from "./Navbar"
import Credit from "./Credit"


function App() {
    return (
        <>
        <div>
            <Navbar />
        </div>
        <div className="contacts">
            <Contact 
                img="./images/Software Developer.png" 
                name="Software Developer"
                phone="(212) 555-1234"
                email="contact@softwaredev.dev"
            />
            <Contact 
                img="./images/Graphic Designer.png"
                name="Graphic Designer"
                phone="(212) 555-2345"
                email="gd@contactdesigner.com"
            />
            <Contact 
                img="./images/Web Developer.png"
                name="Web Developer"
                phone="(212) 555-4567"
                email="thewebdeveloper@coldmail.com"
            />
            <Contact 
                img="./images/Data Analytics.png"
                name="Data Analytics"
                phone="(0800) 345-0914"
                email="hello@contactus.com"
            />
        </div>
        <Credit/>
        </>
    )
}

export default App