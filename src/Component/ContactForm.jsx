
import mystyles from '../CustomCSS/myContact.module.css'


const ContactForm = () => {

    //{`${styles.contact_div} py-[50px]`} 
    //className={styles.h1} 

    return (
        <>
            <div style={{ backgroundColor: `#444444` }} className='text-center'>
                <h1 className={`${mystyles.h1ForContact} sm:text-2xl sm:tracking-[2px] md:text-3xl md:tracking-[3px] pt-[75px] `} >CONTACT NOW !</h1>
                <p style={{ color: `#8C8C8C` }} className='pt-[20px] pb-[30px] pl-[5px] pr-[5px] sm:pl-[10px] sm:pr-[10px] text-sm sm:text-sm md:text-sm md:pl-[100px] md:pr-[100px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>

            <form style={{ backgroundColor: `#444444`, width: `100%`, paddingBottom: `20px` }}>

                <input type="text" style={{ backgroundColor: `#272727` }} id="fname" name="firstname" placeholder="Name" className="pt-[10px] pb-[10px] block mx-auto w-[90%] text-center text-[#999999] md:tracking-wide" />
                <label for="fname" className='text-[#ABABAB] block text-center py-[5px]'>Please enter your name</label>

                <input type="email" id="email" name="email" placeholder="Email" style={{ backgroundColor: `#272727` }} className="pt-[10px] pb-[10px] block mx-auto w-[90%] text-center text-[#999999] md:tracking-wide" required />
                <label for="email" className='text-[#ABABAB] block text-center py-[5px]'>Please enter your email</label>

                <input type="text" id="subject" name="subject" placeholder="Subject" style={{ backgroundColor: `#272727` }} className="pt-[10px] pb-[10px] block mx-auto w-[90%] text-center text-[#999999] md:tracking-wide" required />
                <label for="subject" className='text-[#ABABAB] block text-center py-[5px]'>Please enter your message subject</label>
                <textarea rows="5" id="mail" name="mail" placeholder="Write something.." style={{ backgroundColor: `#272727` }} className='w-[90%] pt-[10px] block mx-auto text-center'></textarea>
                {/* <label for="mail" className='text-[#ABABAB] block text-center py-[5px]'>Write your message</label> */}
                
                <button className='btn btn-sm btn-info block mx-auto my-[20px]'>Send Message</button>

            </form>
        </>
    )
}

export default ContactForm