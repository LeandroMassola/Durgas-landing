import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Welcome from "./Hero/Welcome";
import LogoDurgas from "./LogoDurgas";
import Introduce from "./Hero/Introduce";
import Story from "./Story/Story";
import Carousel from "./Gallery/Carousel";
import { style } from "motion/react-client";




export default function Main() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true)

    const [isClicked, setIsClicked] = useState(false);
    const [imgPicked, setImgPicked] = useState('#')
    const [scrollY, setScrollY] = useState(null)
    const [parallaxY, setParallaxY] = useState(0)

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
        const y = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                setParallaxY(y);
                ticking = false;
        });
        ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // valor inicial
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(()=> {
        if(isClicked) return;
        if(scrollY==null) return
        window.scrollTo({top:scrollY, behavior:"smooth"})

    }, [isClicked, scrollY])

    function toglleClicks() {
        setIsClicked(false)
        
    }

    return(
        <div className={`${isClicked?"fixed overflow-hidden": "relative"}`}>
            {isClicked && (
                <div className="absolute inset-0 bg-gray-500/50 backdrop-blur-sm z-20"></div>
            )}

            <div className="relative z-10">
                <Header isWelcomeVisible={isWelcomeVisible} />
                <Welcome isWelcomeVisible={isWelcomeVisible} setIsWelcomeVisible={setIsWelcomeVisible}/>
                <Introduce />
                <Story parallaxY={parallaxY}/>
                <Carousel scrollY={scrollY} setScrollY={setScrollY} imgPicked={imgPicked} setImgPicked={setImgPicked} isClicked={isClicked} setIsClicked={setIsClicked} />
            </div>

            {isClicked && imgPicked && 
                <div onClick={toglleClicks} className="fixed inset-0 z-50 items-center flex justify-center">
                    <img className="max-w-[90vw] max-h-[90vh] z-50 rounded-xl shadow-2xl" src={imgPicked} alt="img"/>
                </div>
            }
        </div>
    )
}