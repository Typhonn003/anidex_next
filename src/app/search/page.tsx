"use client";
import { PlaceholdersAndVanishInput, SearchResult } from "@/app/components";
import { ChangeEvent } from "react";
import { placeholders } from "@/app/data";
import { useSearchStore } from "../store";

const Search = () => {
  const { pendingSearch, setPendingSearch, setCurrentSearch, setCurrentPage } =
    useSearchStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPendingSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1);
    setCurrentSearch(pendingSearch);
  };

  return (
    <div className="h-full w-full">
      <div className="p-4">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      <SearchResult type="name" />
    </div>
  );
};

export default Search;
