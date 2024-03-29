
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../Layout/Layout"
import { faChartSimple, faCity } from "@fortawesome/free-solid-svg-icons"
import { faCodepen, faDropbox, faSoundcloud, faWindows } from "@fortawesome/free-brands-svg-icons";


const Services = () => {
    return (
        <>
            <Layout title="Service">
                <section className="container mx-auto my-[50px]">
                    <div className="flex flex-row flex-wrap gap-6 justify-center text-center">
                        <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out">
                            <p><FontAwesomeIcon icon={faCity} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                            <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Graphic Design</h3>
                            <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid minus deserunt consequatur corrupti praesentium porro fugit similique adipisci tempore!</p>
                        </div>
                        <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out">
                            <p><FontAwesomeIcon icon={faDropbox} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                            <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Web Design</h3>
                            <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid minus deserunt consequatur corrupti praesentium porro fugit similique adipisci tempore!</p>
                        </div>
                        <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out">
                            <p><FontAwesomeIcon icon={faWindows} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                            <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">UI/UX Design</h3>
                            <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid minus deserunt consequatur corrupti praesentium porro fugit similique adipisci tempore!</p>
                        </div>
                        <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out">
                            <p><FontAwesomeIcon icon={faCodepen} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                            <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">App Design & Develop</h3>
                            <p className="text-[#6C757D] px-[3px] font-bold text-[12px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid minus deserunt consequatur corrupti praesentium porro fugit similique adipisci tempore!</p>
                        </div>
                        <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out">
                            <p><FontAwesomeIcon icon={faChartSimple} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                            <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">Business Analysis</h3>
                            <p className="text-[#6C757D] px-[3px] font-bold text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid minus deserunt consequatur corrupti praesentium porro fugit similique adipisci tempore!</p>
                        </div>
                        <div className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out">
                            <p><FontAwesomeIcon icon={faSoundcloud} className="text-[50px] sm:text-[30px] md:text-[50px] py-[20px] text-orange-600" /></p>
                            <h3 className="pb-[15px] font-bold sm:text-[20px] md:text-xl">SEO Marketing</h3>
                            <p className="text-[#6C757D] px-[3px] font-bold text-[12px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid minus deserunt consequatur corrupti praesentium porro fugit similique adipisci tempore!</p>
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    )
}

export default Services