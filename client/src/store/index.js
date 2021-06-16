import React, { useState, createContext, useMemo } from 'react'
import Api from 'utils/fetch'

export let storeInit = {
  isConnected: false,
  profile : {
    mail:'',
    avatar:'',
    firstName:'',
    lastName:'',
    citations : ['nothing!'],
  },
  isLoading: false,
  citations: ['nothing!'],
  

  setCitations: () => {},
  setProfile: () => {},
  setNotes: () => {},
  toggleLoading: () => {},
  setIsLogout: () => {},
  setIsConnected: () => {},
};

const Store = createContext();



export const StoreProvider = (props) => {
  const setProfile = (profile) => {
    setState({...state, profile: profile, isConnected: true})
  };

  const setIsConnected = () => {
    setState({...state, isConnected: true})
  }

  const setIsLogout = () => {
    setState({...state, isConnected: false})
  }
 
  const toggleLoading = () => {
    setState({...state, isLoading: !state.isLoading})
  };

  const setCitations = (citations) => {
    setState({...state, citations : [...citations]})
  };

  
  const setNotes = (notes) => {
    setState({...state, notes: notes})
  };

  const initState = {...storeInit, setProfile, setCitations, setNotes, toggleLoading, setIsConnected, setIsLogout }
  

  const [state, setState] = useState(initState);

  const value = useMemo(() => state, [state] )

  console.log("state : ", value)
  return(
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  )
}



export default Store