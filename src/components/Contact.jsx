import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; //Add email functionality for contacts section

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_dhq7ivl
// service_mrpjwhn
// xGeV3t0U3QUfSyY3P

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value} = e.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


// template_dhq7ivl
// service_mrpjwhn
// xGeV3t0U3QUfSyY3P
    emailjs.send('service_mrpjwhn','template_dhq7ivl',
    {
      from_name: form.name,
      to_name: 'David',
      from_email: form.email,
      to_email: 'davidmadueke@gmail.com',
      message: form.message,
    },
    'xGeV3t0U3QUfSyY3P'
    )
    .then( ()=> {
        setLoading(false);
        alert('Thank you very much for your message. I will get back to you as soon as possible');

        setForm({
          name: '',
          email: '',
          message: '',
        })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong. My email is davidmadueke@gmail.com if you want to contact me using another platform.')
    }
    
    )
  }

  const [loading, setLoading] = useState(false);
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium "
            />
          </label>
          <button 
            type = "submit"
            className="bg-tertiary py-3 px-8 outline-dashed w-fit text-white font-semibold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas/>
          
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")