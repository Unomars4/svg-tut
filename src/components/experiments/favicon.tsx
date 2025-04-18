import PracticalLayout from "../layouts/prac-layout";
import SVGLayout from "../layouts/svg-layout";

export default function Favicon() {
  return (
    <PracticalLayout day={100} title="Favicon">
      <SVGLayout>
        <defs>
          <linearGradient id="logoColors">
            <stop offset="30%" stop-color="#fb4934" />
            <stop offset="43%" stop-color="#98971a" />
            <stop offset="85%" stop-color="#076678" />
          </linearGradient>
        </defs>
        <circle fill="url('#logoColors')" cx={0} cy={0} r={50} />
      </SVGLayout>
    </PracticalLayout>
  );
}
