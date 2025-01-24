/* eslint-disable react/prop-types */
import { Image, Card, CardBody, CardFooter, Button, Link } from "@heroui/react";

const CertificationsCard = ({ data }) => {
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
        <div >
          <b>{data.title}</b>
          <p>{data.credId} - {data.year}</p>
        </div>
          {data.link != "" ? <Button size="sm" variant="flat" as={Link} href={data.link} isExternal>
            Show credential
          </Button> : ""}
          
      </CardFooter>
    </Card>
  );
};

export default CertificationsCard;
