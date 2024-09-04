import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export const LoadingCard3d = () => {
  return (
    <CardContainer className="w-full">
      <CardBody className="group/card relative box-border w-[9.8125rem] max-w-44 cursor-pointer rounded-xl border border-black/[0.1] bg-gray-50 px-2 py-3 shadow-lg md:max-w-44 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="90">
          <div className="h-60 w-[8.75rem] rounded-md bg-gray-300" />
        </CardItem>
        <CardItem translateZ="70" className="w-full max-w-[8.75rem]">
          <div className="mt-4 h-6 bg-gray-200" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};
