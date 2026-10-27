import { Droplet, Leaf, Sparkles } from "lucide-react";

const values = [
  {
    icon: Droplet,
    title: "Respect de la peau",
    text: "Nos parfums sont formulés pour convenir aux peaux sensibles, sans compromis sur la tenue ni sur la sensualité.",
  },
  {
    icon: Leaf,
    title: "Ingrédients nobles",
    text: "Chaque essence est choisie pour sa qualité et son authenticité, avec une attention particulière portée à la naturalité.",
  },
  {
    icon: Sparkles,
    title: "Conçu pour les femmes",
    text: "Sélya sublime la beauté féminine avec des fragrances créées pour inspirer, apaiser et révéler la douceur.",
  },
];

export function HomeValues() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.35em] uppercase text-gold">
          Nos valeurs
        </p>
        <h2 className="mb-14 font-serif text-4xl font-light md:text-5xl">
          Les engagements de Sélya
        </h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="space-y-4">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-border text-gold">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl font-medium">{title}</h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
