'use client'

import { ThemeProvider } from 'next-themes'


export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute='class'>
        <div className="text-gray-700 dark:text-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}
