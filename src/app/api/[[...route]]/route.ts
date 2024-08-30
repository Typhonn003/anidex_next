import { Hono } from "hono";
import { handle } from "hono/vercel";
import { favoritesRoute } from "./favorites";

export const runtime = "nodejs";

const app = new Hono();

const apiRoutes = app.basePath("/api").route("/", favoritesRoute);

export type ApiRoutes = typeof apiRoutes;

export const GET = handle(apiRoutes);
export const POST = handle(apiRoutes);
export const DELETE = handle(apiRoutes);
