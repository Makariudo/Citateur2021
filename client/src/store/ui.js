import React, { useState, createContext, useMemo } from 'react'

const storeInit = {
  isLoading: false,
  toggleIsLoading: () => {},
};

const UIContext = createContext();



export const UIProvider = (props) => {
  const toggleIsLoading = () => {
    if(state.isLoading){
      console.log("isLoading vaut:", state);
      setState({...state, isLoading: false});
      console.log("isLoading vaut après setstate:", state);
    } else {
      console.log("isLoading vaut:", state);
      setState({...state, isLoading: true});
      console.log("isLoading vaut après setstate:", state);
    }
   
  };

  const initState = {...storeInit, toggleIsLoading};
  const [state, setState] = useState(initState);
  const value = useMemo(() => state, [state] );
  return(
    <UIContext.Provider value={value}>
      {props.children}
    </UIContext.Provider>
  )
}

export default UIContext