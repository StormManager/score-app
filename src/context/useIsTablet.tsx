import React, { useReducer, useContext, useCallback, Dispatch } from "react";

type State = { isTablet: boolean; value: any };

type Action = { type: "SET_TABLET"; payload?: State };

const initialState = { isTablet: false, value: {} };

type StoreProp = {
  state: State;
  dispatch: Dispatch<Action>;
};

const store = React.createContext<StoreProp>({
  state: initialState,
  dispatch: () => { },
});

const { Provider } = store;

type ProviderProp = {
  children: React.ReactNode;
};

const TabletProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      console.log(action)
      switch (action.type) {
        case "SET_TABLET":
          console.log("asd");
          console.log({ ...state, ...action.payload });
          console.log("asd");
          return { ...state, ...action.payload };
        default:
          return state;
      }
    },
    { isTablet: false, value: {} }
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useTablet = () => {
  const {
    state: { isTablet, value },
    dispatch,
  } = useContext(store);

  const setTablet = useCallback(
    async (payload: State) => {
      dispatch({ type: "SET_TABLET", payload });
    },
    [dispatch]
  );

  return { isTablet, value, setTablet };
};

export { TabletProvider, useTablet };
