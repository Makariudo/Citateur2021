import { createContext } from 'react'

const store = {
  user : {
    email : "test@gmail.com"
  },
  notes : [],
}

const Store = createContext(store);

export default Store