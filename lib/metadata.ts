import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://pentopsvault.vercel.app',
      images: '/logo.png',
      siteName: 'PentOpsVault',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@syztem4our666',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/logo.png',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);