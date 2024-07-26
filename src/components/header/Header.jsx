// Header.jsx
import { HomeIcon, SunIcon } from '@heroicons/react/24/solid'; // Assurez-vous que l'importation est correcte
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="flex gap-4">
        <a href="/"><Image src="/logo.svg" width={64} height={64} className="hidden md:block" alt="Screenshots of the dashboard project showing desktop version"/></a>
      </div>
    </div>
  );
}
