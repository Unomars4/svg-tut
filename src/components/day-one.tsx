import PracticalLayout from "./layouts/prac-layout";

export default function DayOne() {
  return (
    <PracticalLayout day={1} title="Christmas Ornament">
      <svg width={200} height={200}>
        <circle cx={100} cy={120} r={70} fill="#D1495B" />
        <rect x={82} y={35} height={20} width={36} fill="#f79257" />
        <circle
          cx={100}
          cy={25}
          r={12}
          fill="none"
          stroke="#F79257"
          strokeWidth={2}
        />
      </svg>
    </PracticalLayout>
  );
}
