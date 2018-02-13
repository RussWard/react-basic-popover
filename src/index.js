import React from 'react';
import ReactDOM from 'react-dom';

export default function(ComposedComponent) {
  class PopOver extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: this.props.message || 'popover message'
      }
      this.handleEnter = this.handleEnter.bind(this)
    }

    componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener('mouseenter', this.handleEnter)
      ReactDOM.findDOMNode(this).addEventListener('mouseleave', this.handleLeave)
    }

    componentWillUnmount() {
      ReactDOM.findDOMNode(this).removeEventListener('mouseenter', this.handleEnter)
      ReactDOM.findDOMNode(this).removeEventListener('mouseleave', this.handleLeave)
    }

    handleLeave(event) {
      ReactDOM.findDOMNode(event.target).removeChild(document.getElementById('popup'))
    }
    
    handleEnter(event) {
      let node = document.createElement('div')
      node.innerHTML = this.state.message
      node.setAttribute('id', 'popup')
      node.setAttribute('style', 'display: block; position: absolute; bottom: -5px; right: -5px; size: fit-content; background-color: #fff; border: 1px solid;')
      ReactDOM.findDOMNode(event.target).appendChild(node) 
    }
    render() {
      return <ComposedComponent {...this.props}/>
    }
  }
  return PopOver;
}