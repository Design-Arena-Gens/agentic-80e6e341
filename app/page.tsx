import Image from "next/image";

const cats = [
  {
    name: "Willow",
    description: "Sun-dappled tabby soaking in a lazy afternoon window seat.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Milo",
    description: "Curious orange kitten investigating a field of daisies.",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luna",
    description: "Blue-eyed beauty lounging on a plush, velvet cushion.",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nori",
    description: "Playful puffball mid-pounce, ready to chase the next toy.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hazel",
    description: "Regal longhair perched on a chair like a tiny monarch.",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-12 px-6 py-16 sm:py-20 lg:gap-16">
        <header className="flex flex-col items-center gap-6 text-center">
          <span className="rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.4em] text-stone-300">
            The Cat Collective
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Five Felines to Brighten Your Day
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-stone-300">
            Meet a handpicked crew of charismatic cats captured in their natural
            moments of wonder, whimsy, and well-deserved relaxation.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((cat, index) => (
            <figure
              key={cat.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:border-white/30 hover:bg-white/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.name}, ${cat.description.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                  priority={index === 0}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex flex-col gap-2 px-6 py-5">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {cat.name}
                </h2>
                <p className="text-sm text-stone-300">{cat.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}
