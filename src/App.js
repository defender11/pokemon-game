import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/404"

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import s from './App.css'
import cn from 'classnames'

const App = () => {

  const match = useRouteMatch('/');

  return (
    <Switch>
      <Route>
        <>
          <Switch>
            <Route path="/404" exact component={NotFoundPage}/>
          </Switch>
        </>
        <>
          <MenuHeader bgActive={!match.isExact}/>

          <div className={cn(s.wrap, {
            [s.isHomePage]: match.isExact
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
  )
};

export default App;