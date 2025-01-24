import { useState, useEffect } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

import useFunctions from "../../hooks/useFunctions";

// eslint-disable-next-line react/prop-types
const ModalContentResume = ({ isOpen }) => {
  const { useDownloadResume } = useFunctions();
  const { refetch, isFetching } = useDownloadResume();
  const [pdfsrc, setPdfsrc] = useState(null);

  // Handle file download
  const handleDownload = () => {
    refetch()
      .then((result) => {
        if (result.data) {
          const url = window.URL.createObjectURL(result.data);

          window.open(url, "_blank");

          const downloadLink = document.createElement("a");
          downloadLink.href = url;
          downloadLink.download = "LARDIZABAL, Venisce Arvie-Resume.pdf";
          downloadLink.click();

          window.URL.revokeObjectURL(url);
        }
      })
      .catch((error) => {
        console.error("Download failed:", error);
      });
  };

  const handleView = () => {
    refetch()
      .then((result) => {
        if (result.data) {
          const pdfBlob = result.data;
          if (pdfBlob && pdfBlob.type === 'application/pdf') {
            const pdfUrl = URL.createObjectURL(pdfBlob);
            setPdfsrc(pdfUrl); 
          } else {
            console.error("The fetched blob is not a PDF");
          }
        }
      })
      .catch((error) => {
        console.error("View resume failed:", error);
      });
  };
  
  useEffect(() => {
    if (isOpen) {
      setPdfsrc(null); 
      handleView(); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]); 

  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            LARDIZABAL, Venisce Arvie-Resume.pdf
          </ModalHeader>
          <ModalBody>
            {/* Display PDF in iframe if pdfsrc is set */}
            {pdfsrc ? (
              <iframe
                src={pdfsrc}
                width="100%"
                height="500px"
                title="Resume"
                frameBorder="0"
              ></iframe>
            ) : (
              <p>Loading...</p> // Optional loading state
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="default" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button
              className="bg-purple-400 text-white"
              onPress={handleDownload}
              disabled={isFetching}
            >
              {isFetching ? "Downloading..." : "Download Resume"}
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};

export default ModalContentResume;
