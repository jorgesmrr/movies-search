import axios from "axios";
import { useEffect, useState } from "react";

const useRequest: <T>(
  url: string,
  callback?: Function
) => { data?: T; loading: boolean; error: boolean } = (url, callback) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { loading, error, data };
};

export default useRequest;
