import { useEffect, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import LogoDurgas from "../LogoDurgas";
import EyesDurgas from "../EyesDurgas";
import {motion} from 'motion/react'

    export default function Header({isWelcomeVisible, burgerClicked, setBurgerClicked}) {


        

        function toggleBurger() {
            console.log("clickeando burger")
            setBurgerClicked(!burgerClicked)
        }



        return(


            <header className="h-10 z-10 ">
                {!isWelcomeVisible && 
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: [0.2, 0.3, 0.5, 0.7, 0.8, 1]}} transition={{duration:1.5, delay:0, ease:"easeInOut"}} className="flex flex-row-reverse z-50 justify-between ">
                
                        <button className={`p-5 z-50 `} onClick={toggleBurger}>

                            <RxHamburgerMenu
                                size={40}
                                className={`text-[var(--afterglow)] z-50 inset-y-5 inset-x-10/12 absolute transition-all duration-500 ease-in-out
                                ${burgerClicked ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
                                `}
                            />

                            {/* Ícono cruz */}
                            <CgClose
                                size={40}
                                className={`text-[var(--afterglow)] z-50 inset-y-5 inset-x-10/12 absolute transition-all duration-500 ease-in-out
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

                        

                        
                    </motion.div> 
                }

                
            </header>
            
            
        )
    }



    

    