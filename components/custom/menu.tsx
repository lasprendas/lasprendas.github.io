"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface SimpleMenuProps {
    navLinks: { href: string; text: string }[];
}

function SimpleMenu ({ navLinks }: SimpleMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="relative sticky top-0 z-50 border-b border-gray-200 transition-colors">
            {/* This div provides the blurred background for the main nav bar */}
            <div className="absolute inset-x-0 top-0 h-16 bg-white/80 backdrop-blur-sm" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="flex items-center gap-2">
                        <Image
                            src="/images/lp_logo.png"
                            alt="Las prendas Logo"
                            title="Las prendas"
                            width={45}
                            height={45}
                        />
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a
                        key={link.href}
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                        {link.text}
                        </a>
                    ))}
                    </div>
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                            <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden absolute w-full bg-white/80 backdrop-blur-sm border-b border-gray-200`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                            {link.text}
                        </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export { SimpleMenu }
