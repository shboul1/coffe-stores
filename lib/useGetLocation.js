import { useState } from 'react';
const useGetLocation = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const error = () => {
    setErrorMsg('Error');
    setLoading(false);
  };

  const success = (position) => {
    if (position) {
      setErrorMsg(false);
      const long = position.coords.longitude;
      const latt = position.coords.latitude;
      setLocation({
        long,
        latt,
      });
      setLoading(false);
    }
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      setLoading(true);
    } else {
      setErrorMsg('Error...');
      setLoading(false);
    }
  };

  return {
    location,
    handleGetLocation,
    errorMsg,
    loading,
  };
};

export default useGetLocation;
