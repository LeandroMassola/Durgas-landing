import { useEffect, useState, useRef } from "react";
import {motion} from "framer-motion"
import Introduce from "./Hero/Introduce.jsx";
import Story from "./Story/Story.jsx";
import Carousel from "./Gallery/Carousel.jsx";
import { MdKeyboardArrowRight as ArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft as ArrowLeft } from "react-icons/md";
import { useScroll } from "motion/react";
import Form from "./Contact/Form";
import Burger from "./Header/Burger";




export default function Main() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(false)

    const [isClicked, setIsClicked] = useState(false);
    const [imgPicked, setImgPicked] = useState(0)
    /* const [scrollY, setScrollY] = useState(null) */
    const [scroll, setScroll] = useState(0)
    const [parallaxY, setParallaxY] = useState(0)
    const [burgerClicked, setBurgerClicked] = useState(false);


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
        <div className={`absolute`}>
            {(isClicked || burgerClicked) &&(
                <div className="absolute inset-0 bg-gray-500/50 backdrop-blur-sm z-50"></div>
            )}
            
            
            {/* {burgerClicked && <NavBar burgerClicked={burgerClicked} setBurgerClicked={setBurgerClicked}/>} */}
            <Burger burgerClicked={burgerClicked} setBurgerClicked={setBurgerClicked}/>

            <div className="relative z-40 ">
                {/* <Header burgerClicked={burgerClicked} setBurgerClicked={setBurgerClicked} isWelcomeVisible={isWelcomeVisible} /> */}
                {/* <Welcome isWelcomeVisible={isWelcomeVisible} setIsWelcomeVisible={setIsWelcomeVisible}/> */}
                <Introduce burgerClicked={burgerClicked} setBurgerClicked={setBurgerClicked} />
                <Story parallaxY={parallaxY}/>
                <Carousel images={images} scrollY={scrollY} setScroll={setScroll} imgPicked={imgPicked} setImgPicked={setImgPicked} isClicked={isClicked} setIsClicked={setIsClicked} />
                <Form/>
            </div>

            {isClicked && imgPicked !== null && 
                <div className="fixed inset-0 z-50 items-center flex justify-center flex-col ">

                    <div className="absolute inset-0 bg-[var(--lavenderLight)]/50 backdrop-blur-sm" onClick={toggleClick}/>

                    <div className="relative inset-0 z-50 items-center flex justify-center gap-3 lg:gap-20">
                        <motion.button whileHover={{x:"-10px"}} className="cursor-pointer"><ArrowLeft onClick={prevImg} className="text-[var(--afterglow)]  lg:size-25  " size={35}/></motion.button>
                        <img className="max-w-[75vw] max-h-[90vh] z-50 rounded-xl shadow-2xl lg:max-w-[85vw]" src={images[imgPicked]} alt="img"/>
                        <motion.button whileHover={{x:"10px"}} className="cursor-pointer"><ArrowRight onClick={nextImg} className="text-[var(--afterglow)]  lg:size-25 " size={35}/></motion.button>
                    </div>
                    {/* <div className="flex w-[80%] z-50 mt-10 justify-around" >
                            
                    </div> */}
                </div>
            }
        </div>
    )
}