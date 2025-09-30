import { useState } from "react"


export default function Form() {

    const [statusSend, setStatusSend] = useState(null)

    const [formData, setFormData] = useState({
        name:"",
        surname:"",
        mail:"",
        subject:"",
        message:""
    })

    function handleChange(e) {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()
        setStatusSend("Enviando ...")

        fetch("/api/contactApi", {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if (data.success) {
                setStatusSend("Mensaje enviado con éxito")
                setFormData({
                    name:"",
                    surname:"",
                    mail:"",
                    subject:"",
                    message:"",
                })
            } else {
                setStatusSend("Eror al enviar el mensaje")
            }
            
        })
        .catch((err)=> {
            setStatusSend(`Error al enviar: ${err}`)
        })
    }

    return(
        <section name={"contact"} className=" absolute w-full bg-gradient-to-b from-[var(--afterglow)] via-[var(--afterglow)]/20 to-[var(--afterglow)]/40 py-10 text-[var(--andorra)] xl:grid xl:grid-cols-2 xl:w-full">

            <div className="absolute inset-0 bg-[url('/durgas-mail.png')] bg-cover bg-center bg-no-repeat bg-fixed z-0"/>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--lavenderLight)]/30 via-[var(--spectraYellow)]/20 to-[var(--afterglow)]/40 py-10 text-[var(--afterglow)] w-full h-full z-0"/>
            <h1 className="text-center text-5xl z-50 relative mt-20 text-[var(--afterglow)] sm:text-6xl md:text-7xl xl:self-center xl:pb-10">Escribínos!</h1>

            {statusSend != null && <h3>{statusSend}</h3>}
            <form className="relative mt-20 flex flex-col justify-center items-center" method="POST" action="#" onSubmit={handleSubmit}>
                <div  className="flex flex-col justify-center items-center gap-3 w-full h-full">
                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="name">Nombre
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--andorra)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="text" name="name" placeholder="Nombre" />
                    </label>

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="surname">Apellido
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--andorra)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="text" name="surname" placeholder="Apellido" />
                    </label>

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="mail">Mail
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--andorra)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="email" name="mail" placeholder="Mail" />
                    </label>

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="subject">Asunto
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--andorra)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="text" name="subject" placeholder="Asunto" />
                    </label>

                    <label className="flex text-[var(--afterglow)] tracking-widest font-extralight text-lg flex-col text-center sm:text-xl" htmlFor="message">Mensaje
                        <textarea className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--andorra)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} name="message" placeholder="Mensaje" />
                    </label>
                </div>

                <div className="flex px-15 mt-20 justify-center gap-20 items-center">
                    <button className="text-xl w-full border-1 px-5 py-1 pt-2.5 mt-5 mr-12 rounded-sm bg-[var(--andorra)] text-[var(--afterglow)] active:bg-[var(--afterglow)] active:text-[var(--andorra)]" type="submit">Enviar</button>
                    <button className="text-xl w-full border-1 px-5 py-1 pt-2.5 mt-5 rounded-sm bg-[var(--afterglow)] active:bg-[var(--andorra)] active:text-[var(--afterglow)]" type="reset">Limpiar</button>
                </div>
            </form>
        </section>
    )
}