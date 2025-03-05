// types.ts
import { ReactElement } from "react";

export interface Project {
  title: string;
  description: string;
  images: string[];
  tags: { icon: ReactElement; label: string }[];
}