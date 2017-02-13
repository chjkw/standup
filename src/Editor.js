import React, { Component } from 'react';
import './Editor.css';//Editor.css 파일 임포트
import Profile from './Profile';//Profile 파일 임포트

class Editor extends Component {
  render() {
    return (
      <div className="wrapEditor">
        <Profile isAnonymous={this.props.isAnonymous}/>
        <div className="textEditor">
          <div className="innerEdit"
            contentEditable="true"
            placeholder="글쓰기..."></div>
        </div>
        <div className="actionBar">
          <button className="upload" onClick={this.props.handleSubmit}>
          <span>스탠드업!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Editor;
