import React, { Component } from 'react';
import logo from './img/stand_up_logo.png';
import './App.css';
import Editor from './Editor'
import FirebaseDao from './FirebaseDao'
import config from './config'

class App extends Component {
  constructor(){
    super();
    this.dao = new FirebaseDao(config);
    this.submit = this.submit.bind(this);
  }

  submit(article){
    if(article){
      let key = this.dao.newKey();
      let updated = this.dao.update( key, article );
      return updated;
    }
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
        <Editor handleSubmit={this.submit} isAnonymous={this.isAnonymous}/>
         <ul>
         {this.getArticles()}
         </ul>
      </div>
    );
  }
}

export default App;
