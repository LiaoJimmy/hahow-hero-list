import { z } from 'zod';

const HeroProfileSchema = z.object({
  str: z.coerce.number().min(0),
  int: z.coerce.number().min(0),
  agi: z.coerce.number().min(0),
  luk: z.coerce.number().min(0),
});

export default HeroProfileSchema;
