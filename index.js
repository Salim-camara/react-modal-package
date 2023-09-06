"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Modal = function Modal(_ref) {
  var children = _ref.children,
    modalStyle = _ref.modalStyle,
    _ref$backdropOpacity = _ref.backdropOpacity,
    backdropOpacity = _ref$backdropOpacity === void 0 ? 0.5 : _ref$backdropOpacity,
    visible = _ref.visible,
    setVisible = _ref.setVisible,
    _ref$disableCloseButt = _ref.disableCloseButton,
    disableCloseButton = _ref$disableCloseButt === void 0 ? false : _ref$disableCloseButt;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modalBackdrop",
    style: {
      backgroundColor: "rgba(0, 0, 0, ".concat(backdropOpacity, ")"),
      display: !visible && "none"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modal",
    style: modalStyle
  }, children, !disableCloseButton && /*#__PURE__*/_react["default"].createElement("div", {
    "class": "modalClose",
    onClick: function onClick() {
      return setVisible(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: require("./close.png"),
    style: {
      height: 25,
      width: 25
    }
  }))));
};
var _default = Modal;
exports["default"] = _default;
