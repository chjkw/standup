import React, { Component } from 'react';
import logo from './img/stand_up_logo.png';
import './App.css';
import Editor from './Editor'

class App extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //버튼을 눌렀을 때 Action. 지금은 일단 콘솔 값을 확인만 함
  handleSubmit(e){
    console.log(this,e);
  }
  //익명 사용자 여부
  isAnonymous(){
    return true;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Editor {...this}/>
      </div>
    );
  }
}

export default App;
