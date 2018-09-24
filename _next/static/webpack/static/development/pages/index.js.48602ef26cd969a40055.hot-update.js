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
        className: "jsx-3858869216" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-3858869216" + " " + 'title is-1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Hello, Cothority"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-3858869216" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "List of official conodes:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
        className: "jsx-3858869216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.servers.map(function (server) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
          key: server.Public,
          className: "jsx-3858869216",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
          className: "jsx-3858869216",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, server.Description), " [", server.Address, "]");
      })), this.state.serverDescription ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-3858869216" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Connected to ", this.state.serverDescription) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-3858869216" + " " + 'title is-3',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Connecting to a conode..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3858869216",
        css: ".container.jsx-3858869216{font-family:sans-serif;max-width:640px;margin:auto;}h1.jsx-3858869216{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvdWlzL0NvZGUvaGVsbG8tY290aG9yaXR5L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDc0IsQUFHc0MsQUFLTCxrQkFDcEIsS0FMa0IsZ0JBQ0osWUFDZCIsImZpbGUiOiIvaG9tZS9sb3Vpcy9Db2RlL2hlbGxvLWNvdGhvcml0eS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlkZW50aXR5LCB7IG5ldCB9IGZyb20gJ0Bsb3Vpc21lcmxpbi9jb3Rob3JpdHknXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHRvbWwgZnJvbSAndG9tbCdcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2VydmVyRGVzY3JpcHRpb246ICcnIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZGVkaXMvY290aG9yaXR5L21hc3Rlci9kZWRpcy1jb3Rob3JpdHkudG9tbCcpXG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IHJlcy50ZXh0KClcbiAgICBjb25zb2xlLmxvZyhmaWxlKVxuICAgIGNvbnN0IHNlcnZlcnMgPSB0b21sLnBhcnNlKGZpbGUpLnNlcnZlcnNcbiAgICBjb25zdCBjb3Rob3JpdHkgPSBmaWxlXG4gICAgcmV0dXJuIHsgc2VydmVycywgY290aG9yaXR5IH1cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBzb2NrZXQgPSBuZXcgbmV0LlJvc3RlclNvY2tldChpZGVudGl0eS5Sb3N0ZXIuZnJvbVRPTUwodGhpcy5wcm9wcy5jb3Rob3JpdHkpLCAnU3RhdHVzJylcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzb2NrZXQuc2VuZCgnc3RhdHVzLlJlcXVlc3QnLCAnUmVzcG9uc2UnLCB7fSlcbiAgICBjb25zdCBzZXJ2ZXJEZXNjcmlwdGlvbiA9IGF3YWl0IHJlcy5zZXJ2ZXJpZGVudGl0eS5kZXNjcmlwdGlvblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZXJ2ZXJEZXNjcmlwdGlvbiB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzZWN0aW9uJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUgaXMtMSc+SGVsbG8sIENvdGhvcml0eTwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGl0bGUgaXMtMyc+TGlzdCBvZiBvZmZpY2lhbCBjb25vZGVzOjwvaDI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2VydmVycy5tYXAoc2VydmVyID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17c2VydmVyLlB1YmxpY30+PHN0cm9uZz57c2VydmVyLkRlc2NyaXB0aW9ufTwvc3Ryb25nPiBbe3NlcnZlci5BZGRyZXNzfV08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zZXJ2ZXJEZXNjcmlwdGlvblxuICAgICAgICAgICAgPyA8aDIgY2xhc3NOYW1lPSd0aXRsZSBpcy0zJz5Db25uZWN0ZWQgdG8ge3RoaXMuc3RhdGUuc2VydmVyRGVzY3JpcHRpb259PC9oMj5cbiAgICAgICAgICAgIDogPGgyIGNsYXNzTmFtZT0ndGl0bGUgaXMtMyc+Q29ubmVjdGluZyB0byBhIGNvbm9kZS4uLjwvaDI+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/louis/Code/hello-cothority/pages/index.js */",
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
//# sourceMappingURL=index.js.48602ef26cd969a40055.hot-update.js.map