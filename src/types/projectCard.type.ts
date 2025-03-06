// types.ts
import { ReactElement } from "react";

export interface Project {
  id: number
  title: string;
  description: string;
  images: string[];
  slug: string;
  tags: { icon: ReactElement; label: string }[];
}