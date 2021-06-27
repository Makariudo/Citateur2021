import React, {useEffect, useState, useContext} from 'react';
import Snack from 'store/snack';
import './snackbar.scss';


const Snackbar = () => {
const{ show, type, message} = useContext(Snack)
console.log("show", show, "type", type, "message", message)
const [snackClass, setSnackClass] = useState(`snackbar__container ${type}`)

 useEffect(()=> {
  if(message){
    console.log("message vaut", message)
  setSnackClass(`snackbar__container ${type} appear`);
  setTimeout(()=> setSnackClass(`snackbar__container ${type} disappear`),3000); 
  }
},[show, message, type]) 

  return (
    <div className={snackClass}>
      <p className="snackbar__message">{message}</p>
    </div>
  )
}

export default Snackbar
