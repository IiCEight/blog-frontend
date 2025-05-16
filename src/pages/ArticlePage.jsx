import axios from "axios";
import "highlight.js/styles/github.css";
import 'github-markdown-css/github-markdown.css';
import Header from "../components/Header"
import { useParams } from "react-router-dom"
import styles from "./ArticlePage.module.css"
import { useState, useEffect} from "react"
import "../markdown.css"
import Background from "../components/Background"

function Article() {
    const { id } = useParams()

    const [article, setArticle] = useState({});
    const url = `http://10.147.20.76:3131/interfaces/version1/article/info/${id}`
    
    useEffect(() => {
        async function getArticle()
        {
            const article = await axios.get(url);
            setArticle(article.data.data)
        }
        getArticle()
    }, [url])
    

    return (
        <Background>
            <div className={styles.container}>
                <Header />
                <div className={styles.articleBox}>
                    <h1 className={styles.title}>
                        {article.title}
                    </h1>
                    <div className="markdown-body"
                        dangerouslySetInnerHTML = {{__html: article.content}}
                        >
                    </div>
                </div>
            </div>
        </Background>
    )
}

export default Article