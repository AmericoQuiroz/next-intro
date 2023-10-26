"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
}

export default function NavLink({ children, href, prefetch }: NavLinkProps) {
  const pathname = usePathname();
  if (href === pathname) {
    return <span className="text-blue-500">{children}</span>;
  }

  console.log("[CLIENT] rendering");

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="text-blue-500 hover:underline"
    >
      {children}
    </Link>
  );
}
