import { useEffect, useState } from "react";
import {motion} from "framer-motion"





export default function Carousel({scrollY, setScrollY, setIsClicked, setImgPicked, images}) {

    useEffect(()=> {
        setScrollY(window.scrollY)
    },[])

    function handleClicked(i) {
        setIsClicked(true)
        setImgPicked(i)
    }

    
    return(
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3, delay:0.7}} className="w-full h-full px-5 py-1 z-50 relative bg-[var(--lavenderLight)]">
            <div className="absolute inset-0 w-full h-full bg-[var(--andorra)]/40 z-0"/>
            <div className="grid z-50 grid-cols-3 gap-3 my-15">
                {images.map((image, i)=> {
                    return(
                        
                        <img key={i} onClick={()=>handleClicked(i)} className={`z-50`} id={i} src={image}/>
                            
                        
                        
                    )
                })}
            </div>
            {/* <div className={`${!isClicked ? "hidden" : "fixed inset-0 z-50 items-center flex justify-center"}`}>
                <img className="max-w-[90vw] max-h-[90vh] z-50 rounded-xl shadow-2xl" src={imgPicked}/>
            </div> */}
        </motion.div>


    )
}

{/* <div className="absolute h-full w-full">
                                <img id={i} src={image}/>   
                            </div> */}