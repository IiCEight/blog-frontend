import { motion } from "framer-motion"
import styles from "./Transition.module.css"

function Transition() {
    const animate = {
        initial : {
            x: "0%"
        },
        end : {
            x: "100%",
            transition : {
                ease : "easeInOut",
                duration: 0.5
            }
        },
        exit : {
            x: ["-100%", "0%"],
            transition : {
                ease : "easeOut",
                duration: 0.4
            }
        }
    }
    
    return (
        // <div className={styles.container}>
            <motion.div className={styles.transitionLay}
                variants={animate}
                initial = "initial"
                animate = "end"
                exit = "exit"
                >
            </motion.div>
        // </div>
    )
}

export default Transition