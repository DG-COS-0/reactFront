import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditConsultation } from "../../services/apiConsultations";
import { toast } from "react-hot-toast";

export function useEditConsultation() {
  const queryClient = useQueryClient();

  const { mutate: editConsultation, isPending: isEditing } = useMutation({
    mutationFn: ({ newConsultationData, id }) =>
      createEditConsultation(newConsultationData, id),
    onSuccess: () => {
      toast.success("Consultation successfully edited");
      queryClient.invalidateQueries({ queryKey: ["Consultations"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editConsultation };
}
