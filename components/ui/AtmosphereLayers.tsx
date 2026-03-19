export function AtmosphereLayers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="fog-overlay absolute -left-20 top-8 h-64 w-64 rounded-full blur-3xl" />
      <div className="fog-overlay absolute -right-28 top-40 h-80 w-80 rounded-full blur-3xl [animation-delay:-4s]" />
      <div className="light-rays absolute inset-0 opacity-60" />

      <div className="particle-dot absolute left-[10%] top-[72%] h-1.5 w-1.5 rounded-full bg-forest-glow/40 [animation-delay:-1s]" />
      <div className="particle-dot absolute left-[24%] top-[84%] h-2 w-2 rounded-full bg-moonlit/35 [animation-delay:-2.5s]" />
      <div className="particle-dot absolute left-[38%] top-[74%] h-1.5 w-1.5 rounded-full bg-forest-glow/45 [animation-delay:-0.75s]" />
      <div className="particle-dot absolute left-[52%] top-[86%] h-1 w-1 rounded-full bg-moonlit/40 [animation-delay:-3.4s]" />
      <div className="particle-dot absolute left-[68%] top-[76%] h-1.5 w-1.5 rounded-full bg-forest-glow/50 [animation-delay:-1.75s]" />
      <div className="particle-dot absolute left-[82%] top-[82%] h-2 w-2 rounded-full bg-moonlit/30 [animation-delay:-2s]" />
    </div>
  );
}
