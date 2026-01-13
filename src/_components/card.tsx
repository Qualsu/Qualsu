type ProjectCardProps = {
    title: string;
    titleClass?: string
    description: string;
    image: string;
    logo: string;
    link: string;
    logoClass?: string;
    develop?: boolean;
    freaze?: boolean;
};

export function ProjectCard({ title, description, image, link, logo, titleClass, logoClass = "w-16 sm:w-18", freaze = false }: ProjectCardProps) {
    return (
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 backdrop-blur-lg shadow-xl flex flex-col justify-between hover:scale-105 transition-all duration-300 min-h-72 sm:min-h-80">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className="relative p-4 sm:p-5 flex flex-col gap-3 h-full">
                <div className="flex flex-col gap-3">
                    <img src={logo} alt="Logo" className={`${logoClass} h-12 sm:h-16 object-contain`}/>
                    <h2 className={`text-xl sm:text-2xl font-bold ${titleClass}`}>
                        {freaze && <span className="mr-1 text-cyan-300 hover:cursor-default" title="Проект заморожен">❄</span>}
                        {title}
                    </h2>
                    <p className="text-sm opacity-95 line-clamp-3">{description}</p>
                </div>

                <div className="mt-auto pt-3 sm:pt-4">
                    <a href={link}>
                        <button className="w-full border-2 hover:border-white/80 hover:text-white/80 transition-all duration-200 rounded-lg py-2 px-4 text-base sm:text-lg">
                            Перейти
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}