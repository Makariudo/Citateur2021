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
  citations: ['nothing!'],
  setProfile: () => {},
  setCitations: () => {},
  setNotes: () => {},
};

const Store = createContext(storeInit);


export const StoreProvider = (props) => {
  const setProfile = (profile) => {
    setState({...state, profile: profile})
  }

  const setCitations = (citations) => {
    setState({...state, citations : [...citations]})
  }
  const setNotes = (notes) => {
    setState({...state, notes: notes})
  }

  const initState = {...storeInit, setProfile, setCitations, setNotes }
  const [state, setState] = useState(initState);
 
  return(
    <Store.Provider value={state}>
      {props.children}
    </Store.Provider>
  )
}



export default Store