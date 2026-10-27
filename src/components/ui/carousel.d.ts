import React from "react";

export interface CarouselItem {
  id?: string | number;
  image?: string;
  alt?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  items?: (React.ReactNode | CarouselItem)[];
  baseWidth?: number | string;
  aspectRatio?: number;
  peek?: number;
  gap?: number;
  radius?: number;
  frame?: boolean;
  effect?: "tilt" | "scale" | "slide" | "fade" | "cube";
  indicator?: "dots" | "bars" | "none";
  arrows?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  draggable?: boolean;
  round?: boolean;
  initialIndex?: number;
  theme?: "dark" | "light";
  onChange?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function Carousel(props: CarouselProps): React.ReactElement | null;
