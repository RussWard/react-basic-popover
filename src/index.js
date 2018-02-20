import React from 'react';
import ReactDOM from 'react-dom';

export default (ComposedComponent) => {
  class PopOver extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: this.props.message || 'popover message',
        showing: false
      }
      this.handleEnter = this.handleEnter.bind(this)
      this.handleLeave = this.handleLeave.bind(this)
    }

    // componentDidMount() {
    //   ReactDOM.findDOMNode(this).addEventListener('mouseenter', this.handleEnter)
    //   ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.handleLeave)
    // }

    // componentWillUnmount() {
    //   ReactDOM.findDOMNode(this).removeEventListener('mouseenter', this.handleEnter)
    //   ReactDOM.findDOMNode(this).removeEventListener('mouseleave', this.handleLeave)
    // }

    handleLeave(event) {
      ReactDOM.findDOMNode(event.target).removeChild(document.getElementById('popover'))
      this.setState({ showing: false })
    }

    
    handleEnter(event) {
      let node = document.createElement('div')
      let rightOffset = ReactDOM.findDOMNode(event.target).getBoundingClientRect().right - 30 + window.scrollX;
      let bottomOffset = ReactDOM.findDOMNode(event.target).getBoundingClientRect().bottom - 10 + window.scrollY; 
      node.innerHTML = this.state.message
      node.setAttribute('id', 'popover')
      node.setAttribute('style', `display: block; position: absolute; top: ${bottomOffset}px; left: ${rightOffset}px; size: fit-content; background-color: #fff; border: 1px solid; font-size: 60%;`);
      ReactDOM.findDOMNode(event.target).appendChild(node)
      this.setState({
        showing: true
      });
    }

    render() {
      return <ComposedComponent onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} {...this.props } />
    }
  }
  return PopOver;
}