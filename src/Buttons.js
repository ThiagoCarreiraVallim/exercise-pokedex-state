import React from 'react';

class Filters extends React.Component {
  render() {
    const { text, click, disabled } = this.props;
    return(
        <button onClick={click} disabled={disabled}>{text}</button>
    );
  }
}

export default Filters;