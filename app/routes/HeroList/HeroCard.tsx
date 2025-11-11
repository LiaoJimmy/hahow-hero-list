import type { Hero } from '~/types/HeroesType';

interface HeroCardProps {
  hero: Hero;
  onSelect: (heroId: string) => void;
}

export function HeroCard({ hero, onSelect }: HeroCardProps) {
  const handleCardClick = () => {
    onSelect(hero.id);
  };

  return (
    <div className="card bg-base-100 w-72 shadow-sm" onClick={handleCardClick}>
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
