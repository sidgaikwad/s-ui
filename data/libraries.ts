// ============================================
// data/libraries.ts
// ============================================

import { Library } from "@/types";

export const libraries: Library[] = [
  {
    id: "1",
    name: "Material-UI (MUI)",
    slug: "material-ui",
    description: "React components that implement Google's Material Design",
    longDescription:
      "MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
    framework: "react",
    category: ["All", "Layout", "Forms", "Navigation", "Data Display"],
    tags: ["Material Design", "Popular", "Mature", "Accessible"],
    website: "https://mui.com",
    github: "https://github.com/mui/material-ui",
    npm: "https://www.npmjs.com/package/@mui/material",
    docs: "https://mui.com/material-ui/getting-started/",
    githubStars: 93000,
    npmDownloads: "3M/week",
    features: [
      "Comprehensive component library with 50+ components",
      "Customizable theming with CSS-in-JS",
      "Full TypeScript support",
      "Accessibility built-in (WCAG 2.1)",
      "Responsive design utilities",
      "Enterprise-ready with commercial support",
    ],
    pricing: "freemium",
    license: "MIT",
    logo: "/logos/mui.svg",
    screenshots: [],
    installCommand: "npm install @mui/material @emotion/react @emotion/styled",
    exampleCode: `import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>
  );
}`,
  },
  {
    id: "2",
    name: "Chakra UI",
    slug: "chakra-ui",
    description: "Simple, modular and accessible component library for React",
    longDescription:
      "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications with speed.",
    framework: "react",
    category: ["All", "Layout", "Forms", "Data Display", "Overlay"],
    tags: ["Accessible", "Customizable", "Developer-friendly", "Modern"],
    website: "https://chakra-ui.com",
    github: "https://github.com/chakra-ui/chakra-ui",
    npm: "https://www.npmjs.com/package/@chakra-ui/react",
    docs: "https://chakra-ui.com/docs/getting-started",
    githubStars: 37000,
    npmDownloads: "500K/week",
    features: [
      "Style props for quick styling",
      "Dark mode support out of the box",
      "Composable components with great DX",
      "Responsive design with array syntax",
      "Accessible by default",
      "Active community and ecosystem",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/chakra.svg",
    screenshots: [],
    installCommand:
      "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
    exampleCode: `import { Button, Stack } from '@chakra-ui/react';

function App() {
  return (
    <Stack spacing={4} direction="row">
      <Button colorScheme="blue" size="md">
        Button
      </Button>
      <Button colorScheme="green" variant="outline">
        Outline
      </Button>
    </Stack>
  );
}`,
  },
  {
    id: "3",
    name: "Shadcn/ui",
    slug: "shadcn-ui",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS",
    longDescription:
      "Not a component library. It's a collection of re-usable components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    framework: "react",
    category: ["All", "Forms", "Overlay", "Data Display", "Navigation"],
    tags: ["Copy-paste", "Tailwind", "Radix UI", "Modern", "Customizable"],
    website: "https://ui.shadcn.com",
    github: "https://github.com/shadcn-ui/ui",
    npm: "https://www.npmjs.com/package/shadcn-ui",
    docs: "https://ui.shadcn.com/docs",
    githubStars: 75000,
    npmDownloads: "150K/week",
    features: [
      "Copy-paste components - you own the code",
      "Built with Radix UI primitives",
      "Styled with Tailwind CSS",
      "Fully customizable and themeable",
      "Accessible by default",
      "TypeScript support",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/shadcn.svg",
    screenshots: [],
    installCommand: "npx shadcn-ui@latest init",
    exampleCode: `import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
}`,
  },
  {
    id: "4",
    name: "Ant Design",
    slug: "ant-design",
    description:
      "Enterprise-class UI design language and React component library",
    longDescription:
      "An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises.",
    framework: "react",
    category: ["All", "Forms", "Data Display", "Navigation", "Layout"],
    tags: ["Enterprise", "Comprehensive", "Design System", "i18n"],
    website: "https://ant.design",
    github: "https://github.com/ant-design/ant-design",
    npm: "https://www.npmjs.com/package/antd",
    docs: "https://ant.design/docs/react/introduce",
    githubStars: 91000,
    npmDownloads: "1.5M/week",
    features: [
      "Enterprise-class UI designed for web applications",
      "50+ high-quality React components",
      "Customizable theme with design tokens",
      "Internationalization support for dozens of languages",
      "TypeScript support",
      "Powerful theme customization",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/antd.svg",
    screenshots: [],
    installCommand: "npm install antd",
    exampleCode: `import { Button, Space } from 'antd';

const App = () => (
  <Space>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
  </Space>
);`,
  },
  {
    id: "5",
    name: "Mantine",
    slug: "mantine",
    description: "A fully featured React components library",
    longDescription:
      "Build fully functional accessible web applications faster than ever – Mantine includes more than 100 customizable components and 50 hooks to cover you in any situation.",
    framework: "react",
    category: ["All", "Forms", "Data Display", "Layout", "Overlay"],
    tags: ["Modern", "Hooks", "Dark Mode", "Accessible"],
    website: "https://mantine.dev",
    github: "https://github.com/mantinedev/mantine",
    npm: "https://www.npmjs.com/package/@mantine/core",
    docs: "https://mantine.dev/getting-started/",
    githubStars: 26000,
    npmDownloads: "200K/week",
    features: [
      "100+ customizable components",
      "50+ hooks for common use cases",
      "Dark theme support",
      "TypeScript based",
      "Accessibility focused",
      "Free and open source",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/mantine.svg",
    screenshots: [],
    installCommand: "npm install @mantine/core @mantine/hooks",
    exampleCode: `import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="light">Light</Button>
    </Group>
  );
}`,
  },
  {
    id: "6",
    name: "DaisyUI",
    slug: "daisyui",
    description: "The most popular component library for Tailwind CSS",
    longDescription:
      "DaisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever. Use semantic color names, responsive modifiers, and state modifiers.",
    framework: "web-components",
    category: ["All", "Forms", "Navigation", "Data Display"],
    tags: ["Tailwind", "Utility-first", "Themes", "Lightweight"],
    website: "https://daisyui.com",
    github: "https://github.com/saadeghi/daisyui",
    npm: "https://www.npmjs.com/package/daisyui",
    docs: "https://daisyui.com/docs/install/",
    githubStars: 33000,
    npmDownloads: "300K/week",
    features: [
      "Pure CSS components",
      "Works with any JS framework",
      "Customizable with CSS variables",
      "30+ themes included",
      "Semantic color names",
      "Responsive and accessible",
    ],
    pricing: "freemium",
    license: "MIT",
    logo: "/logos/daisyui.svg",
    screenshots: [],
    installCommand: "npm install daisyui",
    exampleCode: `<!-- Add daisyui to tailwind.config.js -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>`,
  },
  {
    id: "7",
    name: "Next UI",
    slug: "nextui",
    description: "Beautiful, fast and modern React UI library",
    longDescription:
      "Make beautiful websites regardless of your design experience. NextUI is a beautiful, fast, and modern React UI library that allows you to create beautiful websites.",
    framework: "react",
    category: ["All", "Forms", "Navigation", "Data Display", "Overlay"],
    tags: ["Modern", "Beautiful", "Fast", "Server Components"],
    website: "https://nextui.org",
    github: "https://github.com/nextui-org/nextui",
    npm: "https://www.npmjs.com/package/@nextui-org/react",
    docs: "https://nextui.org/docs/guide/introduction",
    githubStars: 21000,
    npmDownloads: "100K/week",
    features: [
      "Server and client components",
      "Automatic dark mode",
      "Fast performance",
      "Fully customizable",
      "Accessible components",
      "TypeScript support",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/nextui.svg",
    screenshots: [],
    installCommand: "npm install @nextui-org/react framer-motion",
    exampleCode: `import {Button} from "@nextui-org/react";

export default function App() {
  return (
    <Button color="primary">
      Click me
    </Button>
  );
}`,
  },
  {
    id: "8",
    name: "Radix UI",
    slug: "radix-ui",
    description:
      "Unstyled, accessible components for building high‑quality design systems",
    longDescription:
      "An open-source UI component library for building high-quality, accessible design systems and web apps. Unstyled and compatible with any styling solution.",
    framework: "react",
    category: ["All", "Forms", "Overlay", "Navigation"],
    tags: ["Unstyled", "Accessible", "Primitives", "Headless"],
    website: "https://www.radix-ui.com",
    github: "https://github.com/radix-ui/primitives",
    npm: "https://www.npmjs.com/package/@radix-ui/react-dropdown-menu",
    docs: "https://www.radix-ui.com/docs/primitives/overview/introduction",
    githubStars: 15000,
    npmDownloads: "2M/week",
    features: [
      "Unstyled and customizable",
      "Accessible by default",
      "Incremental adoption",
      "Keyboard navigation",
      "Focus management",
      "Screen reader support",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/radix.svg",
    screenshots: [],
    installCommand: "npm install @radix-ui/react-dropdown-menu",
    exampleCode: `import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      Open Menu
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item>Item 2</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);`,
  },
  {
    id: "9",
    name: "Headless UI",
    slug: "headless-ui",
    description: "Completely unstyled, fully accessible UI components",
    longDescription:
      "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS. Created by the makers of Tailwind CSS.",
    framework: "react",
    category: ["All", "Forms", "Overlay", "Navigation"],
    tags: ["Unstyled", "Tailwind", "Accessible", "Headless"],
    website: "https://headlessui.com",
    github: "https://github.com/tailwindlabs/headlessui",
    npm: "https://www.npmjs.com/package/@headlessui/react",
    docs: "https://headlessui.com/react/menu",
    githubStars: 25000,
    npmDownloads: "1M/week",
    features: [
      "Completely unstyled",
      "Built for Tailwind CSS",
      "Fully accessible",
      "Keyboard navigation",
      "Focus management",
      "React and Vue support",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/headlessui.svg",
    screenshots: [],
    installCommand: "npm install @headlessui/react",
    exampleCode: `import { Menu } from '@headlessui/react'

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a className={active ? 'bg-blue-500' : ''}>
              Account settings
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}`,
  },
  {
    id: "10",
    name: "React Aria",
    slug: "react-aria",
    description:
      "A library of React Hooks that provides accessible UI primitives",
    longDescription:
      "React Aria provides accessibility and behavior for your design system. Built by Adobe, it provides React Hooks for building accessible, high-quality UI components.",
    framework: "react",
    category: ["All", "Forms", "Navigation", "Overlay"],
    tags: ["Accessible", "Hooks", "Adobe", "Primitives"],
    website: "https://react-spectrum.adobe.com/react-aria/",
    github: "https://github.com/adobe/react-spectrum",
    npm: "https://www.npmjs.com/package/react-aria",
    docs: "https://react-spectrum.adobe.com/react-aria/getting-started.html",
    githubStars: 12000,
    npmDownloads: "500K/week",
    features: [
      "Accessibility built-in",
      "Internationalization support",
      "Cross-browser compatibility",
      "Mobile-friendly interactions",
      "Keyboard navigation",
      "Screen reader support",
    ],
    pricing: "free",
    license: "Apache-2.0",
    logo: "/logos/react-aria.svg",
    screenshots: [],
    installCommand: "npm install react-aria",
    exampleCode: `import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef();
  let {buttonProps} = useButton(props, ref);
  
  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}`,
  },
];

// Helper function to get library by slug
export function getLibraryBySlug(slug: string): Library | undefined {
  return libraries.find((lib) => lib.slug === slug);
}

// Helper function to filter libraries
export function filterLibraries(
  searchQuery: string,
  framework: string,
  category: string
): Library[] {
  return libraries.filter((lib) => {
    const matchesSearch =
      lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFramework = framework === "All" || lib.framework === framework;
    const matchesCategory =
      category === "All" || lib.category.includes(category);

    return matchesSearch && matchesFramework && matchesCategory;
  });
}
