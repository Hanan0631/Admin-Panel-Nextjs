//tanstack
import { useMutation } from "@tanstack/react-query";

//configs
import api from "../configs/api";

const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

export { useRegister, useLogin };
