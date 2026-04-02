import { images } from "../config/routing/images.route";
import { links } from "../config/routing/links.route";
import { pages } from "../config/routing/pages.rourte";

export default function QualID() {
    return (
        <main className="section-shell flex min-h-[300px] flex-col justify-between gap-8 sm:min-h-[350px] md:min-h-[400px] md:flex-row">
            <div className="flex h-full flex-1 flex-col items-start justify-between gap-5" id={pages.IDS.QUAL_ID}>
                <div className="flex flex-col gap-3 sm:gap-4">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm uppercase tracking-[0.2em] text-white/45">Ecosystem</span>
                    <img src={images.LOGO.QUAL_ID} alt="Logo" className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px]"/>
                    <h1 className="max-w-xl text-xl leading-snug text-white/90 sm:mt-2 sm:text-2xl">Единая система аккаунтов, которую мы используем почти во всех наших проектах</h1>
                    <p className="max-w-xl text-sm text-white/65 sm:text-base">Один вход, единая идентичность и меньше лишней возни между сервисами</p>
                </div>

                <a href={links.QUAL_ID} className="hidden md:block mt-18">
                    <button className="primary-button mt-2 sm:mt-3">
                        Перейти
                    </button>
                </a>
            </div>
            
            <div className="flex-1 flex justify-center md:justify-end items-center">
                    <img src={images.BANNER} alt="" className="h-auto w-full max-w-[600px] rounded-[1.2rem] sm:max-w-[700px] md:max-w-[800px]" />
            </div>

            <div className="md:hidden flex justify-center mt-4">
                <a href={links.QUAL_ID} className="w-full ">
                    <button className="primary-button w-full text-base">
                        Перейти
                    </button>
                </a>
            </div>
        </main>
    )
}