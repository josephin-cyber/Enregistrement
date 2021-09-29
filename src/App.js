import Confirmation from './confirm-page/components/Confirmation';
 import Auth from './projet-react-auth/components/authPage';
import  Form  from './FormulaireRaw/components/Form';
import { Route, BrowserRouter } from "react-router-dom";

const App = ()=>{

  return(

  <BrowserRouter>
  <Route exact path='/' component={Auth}/>
  <Route path='/Formulaire' component={Form}/>
  <Route path='/Confirmation' component={Confirmation}/>
  </BrowserRouter>

  );


}

export default App;