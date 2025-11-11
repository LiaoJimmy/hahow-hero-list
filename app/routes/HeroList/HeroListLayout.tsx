import { useSuspenseQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import HahowqueryClient from '~/api/HahowQueryClient';
import { listHeroesQuery } from '~/api/HeroesQuery';
import { HeroCardList } from './HeroCardList';

export async function loader() {
  await HahowqueryClient.ensureQueryData(listHeroesQuery());
  return {};
}

export default function HeroListLayout() {
  const { data: heroes } = useSuspenseQuery(listHeroesQuery());
  return (
    <div className="pt-16 flex justify-center">
      <HeroCardList heroes={heroes} />
      <Outlet />
    </div>
  );
}
