require('babel-polyfill')
const WikiquoteApi = require('wikiquote-api')

const API = {
  async findCitation() {
    try {
      WikiquoteApi.searchQuotePage('Spiderman').then(console.log)
       } catch(err) {
     console.log(err)
    }
  }
}



module.exports = API;