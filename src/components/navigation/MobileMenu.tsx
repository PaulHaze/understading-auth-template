'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useClickAway } from 'react-use';

// import { AnimatePresence, motion } from 'framer-motion';

import Hamburger from 'hamburger-react';

import styles from './MobileMenu.module.css';

export function MobileMenu() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setOpen(false);
  };

  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref} className="sm:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[3.5rem] border-b border-b-white/20 bg-[#05070C] p-5 pt-0 shadow-2xl">
          <ul className="grid gap-2">
            <li onClick={handleClick} className={styles.mobileNavLink}>
              <Link href="/protected-one">Page one</Link>
            </li>
            <li onClick={handleClick} className={styles.mobileNavLink}>
              <Link href="/protected-two">Page two</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
