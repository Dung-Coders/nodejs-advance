"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Search = () => {

  const [search, setSearch] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };
  const router = useRouter();
  return (
    <>
        <form action="">
          <input onChange={onChange} type="text" placeholder="Search" className="rounded-sm p-1" />
          <button className="bg-green-300 h-[30px] p-1 cursor-pointer"
            onClick={() => {
                if (search) {
                router.push(`/search-product?name=${search}`)
                }
            }}
          >
            SEARCH
          </button></form>
    </>
  )
}

export default Search