'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);

  }

  return (
    <form 
    onSubmit={handleSearch}
    className="max-w-5xl mx-auto flex justify-between items-center px-5">
    <input 
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Clave de busqueda..."
    className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"/>

    <button 
    type="submit"
    disabled={!input}
    className="text-orange-400 disabled:text-gray-400"
    >Buscar</button>

  </form> 


  ) 
}

export default SearchBox