import { Card } from "@heroui/react";

import SocialsGroup from "../components/socials/SocialsGroup";
import useFunctions from "../hooks/useFunctions";

const Connect = () => {
  const { useGetSocials } = useFunctions();
  const { data } = useGetSocials();

  return (
    <>
      <Card className="relative flex flex-column items-center justify-center space-y-3 rounded-xl p-4 border-none 2xl:h-[31.5vh]">
        <div className="me-auto">
          <h1 className="font-semibold text-lg">{"Let's work together! 🤝"}</h1>
        </div>
        <div className="grid lg:grid-cols-2 w-full">
          {data?.map((social) => (
            <SocialsGroup
              className="mx-6"
              title={social.title}
              icon={social.icon}
              link={social.link}
              key={social.title}
            />
          ))}
        </div>
      </Card>
    </>
  );
};

export default Connect;
