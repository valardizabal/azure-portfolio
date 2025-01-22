import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  ScrollShadow,
} from "@heroui/react";

import Marquee from "react-fast-marquee";

const TechSkills = () => {
  return (
    <>
      <Card className="relative overflow-x-hidden rounded-xl">
        <div className="absolute left-0 z-[5] flex h-full items-center bg-gradient-to-r from-background to-transparent px-6"></div>
        <div className="absolute right-0 z-[5] flex h-full items-center bg-gradient-to-r from-transparent to-background px-6"> 
        </div>
          <div className="h-max rounded-xl bg-background p-[3px]">
            <Marquee>
              {/* {data?.map((technology) => (
              <TechnologyBadge
                className="mx-[3px] h-[2.6rem]"
                key={`TechnologyBadge-${technology.name}`}
              >
                <TechnologyBadge.Logo logo={technology.logo} />
                {technology.name}
              </TechnologyBadge> 
            ))} */}
              Hello
            </Marquee>
          </div>
        
      </Card>
    </>
  );
};

export default TechSkills;
