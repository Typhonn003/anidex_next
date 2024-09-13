import { Button } from "@/app/components";
import { MutableRefObject } from "react";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons-react";
import { cn } from "@/app/lib/utils";

export const Pagination = ({
  className,
  currentPage,
  lastPage,
  setPage,
  elementRef,
}: {
  className?: string;
  currentPage: number;
  lastPage: number;
  setPage: (value: number) => void;
  elementRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const handleScroll = () => {
    setTimeout(() => {
      if (elementRef.current)
        elementRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handlePage = (value: number) => {
    setPage(value);
    handleScroll();
  };

  const pageButtons = () => {
    const buttons = [];

    buttons.push(
      <Button
        className="w-9"
        key="first-page"
        onClick={() => handlePage(1)}
        aria-label="Button to go to the first page"
        disabled={currentPage === 1}
      >
        <span>
          <IconChevronsLeft className="text-neutral-200" />
        </span>
      </Button>,
    );

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(lastPage, currentPage + 1);

    if (currentPage === 1) {
      endPage = Math.min(3, lastPage);
    }

    if (currentPage === lastPage) {
      startPage = Math.max(lastPage - 2, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          className={`w-9 ${i === currentPage ? "text-neutral-200" : ""}`}
          key={`page-${i}`}
          onClick={() => handlePage(i)}
          aria-label={`Button to go to the ${i} page`}
          disabled={i === currentPage}
        >
          {i}
        </Button>,
      );
    }

    if (endPage - startPage < 2) {
      if (startPage === 1 && lastPage > 2) {
        buttons.push(
          <Button
            className={`w-9 ${endPage + 1 === currentPage ? "bg-blue-500 text-white" : ""}`}
            key={`page-${endPage + 1}`}
            onClick={() => handlePage(endPage + 1)}
            aria-label={`Button to go to the ${endPage + 1} page`}
          >
            {endPage + 1}
          </Button>,
        );
      } else if (endPage === lastPage && startPage > 1) {
        buttons.unshift(
          <Button
            className={`w-9 ${startPage - 1 === currentPage ? "bg-blue-500 text-white" : ""}`}
            key={`page-${startPage - 1}`}
            onClick={() => handlePage(startPage - 1)}
            aria-label={`Button to go to the ${startPage - 1} page`}
          >
            {startPage - 1}
          </Button>,
        );
      }
    }

    buttons.push(
      <Button
        className="w-9"
        key="last-page"
        onClick={() => handlePage(lastPage)}
        aria-label="Button to go to the last page"
        disabled={currentPage === lastPage}
      >
        <span>
          <IconChevronsRight className="text-neutral-200" />
        </span>
      </Button>,
    );

    return buttons;
  };

  return (
    <div
      className={cn(
        "flex w-full max-w-80 items-center justify-between",
        className,
      )}
    >
      {pageButtons()}
    </div>
  );
};
