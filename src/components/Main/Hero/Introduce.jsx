import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import LogoDurgas from "../LogoDurgas";
import {motion} from "framer-motion"

export default function Introduce({burgerClicked, setBurgerClicked}) {

    return (
        <motion.section initial={{opacity:0}} whileInView={{opacity:[0.3, 0.5, 0.7, 0.8, 1]}} transition={{duration:0.7, delay:0, ease:"easeInOut"}} className={`relative flex flex-col items-center bottom-5 justify-center min-h-screen`}>

            <div className="absolute  inset-0 inset-y-[-10%] bg-[url('/durgas-video-1.png')] bg-no-repeat bg-center bg-cover bg-fixed filter brightness-80 contrast-70 opacity-80 "></div>
            
            {/* overlay para contraste */}
            <div className="absolute inset-0 opacity-75 inset-y-[-10%] z-0 bg-gradient-to-t from-[var(--andorra)]/80 via-[var(--sudanBrown)] to-[var(--spectraYellow)] mix-blend-overlay"></div>


            <div className="z-50 flex relative bottom-30 flex-col items-center  pb-4 justify-center bg-[var(--andorra)]/40">
                <LogoDurgas color="text-[var(--spectraYellow)]"/>

                <h1 className=" bottom-50 z-10 text-[2rem] text-center text-[var(--spectraYellow)]">
                    Ensamble femenino de percusión latinoamericana
                </h1>

                <div className="flex gap-3 mt-4">
                    <FaYoutube size={35} color="red" />
                    <FaSpotify size={35} color="green" />
                    <FaInstagram size={35} color="pink" />
                </div>

            </div>
        </motion.section>
    );
}