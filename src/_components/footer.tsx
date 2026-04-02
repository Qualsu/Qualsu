import { links } from "../config/routing/links.route";
import { images } from "../config/routing/images.route";

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-shell mt-8 rounded-[1.75rem] py-6 sm:py-8">
            <div className="mx-auto w-full max-w-7xl">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <a href={links.QUALSU} className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0">
                        <img src={images.LOGO.QUALSU} className="w-52 sm:w-60" alt="Qualsu logo"/>
                    </a>
                    <ul className="flex flex-wrap items-center gap-y-3 text-sm font-medium text-white/60 sm:mb-0">
                        <li>
                            <a href={links.FEEDBACK} target="_blank" className="me-4 transition-colors hover:text-white md:me-6">Feedback</a>
                        </li>
                        <li>
                            <a href={links.QUAL_ID} target="_blank" className="me-4 transition-colors hover:text-white md:me-6">Qual ID</a>
                        </li>
                        <li>
                            <a href={links.STATUS} target="_blank" className="transition-colors hover:text-white">Status</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white/10 lg:my-8" />
                <span className="block text-sm text-white/50 sm:text-center">© 2021-{currentYear} <a href={links.QUALSU} className="transition-colors hover:text-white">Qualsu</a></span>
            </div>
        </footer>
    )
}