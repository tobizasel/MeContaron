import React, { useState } from "react";
import './paginas.css'
import Seguidos from "./Seguidos";
import Tweet from "./Tweet";
import Agregar from "./Agregar";

const Main = () => {

    const [tab,setTab] = useState("seguidos")

    return(
        <>
        <div className="tabs">
            <div className={tab == "seguidos" ? "tab active" : "tab"} onClick={() => setTab("seguidos")}>
                Seguidos
            </div>
            <div className={tab == "agregar" ? "tab active" : "tab"} onClick={() => setTab("agregar")}>
                Agregar
            </div>
            <div className={tab == "tweet" ? "tab active" : "tab"} onClick={()  => setTab("tweet")}>
                tweet
            </div>
        </div>
        
            {tab === "seguidos" && <Seguidos text="Esta es la pagina seguidos"/>}
            {tab === "agregar" && <Agregar text="Esta es la pagina agregar"/>}
            {tab === "tweet" && <Tweet text="Esta es la pagina tweet" />}
        </>
    )
}

export default Main