import React, {useContext, useEffect, useCallback} from 'react';
import Citations from 'store/citations';
import Api from 'utils/fetch';
import Citation from 'components/Citation'
import './example.scss';



function Example() {
const {citations, setCitations} = useContext(Citations);
 
/* FETCH CITATION */

 const fetchCitation = useCallback(async() => {
  const citation = await Api.fetchCitations();
  console.log(citation);
  setCitations([citation])
},[setCitations])

useEffect(()=>{
 fetchCitation();
},[fetchCitation]) 

//console.log(citations[0], isLoading)
let citation = citations[0];
  return (

      <div className="container__citation">
        <h1 className="container__citation__h1">Citation du jour</h1>
        <Citation citation={citation} />
      </div>
      
       
   
  )
}

export default Example
