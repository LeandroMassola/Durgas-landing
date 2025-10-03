import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import {Link} from "react-scroll"
import {motion} from "framer-motion"


export default function Burger({burgerClicked, setBurgerClicked}) {

    function toggleBurger() {
        console.log("clickeando burger")
        setBurgerClicked(!burgerClicked)
    }

    return(

        <nav className={`bg-black/30 w-full z-50 fixed h-[15%]  ${burgerClicked && "bg-transparent"}`}>

            <div>
                <button className={`p-5 z-[100] fixed self-center cursor-pointer`} onClick={toggleBurger}>

                <RxHamburgerMenu
                size={40}
                className={`text-[var(--afterglow)]  z-50 inset-y-10 inset-x-10/12 absolute transition-all duration-500 ease-in-out
                ${burgerClicked ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
                `}
                />

                <CgClose
                size={40}
                className={`text-[var(--afterglow)]  inset-y-10 inset-x-10/12 absolute transition-all duration-500 ease-in-out
                ${burgerClicked ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}
                `}
                />
            </button>
            </div>
            
            
            {burgerClicked && 
                <div className="z-50 absolute w-full flex items-center justify-center">
                    <ul className={`relative bottom-25  flex flex-col pr-5 mt-20 items-center justify-center gap-5 text-[var(--afterglow)] px-7.5 py-30 rounded-md bg-[var(--andorra)]/70  ${burgerClicked && "flex flex-col z-10 w-[100%] "}`}>

                        <motion.li whileHover={{scale:1.1, transition:{duration:0.1} }} transition={{duration:0.9}}>
                            <Link to="gallery"  className="text-2xl tracking-wider cursor-pointer" onClick={()=>setBurgerClicked(false)} smooth={true} duration={2000} >Galería</Link>
                        </motion.li>
                        <motion.li whileHover={{scale:1.1, transition:{duration:0.1} }} transition={{duration:0.9}}>
                            <Link to="history" whileHover={{scale:1.1, duration:2}} className="text-2xl tracking-wider cursor-pointer" onClick={()=>setBurgerClicked(false)} smooth={true} duration={2000}>Historia</Link>
                        </motion.li>
                        <motion.li whileHover={{scale:1.1, transition:{duration:0.1} }} transition={{duration:0.9}}>
                            <Link to="contact" whileHover={{scale:1.1, duration:2}} className="text-2xl tracking-wider cursor-pointer" onClick={()=>setBurgerClicked(false)} smooth={true} duration={2000}>Contacto</Link>
                        </motion.li>
                        
                    </ul>
                </div>
            }
            

        </nav>

        

        /* <div className="fixed top-0 left-0 w-full z-40 flex justify-between items-center">

            className={`absolute z-30 px-0 w-full gap-5 right-0 top-1 transition-all duration-750 ease-in-out  ${burgerClicked ? "fixed w-[100%] max-h-96 overflow-hidden opacity-100 pointer-events-auto z-40" : "max-h-0 opacity-0 overflow-hidden pointer-events-none z-30 "}`}
            className={`absolute z-30 px-0 w-full gap-5 right-0 top-1 transition-all duration-750 ease-in-out  ${burgerClicked ? "fixed w-[100%] max-h-96 overflow-hidden opacity-100 pointer-events-auto z-40" : "max-h-0 opacity-0 overflow-hidden pointer-events-none z-30 "}`}
            
            <button className={`p-5 z-[100] fixed`} onClick={toggleBurger}>

            <RxHamburgerMenu
                size={40}
                className={`text-[var(--afterglow)]  z-50 inset-y-10 inset-x-10/12 absolute transition-all duration-500 ease-in-out
                ${burgerClicked ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
                `}
            />

            <CgClose
                size={40}
                className={`text-[var(--afterglow)]  inset-y-10 inset-x-10/12 absolute transition-all duration-500 ease-in-out
                ${burgerClicked ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}
                `}
            />
            {!burgerClicked && (
                <div className="fixed top-0 left-0 w-full h-20 bg-black/40 z-10 opacity-80" />
            )}

            </button>
            
        </div> */

        
        
    )
}