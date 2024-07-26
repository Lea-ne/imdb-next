// Header.jsx
import Image from 'next/image';
import DarkModeSwitch from './DarkModeSwitch';


export default function Header() {
  return (
    <div className="flex">
      <div className="flex gap-4">
        
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch/>
        
        <a href="/"><Image src="/logo.svg" width={64} height={64} className="hidden md:block" alt="Screenshots of the dashboard project showing desktop version"/></a>
      </div>
    </div>
  );
}
