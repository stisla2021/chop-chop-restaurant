export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface sm:static">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold text-ink">
          <img src="/assets/logo.svg" alt="" className="h-8 w-8" />
          Chop Chop
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition duration-200 hover:-translate-y-0.5 hover:border-chop focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop sm:hidden"
          aria-expanded="false"
          aria-controls="menu-drawer"
          aria-label="Open menu"
        >
          <svg
            className="h-5 w-5"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
        <div className="hidden sm:flex sm:items-center sm:gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Primary">
            <a
              href="#how-it-works"
              className="border-b-2 border-transparent text-sm text-ink-3 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink"
            >
              How it works
            </a>
            <a
              href="#popular"
              className="border-b-2 border-transparent text-sm text-ink-3 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink"
            >
              Popular
            </a>
            <a
              href="#areas"
              className="border-b-2 border-transparent text-sm text-ink-3 transition duration-200 hover:-translate-y-0.5 hover:border-chop hover:text-ink"
            >
              Areas
            </a>
          </nav>
          <a
            href="#get-the-app"
            className="inline-flex w-fit rounded-lg bg-chop px-4 py-2 font-semibold text-on-dark transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
