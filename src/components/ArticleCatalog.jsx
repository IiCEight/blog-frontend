import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import styles from "./ArticleCatalog.module.css"
import { motion } from "framer-motion";
import config from "../config/config.js";

function ArticleItem({article})
{
    let date = new Date(article.updateTime)
    console.log(article)
    return (
        <motion.div>
            <Link to= {`/Article/${article.id}`} className = {styles.articleItem}>
                <div className={styles.imgBox}>
                    <img className={styles.image} src = {article.img} alt = "image" />
                </div>
                <div className={styles.title}>{article.title}</div>
                <div className={styles.description}>  {article.description}</div>
                <div className={styles.articleTags}>
                    <div className={styles.oneTag}>
                        Views: {article.views}
                    </div>
                    <div className={styles.oneTag}>
                        Category: {article.category.name}
                    </div>
                    <div className={styles.oneTag}>
                        Tags: {article.tags.map(tag=>tag.name).join(',')}
                    </div>
                    <div className={styles.oneTag}>
                        {`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`}
                    </div>
                </div>
            </Link>
        </motion.div>    
    ) 
}

const url = `${config.apiBaseURL}/article/list`;

export default function ArticleCatalog()
{
    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function getArticles()
        {
            const res = await axios.get(url, {
                params: {
                    page: 1,
                    pageSize: 10
                }
            })
            // console.log("receive data : ", res.data.data);
            setArticles(res.data.data)
        }
        getArticles()
    }, [])

    console.log(articles)

    return (
        <>
            <div className={styles.container}>
                {articles.map(article => <ArticleItem key={article.id} article={article} />)}
            </div>
        </>
    )
}