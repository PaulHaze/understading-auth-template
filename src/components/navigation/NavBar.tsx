'use client';

import Link from 'next/link';

import { MobileMenu } from './MobileMenu';

export function NavBar() {
  return (
    <nav className="h-[65px] w-full bg-black/70">
      <div className="mx-auto flex h-full max-w-md items-center justify-between bg-transparent px-8 py-2 md:px-0">
        <Link className="nav-link" href="/">
          Understanding Auth
        </Link>
        <div className="hidden gap-x-3 sm:flex">
          <Link href="/protected-one" className="nav-link">
            Page one
          </Link>
          <Link href="/protected-two" className="nav-link">
            Page two
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
