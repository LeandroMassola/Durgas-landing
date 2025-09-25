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
        <section className=" absolute w-full bg-gradient-to-b from-[var(--afterglow)] via-[var(--afterglow)]/20 to-[var(--afterglow)]/40 py-10 text-[var(--andorra)]">

            <div className="absolute inset-0 bg-[url('/durgas-mail.png')] bg-cover bg-center bg-no-repeat bg-fixed"/>
            <h1 className="text-center text-4xl ">Escribínos</h1>

            {statusSend != null && <h3>{statusSend}</h3>}
            <form className="relative mt-20" method="POST" action="#" onSubmit={handleSubmit}>
                <div  className="flex flex-col justify-center items-center gap-3 w-full h-full">
                    <label className="flex flex-col text-center" htmlFor="name">Nombre
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--sudanBrown)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="text" name="name" placeholder="Nombre" />
                    </label>

                    <label className="flex flex-col text-center" htmlFor="surname">Apellido
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--sudanBrown)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="text" name="surname" placeholder="Apellido" />
                    </label>

                    <label className="flex flex-col text-center" htmlFor="mail">Mail
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--sudanBrown)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="email" name="mail" placeholder="Mail" />
                    </label>

                    <label className="flex flex-col text-center" htmlFor="subject">Asunto
                        <input className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--sudanBrown)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} type="text" name="subject" placeholder="Asunto" />
                    </label>

                    <label className="flex flex-col text-center" htmlFor="message">Mensaje
                        <textarea className="w-[80%] ml-5 py-3 px-5 outline-1 outline-[var(--sudanBrown)] text-[var(--sudanBrown)]  bg-gray-100 rounded-md focus:drop-shadow-sm focus:drop-shadow-[#AC6C29] focus:ouline-5 focus:outline-white focus:bg-white" onChange={handleChange} name="message" placeholder="Mensaje" />
                    </label>
                </div>

                <div className="flex px-15 justify-around items-center">
                    <button className="border-1 px-3 py-1 pt-2.5 mt-5 rounded-sm bg-[var(--andorra)] text-[var(--afterglow)] active:bg-[var(--afterglow)] active:text-[var(--andorra)]" type="submit">Enviar</button>
                    <button className="border-1 px-3 py-1 pt-2.5 mt-5 rounded-sm active:bg-[var(--andorra)] active:text-[var(--afterglow)]" type="reset">Limpiar</button>
                </div>
            </form>
        </section>
    )
}