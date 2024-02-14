import about_styles from "../CustomCSS/about.module.css";
import about_styles_2 from "../CustomCSS/service.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuilding,
  faChartSimple,
  faCity,
  faCode,
  faDatabase,
  faGear,
  faHome,
  faPalette,
  faRightLeft,
  faRocket,
  faServer,
  faStar,
  faTerminal,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faCss3,
  faDropbox,
  faJs,
  faNodeJs,
  faReact,
  faSoundcloud,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ProjectComp = () => {
  AOS.init();
  return (
    <>
      <section className="container mx-auto my-[50px]">
        <div className="text-center pb-[50px]">
          <h3
            data-aos="flip-up"
            data-aos-duration="2000"
            className={`${about_styles_2.serviceH3} pt-[30px] md:text-[30px] md:tracking-widest inline-block`}
          >
            {" "}
            Live Projects
          </h3>
        </div>

        <div className="flex flex-row flex-wrap gap-6 justify-center text-center">
          <div
            className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <a
              href="https://sanity-sifat-pak-drama.vercel.app/"
              target="_blank"
              className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out"
            >
              Movie Finder
            </a>
          </div>
          <div
            className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <a
              href="https://weather-lovat-two.vercel.app/"
              target="_blank"
              className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out"
            >
              Weather App
            </a>
          </div>
          <div
            className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <a
              href="https://api-2-qr.vercel.app/"
              target="_blank"
              className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out"
            >
              QR Code Generator
            </a>
          </div>
          <div
            className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <a
              href="https://flex-project-1.vercel.app/"
              target="_blank"
              className="px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out"
            >
              Sample Portfolio
            </a>
          </div>
          <div
            className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <a
              href="https://sifat-bootstrap-1.vercel.app/"
              target="_blank"
              className=" px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out"
            >
              Business Web
            </a>
          </div>
          <div
            className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <a
              href="https://sifat-real-estet-1.vercel.app/"
              target="_blank"
              className="px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out"
            >
              Real State
            </a>
          </div>
          <div
            className="basis-1/1 sm:basis-1/3 md:basis-1/4 py-[10px] hover:border-2 hover:border-white hover:bg-slate-200 hover:transition-all duration-500 ease-in-out"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            <a
              href="https://sifat-portfolio-1.vercel.app/"
              target="_blank"
              className="ml-[5px] px-[20px] py-[5px] hover:bg-gray-500 hover:text-white hover:transition-all duration-500 ease-in-out"
            >
              Bootstrap
            </a>
          </div>
        </div>
        <div className="text-center pb-[50px]">
          <h3
            data-aos="flip-up"
            data-aos-duration="2000"
            className={`${about_styles_2.serviceH3} pt-[30px] md:text-[30px] md:tracking-widest inline-block`}
          >
            {" "}
            Other Projects
          </h3>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="basis-1/1 mx-[10px] w-[100vw] text-center">
            <p className="">
              <FontAwesomeIcon icon={faArrowRight} className="mr-[10px]" />
              E-commerce
              <Link
                to="https://github.com/mdsifaterabbi/EcommerceMERNSifat2.git"
                target="_blank"
              >
                <button className="btn btn-sm btn-outline inline bg-purple-500 ml-[10px] my-[5px]">
                  Github Link
                </button>
              </Link>
            </p>
            <p className="">
              <FontAwesomeIcon icon={faArrowRight} className="mr-[10px]" />
              Agency Website
              <Link
                to="https://github.com/mdsifaterabbi/AgencySoft.git"
                target="_blank"
              >
                <button className="btn btn-sm btn-outline inline bg-purple-500 ml-[10px] my-[5px]">
                  Github Link
                </button>
              </Link>
            </p>
            <p className="">
              <FontAwesomeIcon icon={faArrowRight} className="mr-[10px]" />
              Fund Raising App
              <Link
                to="https://github.com/mdsifaterabbi/PaymentGatewaySSL.git"
                target="_blank"
              >
                <button className="btn btn-sm btn-outline inline bg-purple-500 ml-[10px] my-[5px]">
                  Github Link
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectComp;
