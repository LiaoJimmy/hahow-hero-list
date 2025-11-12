import type { ListHeroesResponse } from '~/types/HeroesType';
import { HeroCard } from './HeroCard';

interface HeroCardListProps {
  heroes: ListHeroesResponse;
  onSelect: (heroId: string) => void;
}

export function HeroCardList({ heroes, onSelect }: HeroCardListProps) {
  return (
    <div className="carousel rounded-box gap-2">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} onSelect={onSelect} />
        ))
      }
    </div>
  );
}
