import React from "react";

type PracticalProps = {
  day: number;
  title: string;
  children: React.ReactNode;
  svgContainerClass?: string;
};

export default function PracticalLayout({
  day,
  title,
  children,
  svgContainerClass = "",
}: PracticalProps) {
  return (
    <section className="prac">
      <div className="headings">
        <h3>Day {day}</h3>
        <h5>{title}</h5>
      </div>
      <div className={svgContainerClass}>{children}</div>
    </section>
  );
}
