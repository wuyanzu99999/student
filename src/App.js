import React from "react";
import './App.css';
import Layouts from './layouts';
export default class App extends React.Component {

  constructor(props){
    super(props);
  }
 
  render = () => (
    <div className="App">
        <Layouts {...this.props}/>
    </div>
  )
}

