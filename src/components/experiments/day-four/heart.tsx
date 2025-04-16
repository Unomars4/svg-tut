import SVGLayout from "../../layouts/svg-layout";

export default function Heart() {
  return (
    <SVGLayout>
      <path
        d="M -30 -20 L 0 10 L 30 -20 "
        fill="none"
        stroke="#D1495B"
        strokeWidth={80}
        strokeLinecap="round"
      />
    </SVGLayout>
  );
}
