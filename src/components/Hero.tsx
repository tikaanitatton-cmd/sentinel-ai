export function Hero() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-6">
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-12">
        <p className="text-white/80 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
          BUILD A NO-CODE AI APP IN MINUTES
        </p>

        <h1
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-4xl md:text-[64px] font-medium tracking-[-0.01em] leading-[1.1] mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl"
        >
          A new way to think
          <br className="hidden md:block" />
          and create with computers
        </h1>

        <button className="px-10 py-3 text-[14px] font-medium border border-white/10 rounded-full hover:border-white/30 hover:bg-white/[0.02] transition-all duration-300 text-white/90 backdrop-blur-sm cursor-pointer">
          Get early access
        </button>

        <div className="text-white/80 hover:text-white/40 transition-colors duration-300 text-[13px] font-medium tracking-wide cursor-pointer">
          Play Video Demo
        </div>
      </div>
    </section>
  );
}
