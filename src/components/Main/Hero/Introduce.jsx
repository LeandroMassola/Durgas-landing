import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import LogoDurgas from "../LogoDurgas";
export default function Introduce() {

    return (
        <section className="relative flex flex-col items-center bottom-5 justify-center min-h-screen">

            <div className="absolute  inset-0 inset-y-[-10%] bg-[url('/images/durgas-home.jpeg')] bg-no-repeat bg-center bg-cover bg-fixed filter brightness-80 contrast-70 opacity-80 "></div>
            
            {/* overlay para contraste */}
            <div className="absolute inset-0  z-0"></div>


            <div className="z-50 flex relative bottom-30 flex-col items-center justify-center">
                <LogoDurgas color="text-[var(--andorra)]"/>

                <h1 className=" bottom-50 z-10 text-[2rem] text-center text-[var(--afterglow)]">
                    Ensamble femenino de percusión latinoamericana
                </h1>

                <div className="flex gap-3 mt-4">
                    <FaYoutube size={35} color="red" />
                    <FaSpotify size={35} color="green" />
                    <FaInstagram size={35} color="pink" />
                </div>

            </div>
        </section>
    );
}