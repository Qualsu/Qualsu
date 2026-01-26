import { ProjectCard } from "./card";

export default function Develop() {
    return (
        <main className="text-white bg-black/20 p-4 sm:p-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-6 sm:my-8 md:my-10 rounded-xl sm:rounded-2xl flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-1/3" id="development">
                <h1 className="text-4xl sm:text-5xl md:text-6xl">В разработке</h1>
                <h2 className="text-xl sm:text-2xl">Может, когда-то и выйдут</h2>
            </div>

            <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                    <ProjectCard
                        title="Shrtl://"
                        description="Сокращай и еще раз сокращай"
                        image="/preview/shrtl.png"
                        link="https://shrtl.ru"
                        logo="/logo/shrtl.svg"
                    />

                    <ProjectCard
                        title="Notter ToDo"
                        description="Превращайте хаос в четкие шаги. Работайте так, как вам удобно"
                        image="/preview/todo.png"
                        link="https://todo.notter.su"
                        logo="/logo/todo.png"
                    />
                    {/* <ProjectCard
                        title="Unsion"
                        description="Слушайте любимую музыку без ограничений в любое время"
                        image="/preview/unison.png"
                        link="/"
                        logo="/logo/unison.png"
                    /> */}
                </div>
            </div>
        </main>
    );
}