import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string, options?: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url, options);

        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
};
