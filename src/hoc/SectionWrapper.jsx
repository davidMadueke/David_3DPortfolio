import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => 
    function HOC(){
        return(
            <motion.section
                variants={staggerContainer()}
                initial = "hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.25}} //Fix the viewport, Show framer section once and animate it for an amount of time of 0.25 seconds
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component/>
            </motion.section>
        )
    }

export default SectionWrapper