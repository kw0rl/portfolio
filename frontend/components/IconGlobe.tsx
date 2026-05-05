'use client';

import React, { useEffect, useState } from 'react';
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon } from 'react-icon-cloud';

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
    radiusX: 0.8,
    radiusY: 0.8,
    radiusZ: 0.8,
  },
};

const slugs = [
  'typescript',
  'javascript',
  'react',
  'reactnative',
  'nodedotjs',
  'nextdotjs',
  'php',
  'mysql',
  'postgresql',
  'html5',
  'css3',
  'tailwindcss',
  'git',
  'github',
  'visualstudiocode',
  'vercel',
  'figma',
  'framer',
  'docker',
  'amazon',
  'linux',
  'ubuntu',
  'nginx',
  'redis',
  'mongodb',
  'prisma',
  'graphql',
  'firebase',
  'android',
  'ios',
  'apple',
  'npm',
  'yarn',
  'pnpm',
  'vite',
  'jest',
  'postman',
  'gitlab',
];

export default function IconGlobe() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  const renderedIcons = React.useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon: any) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );
  }, [data]);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {renderedIcons ? (
        <Cloud {...cloudProps}>
          {renderedIcons}
        </Cloud>
      ) : (
        <div className="flex h-64 items-center justify-center text-sm text-zinc-500">
          Loading globe...
        </div>
      )}
    </div>
  );
}
