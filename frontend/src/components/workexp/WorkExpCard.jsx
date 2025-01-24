/* eslint-disable react/prop-types */
import { Image, ScrollShadow } from "@heroui/react";
import { Globe } from 'lucide-react';

const WorkExpCard = ({ data }) => {
  return (
    <>
      {/* card */}
      <div className="group relative overflow-hidden rounded-xl border transition-all duration-200 ease-in-out bg-white dark:bg-background transition-all duration-200 ease-in-out hover:border-default-400 hover:bg-default/5 dark:border-default dark:hover:bg-darkCard dark:hover:border-default-400">
        {/* body */}
        <div className="grid grid-cols-12">
          
          {/* content */}
          <div className="col-span-12 flex h-full w-full flex-col p-6 sm:col-span-12">
            {/* content body */}
            <div>
              {/* content title */}
              <div className="mb-2 flex items-center space-x-2 text-sm font-bold 2xl:text-base">
                {data.logo ? <Image
                  width={20}
                  height={20}
                  src={`https://cdn.simpleicons.org/${data.logo}/a855f7/a855f7`}
                  alt={`${data.company} logo`}
                /> : <div className="dark:text-purple-400"><Globe size={22}/></div>}
                <span>{data.company}</span>
                <span>{"•"}</span>
                <span>{data.role}</span>
              </div>
              <p className="text-xs mb-2">{data.years}</p>
              {/* content desc*/}
              <div className="mb-4 space-y-4">
                <ScrollShadow
                  hideScrollBar
                  size={50}
                  className="h-full text-xs lg:max-h-[80px] 2xl:text-base"
                >
                  <p>{data.description}</p>
                </ScrollShadow>
                <div className="flex flex-wrap items-center gap-1">
                  <ul className="list-disc pl-5">
                    {data.tasks.map((task, index) => (
                      <li
                        key={`${task}-${index}`}
                        className="text-sm mb-1 flex items-start space-x-2"
                      >
                        <span>-</span>
                        <p>{task}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  {data.tags.map((tag, index) => (
                    <div
                      className="rounded-lg border border-default px-2 py-1"
                      key={`${tag}-${index}`}
                    >
                      <p className="text-xs">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* content footer */}
            <div className="mt-auto flex flex-wrap gap-2">{""}</div>
          </div>
          {/* <div className="relative col-span-12 sm:col-span-4">
            <div className="absolute inset-0 z-[15] flex ease-in-out group-hover:bg-default-500/5"></div>
            <Image
              radius={"none"}
              src={data.image}
              isBlurred
              classNames={{
                wrapper: "object-cover w-full sm:h-full sm:w-fit",
                img: "w-full sm:h-full sm:w-fit object-cover",
              }}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WorkExpCard;
