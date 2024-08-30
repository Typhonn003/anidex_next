import { favoriteSchema } from "@/app/schemas";
import { favorites as favoritesTable } from "@/app/db/schemas";
import { db } from "@/app/db";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { and, eq } from "drizzle-orm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

type Env = {
  Variables: {
    user: KindeUser;
  };
};

export const favoritesRoute = new Hono<Env>()
  .use("/favorites/*", async (c, next) => {
    const section = getKindeServerSession();
    const user = await section.getUser();

    if (!user) return c.json({ message: "Unauthorized" }, 401);

    c.set("user", user);
    await next();
  })
  .use("/favorites/:id{[0-9]+}", async (c, next) => {
    const user = c.var.user;
    const id = Number(c.req.param("id"));

    const favorite = await db
      .select()
      .from(favoritesTable)
      .where(and(eq(favoritesTable.userId, user.id), eq(favoritesTable.id, id)))
      .then((res) => res[0]);

    if (!favorite) return c.json({ message: "Not found" }, 404);

    await next();
  })
  .post("/favorites", zValidator("json", favoriteSchema), async (c) => {
    const user = c.var.user;
    const anime = c.req.valid("json");

    const favorite = await db
      .insert(favoritesTable)
      .values({
        malId: anime.mal_id,
        title: anime.title,
        imageUrl: anime.image_url,
        userId: user.id,
      })
      .returning()
      .then((res) => res[0]);

    return c.json({ data: favorite }, 201);
  })
  .get("/favorites", async (c) => {
    const user = c.var.user;

    const favorites = await db
      .select()
      .from(favoritesTable)
      .where(eq(favoritesTable.userId, user.id));

    return c.json({ data: favorites }, 200);
  })
  .get("/favorites/:id{[0-9]+}", async (c) => {
    const user = c.var.user;
    const id = Number(c.req.param("id"));

    const favorite = await db
      .select()
      .from(favoritesTable)
      .where(and(eq(favoritesTable.userId, user.id), eq(favoritesTable.id, id)))
      .then((res) => res[0]);

    return c.json({ data: favorite }, 200);
  })
  .delete("/favorites/:id{[0-9]+}", async (c) => {
    const user = c.var.user;
    const id = Number(c.req.param("id"));

    await db
      .delete(favoritesTable)
      .where(
        and(eq(favoritesTable.userId, user.id), eq(favoritesTable.malId, id)),
      )
      .returning()
      .then((res) => res[0]);

    return c.json(null, 204);
  });
