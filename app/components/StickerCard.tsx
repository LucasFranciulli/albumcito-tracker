import React from "react";

export const StickerCard = ({ card }) => {
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 16;
    const rotateX = (y / rect.height - 0.5) * -16;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (!el) return;

    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 transition-transform duration-200 will-change-transform"
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-worldcupgold/10 blur-3xl transition-all duration-300 group-hover:bg-worldcupgold/20" />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              {card.country}
            </p>

            <div className="mt-2 text-2xl font-bold leading-tight">
              {card.player.split(" ").map((part, index) => (
                <div key={index} className="truncate">
                  {part}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-worldcupgold/20 bg-worldcupgold/10 px-2 py-1 text-sm font-semibold text-worldcupgold">
            {card.number}
          </div>
        </div>

        <div className="aspect-[3/3] rounded-2xl border border-white/10 bg-gradient-to-br from-worldcupgold/20 via-transparent to-transparent" />

        <button className="mt-5 w-full rounded-2xl bg-worldcupgold px-4 py-3 font-semibold text-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          Mark as Owned
        </button>
      </div>
    </div>
  );
};
