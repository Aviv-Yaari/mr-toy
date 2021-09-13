import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

export class ChatApp extends Component {
  state = { messages: [{ text: 'Hey there!', from: 'Bot' }] };

  onSend = ev => {
    ev.preventDefault();
    const text = ev.target.text.value;
    const from = 'Puki';
    const message = { text, from };
    const botMessage = { text: 'Hello Puki, nice to meet you.', from: 'Bot' };
    this.addMessage(message, () => setTimeout(this.addMessage, 500, botMessage));
    ev.target.reset();
  };

  addMessage = (message, callback = () => {}) => {
    this.setState(prevState => ({ messages: [...prevState.messages, message] }), callback);
  };

  render() {
    const { messages } = this.state;
    return (
      <section className="chat-app flex column space-between">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div className="message" key={idx}>
              <span className="from">{msg.from}:</span> {msg.text}
            </div>
          ))}
        </div>
        <form className="send flex" onSubmit={this.onSend}>
          <TextField name="text" variant="outlined" fullWidth />
          <Button type="submit" variant="outlined">
            Send
          </Button>
        </form>
      </section>
    );
  }
}
