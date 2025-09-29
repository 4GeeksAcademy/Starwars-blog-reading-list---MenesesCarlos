import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext(null);
const URL_base = "https://www.swapi.tech/api/";

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [pRes, plRes, vRes] = await Promise.all([
          fetch(`${URL_base}people/`),
          fetch(`${URL_base}planets/`),
          fetch(`${URL_base}vehicles/`),
        ]);

        const [pData, plData, vData] = await Promise.all([
          pRes.json(),
          plRes.json(),
          vRes.json(),
        ]);

        dispatch({ type: "GET_CHARACTERS", payload: pData.results });
        dispatch({ type: "GET_PLANETS", payload: plData.results });
        dispatch({ type: "GET_VEHICLES", payload: vData.results });
      } catch (err) {
        console.error(err);
      }
    };

    fetchAll();
  }, []);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useGlobalReducer must be used within <StoreProvider>");
  return ctx; // { store, dispatch }
}