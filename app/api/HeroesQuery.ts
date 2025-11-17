import type { GetHeroProfileResponse, GetHeroResponse, ListHeroesResponse, PatchHeroProfileBody } from '~/types/HeroesType';
import { queryOptions } from '@tanstack/react-query';
import HahowRecruitAPI from './HahowRecruitAPI';

export function listHeroes() {
  return queryOptions({
    queryKey: ['heroes'],
    queryFn: () => {
      return HahowRecruitAPI.get<ListHeroesResponse>('/heroes');
    },
  });
}

export function getHero(heroId: string) {
  return queryOptions({
    queryKey: ['hero', heroId],
    queryFn: () => {
      return HahowRecruitAPI.get<GetHeroResponse>(`/heroes/${heroId}`);
    },
  });
}

export function getHeroProfile(heroId: string) {
  return queryOptions({
    queryKey: ['hero', heroId, 'profile'],
    queryFn: () => {
      return HahowRecruitAPI.get<GetHeroProfileResponse>(`/heroes/${heroId}/profile`);
    },
  });
}

export function patchHero(heroId: string, profile: PatchHeroProfileBody) {
  return HahowRecruitAPI.patch<PatchHeroProfileBody>(`/heroes/${heroId}/profile`, profile);
}
