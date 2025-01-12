"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export const MenuBtn = () => {
  const pathName = usePathname();
  if (pathName === "/translations") {
    return (
      <Link className="mr-2 border rounded-md p-2" href="/translations">
        Translate New
      </Link>
    );
  }
  return (
    <Link className="mr-2 border rounded-md p-2" href="/translations">
      My Translations
    </Link>
  );
};
