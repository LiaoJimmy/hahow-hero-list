import { useSuspenseQuery } from '@tanstack/react-query';
import { Outlet, useNavigate } from 'react-router';
import HahowqueryClient from '~/api/HahowQueryClient';
import { listHeroesQuery } from '~/api/HeroesQuery';
import { HeroCardList } from './HeroCardList';

export async function loader({
  params,
}: { params: { heroId?: string } }) {
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
    <div className="pt-16 flex flex-col items-center gap-4">
      <HeroCardList heroes={heroes} onSelect={handleHeroSelect} />
      <Outlet />
    </div>
  );
}
