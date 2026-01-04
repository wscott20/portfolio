'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/page.module.css';

export default function Navbar() {
    let pathname = usePathname();
    let links = {
        '/': 'Home',
        '/about': 'About me',
        '/contact': 'Contact'
    };
    return (
       <nav>
            <ul>
                {Object.entries(links).map(([path, label]) => (
                    <li key={path} className={pathname === path ? 'active' : ''}>
                        <Link href={path}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};