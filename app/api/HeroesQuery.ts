import type { GetHeroProfileResponse, GetHeroResponse, ListHeroesResponse, PatchHeroProfileBody } from '~/types/HeroesType';
import { useQuery } from '@tanstack/react-query';
import HahowRecruitAPI from './HahowRecruitAPI';

export function listHeroesQuery() {
  return {
    queryKey: ['heroes'],
    queryFn: () => {
      return HahowRecruitAPI.get<ListHeroesResponse>('/heroes');
    },
  };
}

export function useGetHero(heroId: string) {
  return useQuery({
    queryKey: ['hero', heroId],
    queryFn: () => {
      return HahowRecruitAPI.get<GetHeroResponse>(`/heroes/${heroId}`);
    },
  });
}

export function useGetHeroProfile(heroId: string) {
  return useQuery({
    queryKey: ['hero', heroId, 'profile'],
    queryFn: () => {
      return HahowRecruitAPI.get<GetHeroProfileResponse>(`/heroes/${heroId}/profile`);
    },
  });
}

export function usePatchHeroProfile(heroId: string, profile: PatchHeroProfileBody) {
  return useQuery({
    queryKey: ['hero', heroId, 'profile', 'patch'],
    queryFn: () => {
      return HahowRecruitAPI.patch<PatchHeroProfileBody>(`/heroes/${heroId}/profile`, profile);
    },
  });
}
