import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, TerminalIcon, NetworkIcon, LinkIcon, LibraryIcon, NewspaperIcon } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/syztem4our666',
  nav: {
    title: (
      <div className="flex items-center">
        <img
          src="https://icons.iconarchive.com/icons/gakuseisean/ivista-2/128/Network-Globe-Disconnected-icon.png"
          width="32"
          height="32"
          alt="Internet Icon"
          className="mr-2"
        />
        <span>PentOpsVault</span>
      </div>
    ),
    
  },
  links: [
    {
      type: 'menu',
      text: 'Documentation',
      icon: <BookIcon />,
      items: [
        {
          text: 'Home',
          description: 'Index of the docs',
          url: '/docs/index',
          icon: <LibraryIcon />,
        },
        {
          text: 'CheatSheets',
          description: 'Quick reference guides for commands and tools',
          url: '/docs/CheatSheets/CheatSheets',
          icon: <LinkIcon />,
        },
        {
          text: 'Networks',
          description: 'Essential Cisco commands and networking fundamentals',
          url: '/docs/Networks',
          icon: <NetworkIcon />,
        },
        {
          text: 'Pentesting Linux',
          description: 'Comprehensive guide to penetration testing on Linux',
          url: '/docs/PentestingLinux',
          icon: <TerminalIcon />,
        },
        {
          text: 'Linux',
          description: 'Master Linux commands and system administration',
          url: '/docs/Linux/commands',
          icon: <TerminalIcon />,
        },
        {
          text: 'Pentesting Windows',
          description: 'Techniques and tools for Windows penetration testing',
          url: '/docs/PentestingWindows',
          icon: <TerminalIcon />,
        },
      ],
    },
    {
      type: 'menu',
      text: 'News Feed',
      icon: <NewspaperIcon />,
      items: [
        {
          text: 'News Feed',
          description: 'Get the latest updates on CVE`s, Cybersecurity, Windows, Linux, and Hacking.',
          url: 'https://newsfeedrss.vercel.app/',
          icon: <NewspaperIcon />,
        },
      ],
    },
  ],
};
