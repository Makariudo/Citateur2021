import React, { useState, createContext } from 'react'

export const storeInit = {
  profile : {
    connected: false,
    mail:'',
    avatar:'',
    firstName:'',
    lastName:'',
    notes : ['nothing!'],
  },
  isLoading: false,
  citations: ['nothing!'],
  citation: {
    citation: "nothing here",
    author: "wait",
    authorImg: "for", 
  },
  number: 1,
  setNumber: () => {},
  setCitation: () => {},
  setProfile: () => {},
  setCitations: () => {},
  setNotes: () => {},
  toggleLoading: () => {},
};

const Store = createContext(storeInit);



export const StoreProvider = (props) => {
  const setProfile = (profile) => {
    setState({...state, profile: profile})
  };
  const setNumber = (num) => {
    setState({...state, number: num})
  };
  const toggleLoading = () => {
    setState({...state, isLoading: !state.isLoading})
  };

  const setCitations = (citations) => {
    setState({...state, citations : [...citations]})
  };

  const setCitation = (citation) => {
    setState({...state, citation})
  };
  const setNotes = (notes) => {
    setState({...state, notes: notes})
  };

  const initState = {...storeInit, setProfile, setCitations, setNotes, toggleLoading, setCitation, setNumber }
  const [state, setState] = useState(initState);
 
  return(
    <Store.Provider value={state}>
      {props.children}
    </Store.Provider>
  )
}



export default Store