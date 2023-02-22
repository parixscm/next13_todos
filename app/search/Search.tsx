"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={event => setSearch(event.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg"
      >
        Search
      </button>
    </form>
  );
}
