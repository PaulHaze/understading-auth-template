'use client';

import Hamburger from 'hamburger-react';

import { useState } from 'react';

export function MobileMenu() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="sm:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
    </div>
  );
}
