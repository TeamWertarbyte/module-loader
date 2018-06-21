'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(context) {
    _classCallCheck(this, App);

    if (!context) {
      var message = 'Context is required when creating a new app.';
      throw new Error(message);
    }

    this.context = context;
    this.actions = {};
    this.reducers = {};
    this.routes = [];
  }

  _createClass(App, [{
    key: 'bindContext',
    value: function bindContext(_actions) {
      var actions = {};
      for (var key in _actions) {
        if (_actions.hasOwnProperty(key)) {
          var actionMap = _actions[key];
          var newActionMap = {};
          for (var actionName in actionMap) {
            if (actionMap.hasOwnProperty(actionName)) {
              newActionMap[actionName] = actionMap[actionName].bind(null, this.context);
            }
          }
          actions[key] = newActionMap;
        }
      }

      return actions;
    }
  }, {
    key: 'loadModule',
    value: function loadModule(module) {
      this.checkForInit();
      if (!module) {
        var message = 'Should provide a module to load.';
        throw new Error(message);
      }

      if (!module.name) {
        var _message = 'Should provide a module name.';
        throw new Error(_message);
      }

      if (module.loaded) {
        var _message2 = 'The module ' + module.name + ' is already loaded.';
        throw new Error(_message2);
      }

      var actions = module.actions || {};
      this.actions = _extends({}, this.actions, _defineProperty({}, module.name, actions));

      if (module.reducers) {
        this.context.store.injectReducer(module.name, module.reducers);
        var reducers = module.reducers || {};
        this.reducers = _extends({}, this.reducers, _defineProperty({}, module.name, reducers));
      }

      if (module.routes) {
        this.routes.push(module.routes());
      }

      if (module.load) {
        if (typeof module.load !== 'function') {
          var _message3 = 'module.load should be a function';
          throw new Error(_message3);
        }

        // This module has no access to the actions loaded after this module.
        var boundedActions = this.bindContext(this.actions);
        module.load(this.context, boundedActions);
      }

      module.loaded = true;
    }
  }, {
    key: 'init',
    value: function init() {
      this.checkForInit();
      this.initialized = true;
    }
  }, {
    key: 'checkForInit',
    value: function checkForInit() {
      if (this.initialized) {
        var message = 'App is already initialized';
        throw new Error(message);
      }
    }
  }]);

  return App;
}();

exports.default = App;