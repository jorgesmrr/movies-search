import { useEffect, useState } from "react";
import Endpoint from "../network/endpoint";

interface UseRequestState<T> {
  data?: T;
  isLoading: boolean;
  error: boolean;
}

const useRequest: <T>(endpoint: Endpoint<T>) => UseRequestState<T> = (
  endpoint
) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await endpoint();
      setData(response.data as any);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { isLoading, error, data };
};

export default useRequest;
