export const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 focus-within:border-worldcupgold/40 focus-within:bg-white/10 focus-within:shadow-2xl">
        <span className="text-xl text-worldcupgold">🔎</span>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search player, country or sticker number..."
          className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
        />
      </div>
    </div>
  );
};
