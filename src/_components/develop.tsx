import { ProjectCard } from "./card";
import { projects } from "../config/routing/projects.route";
import { pages } from "../config/routing/pages.rourte";

export default function Develop() {
    return (
        <main className="section-shell flex flex-col items-start gap-8 lg:flex-row">
            <div className="flex flex-col items-start gap-3 sm:gap-4 w-full lg:w-1/3" id={pages.IDS.DEVELOPMENT}>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm uppercase tracking-[0.2em] text-white/45">In develop</span>
                <h1 className="section-heading">В разработке</h1>
                <h2 className="section-copy">Может, когда-то и выйдут</h2>
            </div>

            <div className="w-full lg:w-2/3">
                <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.DEVELOP.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
}