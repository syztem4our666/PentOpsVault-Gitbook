import { defineDocs, defineCollections, frontmatterSchema, defineConfig } from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});


export const blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
  }),
});

// Exportar configuración global
export default defineConfig();
