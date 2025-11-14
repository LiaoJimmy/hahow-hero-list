import type { LoaderAwaiatedReturnType } from './HeroListLayout';
import type { Hero } from '~/types/HeroesType';
import classNames from 'classnames';
import { useLoaderData } from 'react-router';

interface HeroCardProps {
  hero: Hero;
  onSelect: (heroId: string) => void;
}

export function HeroCard({ hero, onSelect }: HeroCardProps) {
  const { heroId: selectedHeroId } = useLoaderData<LoaderAwaiatedReturnType>();
  const isSelected = hero.id === selectedHeroId;

  const handleCardClick = () => {
    if (isSelected) {
      return;
    }
    onSelect(hero.id);
  };

  return (
    <div className="carousel-item">
      <div
        className={classNames('card bg-base-100 shadow-sm cursor-pointer', {
          'card-selected': isSelected,
        })}
        onClick={handleCardClick}
      >
        <figure className="px-10 pt-10">
          <img
            src={hero.image}
            alt={hero.name}
            className="rounded-xl w-[200px] h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{hero.name}</h2>
        </div>
      </div>
    </div>
  );
}
