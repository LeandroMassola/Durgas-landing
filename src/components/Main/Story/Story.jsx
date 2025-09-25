import { motion, useScroll, useTransform, useSpring, color } from "framer-motion";
export default function Story({parallaxY}) {

    const {scrollY} = useScroll();

            


    return(
        <section className=" pt-30 relative min-h-screen overflow-hidden">


            {/* Capa trasera */}
            <motion.div className="absolute h-[150%] inset-0 bg-gradient-to-b from-[var(--afterglow)] via-[var(--barelyPink)] to-[var(--andorra)]" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3, delay:0.7}} 
            />
                {/* className="absolute h-[150%] inset-0 bg-gradient-to-b from-[var(--afterglow)] via-[var(--barelyPink)] to-[var(--andorra)]" */}
                {/* className="absolute inset-0 h-[200%] bg-gradient-to-t from-[var(--andorra)]/40 via-[var(--sudanBrown)] to-[var(--spectraYellow)] mix-blend-overlay" */}


            {/* Capa media */}
            <motion.div className="absolute h-[200%] inset-0 bg-gradient-to-t from-[var(--andorra)]/40 via-[var(--sudanBrown)] to-[var(--spectraYellow)] mix-blend-overlay" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3, delay:3}}
            />

            {/* Capa alta */}

            <motion.div className="absolute h-[120%] inset-0 bg-[url('/durgas-abrazo.png')] bg-no-repeat bg-contain bg-center bg-fixed" initial={{opacity:0}} animate={{opacity:0.5}} transition={{duration:10, delay:5}}/>

            <article className="relative z-10">
                <div className="mb-20 text-[var(--andorra)]">
                    <h1 className="text-7xl text-center px-3">¿Quiénes son Las Durgas?</h1>
                </div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:false}} transition={{duration:7, delay:0.7}} className="flex flex-col gap-5 text-[var(--andorra)] text-2xl px-5 tracking-wider">
                    <p>
                        Nacido en la ciudad de Mar del Plata, el grupo surge a partir del encuentro de siete mujeres unidas por la pasión por el ritmo y la memoria de los pueblos. Sus primeros ensayos fueron pequeñas reuniones comunitarias que, con el tiempo, se transformaron en un ensamble sólido y potente.
                    </p>
                    <p>
                        La propuesta artística combina la riqueza de la percusión latinoamericana con influencias directas de las tradiciones originarias de Sudamérica. Tambores, semillas, maderas y cantos se entrelazan para crear un sonido que no solo busca hacer vibrar al público, sino también transmitir historias, luchas y celebraciones que forman parte de la identidad cultural de la región.

                    </p>
                    <p>
                        Cada presentación es un viaje sonoro que evoca rituales ancestrales y al mismo tiempo dialoga con lo contemporáneo. El ensamble apuesta a la fuerza colectiva, la diversidad de voces y la energía compartida, consolidándose como un proyecto musical que trasciende lo artístico para convertirse en un espacio de encuentro y resistencia.
                    </p>

                </motion.div>
            </article>
        </section>
    )
}

