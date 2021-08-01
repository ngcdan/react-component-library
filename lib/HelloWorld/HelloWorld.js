"use strict";

var _interopRequireDefault = require("/Users/linuss/Dev/projects/training/react-component-library/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

/** A component that says Hello with a custom message. */
function HelloWorld(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/_react["default"].createElement("div", null, "Hello ", message);
}

HelloWorld.defaultProps = {
  message: 'World'
};
var _default = HelloWorld;
exports["default"] = _default;