import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Transition from "../components/TransitionGsap"
import styles from "./Gsap.module.css"
import Header from "../components/Header"

gsap.registerPlugin(ScrollTrigger);

function AnimatedBox() {
    const boxRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1 }
        );
    }, []);
    return (
        <div className={styles.animatedBox} ref={boxRef}>
            GSAP Box
        </div>
    );
}

function TimelineDemo() {
    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.7 } });
        tl.from(box1.current, { x: -150, opacity: 0 })
          .from(box2.current, { y: 100, opacity: 0 })
          .from(box3.current, { scale: 0, opacity: 0 });
    }, []);
    return (
        <div className={styles.timelineDemo}>
            <div ref={box1} className={styles.timelineBox} />
            <div ref={box2} className={styles.timelineBox} />
            <div ref={box3} className={styles.timelineBox} />
        </div>
    );
}

function ScrollTriggerDemo() {
    const boxRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: true,
                },
            }
        );
    }, []);
    return (
        <div className={styles.scrollBox} ref={boxRef}>
            ScrollTrigger Box
        </div>
    );
}

function Gsap() {
    const tl = gsap.timeline();
    return (
        <>
            <Transition timeline={tl} />
            <Header />
            <h2 className={styles.title}>GSAP React Tutorial</h2>
            <AnimatedBox />
            <TimelineDemo />
            <ScrollTriggerDemo />
        </>
    )
}

export default Gsap