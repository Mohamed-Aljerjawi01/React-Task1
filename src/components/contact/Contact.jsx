import styleContact from'./contact.module.css'

function Contact(){
    // JS COde 

    // HTML Code 
    return <>
        <div className={styleContact.one} id='contact'>
            <h2 className={styleContact.title}>Contact Me</h2>
            <span className={styleContact.span}>***</span>
            <form action="">
                <input type="text" placeholder='Full Name' name="fullName"/><br />
                <input type="email" placeholder='Email address' name="email"/><br />
                <input type="tel" placeholder='Phone number' name="phone"/><br />
                <textarea name="message" placeholder='Message'></textarea><br />
                <button type='submit' className={styleContact.btn}>Send</button>
            </form>
        </div>
    </>
}

export default Contact;