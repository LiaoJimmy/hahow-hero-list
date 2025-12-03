import type { SyntheticEvent } from 'react';
import type { HeroProfile as HeroProfileType } from '~/types/HeroesType';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Form, useNavigation, useParams } from 'react-router';
import HahowqueryClient from '~/api/HahowQueryClient';
import { getHeroProfile, patchHero } from '~/api/HeroesQuery';
import HeroProfileSkeleton from '~/routes/HeroProfile/HeroProfileSkeleton';
import { Ability } from './Ability';

export default function HeroProfile() {
  const { heroId = '' } = useParams();
  const { data } = useQuery(getHeroProfile(heroId));
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [profile, setProfile] = useState<HeroProfileType>();

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data]);

  if (!profile || !data) {
    return <HeroProfileSkeleton />;
  }

  const handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    patchHero(heroId, profile).then(() => {
      HahowqueryClient.invalidateQueries({
        queryKey: getHeroProfile(heroId).queryKey,
      });
    });
  };

  const totalAP = data.str + data.int + data.agi + data.luk;
  const usedAP = profile.str + profile.int + profile.agi + profile.luk;
  const restAP = totalAP - usedAP;
  return (
    <Form method="post" className="flex rounded-lg shadow-lg gap-8 sm:gap-16 flex-col sm:flex-row items-center sm:items-end justify-center" onSubmit={handleFormSubmit}>
      <title>Hero Profile Page</title>
      <div className="flex flex-col gap-4 w-54">
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
      <div className="flex flex-col gap-4 w-48">
        <p className="text-center sm:text-left">
          剩餘點數：
          {restAP}
        </p>
        <button type="submit" className="btn btn-xl" disabled={restAP !== 0 || isSubmitting}>儲存</button>
      </div>
    </Form>
  );
}
