import { motion } from "motion/react";
import LogoDurgas from "../LogoDurgas";
import { useEffect } from "react";

export default function Welcome({ isWelcomeVisible, setIsWelcomeVisible }) {
    useEffect(() => {
        if(isWelcomeVisible) {
            setTimeout(() => {
            setIsWelcomeVisible(false)
            }, 5000)
        return () => {
            clearTimeout()
        }
        }
        
    }, [])

    return (

        <div className={`h-[100vh] bg-transparent ${!isWelcomeVisible ? "hidden" : "block"}`}>
            {isWelcomeVisible && 
            <motion.div  initial={{ opacity: 0 }} animate={{ opacity: [0.2, 0.5, 0.7, 1], transition: { default: { type: 'spring' }, opacity: { ease: 'linear', duration: 2.5 } } }}>
                <LogoDurgas color="text-[var(--andorra)]" />
            </motion.div>}
        </div>



    );
}
