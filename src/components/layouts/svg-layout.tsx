import { ReactNode } from "react";

type SVGLayoutProps = {
  children: ReactNode;
  dimensions?: string;
  w?: number;
  h?: number;
};

export default function SVGLayout({
  children,
  dimensions = "-100 -100 200 200",
  w = 200,
  h = 200,
}: SVGLayoutProps) {
  return (
    <svg width={w} height={h} viewBox={dimensions}>
      {children}
    </svg>
  );
}
