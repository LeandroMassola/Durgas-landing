import * as yup from "yup"

const validations = yup.object({
    name: yup.string().required("El nombre es obligatorio"),
    surname: yup.string().required("El apellido es obligatorio"),
    mail: yup.string().email("Email inválido").required("El email es obligatorio"),
    subject: yup.string().required("Define el asunto de contacto"),
    message: yup.string().min(10, "El mensaje debe tener al menos diez caracteres").required("Escribe un mensaje para Las Durgas"),
}).required();

export default validations