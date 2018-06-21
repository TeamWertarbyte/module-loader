'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function () {
  function Module(name) {
    _classCallCheck(this, Module);

    if (!name) {
      var message = 'Name is required when creating a new module.';
      throw new Error(message);
    }

    this.loaded = false;
    this.name = name;
    this.actions = {};
    this.api = {};
    this.reducers = null;
    this.routes = null;
  }

  _createClass(Module, [{
    key: 'load',
    value: function load(context, actions) {}
  }]);

  return Module;
}();

exports.default = Module;