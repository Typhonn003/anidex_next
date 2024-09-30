import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  SearchResult,
  TagsList,
} from "@/app/components";

const Genres = () => {
  return (
    <div className="h-full w-full">
      <Modal>
        <ModalTrigger className="group/modal-btn flex justify-center bg-black text-neutral-200 dark:bg-white dark:text-gray-800">
          See the options
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <TagsList />
          </ModalContent>
        </ModalBody>
      </Modal>
      <SearchResult type="genre" />
    </div>
  );
};

export default Genres;
