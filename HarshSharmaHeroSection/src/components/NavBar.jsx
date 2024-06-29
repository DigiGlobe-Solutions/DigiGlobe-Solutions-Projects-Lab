import { navItems } from "../../data";
import {FloatingNav} from "./ui/floating-navbar";

export default function NavBar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}