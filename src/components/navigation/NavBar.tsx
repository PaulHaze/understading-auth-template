import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="w-full bg-black/70 py-4">
      <div className="mx-auto flex max-w-md justify-between bg-transparent px-8 md:px-0">
        <Link href="/">Understanding Auth</Link>
        <div className="flex gap-x-3">
          <Link href="/protected-one">Page one</Link>
          <Link href="/protected-two">Page two</Link>
        </div>
      </div>
    </nav>
  );
}
