import Layout from "../Layout/Layout"
import styles from "../CustomCSS/Work.module.css"
import $ from 'jquery'
import { useEffect, useState } from "react"

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
            <div className={`basis-1/4 md:basis-1/4 bg-orange-600 text-center py-6 three ${styles.galleryItem}`}>One</div>
            <div className={`basis-1/4 md:basis-1/4 bg-purple-600 text-center py-6 one ${styles.galleryItem}`}>Two</div>
            <div className={`basis-1/4 md:basis-1/4 bg-green-600 text-center py-6 two ${styles.galleryItem}`}>Three</div>
            <div className={`basis-1/4 md:basis-1/4 bg-pink-600 text-center py-6 three ${styles.galleryItem}`}>Four</div>
            <div className={`basis-1/4 md:basis-1/4 bg-slate-600 text-center py-6 one ${styles.galleryItem}`}>Five</div>
            <div className={`basis-1/4 md:basis-1/4 bg-sky-600 text-center py-6 two ${styles.galleryItem}`}>Six</div>
            <div className={`basis-1/4 md:basis-1/4 bg-blue-900 text-center py-6 three ${styles.galleryItem}`}>Seven</div>
            <div className={`basis-1/4 md:basis-1/4 bg-orange-600 text-center py-6 one ${styles.galleryItem}`}>Eight</div>
            <div className={`basis-1/4 md:basis-1/4 bg-orange-600 text-center py-6 two ${styles.galleryItem}`}>Nine</div>
            <div className={`basis-1/4 md:basis-1/4 bg-orange-600 text-center py-6 four ${styles.galleryItem}`}>Ten</div>
            <div className={`basis-1/4 md:basis-1/4 bg-orange-600 text-center py-6 four ${styles.galleryItem}`}>Eleven</div>
            <div className={`basis-1/4 md:basis-1/4 bg-orange-600 text-center py-6 four ${styles.galleryItem}`}>Twelve</div> 
          </div>
        </section>
      </Layout>
    </>
  )
}







export default Work