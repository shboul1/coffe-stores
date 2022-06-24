import { createContext, useReducer } from 'react';
import '../styles/globals.css';

const initState = {
  coffeStores: [],
  lattlong: '',
};
export const SotresContext = createContext();

export const ACTION_TYPES = {
  SET_LATT_LONG: 'SET_LATT_LONG',
  SET_COFFE_STORES: 'SET_COFFE_STORES',
};
export function storeReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_COFFE_STORES:
      return {
        ...state,
        coffeStores: [...state.coffeStores, ...action.payload],
      };
    case ACTION_TYPES.SET_LATT_LONG:
      return {
        ...state,
        lattlong: action.payload,
      };
    default:
      throw new Error();
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initState);
  return <SotresContext.Provider value={{ state, dispatch }}>{children}</SotresContext.Provider>;
};

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
