const axios = require('axios')

const API = {

async findCitation(word) {
  try {
    console.log("mot found", word)
    const config = {
      method: "get",
      url: `https://api.dicolink.com/v1/mot/${word}/citations?limite=5&api_key=EAX0bR2KdabAnaoTNRxGQCMUk8NwCFod`
    }
    const res = await axios(config);
     return res
  } catch(err) {
    return err
  }
}
}




module.exports = API;