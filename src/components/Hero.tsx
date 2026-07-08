import { cn } from "@/lib/cn";
import { SplineScene } from "./SplineScene";

export function Hero() {
  return (
    <section
      className={cn(
        "relative min-h-screen",
        "flex items-end",
        "bg-hero-bg overflow-hidden"
      )}
    >
      {/* Spline 3D Background */}
      <SplineScene />

      {/* Dark Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-black/40 backdrop-blur-[2px]"
        )}
      />

      {/* Content Container */}
      <div
        className={cn(
          "relative z-10 pointer-events-none",
          "w-full max-w-[90%] sm:max-w-md lg:max-w-2xl",
          "px-6 md:px-10 pb-16 md:pb-20 pt-32"
        )}
      >
        {/* Heading */}
        <h1
          className={cn(
            "opacity-0 animate-fade-up",
            "text-[clamp(3rem,8vw,6rem)]",
            "font-bold leading-[1.05] tracking-[-0.05em]",
            "text-foreground mb-2 md:mb-4 uppercase"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          SENTINEL <span className="text-primary">AI</span>
        </h1>

        {/* Subheading */}
        <h2
          className={cn(
            "opacity-0 animate-fade-up",
            "text-foreground/80",
            "text-[clamp(1.125rem,2.5vw,1.875rem)]",
            "font-light mb-3 md:mb-6"
          )}
          style={{ animationDelay: "0.4s" }}
        >
          We implement security correctly.
        </h2>

        {/* Description */}
        <p
          className={cn(
            "opacity-0 animate-fade-up",
            "text-muted-foreground",
            "text-[clamp(0.875rem,1.5vw,1.25rem)]",
            "font-light mb-4 md:mb-8 max-w-lg"
          )}
          style={{ animationDelay: "0.55s" }}
        >
          Enterprise security systems built in days. AI-powered surveillance
          deployed with zero-trust architecture. Smart access control set up for
          your entire facility. All of it done right, not just fast.
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "opacity-0 animate-fade-up",
            "flex flex-wrap gap-3 font-bold",
            "pointer-events-auto"
          )}
          style={{ animationDelay: "0.7s" }}
        >
          <button
            className={cn(
              "bg-primary text-primary-foreground",
              "px-6 py-3 md:px-8 md:py-4 text-sm",
              "rounded-sm cursor-pointer",
              "hover:brightness-110 transition-all",
              "active:scale-[0.97]"
            )}
          >
            Book a Call
          </button>
          <button
            className={cn(
              "bg-white text-background",
              "px-6 py-3 md:px-8 md:py-4 text-sm",
              "rounded-sm cursor-pointer",
              "hover:brightness-90 transition-all",
              "active:scale-[0.97]"
            )}
          >
            Our Work
          </button>
        </div>

        {/* Trust Line */}
        <p
          className={cn(
            "opacity-0 animate-fade-up",
            "text-muted-foreground/60 text-xs font-light",
            "mt-4 md:mt-6"
          )}
          style={{ animationDelay: "0.85s" }}
        >
          Trusted security partner. Columbus, OH. 12 systems deployed.
        </p>
      </div>
    </section>
  );
}
