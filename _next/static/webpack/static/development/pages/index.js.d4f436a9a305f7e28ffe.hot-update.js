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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1836525931" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-1836525931" + " " + 'title is-1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Hello, ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1836525931" + " " + 'has-text-conode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Cothority")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1836525931" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "List of official ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1836525931" + " " + 'has-text-conode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "conodes"), ":"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
        className: "jsx-1836525931" + " " + 'table is-fullwidth is-hoverable',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
        className: "jsx-1836525931",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.servers.map(function (server) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
          key: server.Public,
          className: "jsx-1836525931",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
          className: "jsx-1836525931",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, server.Description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
          className: "jsx-1836525931",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, server.Address));
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-1836525931",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), this.state.serverDescription ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1836525931" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Connected to ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1836525931" + " " + 'has-text-conode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.state.serverDescription)) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1836525931" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Connecting to a ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-1836525931" + " " + 'has-text-conode',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "conode"), "..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1836525931",
        css: ".container.jsx-1836525931{font-family:sans-serif;max-width:800px;margin:auto;}h1.jsx-1836525931{text-align:center;}.has-text-conode.jsx-1836525931{text-color:#0a2342;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvdWlzL0NvZGUvaGVsbG8tY290aG9yaXR5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDb0IsQUFHb0MsQUFLTCxBQUdDLGtCQUZyQixDQUdBLElBUmtCLGdCQUNKLFlBQ2QiLCJmaWxlIjoiL2hvbWUvbG91aXMvQ29kZS9oZWxsby1jb3Rob3JpdHkvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBpZGVudGl0eSwgeyBuZXQgfSBmcm9tICdAbG91aXNtZXJsaW4vY290aG9yaXR5J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB0b21sIGZyb20gJ3RvbWwnXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IHNlcnZlckRlc2NyaXB0aW9uOiAnJyB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RlZGlzL2NvdGhvcml0eS9tYXN0ZXIvZGVkaXMtY290aG9yaXR5LnRvbWwnKVxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCByZXMudGV4dCgpXG4gICAgY29uc29sZS5sb2coZmlsZSlcbiAgICBjb25zdCBzZXJ2ZXJzID0gdG9tbC5wYXJzZShmaWxlKS5zZXJ2ZXJzXG4gICAgY29uc3QgY290aG9yaXR5ID0gZmlsZVxuICAgIHJldHVybiB7IHNlcnZlcnMsIGNvdGhvcml0eSB9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3Qgc29ja2V0ID0gbmV3IG5ldC5Sb3N0ZXJTb2NrZXQoaWRlbnRpdHkuUm9zdGVyLmZyb21UT01MKHRoaXMucHJvcHMuY290aG9yaXR5KSwgJ1N0YXR1cycpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc29ja2V0LnNlbmQoJ3N0YXR1cy5SZXF1ZXN0JywgJ1Jlc3BvbnNlJywge30pXG4gICAgY29uc3Qgc2VydmVyRGVzY3JpcHRpb24gPSBhd2FpdCByZXMuc2VydmVyaWRlbnRpdHkuZGVzY3JpcHRpb25cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VydmVyRGVzY3JpcHRpb24gfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSBpcy0xJz5IZWxsbywgPHNwYW4gY2xhc3NOYW1lPSdoYXMtdGV4dC1jb25vZGUnPkNvdGhvcml0eTwvc3Bhbj48L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSd0aXRsZSBpcy0zJz5MaXN0IG9mIG9mZmljaWFsIDxzcGFuIGNsYXNzTmFtZT0naGFzLXRleHQtY29ub2RlJz5jb25vZGVzPC9zcGFuPjo8L2gyPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZSBpcy1mdWxsd2lkdGggaXMtaG92ZXJhYmxlJz5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zZXJ2ZXJzLm1hcChzZXJ2ZXIgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtzZXJ2ZXIuUHVibGljfT48dGQ+e3NlcnZlci5EZXNjcmlwdGlvbn08L3RkPjx0ZD57c2VydmVyLkFkZHJlc3N9PC90ZD48L3RyPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGJyLz5cbiAgICAgICAge3RoaXMuc3RhdGUuc2VydmVyRGVzY3JpcHRpb25cbiAgICAgICAgICA/IDxoMiBjbGFzc05hbWU9J3RpdGxlIGlzLTMnPkNvbm5lY3RlZCB0byA8c3BhbiBjbGFzc05hbWU9J2hhcy10ZXh0LWNvbm9kZSc+e3RoaXMuc3RhdGUuc2VydmVyRGVzY3JpcHRpb259PC9zcGFuPjwvaDI+XG4gICAgICAgICAgOiA8aDIgY2xhc3NOYW1lPSd0aXRsZSBpcy0zJz5Db25uZWN0aW5nIHRvIGEgPHNwYW4gY2xhc3NOYW1lPSdoYXMtdGV4dC1jb25vZGUnPmNvbm9kZTwvc3Bhbj4uLi48L2gyPlxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFzLXRleHQtY29ub2RlIHtcbiAgICAgICAgICAgIHRleHQtY29sb3I6ICMwYTIzNDI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/louis/Code/hello-cothority/pages/index.js */",
        __self: this
      }));
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
//# sourceMappingURL=index.js.d4f436a9a305f7e28ffe.hot-update.js.map