'use client'

import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {

    // hook
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
        <div className="flex items-center">
            {
                // condition for light or dark mode
                currentTheme === 'dark' ? 
                <SunIcon 
                    onClick={()=>setTheme('light')} 
                    className="w-4 h-4 cursor-pointer text-xl hover:text-amber-500"
                />
                : 
                <MoonIcon 
                    onClick={()=>setTheme('dark')} 
                    className="w-4 h-4 cursor-pointer text-xl hover:text-amber-500"
                />
            }
        </div>
    );    
}
