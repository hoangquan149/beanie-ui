import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: HomePage,
  },
];
