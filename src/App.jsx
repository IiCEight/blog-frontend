import { Routes, Route, useLocation} from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import CataloguePage from "./pages/CataloguePage"
import Article from "./pages/ArticlePage"
import Gsap from "./pages/Gsap"
import FamerMotion from "./pages/FramerMotion"
import { AnimatePresence } from "framer-motion"


function App() {

    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key = {location.pathname}>
                <Route path = "/" element = {<HomePage />} />
                <Route path = "/catalogue" element = {<CataloguePage />} />
                <Route path = "/article/:id" element = {<Article />} />
                <Route path = "/gsap" element = {<Gsap />} />
                <Route path = "/framer" element = {<FamerMotion/>} />
                <Route path = "*" element = {< NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    )
}


export default App