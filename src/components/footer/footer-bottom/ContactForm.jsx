import React from "react"
import contactFormStyle from "./contactForm.module.scss"

const ContactForm = () => {
    return (

        
        <form className={contactFormStyle.contact_form}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />

                

                    <div className={contactFormStyle.full}>
                        <label>
                            <input className={contactFormStyle.input} placeholder="Name" type="text" name="name" />
                           

                        </label>
                    </div>
                    <div className={contactFormStyle.full}>
                        <label>
                            <input className={contactFormStyle.input} placeholder="Email" type="text" name="name" />
                            
                        </label>
                    </div>
                
            
                
                    
                    <div className={contactFormStyle.full}>
                        <label>
                            <textarea className={contactFormStyle.input} placeholder="Message" type="text" name="name" />
                            
                        </label>
                    </div>
                    <div className={contactFormStyle.full}>
                        <input className={contactFormStyle.btn} type="submit" value="Send Message" />
                        
                    </div>
                
            

        </form>
    
    )
}
export default ContactForm