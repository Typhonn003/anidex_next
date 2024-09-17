"use client";
import { useFetch } from "@/app/hooks";
import { Button } from "../button/Button";
import { useGenreStore, useModalStore } from "@/app/store";
import { useRouter } from "next/router";

interface Root {
  data: Tag[];
}

interface Tag {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

const filteredSortedTags = (data: Root) =>
  data.data
    .filter((tag) => ![9, 12, 49].includes(tag.mal_id))
    .sort((a, b) => a.name.localeCompare(b.name));

export const TagsList = () => {
  const { handleSelectedGenre } = useGenreStore();
  const { genreModal, setGenreModal } = useModalStore();

  const handleGenre = ({ name, mal_id }: Tag) => {
    handleSelectedGenre(name, mal_id);
    setGenreModal(!genreModal);
  };

  const query = "genres/anime";

  const { data, isLoading } = useFetch<Root>(query);

  if (isLoading) return <div>Loading...</div>;

  return (
    data && (
      <ul className="grid h-96 w-full gap-2 overflow-y-auto md:grid-cols-2">
        {filteredSortedTags(data).map((tag) => (
          <li key={tag.mal_id}>
            <Button onClick={() => handleGenre(tag)} className="w-full">
              {tag.name}
            </Button>
          </li>
        ))}
      </ul>
    )
  );
};
