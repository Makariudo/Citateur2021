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
    console.log(citation)
    } catch(err) {
      console.log(err)
    }
    
  },
}

export default Api;