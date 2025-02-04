## Fumadocs + Shadcn UI

Fumadocs UI uses a Tailwind CSS preset to add its own styles. With this design, we can improve the themes regularly and release as updates.

It adds colors, utilities, as well as some base styles including default `border-color`, `background-color` and `color`.

### With Shadcn UI

After `shadcn init`, the CSS variables may conflict. You can add the following to `createPreset` in `tailwind.config.js`:

```js
import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    createPreset({
      cssPrefix: "fuma-", // here!
    }),
  ],
  // other options
};
```

This will force Fumadocs to add prefixes to CSS variables.

Since Shadcn UI has its own default background color & text color, you need to remove these defaults from `global.css`, and instead apply them on layouts, like `app/(home)/layout.tsx` for example:

```tsx
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout className="bg-background text-foreground" {...baseOptions}>
      {children}
    </HomeLayout>
  );
}
```

Now Fumadocs should work well with Shadcn UI.
