import type { ActionFunctionArgs } from 'react-router';
import type { HeroLoaderParams, PatchHeroProfileBody } from '~/types/HeroesType';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Form, useLoaderData } from 'react-router';
import HahowqueryClient from '~/api/HahowQueryClient';
import { getHeroProfileQuery, patchHeroProfile } from '~/api/HeroesQuery';
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

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);
  const profile: PatchHeroProfileBody = {
    str: Number(entries.str),
    int: Number(entries.int),
    agi: Number(entries.agi),
    luk: Number(entries.luk),
  };
  await patchHeroProfile(params.heroId!, profile);
  HahowqueryClient.invalidateQueries({ queryKey: ['heroes'] });
}

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
    <Form method="post" className="flex border-4 border-primary rounded-lg shadow-lg">
      <title>Hero Profile Page</title>
      <div className="p-4 flex flex-col gap-4">
        <Ability
          name="str"
          value={profile.str}
          onIncrease={() => setProfile({ ...profile, str: profile.str + 1 })}
          onDecrease={() => setProfile({ ...profile, str: profile.str - 1 })}
        />
        <Ability
          name="int"
          value={profile.int}
          onIncrease={() => setProfile({ ...profile, int: profile.int + 1 })}
          onDecrease={() => setProfile({ ...profile, int: profile.int - 1 })}
        />
        <Ability
          name="agi"
          value={profile.agi}
          onIncrease={() => setProfile({ ...profile, agi: profile.agi + 1 })}
          onDecrease={() => setProfile({ ...profile, agi: profile.agi - 1 })}
        />
        <Ability
          name="luk"
          value={profile.luk}
          onIncrease={() => setProfile({ ...profile, luk: profile.luk + 1 })}
          onDecrease={() => setProfile({ ...profile, luk: profile.luk - 1 })}
        />
      </div>
      <div className="flex flex-col justify-end gap-4 p-4 w-48">
        剩餘點數：
        {restAP}
        <button type="submit" className="btn btn-xl" disabled={restAP !== 0}>儲存</button>
      </div>
    </Form>
  );
}
