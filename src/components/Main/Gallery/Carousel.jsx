import { useEffect, useState } from "react";
import {motion} from "framer-motion"





export default function Carousel({scrollY, setScroll, setIsClicked, setImgPicked, images}) {

    
    function handleClicked(i) {
        setIsClicked(true)
        setImgPicked(i)
    }

    
    return(
        <motion.div name={"gallery"} initial={{opacity:0.5}} whileInView={{opacity:1}} transition={{duration:1, delay:0.7}} className="w-full h-full px-5 py-1 z-50 relative bg-gradient-to-b from-[var(--afterglow)] via-[var(--barelyPink)] to-[var(--andorra)]/5  ">
            <div className="absolute inset-0  w-full h-full bg-gradient-to-t from-[var(--andorra)]/80 via-[var(--sudanBrown)] to-[var(--spectraYellow)] mix-blend-overlay z-0  filter brightness-80 contrast-90 opacity-80 "/>
            <h1 className="text-center relative z-50 mt-20 text-5xl animate-glow bg-[var(--barelyPink)]/40 duration-1000 delay-200 p-5 rounded-lg">Galería Durga</h1>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:0.7}} className="grid z-50 grid-cols-3 gap-3 my-15">
                {images.map((image, i)=> {
                    return(
                        <motion.img initial={{scaleY:0, scaleZ:0}} whileInView={{scaleY:1, scaleZ:1}} transition={{duration:0.7, delay:0.5}} key={i} onClick={()=>handleClicked(i)} className={`z-50 rounded-lg shadow-[#F3E6C9] shadow-sm aspect-square w-[100%] h-auto`} id={i} src={image}/>
                    )
                })}
            </motion.div>
            
        </motion.div>


    )
}


