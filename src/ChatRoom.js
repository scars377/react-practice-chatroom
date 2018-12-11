import React, { Component } from 'react';
import style from './ChatRoom.module.css';

class ChatRoom extends Component {
  state = {
    text: '',
    content: [],
  };
  onChangeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    const { text, content } = this.state;
    this.setState({
      text: '',
      content: [{ id: Date.now(), text }, ...content],
    });
  };
  render() {
    const { text, content } = this.state;
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            value={text}
            onChange={this.onChangeText}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {content.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ChatRoom;
