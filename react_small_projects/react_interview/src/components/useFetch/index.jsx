import React, { useEffect, useState } from "react";

const UseFetch = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);

      setError(null);
      setLoading(false);
    } catch (e) {
      setError(`${e} some error occured`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, error, loading};
};

export default UseFetch;
