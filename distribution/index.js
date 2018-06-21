'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModule = exports.createApp = undefined;

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _module = require('./module');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApp = exports.createApp = function createApp() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_app2.default, [null].concat(args)))();
};
var createModule = exports.createModule = function createModule() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(_module2.default, [null].concat(args)))();
};