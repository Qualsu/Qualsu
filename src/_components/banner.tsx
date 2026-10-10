import { links } from '../config/routing/links.route';

interface BannerProps {
  onClose?: () => void;
}

export default function Banner({ onClose }: BannerProps) {
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

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть уведомление"
            className="rounded-lg p-1 text-amber-200/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </aside>
  );
}
