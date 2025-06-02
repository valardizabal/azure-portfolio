
import { Card, Image, Button, Modal, useDisclosure } from "@heroui/react";
import ModalContentResume from "../components/shared/ModalContentResume"

const Profile = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Card className="flex flex-col gap-12 rounded-xl p-6 lg:p-4 xl:gap-16 2xl:p-6">
        <div className="grid gap-6 lg:gap-4 2xl:gap-6">
          <div className="flex items-center gap-4">
            <div className="relative inline-block">
              <Image
                alt="Profile Image"
                className="object-cover rounded-xl"
                src="/assets/img/venisce_image.jpg"
                width={330}
                height={200}
              />
              <span className="absolute z-10 bottom-4 left-4 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-100"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
              </span>
              <span className="absolute z-10 bottom-4 left-10 text-xs text-white">
                Seeking new opportunities
              </span>
            </div>

            <div className="flex flex-col items-center text-center w-full">
              <div className="space-y-2">
                <h1 className="text-m md:text-lg">{"Hello, I'm"}</h1>

                <p className="font-bold text-base md:text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Venisce Arvie Lardizabal
                </p>

                <p className="text-xs md:text-xs">
                  Azure Cloud Engineer • Web Developer • Data Analyst
                </p>
              </div>

              <Button
                className="mt-6 font-semibold text-xs uppercase"
                size="sm"
                variant="ghost"
                onPress={onOpen}
              >
                View Resume
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-m">
              <span className="text-pink-500">A creative at heart ♡</span>, I’m a Microsoft Certified Azure Cloud Engineer with hands-on experience in application integration and <b>secure identity workflows using Azure Automation Accounts and PowerShell.</b>
            </p>
            <p className="text-m">
              I specialize in building scalable, secure, and efficient cloud solutions across the Microsoft ecosystem—including Azure Functions, Entra ID, Microsoft Graph API, and CI/CD pipelines in Azure DevOps. I thrive in collaborative environments and am committed to continuous learning. Currently, I’m deepening my expertise in DevOps practices with a focus on delivering innovative and impactful solutions.
            </p>
          </div>
        </div>
      </Card>

      <Modal isOpen={isOpen} size={"4xl"} onClose={onClose}>
        <ModalContentResume isOpen={isOpen}/>
      </Modal>
    </>
  );
};

export default Profile;
