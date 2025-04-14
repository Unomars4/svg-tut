import PracticalLayout from "./layouts/prac-layout";

export default function DayTwo() {
  return (
    <PracticalLayout day={2} title="Christmas Tree">
      <svg width={200} height={400} viewBox="-100 -200 200 400">
        <polygon points="0,0 80,120 -80,120" fill="#234236" />
        <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
        <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
        <rect x={-10} y={120} height={30} width={20} fill="brown" />
      </svg>
    </PracticalLayout>
  );
}
