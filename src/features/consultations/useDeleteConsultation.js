import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteConsultation as deleteConsultationApi } from "../../services/apiConsultations";

export function useDeleteConsultation() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteConsultation } = useMutation({
    mutationFn: deleteConsultationApi,
    onSuccess: () => {
      toast.success("Consultation supprimée");

      queryClient.invalidateQueries({
        queryKey: ["consultation"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteConsultation };
}
