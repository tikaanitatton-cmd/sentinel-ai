import { cn } from "@/lib/cn";

export function Navbar() {
  const navLinks = [
    "Services",
    "About Us",
    "Projects",
    "Team",
    "Contacts",
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "flex justify-between items-center",
        "px-8 lg:px-16 py-5",
        "backdrop-blur-sm"
      )}
    >
      {/* Logo */}
      <div className="text-foreground text-xl font-semibold tracking-tight">
        SENTINEL
      </div>

      {/* Nav Links - Hidden on mobile */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className={cn(
              "text-sm text-muted-foreground hover:text-foreground",
              "transition-colors uppercase tracking-widest"
            )}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button - Hidden on mobile */}
      <button
        className={cn(
          "hidden md:inline-flex",
          "text-foreground bg-nav-button hover:bg-nav-button/80",
          "active:scale-[0.97] transition-all",
          "rounded-lg uppercase text-xs tracking-widest",
          "px-6 py-3 lg:py-3.5",
          "font-semibold"
        )}
      >
        Get Quote
      </button>
    </nav>
  );
}
