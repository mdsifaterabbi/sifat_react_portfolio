import { Helmet } from "react-helmet"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

const Layout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Navbar />
            <main> 
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout