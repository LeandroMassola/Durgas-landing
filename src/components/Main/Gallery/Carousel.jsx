import { useEffect, useState } from "react";
import {motion} from "framer-motion"





export default function Carousel({scrollY, setScroll, setIsClicked, setImgPicked, images}) {

    
    function handleClicked(i) {
        setIsClicked(true)
        setImgPicked(i)
    }

    
    return(
        <motion.div name={"gallery"} initial={{opacity:0.5}} whileInView={{opacity:1}} transition={{duration:1, delay:0.7}} className="w-full pb-50 h-full px-5 py-1 z-50 relative bg-gradient-to-b from-[var(--afterglow)] via-[var(--barelyPink)] to-[var(--andorra)]/5  ">
            <div className="absolute inset-0  w-full h-full bg-gradient-to-t from-[var(--andorra)]/80 via-[var(--sudanBrown)] to-[var(--spectraYellow)] mix-blend-overlay z-0  filter brightness-80 contrast-90 opacity-80 "/>
            <h1 className="text-center text-[var(--andorra)] relative z-50 mt-20 text-5xl animate-glow bg-[var(--barelyPink)]/40 duration-1000 delay-200 p-5 rounded-lg sm:text-6xl md:text-7xl">Galería Durga</h1>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, delay:0.7}} className="grid z-50 grid-cols-3  gap-3 my-15 auto-rows-[150px] lg:gap-20 xl:gap-40 xl:px-35">
                {images.map((image, i)=> {
                    return(
                        <motion.img initial={{scaleY:0, scaleZ:0}} 
                        whileInView={{scaleY:1, scaleZ:1}} 
                        transition={{duration:0.7, delay:0.2}} 
                        key={i} onClick={()=>handleClicked(i)} 
                        className={`z-50 rounded-lg shadow-[#F3E6C9] shadow-sm aspect-auto w-full h-auto lg:h-auto lg:cursor-pointer`} id={i} src={image}
                        whileHover={{scale:1.2, transition:{duration:0.5, delay:0.3}, filter:" grayscale(100%)" }}
                        />
                    )
                })}
            </motion.div>
            
        </motion.div>


    )
}


