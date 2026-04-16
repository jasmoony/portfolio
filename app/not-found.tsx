import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-neptune-700">
      <div className="mb-8 text-6xl">🌌</div>
      <h1 className="font-serif text-display-xl text-background mb-4">404</h1>
      <p className="text-background-soft text-xl mb-2 max-w-md">
        looks like we're not on planet earth anymore.
      </p>
      <p className="text-background-muted text-lg mb-10">
        let's get back to it...
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors"
      >
        back to earth
      </Link>

      {/* Stars */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes twinkle {
            0%, 100% { opacity: 0.6; }
          }
        }
      `}</style>
    </div>
  );
}
