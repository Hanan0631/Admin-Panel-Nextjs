//tanstack
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

//configs
import api from "@/configs/api";

const useFetchProductsData = (page, search) => {
  const queryClient = useQueryClient();

  const queryKey = ["products-list", page, search];

  if (search) queryClient.cancelQueries(queryKey);

  const queryFn = ({ signal }) =>
    api.get(`products?page=${page}&limit=10`, { signal });

  return useQuery({ queryKey, queryFn, placeholderData: keepPreviousData });
};

const useFetchProductById = (id) => {
  const queryKey = ["product", id];
  const queryFn = () => api.get(`products/${id}`);

  return useQuery({ queryKey, queryFn });
};

export { useFetchProductsData, useFetchProductById };
