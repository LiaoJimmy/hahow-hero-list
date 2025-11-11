import type { ListHeroesResponse } from '~/types/HeroesType';
import { HeroCard } from './HeroCard';

interface HeroCardListProps {
  heroes: ListHeroesResponse;
}

export function HeroCardList({ heroes }: HeroCardListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))
      }
    </div>
  );
}
