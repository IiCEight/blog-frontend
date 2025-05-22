import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

function Header({isHomePage}) {
    const [showMenu, setShowMenu] = useState(false);

    function handleClick() {
        console.log(showMenu);
        setShowMenu(!showMenu)
    }

    return (
        <>
            <header className={styles.header}>
                <Logo isHomePage = {isHomePage} />
                <button className= {styles.btn} onClick={handleClick}
                        style = {showMenu ? {backgroundColor: "var(--pink)" } : {}}
                >
                    <span className = {styles.btnText}>{showMenu ? "X" : "MENU"}</span>
                </ button>
                
                <Menu showMenu={showMenu}></Menu>
            </header>
        </>
    )
}

export function Logo({isHomePage = false}) {

    
    // console.log( "isHomePage ", isHomePage);
    const presenceAnimate = {
        initial: {
            x : isHomePage ? "calc(38vw - 100px)" : -100,
            y : isHomePage ?  "20vh" : 0,
            scale : isHomePage ? 1.4 : 1,
            opacity : 0,
        },
        end : {
            x : isHomePage ? "38vw" : 0,
            y : isHomePage ?  "20vh" : 0,
            opacity : 1,
            transition : {
                duration : 1
            }
        }
    }

    //过渡函数
    // function f(a, x) {
    //     return -a * x + a;
    // }

    // const centerLogo = {
    //     transform: `translate(${f(38, scrollYDistance)}vw, ${f(20, scrollYDistance)}vh) scale(${f(0.4, scrollYDistance) + 1})`,
    // };

    return (
        <motion.h1 className = {styles.logo} 
            variants={presenceAnimate}
            initial = "initial"
            animate = "end"
        >
            <Link to = "/" className={styles.link} >
                NanShan&apos;s <span className = {styles.textStyle}>Blog</span>
            </Link>
        </motion.h1>
    )
}


export default Header