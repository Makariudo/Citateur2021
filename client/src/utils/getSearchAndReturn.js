export const subQuotes = (text) => { 
  if(!text){
    return
  } 
  /*if quotes already in text*/ 
  else if(text.charCodeAt(0)===8220) {
    return text.slice(1, (text.length-1))
  } else return text
}