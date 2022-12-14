import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
// import ReactDOM from 'react-dom';
import { BrowserRouter as  Router,Routes,  Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <Router>
          <NavBar/>
         
          <Routes>
          <Route exact path="/science" element={ <News key='science' pageSize={12} country="in" category='science'/>}></Route>
          <Route exact path="/business" element={ <News key='business' pageSize={12} country="in" category='business'/>}></Route>
          <Route exact path="/technology" element={ <News key='technology' pageSize={12} country="in" category='technology'/>}></Route>
          <Route exact path="/entertainment" element={ <News key='entertainment' pageSize={12} country="in" category='entertainment'/>}></Route>
          <Route exact path="/sports" element={ <News key='sports' pageSize={12} country="in" category='sports'/>}></Route>
          <Route exact path="/general" element={ <News key='general' pageSize={12} country="in" category='general'/>}></Route>
          <Route exact path="/health" element={ <News key='health' pageSize={12} country="in" category='health'/>}></Route>
          <Route exact path="/" element={ <News key='home' pageSize={12} country="in" category='general'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

