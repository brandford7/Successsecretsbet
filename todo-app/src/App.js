

import './App.css';
import Appview from './Components/Appview';
import setSearchterm from './redux/setSearchterm' ;
import { clearSearchterm } from './redux/clearSearchterm';
import { removeRecipe } from './redux/removeRecipe'
import {Provider} from 'react-redux' ;
import {Store} from './redux/Store'


function App() {
  return (
    <Provider store={Store}>
    <div className="App">
    
      <Store store={Store}/>
      
    </div>
     
      </Provider> 
    
  );
}

export default App;
