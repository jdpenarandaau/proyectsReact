
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NewCount from './components/auth/NewCount'
import Books from './components/books/Books'

function App() {
  return (
     <Router>
       <Switch>
         <Route exact path="/" component={Login}/>
         <Route exact path="/new-count" component={NewCount}/>
         <Route exact path="/books" component={Books}/>

       </Switch>
     </Router>
         
  );
}

export default App;
