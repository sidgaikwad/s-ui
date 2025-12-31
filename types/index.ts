export type Framework =
  | "react"
  | "vue"
  | "svelte"
  | "angular"
  | "web-components";
export type PricingModel = "free" | "freemium" | "paid";

export interface Library {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  framework: Framework;
  category: string[];
  tags: string[];
  website: string;
  github: string;
  npm: string;
  docs: string;
  githubStars: number;
  npmDownloads: string;
  features: string[];
  pricing: PricingModel;
  license: string;
  logo: string;
  screenshots: string[];
  demoUrl?: string;
  installCommand: string;
  exampleCode: string;
}
