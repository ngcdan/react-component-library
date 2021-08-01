"use strict";

var _interopRequireDefault = require("/Users/linuss/Dev/projects/training/react-component-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/linuss/Dev/projects/training/react-component-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/linuss/Dev/projects/training/react-component-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("/Users/linuss/Dev/projects/training/react-component-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/linuss/Dev/projects/training/react-component-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireDefault(require("react"));

var ProgressBar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ProgressBar, _React$Component);

  var _super = (0, _createSuper2["default"])(ProgressBar);

  function ProgressBar() {
    var _this;

    (0, _classCallCheck2["default"])(this, ProgressBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getColor = function (percent) {
      if (percent === 100) return 'green';
      return percent > 50 ? 'lightgreen' : 'red';
    };

    _this.getWidthAsPercentOfTotalWidth = function () {
      return parseInt(_this.props.width * (_this.props.percent / 100), 10);
    };

    return _this;
  }

  (0, _createClass2["default"])(ProgressBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          percent = _this$props.percent,
          width = _this$props.width,
          height = _this$props.height;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          border: 'solid 1px lightgray',
          width: width
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: this.getWidthAsPercentOfTotalWidth(),
          height: height,
          backgroundColor: this.getColor(percent)
        }
      }));
    }
  }]);
  return ProgressBar;
}(_react["default"].Component);

ProgressBar.defaultProps = {
  height: 5
};
var _default = ProgressBar;
exports["default"] = _default;