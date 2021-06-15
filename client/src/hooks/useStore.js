import {useContext} from 'react';
import Store from 'store/index';
 
const useStore = () => {
  const context = useContext(Store);
  return context;
}
export default useStore;