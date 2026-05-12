import React from "react";
import { Link } from "react-router";
import { SearchBar } from "~/components/SearchBar";
import { StickerCard } from "~/components/StickerCard";
import { Title } from "~/components/Title";

export default function Home() {
  /*return (
    <div>
      <h1>albumcito-tracker</h1>

      <Link to="/about">
        Acerca de
      </Link>
    </div>
  );*/
  const fakeCards = Array.from({ length: 120 }, (_, i) => ({
    id: i + 1,
    player: [
      "Cole Palmer",
      "Lamine Yamal",
      "Julián Álvarez",
      "Mbappé",
      "Endrick",
      "Bellingham",
      "Musiala",
      "Valverde",
    ][i % 8],
    country: [
      "England",
      "Spain",
      "Argentina",
      "France",
      "Brazil",
      "Germany",
      "Uruguay",
    ][i % 7],
    number: `FWC-${1000 + i}`,
  }));

  const [search, setSearch] = React.useState("");
  const [visible, setVisible] = React.useState(24);

  const filteredCards = fakeCards.filter((card) => {
    const query = search.toLowerCase();

    return (
      card.player.toLowerCase().includes(query) ||
      card.country.toLowerCase().includes(query) ||
      card.number.toLowerCase().includes(query)
    );
  });

  React.useEffect(() => {
    const onScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;

      if (bottomReached) {
        setVisible((prev) => prev + 18);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Title />

      <div className="sticky top-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur-xl px-6 py-4">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Your Collection</h2>
            <p className="text-sm text-white/60">
              {filteredCards.length} stickers found
            </p>
          </div>

          <div className="rounded-full border border-worldcupgold/30 bg-worldcupgold/10 px-4 py-2 text-sm text-worldcupgold">
            Panini World Cup 2026
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredCards.slice(0, visible).map((card) => (
            <StickerCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
