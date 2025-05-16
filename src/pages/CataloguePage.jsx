import ArticleCatalog from "../components/ArticleCatalog.jsx"
import Background from "../components/Background.jsx"
import Header from "../components/Header.jsx"
import Transition from "../components/Transition.jsx"

import styles from "./CataloguePage.module.css"

function CataloguePage() 
{
    return (
        <Background>
            <Transition />
            <div className={styles.container}>
                <Header/>
                <h1 className={styles.title}>
                    <span className = {styles.text}>Blog Catalogue</span>
                </h1>
                <ArticleCatalog/>
            </div>
        </Background>
    )
}

export default CataloguePage