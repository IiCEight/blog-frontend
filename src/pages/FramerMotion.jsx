import { delay, motion, useAnimation, AnimatePresence } from "framer-motion"
import styles from "./FramerMotion.module.css"
import { useState } from "react"
function FamerMotion() {
    const [isAnimate, setIsAnimate] = useState(false);
    const [show, setShow] = useState(true);

    const control = useAnimation()

    //使用变量
    const boxVariant = {
        hidden : {
            x: -100,
            opacity: 0
        },

        visible : {
            x: 0,
            opacity: 1,
            transition: {
                delay: 1
            }
        }
    }

    return (

        <div className={styles.container}>
            <motion.div 
                className={styles.box}
                //传入一个对象
                animate = {{
                    //默认单位是像素
                    x: isAnimate ? 200 : 0,
                    // backgroundColor: "skyblue",
                    opacity: isAnimate ? 1 : 0.5,
                    rotate: isAnimate ? 360 : 0
                }}
                
                //控制初始状态
                initial = {{
                    opacity: 0.1
                }}
                transition={{
                    //默认单位是秒
                    duration: 1
                }}

                //点击就改变状态，同时展示动画
                onClick={() => setIsAnimate(!isAnimate)}
            >

            </motion.div>

            <motion.div
                className={styles.box}
                //可随意拖拽
                drag

                //鼠标悬浮时触发
                whileHover={{
                    scale: 1.1
                }}
                //点击时触发
                whileTap={{
                    scale:0.9
                }}
            >

            </motion.div>

            <motion.div
                className={styles.box}
                variants={boxVariant}
                //直接使用属性名
                animate = "visible"
                initial = "hidden"
            >
            </motion.div>
        
            <motion.div
                className={styles.box}
                animate = {{
                    //传入数组多段动画
                    scale : [1, 1.2, 1],
                    rotate : [0, 180, 0],
                    borderRadius: ["20%", "50%", 0]
                }}
                transition={{
                    duration: 2
                }}
            >

            </motion.div>
            
            {/* 使用useAnimation通过事件控制动画 */}
            <button className={styles.btn}
                    onClick={() => {
                        control.start({
                            x:1000,
                            transition: {
                                duration: 2
                            }
                        })
                    }}
            >
                click me
            </button>

            <motion.div
                className={styles.box}
                animate = {control}
            >
            </motion.div>
            
            {/* 消失动画 */}
            <button className={styles.btn}
                    onClick={() => {
                        setShow(!show)}}
            >
                click me
            </button>
            {/* 将需要应用消失动画的用AnimatePresence包裹 */}
            <AnimatePresence>
                {show ? <motion.div
                    className={styles.box}
                    //用exit指定消失动画
                    exit={{
                        y : -20,
                        opacity : 0
                    }}
                ></motion.div> : null}
                
            </AnimatePresence>
        </div>
    )
}

export default FamerMotion