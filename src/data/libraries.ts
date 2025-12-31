import { Library } from "@/src/types";

export const libraries: Library[] = [
  {
    id: "1",
    name: "Material-UI (MUI)",
    slug: "material-ui",
    description: "React components that implement Google's Material Design",
    longDescription:
      "MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
    framework: "react",
    category: ["All", "Layout", "Forms", "Navigation"],
    tags: ["Material Design", "Popular", "Mature"],
    website: "https://mui.com",
    github: "https://github.com/mui/material-ui",
    npm: "https://www.npmjs.com/package/@mui/material",
    docs: "https://mui.com/material-ui/getting-started/",
    githubStars: 93000,
    npmDownloads: "3M/week",
    features: [
      "Comprehensive component library",
      "Customizable theming",
      "Accessibility built-in",
      "TypeScript support",
    ],
    pricing: "freemium",
    license: "MIT",
    logo: "/logos/mui.svg",
    screenshots: [],
    installCommand: "npm install @mui/material @emotion/react @emotion/styled",
    exampleCode: `import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}`,
  },
  {
    id: "2",
    name: "Chakra UI",
    slug: "chakra-ui",
    description: "Simple, modular and accessible component library for React",
    longDescription:
      "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
    framework: "react",
    category: ["All", "Layout", "Forms", "Data Display"],
    tags: ["Accessible", "Customizable", "Developer-friendly"],
    website: "https://chakra-ui.com",
    github: "https://github.com/chakra-ui/chakra-ui",
    npm: "https://www.npmjs.com/package/@chakra-ui/react",
    docs: "https://chakra-ui.com/docs/getting-started",
    githubStars: 37000,
    npmDownloads: "500K/week",
    features: [
      "Style props for quick styling",
      "Dark mode support",
      "Composable components",
      "Responsive design",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/chakra.svg",
    screenshots: [],
    installCommand:
      "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
    exampleCode: `import { Button } from '@chakra-ui/react';

function App() {
  return <Button colorScheme="blue">Button</Button>;
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
    category: ["All", "Forms", "Overlay", "Data Display"],
    tags: ["Copy-paste", "Tailwind", "Radix UI", "Modern"],
    website: "https://ui.shadcn.com",
    github: "https://github.com/shadcn-ui/ui",
    npm: "https://www.npmjs.com/package/shadcn-ui",
    docs: "https://ui.shadcn.com/docs",
    githubStars: 75000,
    npmDownloads: "150K/week",
    features: [
      "Copy-paste components",
      "Full control over code",
      "Accessible by default",
      "Customizable with Tailwind",
    ],
    pricing: "free",
    license: "MIT",
    logo: "/logos/shadcn.svg",
    screenshots: [],
    installCommand: "npx shadcn-ui@latest init",
    exampleCode: `import { Button } from "@/components/ui/button"

export default function Home() {
  return <Button>Click me</Button>
}`,
  },
];
