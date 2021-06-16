import React, { useState, createContext, useMemo } from 'react'

const storeInit = {
  isLoading: false,
  citations: ['nothing!'],
  setCitations: () => {},
};

const contextCitations= createContext();

export const CitationsProvider = (props) => {
  const setCitations = (citations) => { setState({...state, citations : [...citations]})};
  const initState = {...storeInit, setCitations }
  const [state, setState] = useState(initState);
  const value = useMemo(() => state, [state] )

  return(
    <contextCitations.Provider value={value}>
      {props.children}
    </contextCitations.Provider>
  )
}

export default contextCitations