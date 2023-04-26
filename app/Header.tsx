"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const style = {
  header: `sticky top-0 z-50 bg-white shadow-md p-5 md:px-10`,
  active: `ml-4 px-2 py-1 hover:text-sky-500 dark:hover:text-sky-400 text-rose-600 underline font-mono font-semibold text-xl`,
  none_active: `ml-4 px-2 py-1 hover:text-sky-500 dark:hover:text-sky-400 font-mono font-semibold text-xl`,
};

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={style.header}>
      <Link href="/" className={style.none_active}>
        Home
      </Link>
      <Link href="/" className={style.none_active}>
        CSR
      </Link>
      <Link href="/ssr" className={pathname?.substring(1,4) === 'ssr' ? style.active : style.none_active}>
        SSR
      </Link>
      <Link href="/ssg" className={pathname?.substring(1,4) === 'ssg' ? style.active : style.none_active}>
        SSG
      </Link>
      <Link href="/isr" className={pathname?.substring(1,4) === 'isr' ? style.active : style.none_active}>
        ISR
      </Link>
    </header>
  );
};

export default Header;
