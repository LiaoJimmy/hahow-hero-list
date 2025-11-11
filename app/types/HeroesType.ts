export interface Hero {
  id: string;
  name: string;
  image: string;
}

interface HeroProfile {
  str: number;
  int: number;
  agi: number;
  luk: number;
}

export type ListHeroesResponse = Hero[];
export type GetHeroResponse = Hero;
export type GetHeroProfileResponse = HeroProfile;
export type PatchHeroProfileBody = HeroProfile;
