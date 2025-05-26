import axios from "axios";
import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { useState, useEffect} from "react"
import Background from "../components/Background"
import "../markdown.css"
import "highlight.js/styles/github.css";
import 'github-markdown-css/github-markdown.css';
import "katex/dist/katex.min.css";
import styles from "./ArticlePage.module.css"
import Transition from "../components/Transition";

function Article() {
    const { id } = useParams()

    const [article, setArticle] = useState({});
    const url = `http://8.137.17.37/api/article/${id}`
    
    useEffect(() => {
        async function getArticle()
        {
            const res = await axios.get(url);
            console.log(res.data.data.content)            
            setArticle(res.data.data)
        }
        getArticle()
    }, [url])
    

    return (
        <Background>
            <Transition/>
            <Header />
            <div className={styles.articleBox}>
            {/* <div className={styles.container}> */}
                <h1 className={styles.title}>
                    {article.title}
                </h1>
                <div className="markdown-body"
                    dangerouslySetInnerHTML = {{__html: article.content}}
                    >
                </div>
            </div>
            {/* </div> */}
        </Background>
    )
}

export default Article