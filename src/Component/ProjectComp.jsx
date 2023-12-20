import about_styles from "../CustomCSS/about.module.css"
import about_styles_2 from "../CustomCSS/service.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBuilding, faChartSimple, faCity, faCode, faDatabase, faGear, faHome, faPalette, faRightLeft, faRocket, faServer, faStar, faTerminal, faWind } from "@fortawesome/free-solid-svg-icons"
import { faCodepen, faCss3, faDropbox, faJs, faNodeJs, faReact, faSoundcloud, faWindows } from "@fortawesome/free-brands-svg-icons";


import AOS from "aos";
import 'aos/dist/aos.css';

const ProjectComp = () => {
    AOS.init();
    return (
        <>
            <section className="container mx-auto my-[50px]">
                <div className="text-center pb-[50px]"><h3 data-aos="flip-up" data-aos-duration="2000" className={`${about_styles_2.serviceH3} pt-[30px] md:text-[30px] md:tracking-widest inline-block`}>Projects</h3></div>

                <div className="flex flex-row flex-wrap gap-6 justify-center text-center">
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-right" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="https://sanity-sifat-pak-drama.vercel.app/" target="_blank" className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out">Movie Finder</a>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-down" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="https://weather-lovat-two.vercel.app/" target="_blank" className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out">Weather App</a>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-left" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="https://api-2-qr.vercel.app/" target="_blank" className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out">QR Code Generator</a>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-left" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="https://flex-project-1.vercel.app/" target="_blank" className="px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out">Sample Portfolio</a>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-up" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="https://sifat-bootstrap-1.vercel.app/" target="_blank" className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out">Business Web</a>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-right" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="https://sifat-real-estet-1.vercel.app/" target="_blank" className="px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out">Real State</a>
                    </div>
                    <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out" data-aos="fade-right" data-aos-duration="2000">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="https://sifat-portfolio-1.vercel.app/" target="_blank" className="ml-[5px] px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out">Bootstrap</a>
                    </div>


                </div>

            </section>
        </>
    )
}

export default ProjectComp