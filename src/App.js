import cn from 'classnames';
import {useLocation, Route, Switch, Redirect} from "react-router-dom";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/404"

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import {FirebaseContext} from "./services/firebaseContext";

import s from './App.css';

import Firebase from './services/firebase';

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route>
          <>
            <Switch>
              <Route path="/404" exact component={NotFoundPage}/>
            </Switch>
          </>
          <>
            <MenuHeader bgActive={!isPadding}/>

            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding
            })}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>

                <Route render={() => <Redirect to="/404"/>}/>
              </Switch>
            </div>

            <Footer/>
          </>
        </Route>
      </Switch>
    </FirebaseContext.Provider>
  )
};

export default App;