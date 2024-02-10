import { useQuery } from "@tanstack/react-query";
import { getAllConsultations } from "../../services/apiConsultations";

export function useConsultations() {
  const {
    isPending,
    data: consultations,
    status,
  } = useQuery({
    queryKey: ["consultations"],
    queryFn: getAllConsultations,
  });
  return { isPending, status, consultations };
}
