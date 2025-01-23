import { useQuery } from "@tanstack/react-query";
import { functions } from "../api/functions";

export default function useFunctions() {
  const useGetTechnologies = () =>
    useQuery({
      queryKey: ["technologies"],
      queryFn: functions.getTechnologies,
    });

  const useGetProjects = () =>
    useQuery({
      queryKey: ["projects"],
      queryFn: functions.getProjects,
    });

  const useGetCertifications = () =>
    useQuery({
      queryKey: ["certifications"],
      queryFn: functions.getCertifications,
    });

  const useGetWorkExp = () =>
    useQuery({
      queryKey: ["workexp"],
      queryFn: functions.getWorkExp,
    });

  const useGetSocials = () =>
    useQuery({
      queryKey: ["socials"],
      queryFn: functions.getSocials,
    });

  const useDownloadResume = () =>
    useQuery({
      queryKey: ["resume"],
      queryFn: functions.getResume,
      enabled: false,
    });

  const useGetCount = () =>
    useQuery({
      queryKey: ["count"],
      queryFn: functions.getCount,
    });

  return {
    useGetTechnologies,
    useGetProjects,
    useGetCertifications,
    useGetWorkExp,
    useGetSocials,
    useDownloadResume,
    useGetCount,
  };
}
