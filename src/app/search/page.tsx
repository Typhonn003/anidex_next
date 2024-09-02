"use client";
import { PlaceholdersAndVanishInput, SearchResult } from "@/app/components";
import { hc } from "hono/client";
import { type ApiRoutes } from "@/app/api/[[...route]]/route";
import { useState } from "react";
import { useFetch } from "@/app/hooks";
import { AnimeData, Root } from "@/app/interfaces";
import { placeholders } from "@/app/data";

const client = hc<ApiRoutes>("/");

const Search = () => {
  const [animeName, setAnimeName] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const query = search
    ? `anime?q=${search}&genres_exclude={9, 12, 49}&limit=24`
    : null;

  const { data, isLoading } = useFetch<Root>(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimeName(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(animeName);
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
      {isLoading && <div>Loading...</div>}
      {data?.data && <SearchResult animes={data.data} />}
    </div>
  );
};

export default Search;
