import styles from "./Background.module.css"

function Background({children}) {

    return (
        <div className={styles.background}>
            <div className= {styles.blur}>
                {children}
            </div>
        </div>
    )
}

export default Background