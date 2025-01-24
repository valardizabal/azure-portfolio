/* eslint-disable react/prop-types */
import { Image, Button, ScrollShadow } from "@heroui/react";
import { Github, Youtube, FileCode2, FileText } from "lucide-react";

const ProjectCard = ({ data }) => {
  return (
    <>
      {/* card */}
      <div className="group relative overflow-hidden rounded-xl border transition-all duration-200 ease-in-out bg-white dark:bg-darkColor transition-all duration-200 ease-in-out hover:border-default-400 hover:bg-default/5 dark:border-default dark:hover:bg-darkCard dark:hover:border-default-400">
        {/* body */}
        <div className="grid grid-cols-12">
          {/* image */}
          <div className="relative col-span-12 sm:col-span-6">
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
          </div>
          {/* content */}
          <div className="col-span-12 flex h-full w-full flex-col p-6 sm:col-span-6">
            {/* content body */}
            <div>
              {/* content title */}
              <p className="mb-2 text-sm font-bold 2xl:text-base">
                {data.title} {"•"} {data.year}
              </p>
              {/* content desc*/}
              <div className="mb-4 space-y-4">
                <ScrollShadow
                  hideScrollBar
                  size={50}
                  className="h-full text-xs lg:max-h-[90px] 2xl:text-base"
                >
                  <p className="text-sm">{data.description}</p>
                </ScrollShadow>
                
              </div>
              <div className="flex flex-wrap items-center gap-1 mb-4">
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
            {/* content footer */}
            <div className="mt-auto flex flex-wrap gap-2">
              {data.repoURL ? (
                <a href={data.repoURL} target="_blank">
                  <Button
                    size="sm"
                    variant="shadow"
                    startContent={<Github size={15} />}
                    className="bg-purple-400 text-white"
                  >
                    View GitHub Repo
                  </Button>
                </a>
              ) : (
                ""
              )}

              {data.processURL ? (
                <a href={data.processURL} target="_blank">
                  <Button
                    size="sm"
                    variant="flat"
                    startContent={<FileCode2 size={15} />}
                  >
                    See Process
                  </Button>
                </a>
              ) : (
                ""
              )}

              {data.videoURL ? (
                <a href={data.videoURL} target="_blank">
                  <Button
                    size="sm"
                    variant="flat"
                    startContent={<Youtube size={15} />}
                  >
                    View Video
                  </Button>
                </a>
              ) : (
                ""
              )}
              {data.paperURL ? (
                <a href={data.paperURL} target="_blank">
                  <Button
                    size="sm"
                    variant="flat"
                    startContent={<FileText size={15} />}
                  >
                    View Paper
                  </Button>
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
