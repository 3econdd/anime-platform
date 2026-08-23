export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© 2026 AniVerse</div>
        <div className="flex flex-wrap gap-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  );
}
