import Layout from "../Layout/Layout"
import styles from "../CustomCSS/Work.module.css"
import $ from 'jquery'
import { useEffect, useState } from "react"

import webOne from "../assets/webOne.jpg"
import webTwo from "../assets/webTwo.jpg"
import webThree from "../assets/webThree.jpg"
import graphics1 from "../assets/graphics1.jpg"
import graphics2 from "../assets/graphics2.jpg"
import graphics3 from "../assets/graphics3.jpg"
import web1 from "../assets/web1.jpg"
import web2 from "../assets/web2.jpg"
import web3 from "../assets/web3.jpg"
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"


const Work = () => {

  // Initialize state to store the active filter
  const [activeFilter, setActiveFilter] = useState('all');
  // Handle filter button clicks
  const handleFilterClick = (event) => {
    const filterValue = event.target.getAttribute('data-filter');
    setActiveFilter(filterValue);
  };

  // Filter gallery items based on the active filter
  const filterGalleryItems = () => {
    const items = document.querySelectorAll('[class*="basis-1/4"]');
    if (activeFilter === 'all') {
      for (const item of items) {
        item.style.display = 'block';
      }
    } else {
      for (const item of items) {
        if (item.classList.contains(activeFilter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    }
  };

  // Effect hook to call filter function on initial render and filter change
  useEffect(() => {
    filterGalleryItems();
  }, [activeFilter]);


  return (
    <>

      <Layout title={"Work"}>
        <section className={`mt-[100px] mx-auto pb-[100px] ${styles.workSection}`}>

          <div className="flex flex-row flex-wrap text-center">
            <div className="basis-1/1 py-3 mx-auto">
              <button
                className={`${styles.filterButton} btn btn-sm btn-success mx-[4px] my-[4px] sm:mx-[5px] sm:my-[4px] md:mx-[10px] md:my-[5px] ${activeFilter === 'all' ? styles.activeFilter : ''}`}
                data-filter="all"
                onClick={handleFilterClick}
              >
                All Items
              </button>
              <button
                className={`${styles.filterButton} btn btn-sm btn-success mx-[4px] my-[4px] sm:mx-[5px] sm:my-[4px] md:mx-[10px] md:my-[5px] ${activeFilter === 'one' ? styles.activeFilter : ''}`}
                data-filter="one"
                onClick={handleFilterClick}
              >
                Web-design
              </button>
              <button
                className={`${styles.filterButton} btn btn-sm btn-success mx-[4px] my-[4px] sm:mx-[5px] sm:my-[4px] md:mx-[10px] md:my-[5px] ${activeFilter === 'two' ? styles.activeFilter : ''}`}
                data-filter="two"
                onClick={handleFilterClick}
              >
                Graphics-design
              </button>
              <button
                className={`${styles.filterButton} btn btn-sm btn-success mx-[4px] my-[4px] sm:mx-[5px] sm:my-[4px] md:mx-[10px] md:my-[5px] ${activeFilter === 'three' ? styles.activeFilter : ''}`}
                data-filter="three"
                onClick={handleFilterClick}
              >
                Web development
              </button>

              <button
                className={`${styles.filterButton} btn btn-sm btn-success mx-[4px] my-[4px] sm:mx-[5px] sm:my-[4px] md:mx-[10px] md:my-[5px] ${activeFilter === 'four' ? styles.activeFilter : ''}`}
                data-filter="four"
                onClick={handleFilterClick}
              >
                Photography
              </button>

            </div>
          </div>


          <div className="flex flex-row flex-wrap text-center justify-center gap-1">
            <div className={`basis-1/4 md:basis-1/4 text-center three ${styles.galleryItem}`}><img src={web1} alt="web1 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center one ${styles.galleryItem}`}><img src={webOne} alt="web one image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center two ${styles.galleryItem}`}><img src={graphics1} alt="graphics1 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center three ${styles.galleryItem}`}><img src={web2} alt="web2 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center one ${styles.galleryItem}`}><img src={webTwo} alt="web two image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center two ${styles.galleryItem}`}><img src={graphics2} alt="graphics2 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center three ${styles.galleryItem}`}><img src={web3} alt="web3 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center one ${styles.galleryItem}`}><img src={webThree} alt="web Three image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center two ${styles.galleryItem}`}><img src={graphics3} alt="graphics3 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center four ${styles.galleryItem}`}><img src={photo1} alt="photo1 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center four ${styles.galleryItem}`}><img src={photo2} alt="photo2 image"></img></div>
            <div className={`basis-1/4 md:basis-1/4 text-center four ${styles.galleryItem}`}><img src={photo3} alt="photo3 image"></img></div> 
          </div>
        </section>
      </Layout>
    </>
  )
}







export default Work