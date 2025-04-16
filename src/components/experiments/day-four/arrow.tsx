import SVGLayout from "../../layouts/svg-layout";

export default function Arrow() {
  return (
    <SVGLayout>
      <path
        d="M -70 0 L 70 0 L 30 -50 M 70 0 L 30 50"
        fill="none"
        stroke="#D1495B"
        strokeWidth={25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGLayout>
  );
}
