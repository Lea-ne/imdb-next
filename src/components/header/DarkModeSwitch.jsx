'use client'

import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {

    // hook
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
        a
        {
            // condition for light or dark mode
            currentTheme === 'dark' ? 
            <SunIcon onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/>
            : 
            <MoonIcon onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>
        }
    </div>
  )
}
