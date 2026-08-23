export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-6 md:grid-cols-3">
        <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-xl font-bold">A</div>
          <h1 className="text-2xl font-bold">AniViewer</h1>
          <p className="mt-2 text-slate-400">Saved shows and watch history</p>
        </aside>
        <section className="md:col-span-2 space-y-6">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-bold">Saved anime</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Shadowblade Chronicles</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Neon Sakura</div>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="mb-4 text-xl font-bold">Watch history</h2>
            <div className="space-y-3">
              <div className="flex justify-between rounded-2xl border border-white/10 bg-black/20 p-4"><span>Episode 1</span><span>27 min</span></div>
              <div className="flex justify-between rounded-2xl border border-white/10 bg-black/20 p-4"><span>Episode 2</span><span>42 min</span></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
