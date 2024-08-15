"use client";

import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useState, useEffect, useCallback } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Adjust this value based on your header height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, []);

    return (
        <header className={`px-6 lg:px-10 flex flex-col fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-indigo-800 bg-opacity-90 shadow-lg' : 'bg-transparent backdrop-blur-md'}`}>
            <div className="h-24 flex items-center justify-between">
                {/* Existing header content */}
                <Link className="flex items-center justify-center group" href="#">
                    <MountainIcon className="h-8 w-8 text-yellow-300 group-hover:text-cyan-200 transition-colors duration-300" />
                    <span className="ml-2 text-xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">Edu-Insight</span>
                </Link>

                <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6 sm:gap-8">
                    {['Home', 'Modules', 'About'].map((item) => (
                        <Link
                            key={item}
                            className="text-sm font-medium text-white hover:text-cyan-200 hover:scale-105 transition-all duration-300 relative group hidden sm:inline-block"
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleScroll(e, item.toLowerCase())}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="sm:hidden ml-4" size="icon" variant="ghost">
                            <MenuIcon className="h-6 w-6 text-white hover:text-cyan-200 transition-colors duration-300" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-indigo-900 text-white">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-bold text-cyan-200">Menu</SheetTitle>
                            <SheetDescription className="text-gray-300">
                                Navigate through the Edu-Insight platform.
                            </SheetDescription>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 mt-8">
                            {['Home', 'Projects', 'About'].map((item) => (
                                <Link key={item} className="text-lg font-medium hover:text-cyan-200 transition-colors duration-300" href="#">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}