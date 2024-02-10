import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("useLog", user.token);
      queryClient.setQueryData(["user"], user.data.user);
      queryClient.setQueryData(["userToken"], user.token);

      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Email ou mot de passe incorrect");
    },
  });

  return { login, isLoading };
}
