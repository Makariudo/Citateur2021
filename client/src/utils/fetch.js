import axios from 'axios';
import { CitationsProvider } from 'store/citations';
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
      url: `${URL}auth/current_user`,
      withCredentials: true,
    }
    try{
    const user = await axios(config)
    return user.data;
    } catch(err) {
      console.log(err)
    }
    
  },

  fetchSearchCitations : async (word) => {
    const config = {
      method: 'get',
      url: `${URL}api/citation/${word}`
    }
    try{
      const citations = await axios(config)
      return citations
    } catch(err) {
      console.log(err)
    }
  }
}

export default Api;