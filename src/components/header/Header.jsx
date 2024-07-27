// Header.jsx

import Image from 'next/image';
import DarkModeSwitch from './DarkModeSwitch';
import SearchBox  from '../SearchBox';


export default function Header() {
  return (
    <div className="flex items-center justify-between">

      {/* Logo */}
      <div>
        <a href="/"><Image src="/logo.svg" width={64} height={64} className="hidden md:block" alt="Screenshots of the dashboard project showing desktop version"/></a>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/series">Series</a>
        <a href="/users">Users</a>
      </div>

      {/* SearchBar */}
      <div>
        <SearchBox placeholder="Search invoices..." />
      </div>

      {/* darkMode switch */}
      <div className="flex items-center gap-4">
        <DarkModeSwitch/>
      </div>

    </div>
  );
}
