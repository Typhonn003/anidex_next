"use client";
import { useFetch } from "@/app/hooks";
import { useGenreStore, useSearchStore } from "@/app/store";
import { Root } from "@/app/interfaces";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const DynamicCardLoading = dynamic(() =>
  import("../loading/CardLoading").then((module) => module.CardLoading),
);
const DynamicAnimeCardDisplay = dynamic(() =>
  import("../anime_card_display/AnimeCardDisplay").then(
    (module) => module.AnimeCardDisplay,
  ),
);

export const SearchResult = ({ type }: { type: "name" | "genre" }) => {
  const {
    currentSearch,
    currentPage: animeCurrentPage,
    lastPage: animeLastPage,
    setCurrentPage: setAnimeCurrentPage,
    setLastPage: setAnimeLastPage,
  } = useSearchStore();
  const {
    genreId,
    currentPage: genreCurrentPage,
    lastPage: genreLastPage,
    setCurrentPage: setGenreCurrentPage,
    setLastPage: setGenreLastPage,
  } = useGenreStore();

  const isNameSearch: boolean = type === "name";
  const currentPage = isNameSearch ? animeCurrentPage : genreCurrentPage;
  const lastPage = isNameSearch ? animeLastPage : genreLastPage;
  const setCurrentPage = isNameSearch
    ? setAnimeCurrentPage
    : setGenreCurrentPage;
  const setLastPage = isNameSearch ? setAnimeLastPage : setGenreLastPage;

  const query = currentSearch
    ? `anime?q=${currentSearch}&genres_exclude={9, 12, 49}&limit=24&page=${currentPage}`
    : null;

  const { data, isLoading } = useFetch<Root>(query);

  useEffect(() => {
    if (data) {
      const lastVisiablePage = data.pagination.last_visible_page;
      setLastPage(lastVisiablePage);
    }
  }, [data, setLastPage]);

  if (isNameSearch ? currentSearch !== "" : genreId) {
    if (isLoading) return <DynamicCardLoading />;

    if (data?.pagination.items.count == 0)
      return (
        /* Mensagem temporaria */
        /* Criar a paginação */
        <div className="flex h-[calc(100%-80px)] w-full flex-col items-center justify-center">
          <span
            className="text-5xl font-extralight"
            aria-label="Characters forming the image of a crying person"
          >
            o(TヘTo)
          </span>
          <p className="py-4 text-2xl font-extralight text-gray-800 md:text-3xl dark:text-neutral-200">
            No results found
          </p>
        </div>
      );

    return data?.data && <DynamicAnimeCardDisplay animes={data.data} />;
  }

  return (
    <div className="flex h-[calc(100%-80px)] w-full flex-col items-center justify-center">
      <span
        className="text-5xl font-extralight"
        aria-label="Characters forming the image of a crying person"
      >
        o(TヘTo)
      </span>
      <p className="py-4 text-2xl font-extralight text-gray-800 md:text-3xl dark:text-neutral-200">
        Search for something
      </p>
    </div>
  );
};
