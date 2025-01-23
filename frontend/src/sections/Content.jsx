import { ScrollShadow, Tab, Tabs, Card, CardBody } from "@heroui/react";

import Projects from "./Projects.jsx";
import WorkExp from "./WorkExp.jsx";
import Certifications from "./Certifications.jsx";

const Content = () => {
  return (
    <>
      <div className="flex h-[90vh] flex-col space-y-1 overflow-y-hidden lg:h-full">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList: " w-full m-[3px] p-1 bg-transparent",
            base: "w-full bg-white dark:bg-darkCard rounded-xl",
            tabContent:
              "group-data-[selected=true]:text-white dark:group-data-[selected=true]:text-white text-sm 2xl:text-base text-foreground font-bold",
            tab: "max-w-fit px-3 ",
            cursor: "bg-purple-400 dark:bg-purple-400",
            panel: "m-0 p-1 h-full overflow-y-hidden",
          }}
        >
          <Tab key="workexp" title="Work Experience">
            <TabContent>
              <CardBody>
                <WorkExp />
              </CardBody>
            </TabContent>
          </Tab>
          <Tab key="projects" title="Projects">
            <TabContent>
              <CardBody>
                <Projects />
              </CardBody>
            </TabContent>
          </Tab>
          <Tab key="certifications" title="Certifications">
            <TabContent>
              <CardBody>
                <Certifications/>
              </CardBody>
            </TabContent>
          </Tab>
          <Tab key="education" title="Education">
            <TabContent>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </TabContent>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
function TabContent({ children }) {
  return (
    <div className="h-full bg-white dark:bg-darkCard rounded-xl">
      <ScrollShadow
        size={100}
        hideScrollBar
        className="h-full space-y-2 scroll-smooth overflow-y-scroll"
      >
        <Card shadow="none" className="overflow-y-clip border-none rounded-lg">
          {children}
        </Card>
      </ScrollShadow>
    </div>
  );
}

export default Content;
