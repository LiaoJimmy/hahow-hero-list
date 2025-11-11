import type { HeroLoaderParams } from '~/types/HeroesType';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import HahowqueryClient from '~/api/HahowQueryClient';
import { getHeroProfileQuery } from '~/api/HeroesQuery';
import { Ability } from './Ability';

export async function loader({
  params,
}: HeroLoaderParams) {
  await HahowqueryClient.ensureQueryData(
    getHeroProfileQuery(params.heroId!),
  );
  return { heroId: params.heroId || '' };
}
export type LoaderAwaiatedReturnType = Awaited<ReturnType<typeof loader>>;

export default function HeroProfile() {
  const { heroId } = useLoaderData<LoaderAwaiatedReturnType>();
  const { data } = useSuspenseQuery(getHeroProfileQuery(heroId));
  const [profile, setProfile] = useState(data);

  useEffect(() => {
    setProfile(data);
  }, [data]);

  const totalAP = data.str + data.int + data.agi + data.luk;
  const usedAP = profile.str + profile.int + profile.agi + profile.luk;
  const restAP = totalAP - usedAP;

  return (
    <div className="flex border-4 border-primary rounded-lg shadow-lg">
      <div className="p-4 flex flex-col gap-4">
        <Ability
          name="STR"
          value={profile.str}
          onIncrease={() => setProfile({ ...profile, str: profile.str + 1 })}
          onDecrease={() => setProfile({ ...profile, str: profile.str - 1 })}
        />
        <Ability
          name="INT"
          value={profile.int}
          onIncrease={() => setProfile({ ...profile, int: profile.int + 1 })}
          onDecrease={() => setProfile({ ...profile, int: profile.int - 1 })}
        />
        <Ability
          name="AGI"
          value={profile.agi}
          onIncrease={() => setProfile({ ...profile, agi: profile.agi + 1 })}
          onDecrease={() => setProfile({ ...profile, agi: profile.agi - 1 })}
        />
        <Ability
          name="LUK"
          value={profile.luk}
          onIncrease={() => setProfile({ ...profile, luk: profile.luk + 1 })}
          onDecrease={() => setProfile({ ...profile, luk: profile.luk - 1 })}
        />
      </div>
      <div className="flex flex-col justify-end gap-4 p-4 w-48">
        剩餘點數：
        {restAP}
        <button className="btn btn-xl" disabled={restAP !== 0}>儲存</button>
      </div>
    </div>
  );
}
