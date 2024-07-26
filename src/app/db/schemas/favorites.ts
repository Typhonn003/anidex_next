import {
  pgTable,
  serial,
  text,
  index,
  unique,
  integer,
} from "drizzle-orm/pg-core";

export const favorites = pgTable(
  "favorites",
  {
    id: serial("id").primaryKey(),
    malId: integer("mal_id").notNull(),
    userId: text("user_id").notNull(),
    imageUrl: text("image_url").notNull(),
    title: text("title").notNull(),
  },
  (favorites) => {
    return {
      userIdIndex: index("user_id_idx").on(favorites.userId),
      uniqueUserAnime: unique("unique_user_anime").on(
        favorites.malId,
        favorites.userId
      ),
    };
  }
);
