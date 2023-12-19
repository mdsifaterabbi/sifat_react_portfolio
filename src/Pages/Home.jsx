import AOS from "aos";
import 'aos/dist/aos.css';
import Layout from "../Layout/Layout";
import styles from "../CustomCSS/HomeBanner.module.css";
import about_styles from "../CustomCSS/about.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars, faBook, faChevronUp, faCoffee, faPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import myProfile from "../assets/profile_1.jpg";
import myExactPic from "../assets/profile_2.jpg";
import CountUp from "react-countup";
import ServiceComp from "../Component/ServiceComp";
import WorkComp from "../Component/WorkComp";
import ContactForm from "../Component/ContactForm";
import { useState } from "react";
import { useEffect } from "react";


const Home = () => {

    AOS.init();

    const pdfUrl = "../CV/SIFAT_CV.pdf";

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 900) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });

        return () => window.removeEventListener('scroll', () => { });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Layout title={"Home"}>

                <section className="container-fluid">
                    <div className={styles.myBanner}>
                        <div className={styles.banner_contents}>
                            <h1 className={`${styles.bannerH1} text-white text-2xl text-center font-poppins`}>Hi, I'M AN ENGINEER</h1>
                            {/* <h1 className={styles.myTypeWriter_1}>JS DEVELOPER</h1> */}
                            <h1 className={`${styles.myTypeWriter_1} text-[20px] sm:text-[24px] md:text-[28px] pt-[30px]`}>JS DEVELOPER</h1>
                            <p className="text-white text-center text-lg mb-[50px]">based in Dhaka, Bangladesh.</p>
                            <Link to="/work" className="bg-yellow-300 text-black px-3 py-2 font-bold hover:bg-yellow-600 hover:transition ease-linear delay-150">View My Works</Link>
                            <FontAwesomeIcon icon={faArrowDown} className={styles.myArrow} />
                        </div>

                    </div>
                </section>
                <section className="py-[30px] md:px-[50px]">
                    <div className="flex flex-row flex-wrap">
                        <div className="basis-1/1 sm:basis-1/1 md:basis-1/3">
                            <img data-aos="slide-right" data-aos-duration="2000" src={myExactPic} alt="profile picture" className="md:py-[30px]"></img>
                           
                            <div class="flex md:flex-row sm:flex-col items-center">
                                <a href={pdfUrl} download="SIFAT_CV_downloaded.pdf">
                                    <button className="btn btn-info mt-[10px] px-4 sm:px-6 md:px-8">Download My CV</button>
                                </a>
                            </div>
                        </div>
                        <div className="basis-1/1 md:basis-2/3 flex flex-wrap flex-row gap-5 justify-center">
                            <h3 data-aos="flip-up" data-aos-duration="2000" className={`${about_styles.aboutH3} pt-[30px] md:text-[30px] md:tracking-widest inline-block `}>About Me!</h3>
                            <p data-aos="fade-down" data-aos-duration="2000" className="pl-[50px] pr-[50px] sm:pt-[10px] md:pt-[30px] md:pr-[5px] text-[10px] sm:text-[13px] md:text-[16px]">Experienced and highly motivated developer with a Bachelor of Science in Computer Science.Proficient in HTML,CSS,Javascript, jQuery, PHP with expertise in responsive design with backenddevelopment and Bootstrap, Tailwind CSS framework and ReactJS, NodeJS, Express JS with Mongodb mySQL database. Well-versed with UI/UX design principles and processes strong analytical and problem-solving skills.</p>
                            <div data-aos="slide-right" data-aos-duration="1600" className="basis-1/1 sm:basis-1/1 md:basis-1/4 text-center border py-[20px] px-[10px]">
                                <p data-aos="slide-right" data-aos-duration="3600"><FontAwesomeIcon icon={faCoffee} className="text-red-700 text-3xl" /></p>
                                <p data-aos="slide-down" data-aos-duration="1600">
                                    <CountUp start={0} end={350} delay={0} duration={10}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} className="text-green-600 font-semibold text-xl" />
                                            </div>
                                        )}
                                    </CountUp>
                                </p>
                                <span className="text-[12px] sm:text-[14px] md:text-xl">Designs</span>
                            </div>
                            <div data-aos="slide-down" data-aos-duration="800" className="basis-1/1 sm:basis-1/1 md:basis-1/4 border text-center py-[20px] px-[10px]">
                                <p data-aos="slide-up" data-aos-duration="3600"><FontAwesomeIcon icon={faBook} className="text-red-700 text-3xl" /></p>
                                <p data-aos="slide-down" data-aos-duration="1600">
                                    <CountUp start={0} end={450} delay={0} duration={10}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} className="text-green-600 font-semibold text-xl" />
                                            </div>
                                        )}
                                    </CountUp>
                                </p>
                                <span className="text-[12px] sm:text-[14px] md:text-xl">Photos</span>
                            </div>
                            <div data-aos="slide-left" data-aos-duration="1600" className="basis-1/1 sm:basis-1/1 md:basis-1/4 border text-center py-[20px] px-[10px]">
                                <p data-aos="slide-left" data-aos-duration="3600"><FontAwesomeIcon icon={faPlane} className="text-red-700 text-3xl" /></p>
                                <p data-aos="slide-down" data-aos-duration="3600">
                                    <CountUp start={0} end={550} delay={0} duration={10}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} className="text-green-600 font-semibold text-xl" />
                                            </div>
                                        )}
                                    </CountUp>
                                </p>
                                <span className="text-[12px] sm:text-[14px] md:text-xl">Awards</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <ServiceComp />
                </section>

                <section>
                    <WorkComp />
                </section>

                <section className="container mx-auto mb-[30px]">
                    <ContactForm />
                </section>
                {showButton && (
                    <button data-aos="slide-left" data-aos-duration="2000" className="fixed bottom-[20px] right-[20px] flex items-center justify-center py-2 px-4 rounded-md text-white bg-blue-500" onClick={scrollToTop}>
                        <FontAwesomeIcon icon={faChevronUp} className="text-white text-2xl hover:text-orange-500 hover:transition-all duration-500 ease-in-out" />
                    </button>
                )}
            </Layout>

        </>
    )
}

export default Home 