import { useEffect, useState } from "react"
import Header , {Logo} from "../components/Header"
import HeroSection from "../components/HeroSection"
import Background from "../components/Background"

import styles from "./HomePage.module.css"
import Transition from "../components/Transition"

function HomePage() 
{
    // use percentage
    // const [scrollYDistance, setScrollYDistance] = useState(0)


    // useEffect(() => {
    //     const handleScrollY = () => {
            
    //         setScrollYDistance((Math.min(window.scrollY, 200) / 200));
    //     };
    //     window.addEventListener("scroll", handleScrollY);

    //     return () => {
    //         window.removeEventListener("scroll", handleScrollY);
    //     }
    // }, [])

    return (
        <Background>
            <Transition />
            <div className={styles.container}>
                <Header isHomePage = {true}>
                </Header> 
                <HeroSection />
            </div>
        </Background>
    )
}

export default HomePage