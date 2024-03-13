import { createContext, useEffect, useState } from "react";
import fetchFeatureFlagDataServiceCall from "../data";
export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
        setLoading(true)
      const response = await fetchFeatureFlagDataServiceCall();
      setEnabledFlags(response)
      console.log(response);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      throw new Error(error)
    }
  }
  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{loading,enableFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
