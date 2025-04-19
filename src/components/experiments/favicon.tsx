import PracticalLayout from "../layouts/prac-layout";
import SVGLayout from "../layouts/svg-layout";

export default function Favicon() {
  return (
    <PracticalLayout day={100} title="Favicon">
      <SVGLayout>
        <defs>
          <radialGradient id="logoColors">
            <stop offset="30%" stop-color=" #9d0006" />
            <stop offset="40%" stop-color="#98971a" />
            <stop offset="85%" stop-color="#076678" />
          </radialGradient>
        </defs>
        <circle fill="url('#logoColors')" cx={0} cy={0} r={50} />
      </SVGLayout>
    </PracticalLayout>
  );
}
