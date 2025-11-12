import type { ActionFunctionArgs } from 'react-router';
import type { HeroLoaderParams } from '~/types/HeroesType';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router';
import HahowqueryClient from '~/api/HahowQueryClient';
import { getHeroProfileQuery, patchHeroProfile } from '~/api/HeroesQuery';
import { Ability } from './Ability';
import HeroProfileSchema from './HeroProfileSchema';

export async function loader({
  params,
}: HeroLoaderParams) {
  await HahowqueryClient.fetchQuery(getHeroProfileQuery(params.heroId!));
  return { heroId: params.heroId || '' };
}
export type LoaderAwaiatedReturnType = Awaited<ReturnType<typeof loader>>;

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const entries = Object.fromEntries(formData);
  const profile = HeroProfileSchema.parse(entries);
  await patchHeroProfile(params.heroId!, profile);
  await HahowqueryClient.invalidateQueries({ queryKey: [['hero', params.heroId!, 'profile']] });
  return null;
}

export default function HeroProfile() {
  const { heroId } = useLoaderData<LoaderAwaiatedReturnType>();
  const { data } = useSuspenseQuery(getHeroProfileQuery(heroId));
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const [profile, setProfile] = useState(data);
  const [totalAP, setTotalAP] = useState(data.str + data.int + data.agi + data.luk);

  useEffect(() => {
    setProfile(data);
    setTotalAP(data.str + data.int + data.agi + data.luk);
  }, [data]);

  const usedAP = profile.str + profile.int + profile.agi + profile.luk;
  const restAP = totalAP - usedAP;

  return (
    <Form method="post" className="flex rounded-lg shadow-lg gap-8 sm:gap-16 flex-col sm:flex-row items-end justify-center">
      <title>Hero Profile Page</title>
      <div className="flex flex-col gap-4">
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
      <div className="flex flex-col justify-end gap-4 w-48">
        剩餘點數：
        {restAP}
        <button type="submit" className="btn btn-xl" disabled={restAP !== 0 || isSubmitting}>儲存</button>
      </div>
    </Form>
  );
}
