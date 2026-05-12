export const Title = () => {
  return (
    <div className="relative overflow-hidden border-b border-white/10 px-6 py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-worldcupgold/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-worldcupgold/30 bg-worldcupgold/10 px-4 py-2 text-sm text-worldcupgold">
          ⚽ Albumcito Tracker
        </div>

        <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight sm:text-5xl">
          Completa tu album de la
          <span className="text-worldcupgold"> Copa del Mundo </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Search, organize and complete your Panini 2026 collection.
        </p>
      </div>
    </div>
  );
};
