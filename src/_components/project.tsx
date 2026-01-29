import { ProjectCard } from "./card";

export default function Project() {
    return (
        <main className="text-white bg-black/20 p-4 sm:p-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-6 sm:my-8 md:my-10 rounded-xl sm:rounded-2xl flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-1/3" id="projects">
                <h1 className="text-4xl sm:text-5xl md:text-6xl">Проекты</h1>
                <h2 className="text-xl sm:text-2xl">IT будущего? это не про нас</h2>
            </div>

            <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                    <ProjectCard
                        title="Notter"
                        description="Планируйте и разрабатывайте с командой в удобной для вас атмосфере"
                        image="/preview/notter.png"
                        link="https://notter.su"
                        logo="/logo/notter.png"
                    />
                    <ProjectCard
                        title="InSDL"
                        description="Создавайте игры на sdl3 при помощи простой и удобной оболочки"
                        image="/preview/insdl.png"
                        link="https://github.com/qualsu/insdl"
                        logo="/logo/insdl.png"
                        logoClass="w-32 sm:w-48 sm:-ml-3 ml-0"
                    />
                    <ProjectCard
                        title="Shrtl://"
                        description="Сокращай и еще раз сокращай"
                        image="/preview/shrtl.png"
                        link="https://shrtl.ru"
                        logo="/logo/shrtl.svg"
                    />
                </div>
            </div>
        </main>
    );
}