import type { HeroLoaderParams } from '~/types/HeroesType';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Outlet, useNavigate } from 'react-router';
import HahowqueryClient from '~/api/HahowQueryClient';
import { listHeroesQuery } from '~/api/HeroesQuery';
import { HeroCardList } from './HeroCardList';

export async function loader({
  params,
}: HeroLoaderParams) {
  await HahowqueryClient.ensureQueryData(listHeroesQuery());
  return { heroId: params.heroId || '' };
}
export type LoaderAwaiatedReturnType = Awaited<ReturnType<typeof loader>>;

export default function HeroListLayout() {
  const { data: heroes } = useSuspenseQuery(listHeroesQuery());
  const navigate = useNavigate();

  const handleHeroSelect = (heroId: string) => {
    navigate(`/heroes/${heroId}`);
  };

  return (
    <div className="pt-8 flex justify-center">
      <div className="flex flex-col items-center w-9/10 lg:w-3xl xl:w-7xl gap-8">
        <HeroCardList heroes={heroes} onSelect={handleHeroSelect} />
        <Outlet />
      </div>
    </div>
  );
}
