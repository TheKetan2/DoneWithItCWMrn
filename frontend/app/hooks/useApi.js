import React, { useState, useEffect } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const result = await apiFunc();
    setLoading(false);
    if (!result.ok) return setError(true);

    setError(false);
    setData(result.data);
  };

  return { data, error, loading, request };
};
