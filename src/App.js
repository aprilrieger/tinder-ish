import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import cats from './cats'
import Header from "./components/Header"
import CatIndex from "./pages/CatIndex"
import NewCat from "./pages/NewCat"
import Navigation from "./components/Navigation"

const App = () => {
  const [allCats, setAllCats] = useState(cats);
    return(
      <React.Fragment>
        <Navigation />
        <Header />
        <div className="container">
        <Router>
          <Switch>
            {/* <Route exact path="/cat/:id" component={ CatShow } /> */}
            <Route exact path="/" render={ (props) => <CatIndex cats={ allCats } /> } />
            <Route path="/newcat" render={ (props) => <NewCat /> } />
          </Switch>
        </Router>
        </div>
      </React.Fragment>
    )
}
export default App;
