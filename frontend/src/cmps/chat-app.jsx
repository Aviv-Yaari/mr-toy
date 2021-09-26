import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';

export class ChatApp extends Component {
  render() {
    const { messages, onSend, onTyping, typingUsers } = this.props;
    return (
      <section className="chat-app flex column space-between">
        <div className="messages">
          {typingUsers.length ? (
            <div className="is-typing">Someone is typing a message...</div>
          ) : (
            <></>
          )}
          {messages.map((msg, idx) => (
            <div className="message" key={idx}>
              <span className="from">{msg.from}:</span> {msg.text}
            </div>
          ))}
        </div>
        <form className="send flex" onSubmit={onSend}>
          <TextField onChange={onTyping} name="text" variant="outlined" fullWidth />
          <Button type="submit" variant="outlined">
            Send
          </Button>
        </form>
      </section>
    );
  }
}
