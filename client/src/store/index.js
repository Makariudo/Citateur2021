import React, { useState, createContext } from 'react'
import Api from 'utils/fetch'

export let storeInit = {
  profile : {
    isConnected: false,
    mail:'',
    avatar:'',
    firstName:'',
    lastName:'',
    notes : ['nothing!'],
  },
  isLoading: false,
  citations: ['nothing!'],

  setCitations: () => {},
  setProfile: () => {},
  setNotes: () => {},
  toggleLoading: () => {},
};

const Store = createContext(storeInit);



export const StoreProvider = (props) => {
  const setProfile = (profile) => {
    setState({...state, profile: profile})
  };
 
  const toggleLoading = () => {
    setState({...state, isLoading: !state.isLoading})
  };

  const setCitations = (citations) => {
    setState({...state, citations : [...citations]})
  };

  
  const setNotes = (notes) => {
    setState({...state, notes: notes})
  };

  const fetchProfile = async () => {
    try {
      const user = await Api.currentUser()
      console.log("current user vaut", user.data)
      if(user.data){
        setState({...state, profile: user.data})
      }
    } catch(err) {
      console.log(err)
    }
  }

  const initState = () => {
    fetchProfile()
    return {...storeInit, setProfile, setCitations, setNotes, toggleLoading }
  }

  const [state, setState] = useState(initState);
 
  return(
    <Store.Provider value={state}>
      {props.children}
    </Store.Provider>
  )
}



export default Store