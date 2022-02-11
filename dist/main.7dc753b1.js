// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n    /*******\u5927\u5BB6\u597D*******/\n    /*******\u4ECA\u5929\u6211\u8981\u7ED9\u5927\u5BB6\u753B\u4E00\u4E2A\u6D77\u7EF5\u5B9D\u5B9D*******/\n    /*******\u8FD9\u662F\u4ED6\u5927\u5927\u7684\u773C\u775B*******/\n    .skin .eyes .eyeLeft,.eyeRight{\n    border: 5px solid black;\n    border-radius: 50%;\n    background-color: white;\n}\n    /*******\u8FD9\u662F\u4ED6\u7684\u84DD\u84DD\u7684\u773C\u7403*******/\n\n    .skin .eyes .eyesBallLeft,.eyesBallRight{\n    border-radius: 50%;\n    border: 1px black solid;\n    background-color:#0093DC;\n    }\n    /*******\u8FD9\u662F\u4ED6\u9ED1\u9ED1\u7684\u773C\u73E0*******/\n    .skin .eyes .black{\n    border: 1px black solid;\n    background-color: black;\n    border-radius: 50%;\n    }\n    /*******\u8FD9\u662F\u4ED6\u9AD8\u9AD8\u7684\u9F3B\u5B50*******/\n    .skin .nose{\n        border-radius: 50px/100px;\n        background: #FFF400;\n        border: 5px black solid;\n        border-bottom: none;\n        }\n        /*******\u8FD9\u662F\u4ED6\u957F\u957F\u7684\u776B\u6BDB*******/\n        .eyes .brow1,.brow2,.brow3{\n        width: 10px;\n        background-color: black;\n}\n/*******\u8FD9\u662F\u4ED6\u7EA2\u7EA2\u7684\u7684\u8138\u988A*******/\n.skin .cheek .circleL{\n    border-radius:50%;\n    background-color: #FFF400;\n}\n.skin .cheek .cheekLeft,.cheekRight{\n    \n    border: 5px solid#D9241C;\n    border-radius:50%;\n}\n.circleL .point1,.point2,.point3{\n    border-radius:50%;\n    background-color: #D9241C;\n}\n/*******\u8FD9\u662F\u4ED6\u5927\u5927\u7684\u5634\u5DF4*******/\n.skin .mouth .circleCenter{\n    border:4px solid  black;\n    border-radius: 50%;\n    \n}\n.skin .mouth .circleLeft,.circleRight{\n    border-radius:50%;\n    border: 1px solid transparent;\n    border-top: 5px solid black;\n}\n/*******\u8FD9\u662F\u4ED6\u767D\u767D\u7684\u7259\u9F7F*******/\n.skin .mouth .teethLeft,.teethRight{\n    border: 4px solid black;\n    background-color: white;\n    \n}\n/*******\u8FD9\u662F\u4ED6\u5C16\u5C16\u7684\u4E0B\u5DF4*******/\n.skin .circle .circleLeft2,.circleRight2{\n    border: 1px solid transparent;\n    border-bottom: 8px solid #D9241C;\n    border-radius: 50%;\n}\n/*******\u8FD9\u662F\u4ED6\u7070\u7070\u7684\u5706\u6591*******/\n.skin .hole1,.hole2,.hole3,.hole4,.hole5,.hole6,.hole7{\n    background-color: #D1C900;\n    border-radius: 50%;\n}\n/*******\u597D\u5566\uFF01\u6211\u7684\u6D77\u7EF5\u5B9D\u5B9D\u753B\u5B8C\u5566~\u4F60\u8FD8\u559C\u6B22\u5417\uFF1F*******/\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var player = {
  id: undefined,
  time: 50,
  n: 1,
  ui: {
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2")
  },
  init: function init() {
    player.ui.demo1.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.btnBind();
  },
  events: {
    "#btnPause": 'pause',
    "#btnPlay": 'play',
    "#btnFast": "fast",
    "#btnNormal": "normal",
    "#btnSlow": "slow"
  },
  btnBind: function btnBind() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector.onclick = player[value];
      }
    }
  },
  run: function run() {
    demo1.innerText = _css.default.substr(0, player.n);
    demo2.innerHTML = _css.default.substr(0, player.n);
    player.n += 1;
    demo1.scrollTop = demo1.scrollHeight;

    if (player.n === _css.default.length) {
      clearInterval(id);
    }
  },
  play: function play() {
    id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    clearInterval(id);
  },
  fast: function fast() {
    player.pause();
    player.time = 5;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  }
};
var id = setInterval(player.run, 50);

btnPause.onclick = function () {
  clearInterval(id);
};

btnPlay.onclick = function () {
  clearInterval(id);
  id = setInterval(player.run, 50);
};

btnFast.onclick = function () {
  clearInterval(id);
  id = setInterval(player.run, 10);
};

btnNormal.onclick = function () {
  clearInterval(id);
  id = setInterval(player.run, 50);
};

btnSlow.onclick = function () {
  clearInterval(id);
  id = setInterval(player.run, 200);
};
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.7dc753b1.js.map