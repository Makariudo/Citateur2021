import React, { useState, createContext, useMemo } from 'react'

const storeInit = {
  isConnected: false,
  profile : {
    mail:'',
    avatar:'',
    firstName:'',
    lastName:'',
    citations : ['nothing!'],
  },
  setProfile: () => {},
  setIsLogout: () => {},
};

const AuthContext = createContext();



export const AuthProvider = (props) => {
  const setProfile = (profile) => {
    setState({...state, profile: profile, isConnected: true})
  };

  const setIsLogout = () => {
    setState({...state, isConnected: false})
  }
  const initState = {...storeInit, setProfile, setIsLogout }
  const [state, setState] = useState(initState);
  const value = useMemo(() => state, [state] )
  return(
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext