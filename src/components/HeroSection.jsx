import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css"
import { motion } from "framer-motion";

function HeroSection() {

    const presenceAnimate = {
        initial: {
            x :  -100,
            opacity : 0,
        },
        end : {
            x :  0,
            opacity : 1,
            transition : {
                duration : 1,
                // staggerChildren: 0.3
            }
        }
    }
    return (
        <motion.div className = {styles.container}
            variants={presenceAnimate}
            initial = "initial"
            animate = "end"
        >
            <h1 className={styles.title}>
                Hello, friends! This is true &nbsp; 
                <span className = {styles.textStyle}> Art</span>&nbsp; !
                <p>Welcome to my blog website ! Wish you have fun!</p>
            </h1>
            <button className={styles.btn}>
                <Link to = "/catalogue" className= {styles.link}>
                    Enter Now !
                </Link>
            </button>
        </motion.div>
    )
}

export default HeroSection