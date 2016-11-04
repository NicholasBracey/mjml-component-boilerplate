'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _mjmlCore = require('mjml-core');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reverse = require('lodash/reverse');

var _reverse2 = _interopRequireDefault(_reverse);

var _mjmlSection = require('mjml-section');

var _mjmlSection2 = _interopRequireDefault(_mjmlSection);

var _mjmlColumn = require('mjml-column');

var _mjmlColumn2 = _interopRequireDefault(_mjmlColumn);

var _mjmlImage = require('mjml-image');

var _mjmlImage2 = _interopRequireDefault(_mjmlImage);

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Tag Name
var tagName = 'mj-column-image-text';
// List of parent tags
var parentTag = ['mj-container'];
// If false, the component can contain MJML; if true, it can contain only plain HTML
var endingTag = false;
var defaultMJMLDefinition = {
  content: '',
  attributes: {
    direction: 'left',
    color: 'red',
    'font-size': '20px',
    'image-padding': 0,
    'image-src': null,
    'image-width': null
  }
};

var ColumnImageText = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {
  _inherits(ColumnImageText, _Component);

  function ColumnImageText() {
    _classCallCheck(this, ColumnImageText);

    return _possibleConstructorReturn(this, (ColumnImageText.__proto__ || Object.getPrototypeOf(ColumnImageText)).apply(this, arguments));
  }

  _createClass(ColumnImageText, [{
    key: 'renderImage',
    value: function renderImage() {
      var mjAttribute = this.props.mjAttribute;


      return _react2.default.createElement(
        _mjmlColumn2.default,
        { key: 'image' },
        _react2.default.createElement(_mjmlImage2.default, {
          padding: mjAttribute('image-padding'),
          width: mjAttribute('image-width'),
          src: mjAttribute('image-src')
        })
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var mjAttribute = this.props.mjAttribute;


      return _react2.default.createElement(
        _mjmlColumn2.default,
        { key: 'content' },
        _react2.default.createElement(
          _mjmlText2.default,
          { 'font-size': mjAttribute('font-size'), color: mjAttribute('color') },
          mjAttribute('text')
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var mjAttribute = this.props.mjAttribute;

      var columns = [this.renderImage(), this.renderContent()];

      return _react2.default.createElement(
        _mjmlSection2.default,
        this.props,
        mjAttribute('direction') == 'right' ? (0, _reverse2.default)(columns) : columns
      );
    }
  }]);

  return ColumnImageText;
}(_react.Component)) || _class;

ColumnImageText.tagName = tagName;
ColumnImageText.parentTag = parentTag;
ColumnImageText.endingTag = endingTag;
ColumnImageText.defaultMJMLDefinition = defaultMJMLDefinition;

exports.default = ColumnImageText;