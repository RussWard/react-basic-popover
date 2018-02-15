'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (ComposedComponent) {
  var PopOver = function (_React$Component) {
    _inherits(PopOver, _React$Component);

    function PopOver(props) {
      _classCallCheck(this, PopOver);

      var _this = _possibleConstructorReturn(this, (PopOver.__proto__ || Object.getPrototypeOf(PopOver)).call(this, props));

      _this.state = {
        message: _this.props.message || 'popover message'
      };
      _this.handleEnter = _this.handleEnter.bind(_this);
      return _this;
    }

    _createClass(PopOver, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        _reactDom2.default.findDOMNode(this).addEventListener('mouseenter', this.handleEnter);
        _reactDom2.default.findDOMNode(this).addEventListener('mouseleave', this.handleLeave);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _reactDom2.default.findDOMNode(this).removeEventListener('mouseenter', this.handleEnter);
        _reactDom2.default.findDOMNode(this).removeEventListener('mouseleave', this.handleLeave);
      }
    }, {
      key: 'handleLeave',
      value: function handleLeave(event) {
        _reactDom2.default.findDOMNode(event.target).removeChild(document.getElementById('popup'));
      }
    }, {
      key: 'handleEnter',
      value: function handleEnter(event) {
        var node = document.createElement('div');
        var rightOffset = _reactDom2.default.findDOMNode(event.target).getBoundingClientRect().right - 30 + window.scrollX;
        var bottomOffset = _reactDom2.default.findDOMNode(event.target).getBoundingClientRect().bottom - 10 + window.scrollY;
        node.innerHTML = this.state.message;
        node.setAttribute('id', 'popup');
        node.setAttribute('style', 'display: block; position: absolute; top: ' + bottomOffset + 'px; left: ' + rightOffset + 'px; size: fit-content; background-color: #fff; border: 1px solid; font-size: 60%;');
        _reactDom2.default.findDOMNode(event.target).appendChild(node);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, this.props);
      }
    }]);

    return PopOver;
  }(_react2.default.Component);

  return PopOver;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }