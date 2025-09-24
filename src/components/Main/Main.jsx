import { useEffect, useState, useRef } from "react";
import Header from "./Header/Header";
import Welcome from "./Hero/Welcome";
import LogoDurgas from "./LogoDurgas";
import Introduce from "./Hero/Introduce";
import Story from "./Story/Story";
import Carousel from "./Gallery/Carousel";
import { MdKeyboardArrowRight as ArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft as ArrowLeft } from "react-icons/md";
import { useScroll } from "motion/react";
import Form from "./Contact/Form";




export default function Main() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true)

    const [isClicked, setIsClicked] = useState(false);
    const [imgPicked, setImgPicked] = useState(0)
    /* const [scrollY, setScrollY] = useState(null) */
    const [scroll, setScroll] = useState(0)
    const [parallaxY, setParallaxY] = useState(0)

    const {scrollY} = useScroll()

    const images = [
    "images/durgas-1.jpg",
    "images/durgas-2.jpg",
    "images/durgas-3.jpg",
    "images/durgas-4.jpg",
    "images/durgas-5.jpg",
    "images/durgas-6.jpg",
    "images/durgas-7.jpg",
    "images/durgas-8.jpg",
    "images/durgas-9.jpg",
]

    /* useEffect(() => {
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
    }, []); */

    useEffect(()=> {
        if (isClicked) {
            document.body.style.overflow = "hidden";
        } else {
                document.body.style.overflow = "";
        }
        return scrollY.on("change", (latest)=> {
            if(!isClicked) {
                setScroll(latest)
            }
        })
    }, [scrollY, isClicked])
    
    
    /* useEffect(()=> {
        if(isClicked) return;
       

    }, [isClicked, scroll]) */

    

    function toggleClick() {
        setIsClicked(false)
        window.scrollTo({top:scroll, behavior:"smooth"})
    }

    function nextImg() {
        
        setImgPicked(imgPicked=> imgPicked + 1)
        console.log(imgPicked)
    }

    function prevImg() {
        setImgPicked(imgPicked=> imgPicked - 1)
        console.log(imgPicked)
    }

    return(
        <div className={`relative`}>
            {isClicked && (
                <div className="absolute inset-0 bg-gray-500/50 backdrop-blur-sm z-20"></div>
            )}

            <div className="relative z-10">
                <Header isWelcomeVisible={isWelcomeVisible} />
                <Welcome isWelcomeVisible={isWelcomeVisible} setIsWelcomeVisible={setIsWelcomeVisible}/>
                <Introduce />
                <Story parallaxY={parallaxY}/>
                <Carousel images={images} scrollY={scrollY} setScroll={setScroll} imgPicked={imgPicked} setImgPicked={setImgPicked} isClicked={isClicked} setIsClicked={setIsClicked} />
                <Form/>
            </div>

            {isClicked && imgPicked !== null && 
                <div className="fixed inset-0 z-50 items-center flex justify-center flex-col">

                    <div className="absolute inset-0 bg-[var(--lavenderLight)]/50 backdrop-blur-sm" onClick={toggleClick}/>

                    <div className="relative inset-0 z-50 items-center flex justify-center flex-col">
                        <img className="max-w-[90vw] max-h-[90vh] z-50 rounded-xl shadow-2xl" src={images[imgPicked]} alt="img"/>
                    </div>
                    <div className="flex w-[80%] z-50 mt-10 justify-around" >
                            <ArrowLeft onClick={prevImg} className="text-[var(--afterglow)]  " size={35}/>
                            <ArrowRight onClick={nextImg} className="text-[var(--afterglow)] " size={35}/>
                    </div>
                </div>
            }
        </div>
    )
}