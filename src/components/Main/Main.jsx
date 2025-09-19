import { useState } from "react";
import Header from "./Header/Header";
import Welcome from "./Hero/Welcome";
import LogoDurgas from "./LogoDurgas";
import Introduce from "./Hero/Introduce";
import Story from "./Story/Story";




export default function Main() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true)

    return(
        <div className="bg-transparent" >
            <Header isWelcomeVisible={isWelcomeVisible}/>
            <Welcome isWelcomeVisible={isWelcomeVisible} setIsWelcomeVisible={setIsWelcomeVisible}/>
            <Introduce/>
            <Story/>
        </div>
    )
}