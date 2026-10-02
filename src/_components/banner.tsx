import { links } from '../config/routing/links.route';

export default function Banner() {
  return (
    <aside
      role="alert"
      className="relative z-50 border-b border-amber-500/25 bg-amber-500/10 backdrop-blur-md text-amber-200/90 px-4 py-2 sm:py-2.5 transition-all"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 mx-auto">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
          </span>

          <p className="text-center font-normal leading-tight text-white/90">
            Домен <span className="font-semibold text-amber-300">qual.su</span> недоступен — временно переехали на{' '}
            <a
              href={links.QUALSU}
              className="font-semibold text-white decoration-amber-400/60 transition-colors hover:text-amber-300 hover:decoration-amber-300"
            >
              qualsu.ru
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
