'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBox() {
    const [search, setSearch] = useState('');

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/search?q=/${search}`
    };

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Search movie, serie, user...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        <button disabled={search === ''} className="disabled:text-gray-300">Search</button>
    </form>
  )
}
