import React, { useState, createContext, useMemo } from 'react'

const storeInit = {
  isLoading: false,
  input: "",
  toggleIsLoading: () => {},
  setInput: () => {},
};

const UIContext = createContext();



export const UIProvider = (props) => {
  const toggleIsLoading = () => {
    setState({...state, isLoading: !state.isLoading})
  };

  const setInput = (input) => {
    setState({...state, input: input})
  }
  const initState = {...storeInit, toggleIsLoading, setInput }
  const [state, setState] = useState(initState);
  const value = useMemo(() => state, [state] )
  return(
    <UIContext.Provider value={value}>
      {props.children}
    </UIContext.Provider>
  )
}

export default UIContext