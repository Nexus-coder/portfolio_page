import { forwardRef } from "react";

const Contact = forwardRef((props, contactRef) => {

    return (
        <section id="contact" ref={contactRef}>
            <h2>Contact me</h2>
            <p>
                I&apos;m always interested in working on new projects and bringing your idea to life.
            </p>
            <p><a href="mailto:muchiriandrew025@gmail.com">Email me</a></p>
        </section>
    )
})
Contact.displayName = 'Contact'

export default Contact;