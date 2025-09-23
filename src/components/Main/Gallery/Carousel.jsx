import { useEffect, useState } from "react";
import {motion} from "framer-motion"





export default function Carousel({scrollY, setScroll, setIsClicked, setImgPicked, images}) {

    
    function handleClicked(i) {
        setIsClicked(true)
        setImgPicked(i)
    }

    
    return(
        <motion.div initial={{opacity:0.5}} whileInView={{opacity:1}} transition={{duration:3, delay:0.7}} className="w-full h-full px-5 py-1 z-50 relative bg-[var(--lavenderLight)]">
            <div className="absolute inset-0 w-full h-full bg-[var(--andorra)]/40 z-0"/>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3, delay:0.7}} className="grid z-50 grid-cols-3 gap-3 my-15">
                {images.map((image, i)=> {
                    return(
                        <motion.img initial={{scaleY:0.5, scaleZ:0.5}} whileInView={{scaleY:1, scaleZ:1}} transition={{duration:3, delay:0.7}} key={i} onClick={()=>handleClicked(i)} className={`z-50 rounded-lg`} id={i} src={image}/>
                    )
                })}
            </motion.div>
            
        </motion.div>


    )
}


