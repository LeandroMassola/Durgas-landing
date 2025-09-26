import { useEffect, useState } from "react"
import LogoDurgas from "../LogoDurgas";
import EyesDurgas from "../EyesDurgas";
import {motion} from 'motion/react'

    export default function Header({isWelcomeVisible, burgerClicked, setBurgerClicked}) {

        return(


            <header className="h-auto relative z-10 bg-black/40 ">
                {!isWelcomeVisible && 
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: [0.2, 0.3, 0.5, 0.7, 0.8, 1]}} transition={{duration:0.7, delay:0, ease:"easeInOut"}} className="flex z-50 ">
                        <div className="w-[35%] z-30 flex pl-5 pb-3">
                                <EyesDurgas color="text-[var(--afterglow)]" />
                        </div> 
                    </motion.div> 
                }
            </header>
            
            
        )
    }



    

    