import { useState } from "react"
import {motion} from "framer-motion"
import validations from "./validationForm"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

export default function Form() {

    const [statusSend, setStatusSend] = useState(null)

    /* const [formData, setFormData] = useState({
        name:"",
        surname:"",
        mail:"",
        subject:"",
        message:""
    }) */

        const { handleSubmit, reset, control, setError, formState:{errors, isSubmitting},} = useForm({
            resolver:yupResolver(validations), defaultValues: {
                name: "",
                surname: "",
                mail: "",
                subject:"",
                message: "",
            }
        })

    function handleChange(e) {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    async function submitForm(data) {

        e.preventDefault()
        setStatusSend("Enviando ...")


        try {
            const response = await fetch("/api/contactApi", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }) 

            const json = await response.json()

            if(response.ok && json.success) {
                setStatusSend("¡Mensaje enviado con éxito!");
                reset();
            } else {
                if (json?.error?.field) {
                    setError(json.error.field, { type: "server", message: json.error.message });
                    setStatusSend(" Error al enviar");
                } else {
                        setStatusSend("Error al enviar el mensaje");
                }
            }
        } catch (error) {
            setStatusSend(` Error de conexión: ${error.message}`);
        }
        
            
        
    }

    return(
        <section name={"contact"} className=" absolute w-full bg-gradient-to-b from-[var(--afterglow)] via-[var(--afterglow)]/20 to-[var(--afterglow)]/40 py-10 text-[var(--andorra)] xl:grid xl:grid-cols-2 xl:w-full">

            <div className="absolute inset-0 bg-[url('/durgas-mail.png')] bg-cover bg-center bg-no-repeat bg-fixed z-0"/>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--lavenderLight)]/30 via-[var(--spectraYellow)]/20 to-[var(--afterglow)]/40 py-10 text-[var(--afterglow)] w-full h-full z-0"/>
            <h1 className="text-center text-5xl z-50 relative mt-20 text-[var(--afterglow)] sm:text-6xl md:text-7xl xl:self-center xl:pb-10">Escribínos!</h1>

            {statusSend != null && <h3>{statusSend}</h3>}
            <form className="relative mt-20 flex flex-col justify-center items-center" method="POST" action="#" onSubmit={handleSubmit(submitForm)}>
                <div  className="flex flex-col justify-center items-center gap-3 w-full h-full">
                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="name">Nombre
                        <Controller 
                        name={"name"} 
                        control={control} 
                        render={({ field }) => (
                            <motion.input {...field} whileFocus={{backgroundColor: "var(--afterglow)", boxShadow: "0 0 0 5px var(--afterglow)",}}whileHover={{outline: "2px solid var(--afterglow)", boxShadow: "0 0 0 3px var(--afterglow)", backgroundColor: "var(--afterglow)",}}className="w-[80%] ml-5 py-3 px-5 outline-none text-[var(--andorra)] border-none  bg-gray-300 rounded-md" type="text" placeholder="Nombre"/>)}
                        />
                        

                    </label>
                    {errors.name && <p className="text-xl mt-5 text-[var(--spectraYellow)] motion-safe:animate-pulse">{errors.name.message}</p>}

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="surname">Apellido
                        <Controller
                        name={"surname"} 
                        control={control} 
                        render={({ field }) => (
                            <motion.input {...field} whileFocus={{backgroundColor: "var(--afterglow)", boxShadow: "0 0 0 5px var(--afterglow)",}}whileHover={{outline: "2px solid var(--afterglow)", boxShadow: "0 0 0 3px var(--afterglow)", backgroundColor: "var(--afterglow)",}}className="w-[80%] ml-5 py-3 px-5 outline-none text-[var(--andorra)] border-none  bg-gray-300 rounded-md" type="text" placeholder="Apellido"/>)}
                        />
                            
                    </label>
                    {errors.surname && <p className="text-xl mt-5 text-[var(--spectraYellow)] motion-safe:animate-pulse">{errors.surname.message}</p>}

                    

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="mail">Mail
                        <Controller 
                        name={"mail"} 
                        control={control} 
                        render={({ field }) => (
                            <motion.input {...field} whileFocus={{backgroundColor: "var(--afterglow)", boxShadow: "0 0 0 5px var(--afterglow)",}}whileHover={{outline: "2px solid var(--afterglow)", boxShadow: "0 0 0 3px var(--afterglow)", backgroundColor: "var(--afterglow)",}}className="w-[80%] ml-5 py-3 px-5 outline-none text-[var(--andorra)] border-none  bg-gray-300 rounded-md" type="text" placeholder="Mail"/>)}
                        />
                        
                    </label>
                    {errors.mail && <p className="text-xl mt-5 text-[var(--spectraYellow)] motion-safe:animate-pulse">{errors.mail.message}</p>}

                    

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="subject">Asunto
                        <Controller 
                        name={"subject"} 
                        control={control} 
                        render={({ field }) => (
                            <motion.input {...field} whileFocus={{backgroundColor: "var(--afterglow)", boxShadow: "0 0 0 5px var(--afterglow)",}}whileHover={{outline: "2px solid var(--afterglow)", boxShadow: "0 0 0 3px var(--afterglow)", backgroundColor: "var(--afterglow)",}}className="w-[80%] ml-5 py-3 px-5 outline-none text-[var(--andorra)] border-none  bg-gray-300 rounded-md" type="text" placeholder="Asunto"/>)}
                            />      

                    </label>
                    {errors.subject && <p className="text-xl mt-5 text-[var(--spectraYellow)] motion-safe:animate-pulse">{errors.subject.message}</p>} 

                    

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="message">Mensaje
                        <Controller 
                        name={"message"} 
                        control={control} 
                        render={({ field }) => (
                            <motion.input {...field} whileFocus={{backgroundColor: "var(--afterglow)", boxShadow: "0 0 0 5px var(--afterglow)",}}whileHover={{outline: "2px solid var(--afterglow)", boxShadow: "0 0 0 3px var(--afterglow)", backgroundColor: "var(--afterglow)",}}className="w-[80%] ml-5 py-3 px-5 outline-none text-[var(--andorra)] border-none  bg-gray-300 rounded-md" type="text" placeholder="Mensaje"/>)}
                        />        
                        
                    </label>
                    {errors.message && <p className="text-xl mt-5 text-[var(--spectraYellow)] motion-safe:animate-pulse">{errors.message.message}</p>}

                    

                </div>

                <div className="flex px-15 mt-20 justify-center gap-20 items-center">
                    <motion.button whileHover={{scale:1.2, backgroundColor:"var(--afterglow)", color:"var(--andorra)", borderColor:"var(--andorra)"}} className="text-xl w-full border-1 px-5 py-1 pt-2.5 mt-5 mr-12 rounded-sm cursor-pointer bg-[var(--andorra)] text-[var(--afterglow)] active:bg-[var(--afterglow)] active:text-[var(--andorra)]" type="submit">Enviar</motion.button>
                    <motion.button whileHover={{scale:1.2, backgroundColor:"var(--andorra)", color:"var(--afterglow)"}} className="text-xl w-full border-1 px-5 py-1 pt-2.5 mt-5 rounded-sm cursor-pointer bg-[var(--afterglow)] active:bg-[var(--andorra)] active:text-[var(--afterglow)]" type="reset">Limpiar</motion.button>
                </div>
            </form>
        </section>
    )
}