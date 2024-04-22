import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

export const Navbar = () => (
  <header>
    <Image src={Logo} alt="Monito Logo" width={92} height={32} />
  </header>
);
