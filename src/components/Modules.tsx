'use client';

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Modules = ({ modules }: { modules: Array<{ title: string; description: string; badge: string }> }) => {
    return (
        <section id="modules" className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 animate-pulse">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M10 10 L90 10 M10 90 L90 90 M10 50 L90 50 M50 10 L50 90" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            <circle cx="10" cy="10" r="2" fill="currentColor" />
                            <circle cx="90" cy="10" r="2" fill="currentColor" />
                            <circle cx="10" cy="90" r="2" fill="currentColor" />
                            <circle cx="90" cy="90" r="2" fill="currentColor" />
                            <circle cx="50" cy="50" r="2" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-7xl font-extrabold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-tech relative inline-block">
                    Software Engineering Modules
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform skew-x-12"></span>
                </h2>
                <Swiper
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    loop={true}
                    speed={800}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectCreative, Pagination, Navigation]}
                    className="mySwiper w-full max-w-6xl mx-auto h-[500px]"
                >
                    {modules.map((module, index) => (
                        <SwiperSlide key={index} className="swiper-slide-transform">
                            <div
                                className="swiper-parallax-bg absolute inset-0"
                                data-swiper-parallax="-23%"
                            >
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="tech-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                            <path d="M25 0 L50 25 L25 50 L0 25 Z" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
                                            <circle cx="25" cy="25" r="3" fill="rgba(59, 130, 246, 0.3)" />
                                            <path d="M25 0 V50 M0 25 H50" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#tech-pattern)" />
                                </svg>
                            </div>
                            <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-lg rounded-3xl border-2 border-blue-500/50 shadow-2xl overflow-hidden h-full flex flex-col group relative">
                                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                                <div className="absolute inset-0 bg-circuit-pattern opacity-5 animate-pulse"></div>

                                <CardHeader className="bg-gradient-to-r from-blue-600/80 to-cyan-600/80 p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <CardTitle className="text-3xl font-bold text-white relative z-10 group-hover:text-cyan-300 transition-colors duration-300" data-swiper-parallax="-300">
                                        {module.title}
                                    </CardTitle>
                                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-400 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300 transform group-hover:scale-150"></div>
                                </CardHeader>

                                <CardContent className="p-6 flex-grow flex flex-col justify-between relative">
                                    <p className="text-gray-300 mb-4" data-swiper-parallax="-100">Explore the depths of {module.title} and master its concepts.</p>
                                    <div className="flex justify-between items-center">
                                        <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/50 animate-pulse">
                                            {module.badge}
                                        </Badge>
                                        <Button variant="ghost" className="text-cyan-300 hover:text-cyan-100 hover:bg-cyan-700/30 relative overflow-hidden group">
                                            <span className="relative z-10">Learn More</span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        </Button>
                                    </div>
                                </CardContent>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-4 left-4 animate-ping"></div>
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full absolute bottom-4 right-4 animate-ping delay-1000"></div>
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}


export default Modules