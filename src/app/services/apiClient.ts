import { hc } from "hono/client";
import { ApiRoutes } from "../api/[[...route]]/route";

const client = hc<ApiRoutes>("/");
export const api = client.api;
