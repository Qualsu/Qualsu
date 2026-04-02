import { images } from "../config/routing/images.route";
import { links } from "../config/routing/links.route";
import { pages } from "../config/routing/pages.rourte";

export default function Heading() {
    return (
        <main className="section-shell py-16 sm:py-20 md:py-24 lg:py-28" id={pages.IDS.ABOUT}>
            <div className="pointer-events-none absolute inset-y-10 left-1/2 hidden w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl md:block" />
            <img 
                src={images.LOGO.QUALSU}
                alt="Logo" 
                className="relative mx-auto w-full max-w-[280px] drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px]"
            />
            

            <h1 className="relative mx-auto mt-6 max-w-4xl px-2 text-center text-2xl leading-tight sm:mt-8 sm:text-3xl md:text-4xl lg:text-5xl">
                Кодим так, что Интернет плачет
            </h1>

            <p className="relative mx-auto mt-4 max-w-2xl text-center text-sm text-white/65 sm:text-base md:text-lg">
                Делаем свои проекты, сервисы и странные штуки в интернете. Без лишнего пафоса, но с характером.
            </p>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a 
                    href={links.GITHUB_QUALSU}
                    className="primary-button w-full gap-3 sm:w-auto"
                >
                    <img 
                        src={images.ICON.GITHUB}
                        alt="GitHub" 
                        className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                    />
                    <span className="text-lg sm:text-xl">GitHub</span>
                </a>

                <a 
                    href={links.TELEGRAM_QUALSU}
                    className="primary-button w-full gap-3 sm:w-auto"
                >
                    <img 
                        src={images.ICON.TELEGRAM}
                        alt="Telegram" 
                        className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
                    />
                    <span className="text-lg text-[#47b7f1] sm:text-xl">Telegram</span>
                </a>
            </div>
        </main>
    )
}