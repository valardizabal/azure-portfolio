import WorkExpCard from "../components/workexp/WorkExpCard";
import { Button } from "@heroui/react";
import useFunctions from "../hooks/useFunctions";

const WorkExp = () => {
  const { useGetWorkExp } = useFunctions();
  const { data } = useGetWorkExp();

  return (
    <>
    <div className="sticky top-0 z-20 flex w-full justify-end p-2">
        <Button
          isDisabled
          size="sm"
          className="group w-max rounded-lg border border-default bg-transparent px-3 py-1 font-mono text-sm uppercase opacity-80"
        >
          <p className="font-bold">
            {"Years of Experience: 2"}
          </p>
        </Button>
      </div>
      <div className="space-y-4">
        {data?.map((work) => (
          <WorkExpCard data={work} key={work.company}/>
        ))}
      </div>
        
    </>
  )
}

export default WorkExp