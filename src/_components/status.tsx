import { images } from "../config/routing/images.route";
import { links } from "../config/routing/links.route";

export default function Status() {
  return (
    <section className="section-shell relative overflow-hidden my-8 sm:my-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-[#8365FF]/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50">
              Monitoring
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <img 
              src={images.LOGO.STATUS} 
              className="w-full max-w-[500px] object-contain" 
              alt="Status" 
            />
            <p className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              Недоступен сервис? Проверь актуальное состояние всех серверов на{" "}
              <span className="font-semibold text-white">status.qual.su</span>
            </p>
          </div>
        </div>

        <a 
          href={links.STATUS} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full lg:w-auto shrink-0"
        >
          <button className="primary-button group w-full lg:w-auto flex items-center justify-center gap-3 px-7 py-3 text-base sm:text-lg transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(5,219,112,0.15)]">
            <span>Проверить статус</span>
            <svg 
              className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </a>
      </div>
    </section>
  );
}
