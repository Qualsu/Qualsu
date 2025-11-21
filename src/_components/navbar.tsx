import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 text-white backdrop-blur-sm">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <a href="#home">
                        <img src="logo/text-logo.svg" alt="Qualsu logo" className="h-8" />
                    </a>

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>

                    <div className="hidden md:flex gap-6">
                        <a href="#about" className="hover:underline transition-colors">О нас</a>
                        <a href="#qual-id" className="hover:underline transition-colors">Qual ID</a>
                        <a href="#projects" className="hover:underline transition-colors">Проекты</a>
                        <a href="#development" className="hover:underline transition-colors">В разработке</a>
                        <a href="#archive" className="hover:underline transition-colors">Архив</a>
                    </div>
                </div>

                <div className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
                        <a 
                            href="#about" 
                            className="hover:bg-white/10 py-4 px-4 transition-colors rounded-lg border-b border-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            О нас
                        </a>
                        <a 
                            href="#qual-id" 
                            className="hover:bg-white/10 py-4 px-4 transition-colors rounded-lg border-b border-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Qual ID
                        </a>
                        <a 
                            href="#projects" 
                            className="hover:bg-white/10 py-4 px-4 transition-colors rounded-lg border-b border-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Проекты
                        </a>
                        <a 
                            href="#development" 
                            className="hover:bg-white/10 py-4 px-4 transition-colors rounded-lg border-b border-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            В разработке
                        </a>
                        <a 
                            href="#archive" 
                            className="hover:bg-white/10 py-4 px-4 transition-colors rounded-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Архив
                        </a>
                    </div>
                </div>
            </nav>

            <div className="h-16 md:h-20"></div>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}