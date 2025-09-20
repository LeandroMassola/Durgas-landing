import { useState } from "react";


const images = [
    "images/durgas-1.jpg",
    "images/durgas-2.jpg",
    "images/durgas-3.jpg",
    "images/durgas-4.jpg",
    "images/durgas-5.jpg",
    "images/durgas-6.jpg",
    "images/durgas-7.jpg",
    "images/durgas-8.jpg",
    "images/durgas-9.jpg",
]



export default function Carousel({scrollY, setScrollY, setIsClicked, setImgPicked}) {
    function handleClicked(e) {
        setIsClicked(true)
        setImgPicked(e.target.src)
        setScrollY(window.scrollY)
        console.log(e.target)
    }

    
    return(
        <section>
            <div className="grid grid-cols-3">
                {images.map((image, i)=> {
                    return(
                        <img key={i} onClick={handleClicked} className={``} id={i} src={image}/>
                    )
                })}
            </div>
            {/* <div className={`${!isClicked ? "hidden" : "fixed inset-0 z-50 items-center flex justify-center"}`}>
                <img className="max-w-[90vw] max-h-[90vh] z-50 rounded-xl shadow-2xl" src={imgPicked}/>
            </div> */}
        </section>


    )
}

{/* <div className="absolute h-full w-full">
                                <img id={i} src={image}/>   
                            </div> */}