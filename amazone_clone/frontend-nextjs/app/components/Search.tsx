"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log("Search Name: ", search)
    setSearch(e.target.value)
  };
  const router = useRouter();
  return (
    <>
      <form>
        <input
          onChange={onChange}
          type="text"
          placeholder="Search"
          className="rounded-sm p-1"
        />

        <button
          type="button"
          className="bg-green-300 h-[30px] p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            if (search) {
              router.push(`/product/search-product?name=${search}`);
            }
          }}
        >
          SEARCH
        </button>
      </form>
    </>
  );
};

export default Search;
