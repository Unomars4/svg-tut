import React from "react";

type PracticalProps = {
  day: number;
  title: string;
  children: React.ReactNode;
};

export default function PracticalLayout({
  day,
  title,
  children,
}: PracticalProps) {
  return (
    <section className="prac">
      <h3>Day {day}</h3>
      <h5>{title}</h5>
      {children}
    </section>
  );
}
