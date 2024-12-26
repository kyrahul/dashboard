
import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import { Layout} from './components/shared/layout';


function App() {
  return (
    <>
      
<Router>
  <Routes>
    <Route path='/'  element ={ <Layout/> }/>
    <Route path=''/>
    <Route path=''/>
    <Route path=''/>
  </Routes>
</Router>

     
    </>
  );
}

export default App;
