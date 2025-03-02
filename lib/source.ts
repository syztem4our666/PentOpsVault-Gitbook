import { docs, meta, blogPosts } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";


export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) return undefined;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    return undefined;
  },
});


export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, meta),
});
