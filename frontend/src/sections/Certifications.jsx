import CertificationsCard from "../components/certifications/CertificationsCard";
import { Button } from "@heroui/react";
import useFunctions from "../hooks/useFunctions";


const Certifications = () => {
    const { useGetCertifications } = useFunctions();
  const { data } = useGetCertifications();

  return (
    <>
        <div className="top-0 z-[20] flex w-full justify-end p-2">
        <Button
          isDisabled
          size="sm"
          className="group w-max rounded-lg border border-default bg-transparent px-3 py-1 font-mono text-sm uppercase opacity-80"
        >
          <p className="font-bold">
            {"Certifications: "} {data?.length}
          </p>
        </Button>
      </div>
      <div className="gap-4 grid lg:grid-cols-2">
        {data?.map((certification) => (
          <CertificationsCard data={certification} key={certification.title} />
        ))}
      </div>
    </>
  )
}

export default Certifications