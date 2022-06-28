import { useState, useContext } from 'react';
import { SotresContext, ACTION_TYPES } from '../context/store-context';
const useGetLocation = () => {
  const { dispatch } = useContext(SotresContext);
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
      dispatch({
        type: ACTION_TYPES.SET_LATT_LONG,
        payload: `${latt},${long}`,
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
    handleGetLocation,
    errorMsg,
    loading,
  };
};

export default useGetLocation;
