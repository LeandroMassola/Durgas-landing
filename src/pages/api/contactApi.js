
import { Resend } from 'resend';
export const prerender = false;


export async function POST({request}) {
    

    try {
        const req = await request.json()

        const resend = new Resend(import.meta.env.RESEND_API_KEY)
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "leandromassola.lm@gmail.com",
            subject: req.subject,
            html: `<p>${req.message}</p><p>De: ${req.name} ${req.surname} (${req.mail})</p>`
        })
        return new Response(
            JSON.stringify({success:true, data}), {status: 200, headers:{"Content-Type": "application/json"}}
        )
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error }), {
        status: 500,
        });
    }
    

    
}