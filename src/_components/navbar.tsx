import { useState } from 'react';
import { pages } from '../config/routing/pages.rourte';
import { images } from '../config/routing/images.route';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6 md:px-8 lg:px-10">
                <div className="surface-panel mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
                    <a href={pages.HOME}>
                        <img src={images.LOGO.QUALSU_MINI} alt="Qualsu logo" className="h-8 opacity-95 transition-opacity duration-200 hover:opacity-100" />
                    </a>

                    <button
                        className="flex h-10 w-10 flex-col items-center justify-center space-y-1 rounded-full border border-white/10 bg-white/[0.04] transition-colors duration-200 hover:bg-white/[0.08] md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>

                    <div className="hidden items-center gap-2 md:flex">
                        <a href={pages.ABOUT} className="nav-link">О нас</a>
                        <a href={pages.QUAL_ID} className="nav-link">Qual ID</a>
                        <a href={pages.PROJECTS} className="nav-link">Проекты</a>
                        <a href={pages.DEVELOPMENT} className="nav-link">В разработке</a>
                        <a href={pages.ARCHIVE} className="nav-link">Архив</a>
                    </div>
                </div>

                <div className={`absolute left-4 right-4 top-full mt-2 transition-all duration-300 sm:left-6 sm:right-6 md:hidden ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
                    <div className="surface-panel mx-auto flex max-w-[1400px] flex-col gap-1 rounded-2xl px-3 py-3">
                        <a 
                            href={pages.ABOUT} 
                            className="rounded-xl border-b border-white/10 px-4 py-4 transition-colors hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            О нас
                        </a>
                        <a 
                            href={pages.QUAL_ID} 
                            className="rounded-xl border-b border-white/10 px-4 py-4 transition-colors hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Qual ID
                        </a>
                        <a 
                            href={pages.PROJECTS} 
                            className="rounded-xl border-b border-white/10 px-4 py-4 transition-colors hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Проекты
                        </a>
                        <a 
                            href={pages.DEVELOPMENT} 
                            className="rounded-xl border-b border-white/10 px-4 py-4 transition-colors hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            В разработке
                        </a>
                        <a 
                            href={pages.ARCHIVE} 
                            className="rounded-xl px-4 py-4 transition-colors hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Архив
                        </a>
                    </div>
                </div>
            </nav>

            <div className="h-20 md:h-24"></div>

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}