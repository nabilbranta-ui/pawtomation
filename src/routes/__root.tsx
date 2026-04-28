import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pawtomation" },
      { name: "description", content: "Pawfectly Managed is a modern SaaS platform designed for comprehensive pet clinic management." },
      { name: "author", content: "Pawtomation" },
      { property: "og:title", content: "Pawtomation" },
      { property: "og:description", content: "Pawfectly Managed is a modern SaaS platform designed for comprehensive pet clinic management." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Pawtomation" },
      { name: "twitter:title", content: "Pawtomation" },
      { name: "twitter:description", content: "Pawfectly Managed is a modern SaaS platform designed for comprehensive pet clinic management." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/83915065-3079-48b3-89a9-683f8599e3a6/id-preview-fa1f84d3--0e328e82-ce1f-4b67-9390-dc2d9bcc4941.lovable.app-1777370546614.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/83915065-3079-48b3-89a9-683f8599e3a6/id-preview-fa1f84d3--0e328e82-ce1f-4b67-9390-dc2d9bcc4941.lovable.app-1777370546614.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
