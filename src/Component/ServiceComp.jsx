import about_styles from "../CustomCSS/about.module.css"
import about_styles_2 from "../CustomCSS/service.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faChartSimple, faCity, faCode, faDatabase, faGear, faPalette, faRocket, faServer, faStar, faTerminal, faWind } from "@fortawesome/free-solid-svg-icons"
import { faCodepen, faCss3, faDropbox, faJs, faNodeJs, faReact, faSoundcloud, faWindows } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import 'aos/dist/aos.css';

const ServiceComp = () => {
    AOS.init();
    return (
        <>
            <section className="container mx-auto my-[50px]">
                <div className="text-center pb-[50px]"><h3 data-aos="flip-up" data-aos-duration="2000" className={`${about_styles_2.serviceH3} pt-[30px] md:text-[30px] md:tracking-widest inline-block`}>Services</h3></div>

                <div className="flex flex-row flex-wrap gap-6 justify-center text-center">
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-right" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faBuilding} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Web Design</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Designing websites that feel intuitive, not intrusive, Crafting pixels that empower people, Where beauty meets function: user-centered web design</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-up" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faCode} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Web Development</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Building robust, scalable web apps that drive success,Crafting code that speaks your brand's language, From idea to execution: full-stack web dev solutions</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-left" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faPalette} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">UI/UX Design</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Designing users first, every click of the way, UI/UX design that connects & converts crafting interfaces  making technology invisible & impact undeniable</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-left" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faGear} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Bootstrap</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Streamlining web development w/ the power & convenience of BS, Craft sleek, responsive websites w/ Bootstrap efficiency, From concept to launch, Bootstrap: your shortcut to stunning web experiences</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-down" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faCss3} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Tailwind</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px]">Crafting lightning-fast websites with the utility-first power of TW, Effortlessly build custom, responsive UIs with Tailwind's flexible toolkit, Pixel-perfect websites, built with the efficiency of Tailwind's atomic classes</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-right" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faReact} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">ReactJS</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px] ">Building dynamic, interactive UIs that come alive with React, Turning complex UI challenges into elegant solutions with React's component-based approach using modularity and reusability</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-right" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faNodeJs} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">NodeJS</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px] ">Building scalable, high-performance server-side applications with Node.js, Unleashing the power of JavaScript for real-time, data-driven web experiences</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-up" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faRocket} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">ExpressJS</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px] ">Crafting lightning-fast APIs & web apps w/ minimalist power, Building efficient, scalable backends that handle any request with ease using Express.js</p>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-left" data-aos-duration="2000">
                        <p><FontAwesomeIcon icon={faDatabase} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                        <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Mongdb</h3>
                        <p className="text-[#6C757D] px-[3px] font-bold text-[12px] ">Taming data dragons with MongoDB's flexible, scalable document database, Unlocking the power of NoSQL: crafting agile, data-driven solutions with MongoDB</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ServiceComp