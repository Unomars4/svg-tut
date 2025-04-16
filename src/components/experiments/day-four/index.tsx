import PracticalLayout from "../../layouts/prac-layout";
import Arrow from "./arrow";
import Heart from "./heart";
import Menu from "./menu";

export default function DayFour() {
  return (
    <PracticalLayout
      svgContainerClass="multiple"
      day={4}
      title="Menu, Heart and Arrow"
    >
      <Menu />
      <Heart />
      <Arrow />
    </PracticalLayout>
  );
}
