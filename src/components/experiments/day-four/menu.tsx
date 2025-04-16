import SVGLayout from "../../layouts/svg-layout";

export default function Menu() {
  return (
    <SVGLayout>
      <path
        d="M -45, -45 L 45, -45 M -45, 0 L 45, 0 M -45, 45 L 45, 45"
        stroke="#D1495B"
        strokeWidth={15}
        strokeLinecap="round"
      />
    </SVGLayout>
  );
}
