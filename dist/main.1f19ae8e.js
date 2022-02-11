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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n    /*******\u5927\u5BB6\u597D*******/\n    /*******\u4ECA\u5929\u6211\u8981\u7ED9\u5927\u5BB6\u753B\u4E00\u4E2A\u6D77\u7EF5\u5B9D\u5B9D*******/\n    /*******\u8FD9\u662F\u4ED6\u5927\u5927\u7684\u773C\u775B*******/\n    .skin .eyes .eyeLeft,.eyeRight{\n    border: 5px solid black;\n    border-radius: 50%;\n    background-color: white;\n}\n    /*******\u8FD9\u662F\u4ED6\u7684\u84DD\u84DD\u7684\u773C\u7403*******/\n\n    .skin .eyes .eyesBallLeft,.eyesBallRight{\n    border-radius: 50%;\n    border: 1px black solid;\n    background-color:#0093DC;\n    }\n    /*******\u8FD9\u662F\u4ED6\u9ED1\u9ED1\u7684\u773C\u73E0*******/\n    .skin .eyes .black{\n    border: 1px black solid;\n    background-color: black;\n    border-radius: 50%;\n    }\n    /*******\u8FD9\u662F\u4ED6\u9AD8\u9AD8\u7684\u9F3B\u5B50*******/\n    .skin .nose{\n        border-radius: 50px/100px;\n        background: #FFF400;\n        border: 5px black solid;\n        border-bottom: none;\n        }\n        /*******\u8FD9\u662F\u4ED6\u957F\u957F\u7684\u776B\u6BDB*******/\n        .eyes .brow1,.brow2,.brow3{\n        width: 10px;\n        background-color: black;\n}\n/*******\u8FD9\u662F\u4ED6\u7EA2\u7EA2\u7684\u7684\u8138\u988A*******/\n.skin .cheek .circleL{\n    border-radius:50%;\n    background-color: #FFF400;\n}\n.skin .cheek .cheekLeft,.cheekRight{\n    \n    border: 5px solid#D9241C;\n    border-radius:50%;\n}\n.circleL .point1,.point2,.point3{\n    border-radius:50%;\n    background-color: #D9241C;\n}\n/*******\u8FD9\u662F\u4ED6\u5927\u5927\u7684\u5634\u5DF4*******/\n.skin .mouth .circleCenter{\n    border:4px solid  black;\n    border-radius: 50%;\n    \n}\n.skin .mouth .circleLeft,.circleRight{\n    border-radius:50%;\n    border: 1px solid transparent;\n    border-top: 5px solid black;\n}\n/*******\u8FD9\u662F\u4ED6\u767D\u767D\u7684\u7259\u9F7F*******/\n.skin .mouth .teethLeft,.teethRight{\n    border: 4px solid black;\n    background-color: white;\n    \n}\n/*******\u8FD9\u662F\u4ED6\u5C16\u5C16\u7684\u4E0B\u5DF4*******/\n.skin .circle .circleLeft2,.circleRight2{\n    border: 1px solid transparent;\n    border-bottom: 8px solid #D9241C;\n    border-radius: 50%;\n}\n/*******\u8FD9\u662F\u4ED6\u7070\u7070\u7684\u5706\u6591*******/\n.skin .hole1,.hole2,.hole3,.hole4,.hole5,.hole6,.hole7{\n    background-color: #D1C900;\n    border-radius: 50%;\n}\n/*******\u597D\u5566\uFF01\u6211\u7684\u6D77\u7EF5\u5B9D\u5B9D\u753B\u5B8C\u5566~\u4F60\u8FD8\u559C\u6B22\u5417\uFF1F*******/\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
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
},{"./css.js":"css.js"}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50132" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map