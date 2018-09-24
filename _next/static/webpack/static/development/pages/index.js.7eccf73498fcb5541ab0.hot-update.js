webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _louismerlin_cothority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @louismerlin/cothority */ "./node_modules/@louismerlin/cothority/dist/bundle.min.js");
/* harmony import */ var _louismerlin_cothority__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_louismerlin_cothority__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var toml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toml */ "./node_modules/toml/index.js");
/* harmony import */ var toml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bulma/css/bulma.css */ "./node_modules/bulma/css/bulma.css");
/* harmony import */ var bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/louis/Code/hello-cothority/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      serverDescription: ''
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var socket, res, serverDescription;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                socket = new _louismerlin_cothority__WEBPACK_IMPORTED_MODULE_3__["net"].RosterSocket(_louismerlin_cothority__WEBPACK_IMPORTED_MODULE_3___default.a.Roster.fromTOML(this.props.cothority), 'Status');
                _context.next = 3;
                return socket.send('status.Request', 'Response', {});

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.serveridentity.description;

              case 6:
                serverDescription = _context.sent;
                this.setState({
                  serverDescription: serverDescription
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1475899271" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-1475899271" + " " + 'title is-1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Hello, Cothority"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1475899271" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "List of official conodes:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "jsx-1475899271",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.servers.map(function (server) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          key: server.Public,
          className: "jsx-1475899271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
          className: "jsx-1475899271",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, server.Description), " [", server.Address, "]");
      })), this.state.serverDescription ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1475899271" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Connected to ", this.state.serverDescription) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1475899271" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Connecting to a conode..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1475899271",
        css: "h1.jsx-1475899271{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvdWlzL0NvZGUvaGVsbG8tY290aG9yaXR5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDc0IsQUFHaUMsa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2xvdWlzL0NvZGUvaGVsbG8tY290aG9yaXR5L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgaWRlbnRpdHksIHsgbmV0IH0gZnJvbSAnQGxvdWlzbWVybGluL2NvdGhvcml0eSdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgdG9tbCBmcm9tICd0b21sJ1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCAnYnVsbWEvY3NzL2J1bG1hLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBzZXJ2ZXJEZXNjcmlwdGlvbjogJycgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZWRpcy9jb3Rob3JpdHkvbWFzdGVyL2RlZGlzLWNvdGhvcml0eS50b21sJylcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgcmVzLnRleHQoKVxuICAgIGNvbnNvbGUubG9nKGZpbGUpXG4gICAgY29uc3Qgc2VydmVycyA9IHRvbWwucGFyc2UoZmlsZSkuc2VydmVyc1xuICAgIGNvbnN0IGNvdGhvcml0eSA9IGZpbGVcbiAgICByZXR1cm4geyBzZXJ2ZXJzLCBjb3Rob3JpdHkgfVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHNvY2tldCA9IG5ldyBuZXQuUm9zdGVyU29ja2V0KGlkZW50aXR5LlJvc3Rlci5mcm9tVE9NTCh0aGlzLnByb3BzLmNvdGhvcml0eSksICdTdGF0dXMnKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNvY2tldC5zZW5kKCdzdGF0dXMuUmVxdWVzdCcsICdSZXNwb25zZScsIHt9KVxuICAgIGNvbnN0IHNlcnZlckRlc2NyaXB0aW9uID0gYXdhaXQgcmVzLnNlcnZlcmlkZW50aXR5LmRlc2NyaXB0aW9uXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlcnZlckRlc2NyaXB0aW9uIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NlY3Rpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSBpcy0xJz5IZWxsbywgQ290aG9yaXR5PC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSBpcy0zJz5MaXN0IG9mIG9mZmljaWFsIGNvbm9kZXM6PC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zZXJ2ZXJzLm1hcChzZXJ2ZXIgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtzZXJ2ZXIuUHVibGljfT48c3Ryb25nPntzZXJ2ZXIuRGVzY3JpcHRpb259PC9zdHJvbmc+IFt7c2VydmVyLkFkZHJlc3N9XTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZlckRlc2NyaXB0aW9uXG4gICAgICAgICAgICA/IDxoMiBjbGFzc05hbWU9J3RpdGxlIGlzLTMnPkNvbm5lY3RlZCB0byB7dGhpcy5zdGF0ZS5zZXJ2ZXJEZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgOiA8aDIgY2xhc3NOYW1lPSd0aXRsZSBpcy0zJz5Db25uZWN0aW5nIHRvIGEgY29ub2RlLi4uPC9oMj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/louis/Code/hello-cothority/pages/index.js */",
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, file, servers, cothority;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/dedis/cothority/master/dedis-cothority.toml');

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.text();

              case 5:
                file = _context2.sent;
                console.log(file);
                servers = toml__WEBPACK_IMPORTED_MODULE_5___default.a.parse(file).servers;
                cothority = file;
                return _context2.abrupt("return", {
                  servers: servers,
                  cothority: cothority
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7eccf73498fcb5541ab0.hot-update.js.map