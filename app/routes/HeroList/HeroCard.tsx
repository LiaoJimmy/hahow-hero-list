import type { Hero } from '~/types/HeroesType';

interface HeroCardProps {
  hero: Hero;
}

export function HeroCard({ hero }: HeroCardProps) {
  return (
    <div className="card bg-base-100 w-72 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={hero.image}
          alt={hero.name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {
            hero.name
          }
        </h2>
      </div>
    </div>
  );
}
