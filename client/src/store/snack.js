import React, { useState, createContext, useMemo } from 'react'

const storeInit = {
  show: false,
  message: '',
  type: '',
  setSnack: () => {},
};

const contextSnack= createContext();

export const SnackProvider = (props) => {
  const setSnack = ({type, message}) => { setState({...state, show: true, message, type})};
  const initState = {...storeInit, setSnack }
  const [state, setState] = useState(initState);
  const value = useMemo(() => state, [state] )

  return(
    <contextSnack.Provider value={value}>
      {props.children}
    </contextSnack.Provider>
  )
}

export default contextSnack