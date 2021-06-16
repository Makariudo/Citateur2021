import axios from 'axios';
import { URL } from './constantes'

const Api = {
  fetchCitations : async () => {
    const config = {
      method: 'get',
      url: `${URL}api/citation/`
    }
    try{
      const citation = await axios(config)
      return citation.data
    } catch(err) {
      console.log(err)
    }
    
  },
  currentUser : async () => {
    const config = {
      method: 'get',
      url: `${URL}auth/current_user`
    }
    try{
    const user = await axios(config)
    return user.data;
    } catch(err) {
      console.log(err)
    }
    
  },
}

export default Api;