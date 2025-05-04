import PracticalLayout from "../layouts/prac-layout";
import SVGLayout from "../layouts/svg-layout";

export default function Favicon() {
  return (
    <PracticalLayout day={100} title="Favicon">
      <SVGLayout>
        <circle fill="#d79921" cx={0} cy={0} r={50} />
      </SVGLayout>
    </PracticalLayout>
  );
}
