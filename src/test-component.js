import React from 'react';

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 'not yet'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: 'yup, been clicked allright'
    })
  }

  render() {
    return (
      <button id="test-button" className='test' onMouseEnter={this.handleClick}>Click Me!</button>
    )
  
  }
}

export default TestButton;