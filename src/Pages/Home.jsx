import AOS from "aos";
import 'aos/dist/aos.css';
import Layout from "../Layout/Layout";
import styles from "../CustomCSS/HomeBanner.module.css";
import about_styles from "../CustomCSS/about.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBook, faCoffee, faPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import myProfile from "../assets/profile_1.jpg"
import CountUp from "react-countup";

const Home = () => {

    AOS.init();



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
                            <img data-aos="slide-right" data-aos-duration="2000" src={myProfile} alt="profile picture" className="md:py-[30px]"></img>
                        </div>
                        <div className="basis-1/1 md:basis-2/3 flex flex-wrap flex-row gap-5 justify-center">
                            <h3 data-aos="flip-up" data-aos-duration="2000" className={`${about_styles.aboutH3} pt-[30px] md:text-[30px] md:tracking-widest inline-block `}>About Me!</h3>
                            <p data-aos="fade-down" data-aos-duration="2000" className="pl-[5px] pr-[5px] sm:pt-[10px] md:pt-[30px] md:pr-[5px] text-[10px] sm:text-[13px] md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                <Link to="/service">
                    <button className="btn btn-sm btn-info mx-auto block my-[10px]">Services i provide</button>
                </Link>

            </Layout>
        </>
    )
}

export default Home 