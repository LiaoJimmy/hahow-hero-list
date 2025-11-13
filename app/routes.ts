import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('./routes/Home.tsx'),
  ...prefix('heroes', [
    layout('./routes/HeroList/HeroListLayout.tsx', [
      index('./routes/HeroList/HeroListIndex.tsx'),
      route(':heroId', './routes/HeroProfile/HeroProfile.tsx'),
    ]),
  ]),
  route('*', './routes/CatchAll.tsx'),
] satisfies RouteConfig;
