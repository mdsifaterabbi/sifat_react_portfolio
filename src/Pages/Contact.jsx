import Layout from "../Layout/Layout"
import styles from '../CustomCSS/myContact.module.css'
import ContactForm from "../Component/ContactForm"

const Contact = () => {
    return (
        <>
            <Layout title={"Contact"}>
                <section>
                    {/* <div className={`${styles.contact_div} py-[50px]`}> */}
                    <div className="w-[100%] sm:w-[90%] sm:mx-auto md:w-[80%] md:mx-auto py-[50px]">
                        <ContactForm />
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Contact

