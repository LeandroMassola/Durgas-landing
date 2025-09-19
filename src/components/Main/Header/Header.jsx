import { useEffect, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import LogoDurgas from "../LogoDurgas";
import EyesDurgas from "../EyesDurgas";
import {motion} from 'motion/react'

    export default function Header({isWelcomeVisible}) {

        const [burgerClicked, setBurgerClicked] = useState(false);

        

        function toggleBurger() {
            setBurgerClicked(!burgerClicked)
        }



        return(


            <header className="h-10 z-10">
                {!isWelcomeVisible && 
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.5, 0.7, 1], transition: { default: { type: 'spring' }, opacity: { ease: 'linear', duration: 2 } } }} className="flex flex-row-reverse justify-between ">
                
                        <button className={`p-5 z-50 `} onClick={toggleBurger}>

                            <RxHamburgerMenu
                                size={40}
                                className={`text-[var(--afterglow)] inset-y-5 inset-x-10/12 absolute transition-all duration-500 ease-in-out
                                ${burgerClicked ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
                                `}
                            />

                            {/* Ícono cruz */}
                            <CgClose
                                size={40}
                                className={`text-[var(--afterglow)] inset-y-5 inset-x-10/12 absolute transition-all duration-500 ease-in-out
                                ${burgerClicked ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}
                                `}
                            />

                            {/* {burgerClicked ? <CgClose className="text-amber-300 delay-700" size={40}/> : <RxHamburgerMenu className="text-amber-300" size={40}/>} */}

                        </button>
                            {/* <RxHamburgerMenu onClick={toggleBurger} size={40} className={`text-amber-300 ${burgerClicked ? "hidden" : "block"}`} />
                            <CgClose onClick={toggleBurger} size={40} className={`text-amber-300 ${burgerClicked ? 'block' : 'hidden'}`} /> */}
                        

                        <div className="w-[35%] z-30 flex pl-5 pb-3">
                                {/* <img src="/logo-durgas-edit.svg" className="text-amber-300" alt="logoDurgas"/> */}
                                <EyesDurgas color="text-[var(--afterglow)]" />
                                
                        </div>

                        <nav className={`absolute z-30 px-0  gap-5 right-0 top-1 transition-all duration-750 ease-in-out  ${burgerClicked ? "flex justify-between max-h-96 opacity-100 " : "max-h-0 opacity-0 flex justify-between"}`}>

                            <ul className={`flex flex-col pr-5 mt-20 items-center justify-center gap-5 text-[var(--text-color)] px-7.5 py-15 rounded-md bg-[rgba(39,30,26,0.5)]  ${burgerClicked && "flex flex-col "}`}>

                                <li>
                                    <a href="">Galería</a>
                                </li>
                                <li>
                                    <a href="">Historia</a>
                                </li>
                                <li>
                                    <a href="">Contacto</a>
                                </li>
                                
                            </ul>
                        </nav>

                        
                    </motion.div> 
                }

                
            </header>
            
            
        )
    }



    

    