import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

export class Popup extends Component {
  state = { isExpanded: false };

  onTogglePopup = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  render() {
    const { isExpanded } = this.state;
    const { icon } = this.props;
    return (
      <section className="popup">
        <IconButton className="icon" onClick={this.onTogglePopup}>
          {isExpanded ? <CloseIcon /> : icon}
        </IconButton>
        {isExpanded && (
          <div className="content flex column">
            <header>
              <IconButton className="btn-close" onClick={this.onTogglePopup}>
                <CloseIcon />
              </IconButton>
            </header>
            <main className="main-content grow">{this.props.children}</main>
            <footer></footer>
          </div>
        )}
      </section>
    );
  }
}
