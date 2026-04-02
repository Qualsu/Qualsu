import type { ProjectCardProps } from "../config/types/components.types";

export function ProjectCard({ title, description, image, link, logo, titleClass, logoClass = "w-16 sm:w-18", freaze = false }: ProjectCardProps) {
    return (
        <div className="group surface-panel relative flex min-h-72 flex-col justify-between overflow-hidden rounded-[1.5rem] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:min-h-80">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-35 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/80"></div>

            <div className="relative flex h-full flex-col gap-4 p-5 sm:p-6">
                <div className="flex flex-col gap-3">
                    <img src={logo} alt="Logo" className={`${logoClass} h-12 object-contain sm:h-16`}/>
                    <h2 className={`text-xl font-bold tracking-tight sm:text-2xl ${titleClass}`}>
                        {freaze && <span className="mr-1 text-cyan-300 hover:cursor-default" title="Проект заморожен">❄</span>}
                        {title}
                    </h2>
                    <p className="line-clamp-3 text-sm text-white/80 sm:text-[0.95rem]">{description}</p>
                </div>

                <div className="mt-auto pt-3 sm:pt-4">
                    <a href={link}>
                        <button className="primary-button w-full border-white/15 bg-white/[0.04] px-4 py-2.5 text-base sm:text-lg">
                            Перейти
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}