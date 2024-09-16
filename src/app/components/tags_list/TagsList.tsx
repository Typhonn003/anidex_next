"use client";
import { useFetch } from "@/app/hooks";
import { Button } from "../button/Button";
import { useGenreStore } from "@/app/store";

interface Root {
  data: Tags[];
}

interface Tags {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}

export const TagsList = () => {
  const { handleSelectedGenre } = useGenreStore();

  const query = "genres/anime";

  const { data, isLoading } = useFetch<Root>(query);

  if (isLoading) return <div>Loading...</div>;

  return (
    data && (
      <div className="grid h-96 gap-2 overflow-y-auto md:grid-cols-2">
        {data.data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((tag) => (
            <Button
              onClick={() => handleSelectedGenre(tag.name, tag.mal_id)}
              key={tag.mal_id}
              className="w-full"
            >
              {tag.name}
            </Button>
          ))}
      </div>
    )
  );
};
