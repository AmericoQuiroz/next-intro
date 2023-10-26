import Image from "next/image";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className="py-4">
      <ul className="flex gap-2 items-center">
        <li className="font-bold font-orbitron">
          <NavLink href="/">
            <div className="flex gap-2 items-center cursor-pointer">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/pexel-logo.jpg"
                alt="pexels logo"
                className="w-[46px] h-[40px]"
              />
              Pexels
            </div>
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/photos?search=bolivia">Bolivia</NavLink>
        </li>
        <li>
          <NavLink href="/photos?search=brasil" prefetch={false}>
            Brasil
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
