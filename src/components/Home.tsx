"use client";

import { FaCode } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const words = ['Software Engineering', 'Web Development', 'Data Science', 'Artificial Intelligence'];
export function Home() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const middleLayerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

    return (
        <div id="home" ref={ref} className="relative h-screen overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700"
                style={{ y: backgroundY }}
            />
            <motion.div
                className="absolute inset-0 bg-[url('/images/lithan-image.png')] bg-cover bg-center opacity-40"
                style={{ y: middleLayerY }}
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                style={{ y: foregroundY }}
            />

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
                style={{ y: textY, opacity }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                    className="text-8xl font-extrabold mb-8 flex items-center justify-center"
                >
                    <motion.span
                        className="font-calistoga text-yellow-300 mr-2"
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, -5, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Edu
                    </motion.span>
                    <motion.span
                        className="font-playwrite text-blue-400"
                        animate={{
                            y: [0, 10, 0],
                            rotate: [0, 5, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Insight
                    </motion.span>
                </motion.h1>
                <motion.div className="relative">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xl mb-8 font-inter font-light tracking-wide text-cyan-200 drop-shadow-lg max-w-2xl z-10 relative text-glow"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            Where you can showcase your skills and connect with fellow students.
                        </motion.span>{" "}
                        <motion.span
                            className="font-semibold text-yellow-300 relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            Bachelor's Degree
                            <motion.svg
                                className="absolute -top-2 -right-2 w-full h-full"
                                viewBox="0 0 100 100"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 2 }}
                            >
                                <path
                                    d="M10,50 Q50,10 90,50 Q50,90 10,50"
                                    stroke="#FCD34D"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </motion.svg>
                        </motion.span>{" "}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            in{" "}
                        </motion.span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={words[currentWordIndex]}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                    scale: 0.8,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}
                                className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-200 text-2xl"
                            >
                                {words[currentWordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.p>

                    <motion.div
                        className="absolute top-0 left-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                    >
                        <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-4 -right-4 w-16 h-16"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        whileHover={{ scale: 1.2, rotate: 720 }}
                        transition={{ delay: 3, duration: 1, type: "spring" }}
                    >
                        <div className="w-full h-full bg-yellow-300 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🚀</span>
                        </div>
                    </motion.div>

                    <motion.div className="absolute top-10 left-10" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                        <FaCode className="text-3xl text-blue-300" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        variant="secondary"
                        className="
                            bg-gradient-to-r from-yellow-400 to-orange-500
                            text-white font-bold py-6 px-12
                            rounded-full shadow-lg
                            hover:from-orange-500 hover:to-yellow-400
                            transition-all duration-300 ease-in-out
                            transform hover:rotate-1 hover:shadow-2xl
                            relative overflow-hidden
                            flex items-center
                        "
                    >
                        <motion.span
                            className="absolute inset-0 bg-white opacity-25"
                            initial={{ scale: 0, x: '-100%' }}
                            whileHover={{ scale: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.span
                            className="relative z-10 mr-3 text-md"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            Explore Modules
                        </motion.span>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 inline-block relative z-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{
                                y: [0, -5, 0],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </motion.svg>
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"
                style={{ y: foregroundY }}
            />
        </div>
    );
}