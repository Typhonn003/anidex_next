import { z } from "zod";

export const favoriteSchema = z.object({
  mal_id: z.number(),
  image_url: z.string(),
  title: z.string(),
});

export type Favorite = z.infer<typeof favoriteSchema>;
