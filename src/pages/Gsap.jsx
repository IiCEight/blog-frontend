import { useRef, useEffect } from "react"
import gsap from "gsap"
import Transition from "../components/TransitionGsap"
import styles from "./Gsap.module.css"
import Header from "../components/Header";

function Gsap() {
    const tl = gsap.timeline();
    return (
        <>
            <Transition timeline={tl} />
            <Header/>
        </>
    )
}

export default Gsap