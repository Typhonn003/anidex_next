import { animeApi } from "@/app/services";
import useSWRImmutable from "swr/immutable";

export const useFetch = <Data = any>(url: string | null) => {
  const fetcher = (url: string) => animeApi.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWRImmutable<Data>(url, fetcher);

  return { data, error, isLoading };
};
