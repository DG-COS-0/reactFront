import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditConsultation } from "../../services/apiConsultations";

export function useCreateConsultation() {
  const queryClient = useQueryClient();

  const { mutate: createConsultation, isPending: isCreating } = useMutation({
    mutationFn: createEditConsultation,
    onSuccess: () => {
      toast.success("Nouvelle consultation créé");
      queryClient.invalidateQueries({ queryKey: ["Consultations"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createConsultation };
}
