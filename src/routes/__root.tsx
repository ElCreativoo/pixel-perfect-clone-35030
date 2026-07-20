import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Coiffeur Saleh Herren – Premium Barber Shop in Chur" },
      { name: "description", content: "Coiffeur Saleh Herren in Chur – Premium Herrenhaarschnitte, Skin Fade, Bartdesign, Hot Towel Shave & Grooming. Präzision, Stil und Schweizer Qualität. Jetzt Termin vereinbaren!" },
      { name: "keywords", content: "Barber Chur, Herrenfriseur Chur, Coiffeur Herren Chur, Haarschnitt Chur, Bartpflege Chur, Skin Fade, Hot Towel Shave, Grooming Chur" },
      { name: "author", content: "Coiffeur Saleh Herren" },
      { name: "geo.region", content: "CH-GR" },
      { name: "geo.placename", content: "Chur" },
      { name: "geo.position", content: "46.850;9.532" },
      { property: "og:title", content: "Coiffeur Saleh Herren – Premium Barber Shop in Chur" },
      { property: "og:description", content: "Coiffeur Saleh Herren in Chur – Premium Herrenhaarschnitte, Skin Fade, Bartdesign, Hot Towel Shave & Grooming. Präzision, Stil und Schweizer Qualität. Jetzt Termin vereinbaren!" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_CH" },
      { property: "og:site_name", content: "Coiffeur Saleh Herren" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Coiffeur Saleh Herren – Premium Barber Shop in Chur" },
      { name: "twitter:description", content: "Coiffeur Saleh Herren in Chur – Premium Herrenhaarschnitte, Skin Fade, Bartdesign, Hot Towel Shave & Grooming. Präzision, Stil und Schweizer Qualität. Jetzt Termin vereinbaren!" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2c6a3a3f-5d3a-4d59-bda6-43231ece189f/id-preview-158b58a8--ff49143a-cfd7-4a31-bc2c-7073142b9146.lovable.app-1784566886301.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2c6a3a3f-5d3a-4d59-bda6-43231ece189f/id-preview-158b58a8--ff49143a-cfd7-4a31-bc2c-7073142b9146.lovable.app-1784566886301.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
