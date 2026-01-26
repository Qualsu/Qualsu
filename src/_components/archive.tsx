import { ProjectCard } from "./card";

export default function Archive() {
    return (
        <main className="text-white bg-black/20 p-4 sm:p-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 my-6 sm:my-8 md:my-10 rounded-xl sm:rounded-2xl flex flex-col lg:flex-row items-start gap-6 sm:gap-8" id="archive">
            <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-1/3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl">Архив</h1>
                <h2 className="text-xl sm:text-2xl">то, что не дожило до наших дней (к счастью)</h2>
            </div>

            <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                    <ProjectCard
                        title="KenyCloud"
                        description="open source файловое хранилище"
                        image="/preview/kenycloud.png"
                        link="https://github.com/qualsu/kenycloud"
                        logo="/logo/kenycloud.png"
                    />
                    <ProjectCard
                        title="Notter Code"
                        description="браузерный редактор кода"
                        image="/preview/code.png"
                        link="https://code.notter.su"
                        logo="/logo/code.png"
                    />
                    <ProjectCard
                        title="Voicy"
                        description="discord радио-бот"
                        image="/preview/voicy.png"
                        link="https://discord.com/invite/4ed6dbJZvZ"
                        logo="/logo/voicy.png"
                        freaze
                    />
                </div>
            </div>
        </main>
    );
}