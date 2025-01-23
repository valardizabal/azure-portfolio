/* eslint-disable react/prop-types */
import { Image, Card, CardBody, CardFooter } from "@heroui/react";

const CertificationsCard = ({data}) => {
  return (
    <Card key={data.title} shadow="sm" className="dark:bg-darkColor">
          <CardBody className="overflow-visible p-0">
            <Image
              alt={data.title}
              isZoomed
              className="w-full object-cover h-[250px]"
              radius="lg"
              shadow="sm"
              src={data.certificateImg}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{data.title}</b>
            <p>{data.year}</p>
          </CardFooter>
        </Card>
  )
}

export default CertificationsCard