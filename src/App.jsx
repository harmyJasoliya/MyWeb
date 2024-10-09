import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import './App.css';
import Header from './Component/Header/Header';
import Black from './Component/Lastblack/Black';


import Brand from './Pages/Brand';
import New from './Pages/New/New';
import Gel from './Pages/Gel/Gel';
import Lacquer from './Pages/Lacquer';
import Dip from './Pages/Dip/Dip';
import Enhance from './Pages/Enhance';
import Tools from './Pages/Tools';
import Pressons from './Pages/Pressons';
import Beauty from './Pages/Beauty';
import Sale from './Pages/Sale';
import Collection from './Pages/Collection';
import Blog from './Pages/Blog';


import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Headslide from './headslide/Headslide';
import Featured from './Component/Featured/Featured';

function App() {
  return (
    // <Home/>
    <>
      <div className="w-100">
         <Router>
          <Header/>
         
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/brand">
                 <Brand/>
              </Route>
              <Route path="/new">
                 <New/>
              </Route>
              <Route path="/gel">
                 <Gel/>
              </Route>
              <Route path="/lacquer">
                 <Lacquer/>
              </Route>
              <Route path="/dip">
                 <Dip/>
              </Route>
              <Route path="/enhance">
                 <Enhance/>
              </Route>
              <Route path="/tools">
                 <Tools/>
              </Route>
              <Route path="/pressons">
                 <Pressons/>
              </Route>
              <Route path="/beauty">
                 <Beauty/>
              </Route>
              <Route path="/sale">
                 <Sale/>
              </Route>
              <Route path="/collection">
                 <Collection/>
              </Route>
              <Route path="/blog">
                 <Blog/>
              </Route>
              
            </Switch>
            
            <Black/>
         </Router>
         {/* <Link to="/Brand">Brand</Link> */}
      </div>
    </>
  );
}

export default App;
