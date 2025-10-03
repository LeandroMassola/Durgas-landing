import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import LogoDurgas from "../LogoDurgas";
import {motion} from "framer-motion"

export default function Introduce({burgerClicked, setBurgerClicked}) {

    return (
        <motion.section initial={{opacity:0}} whileInView={{opacity:[0.3, 0.5, 0.7, 0.8, 1]}} transition={{duration:0.7, delay:0, ease:"easeInOut"}} className={`relative flex flex-col items-center bottom-5 justify-center min-h-screen my-10`}>

            <div className="absolute  inset-0 inset-y-[-10%] bg-[url('/images/durgas-home.png')] bg-no-repeat bg-center bg-cover bg-fixed filter brightness-80 contrast-70 opacity-80 "></div>
                

            {/* <div className=" inset-0 inset-y-[-10%] brightness-80 fixed contrast-70 opacity-80 ">
                <img src="/durgas-video-1.png" className="object-cover h-full z-0" alt="" />
            </div> */}
            {/* overlay para contraste */}
            <div className="absolute inset-0 opacity-75 inset-y-[-10%] z-0 bg-gradient-to-t from-[var(--andorra)]/80 via-[var(--sudanBrown)] to-[var(--spectraYellow)] mix-blend-overlay"></div>


            <div className="z-50 flex relative bottom-[30%] px-5 rounded-md flex-col items-center justify-between  pb-4  bg-[var(--lavenderLight)]/50">
                <LogoDurgas color="text-[var(--spectraYellow)]"/>

                <h1 className=" bottom-50 z-10 text-[2rem] text-center text-[var(--spectraYellow)]">
                    Ensamble femenino de percusión latinoamericana
                </h1>

                <div className="flex gap-3 mt-4 mb-30 lg:gap-6 lg:mt-10">
                    <motion.button whileHover={{scale:1.2, transition:{duration:0.1} }} transition={{duration:0.9}}>
                        <FaYoutube className="cursor-pointer" size={35} color="red" />
                    </motion.button>                  
                    <motion.button whileHover={{scale:1.2, transition:{duration:0.1} }} transition={{duration:0.9}}>
                        <FaSpotify className="cursor-pointer" size={35} color="green" />
                    </motion.button>                    
                    <motion.button whileHover={{scale:1.2, transition:{duration:0.1} }} transition={{duration:0.9}}>
                        <FaInstagram className="cursor-pointer" size={35} color="pink" />
                    </motion.button>
                </div>

            </div>
        </motion.section>
    );
}