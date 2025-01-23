import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NavPaths } from "@/shared/nav";
import { Layout } from "@/shared/layout";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: NavPaths.app.lending.path,
      element: <Layout />,
      children: [
        {
          path: NavPaths.app.lending.path,
          lazy: async () => {
            const m = await import("./landing/ui/index.tsx");
            return { element: <m.default /> };
          },
        },
        {
          path: NavPaths.app.docs.path,
          lazy: async () => {
            const m = await import("./docs/ui/index.tsx");
            return { element: <m.default /> };
          },
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
