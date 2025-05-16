import { useEffect, useRef } from "react";
import gsap, {Power3} from "gsap";
import styles from "./TransitionGsap.module.css"

function Transition({timeline}) {
    const transRef = useRef(null);

    useEffect(() => {
        timeline.to(transRef.current, {
            duration: 1,
            x: "100vw",
            ease: "power3.Out"
        })
    }, [timeline])

    return (
        <div className={styles.container}>
            <div ref = {transRef} className={styles.transition}></div>
        </div>
    )
}

export default Transition