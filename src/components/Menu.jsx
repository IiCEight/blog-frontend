import { Link } from "react-router-dom";
import styles from "./Menu.module.css"

function Menu({showMenu}) {
    
    const waveStyle = {
        transform: "scale(50)"
    }

    return (
        <>
            <div className={styles.overlay} style = {showMenu ? waveStyle : {}} ></div>
            <MenuOption showMenu = {showMenu} />
        </>
        
    )
}

function MenuOption({showMenu}) {

    const display = {
        visibility : "visible",
    }

    const displayStyle = {
        opacity: "1",
        transform: "translate(0%, -20%)"
    }
    return (
        <menu className={styles.menu} style={showMenu ? display : {}} >
            <li className={styles.menuOption} style={showMenu ? displayStyle : {}} >
                <Link to = "/gsap">Gsap</Link>
            </li>
            <li className={styles.menuOption} style={showMenu ? displayStyle : {}} >
                <Link to = "/catalogue">Catalogue</Link>
            </li>
            <li className={styles.menuOption} style={showMenu ? displayStyle : {}} >
                Category
            </li>
            <li className={styles.menuOption} style={showMenu ? displayStyle : {}} >
                About us
            </li>
        </menu>
    )
}



export default Menu