import {
  Card,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";

import Marquee from "react-fast-marquee";
import TechskillsGroup from "../components/techskills/TechskillsGroup";
import useFunctions from "../hooks/useFunctions";

import { Maximize2 } from "lucide-react";

const TechSkills = () => {
  const { useGetTechnologies } = useFunctions();
  const { data, isLoading, error } = useGetTechnologies();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card className="relative overflow-x-hidden rounded-xl">
        <div className="absolute left-0 z-[11] flex h-full items-center bg-gradient-to-r from-background to-transparent px-6"></div>
        <div className="absolute right-0 z-[11] flex h-full items-center bg-gradient-to-r from-transparent to-background px-6">
          <span className="relative flex h-6.5 w-6.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <Button
              isIconOnly
              radius="full"
              size="sm"
              className="relative z-10 inline-flex items-center text-white justify-center rounded-full bg-purple-400 border-0 p-2 hover:bg-purplw-400 dark:hover:bg-purple-400"
              onPress={onOpen}
            >
              <Maximize2 />
            </Button>
          </span>
        </div>
        <div className="h-max rounded-xl p-[3px]">
          <Marquee>
            {data?.map((technology) => (
              <TechskillsGroup
                className="mx-1"
                name={technology.name}
                logo={technology.logo}
                key={technology.name}
              />
            ))}
          </Marquee>
        </div>
      </Card>

      <Modal isOpen={isOpen} size={"3xl"} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                My Technical Skills
              </ModalHeader>
              <ModalBody>
                <div className="text-center text-lg">
                  <p>
                    I am proficient in{" "}
                    <span className="text-purple-500 font-bold">
                      {data.length}
                    </span>{" "}
                    tools and technologies with which I have prior experience:
                  </p>
                </div>

                <div className="flex flex-row">
                  {data?.map((technology) => (
                    <TechskillsGroup
                      className="mx-1"
                      name={technology.name}
                      logo={technology.logo}
                      key={technology.name}
                    />
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TechSkills;
