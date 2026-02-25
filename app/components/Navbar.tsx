'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/page.module.css';

export default function Navbar() {
  let pathname = usePathname();
  let links = {
    '/': 'Home',
    '/about': 'About me',
    '/contact': 'Contact',
    '/projects': 'Projects',
  };
  return (
    <nav>
      <ul>
        {Object.entries(links).map(([path, label]) => (
          <li onClick={e=>
            e.currentTarget.querySelector('a')?.click()
          } key={path} className={pathname === path ? 'active' : undefined}>
            <Link href={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};