import React from 'react'
import './search.scss'

function Notifications({show, message}) {
  return (
    <div className={show ? "searchBar__notif__container" : "searchBar__notif__container hidden"}>
      <span className={show ? "searchBar__notif" : "searchBar__notif hidden"}>{message}</span>
    </div>
  )
}

export default Notifications
