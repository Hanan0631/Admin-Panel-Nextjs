//tanstack
import { useMutation } from "@tanstack/react-query";

//configs
import api from "../configs/api";

const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

export { useLogin };
