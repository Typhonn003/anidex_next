import { LoadingCard3d } from "../card/LoadingCard3d";

export const CardLoading = () => {
  return (
    <ul className="grid max-h-[calc(100%-80px)] min-h-[312px] animate-pulse grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2 overflow-hidden px-4 pb-4 md:m-auto md:max-w-7xl">
      {Array.from({ length: 10 }).map((_, i) => (
        <LoadingCard3d key={i} />
      ))}
    </ul>
  );
};
