// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"0h5HD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "3bfcdbc1481143c1";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6aef64482f126000";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5fTRt":[function(require,module,exports) {
"use strict";
/* global chrome, browser */ let env = typeof browser === "undefined" ? chrome : browser;
let origReload = env.runtime.reload;
let avoidID = -1;
let promisify = (obj, fn)=>(...args)=>{
        if (typeof browser === "undefined") return new Promise((resolve, reject)=>obj[fn](...args, (res)=>env.runtime.lastError ? reject(env.runtime.lastError) : resolve(res)));
        return obj[fn](...args);
    };
let queryTabs = promisify(env.tabs, "query");
let messageTab = promisify(env.tabs, "sendMessage");
env.runtime.reload = ()=>{
    queryTabs({}).then((tabs)=>{
        return Promise.all(tabs.map((tab)=>{
            if (tab.id === avoidID) return;
            return messageTab(tab.id, {
                __parcel_hmr_reload__: true
            }).catch(()=>{});
        }));
    }).then(()=>{
        origReload.call(env.runtime);
    });
};
env.runtime.onMessage.addListener((msg, sender)=>{
    if (msg.__parcel_hmr_reload__) {
        avoidID = sender.tab.id;
        env.runtime.reload();
    }
});

},{}],"ToOLI":[function(require,module,exports) {
JSON.parse('{"manifest_version":3,"version":"3.0.1","name":"GPThemes - ChatGPT Customization","description":"Transform ChatGPT\'s user interface with customisable accent colours, modern designs and chat bubbles.","author":"itsmarta","homepage_url":"https://github.com/itsmartashub/GPThemes","host_permissions":["https://chat.openai.com/*","https://chatgpt.com/*","https://chat.openai.com/*","https://chatgpt.com/*"],"icons":{"16":"","19":"","32":"","38":"","48":"","128":""},"content_scripts":[{"matches":["https://chat.openai.com/*","https://chatgpt.com/*"],"js":["",""],"css":[""],"run_at":"document_end"}],"background":{"service_worker":"","type":"module"},"permissions":["storage","scripting"],"content_security_policy":{"extension_pages":"script-src \'self\' http://localhost:*;object-src \'self\';style-src \'self\' https://fonts.googleapis.com;font-src \'self\' https://fonts.gstatic.com;"}}');

},{}],"qK4Bu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webextensionPolyfill = require("webextension-polyfill");
var _webextensionPolyfillDefault = parcelHelpers.interopDefault(_webextensionPolyfill);
(0, _webextensionPolyfillDefault.default).runtime.onInstalled.addListener(()=>{
    console.log("Extension Installed");
});

},{"webextension-polyfill":"eYBvm","@parcel/transformer-js/src/esmodule-helpers.js":"jz6SY"}],"eYBvm":[function(require,module,exports) {
(function(global, factory) {
    if (typeof define === "function" && define.amd) define("webextension-polyfill", [
        "module"
    ], factory);
    else {
        var mod;
        factory(module);
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function(module1) {
    /* webextension-polyfill - v0.10.0 - Fri Aug 12 2022 19:42:44 */ /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */ /* vim: set sts=2 sw=2 et tw=80: */ /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */ "use strict";
    if (!globalThis.chrome?.runtime?.id) throw new Error("This script should only be loaded in a browser extension.");
    if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received."; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
        // optimization for Firefox. Since Spidermonkey does not fully parse the
        // contents of a function until the first time it's called, and since it will
        // never actually need to be called, this allows the polyfill to be included
        // in Firefox nearly for free.
        const wrapAPIs = (extensionAPIs)=>{
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
                "alarms": {
                    "clear": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "clearAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "bookmarks": {
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getChildren": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getRecent": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getSubTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTree": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "browserAction": {
                    "disable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "enable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "getBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "openPopup": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "browsingData": {
                    "remove": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "removeCache": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCookies": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeDownloads": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFormData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeHistory": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeLocalStorage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePasswords": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePluginData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "settings": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "commands": {
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "contextMenus": {
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "cookies": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAllCookieStores": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "set": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "devtools": {
                    "inspectedWindow": {
                        "eval": {
                            "minArgs": 1,
                            "maxArgs": 2,
                            "singleCallbackArg": false
                        }
                    },
                    "panels": {
                        "create": {
                            "minArgs": 3,
                            "maxArgs": 3,
                            "singleCallbackArg": true
                        },
                        "elements": {
                            "createSidebarPane": {
                                "minArgs": 1,
                                "maxArgs": 1
                            }
                        }
                    }
                },
                "downloads": {
                    "cancel": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "download": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "erase": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFileIcon": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "open": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "pause": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFile": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "resume": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "extension": {
                    "isAllowedFileSchemeAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "isAllowedIncognitoAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "history": {
                    "addUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "deleteRange": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getVisits": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "i18n": {
                    "detectLanguage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAcceptLanguages": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "identity": {
                    "launchWebAuthFlow": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "idle": {
                    "queryState": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "management": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getSelf": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setEnabled": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "uninstallSelf": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "notifications": {
                    "clear": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPermissionLevel": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "pageAction": {
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "hide": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "permissions": {
                    "contains": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "request": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "runtime": {
                    "getBackgroundPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPlatformInfo": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "openOptionsPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "requestUpdateCheck": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "sendMessage": {
                        "minArgs": 1,
                        "maxArgs": 3
                    },
                    "sendNativeMessage": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "setUninstallURL": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "sessions": {
                    "getDevices": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getRecentlyClosed": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "restore": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "storage": {
                    "local": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    },
                    "managed": {
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        }
                    },
                    "sync": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    }
                },
                "tabs": {
                    "captureVisibleTab": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "detectLanguage": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "discard": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "duplicate": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "executeScript": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getZoom": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getZoomSettings": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goBack": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goForward": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "highlight": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "insertCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "query": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "reload": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "sendMessage": {
                        "minArgs": 2,
                        "maxArgs": 3
                    },
                    "setZoom": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "setZoomSettings": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "update": {
                        "minArgs": 1,
                        "maxArgs": 2
                    }
                },
                "topSites": {
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "webNavigation": {
                    "getAllFrames": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFrame": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "webRequest": {
                    "handlerBehaviorChanged": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "windows": {
                    "create": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getLastFocused": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                }
            };
            if (Object.keys(apiMetadata).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */ class DefaultWeakMap extends WeakMap {
                constructor(createItem, items){
                    super(items);
                    this.createItem = createItem;
                }
                get(key) {
                    if (!this.has(key)) this.set(key, this.createItem(key));
                    return super.get(key);
                }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */ const isThenable = (value)=>{
                return value && typeof value === "object" && typeof value.then === "function";
            };
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */ const makeCallback = (promise, metadata)=>{
                return (...callbackArgs)=>{
                    if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                    else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) promise.resolve(callbackArgs[0]);
                    else promise.resolve(callbackArgs);
                };
            };
            const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments";
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */ const wrapAsyncFunction = (name, metadata)=>{
                return function asyncFunctionWrapper(target, ...args) {
                    if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    return new Promise((resolve, reject)=>{
                        if (metadata.fallbackToNoCallback) // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                        // and so the polyfill will try to call it with a callback first, and it will fallback
                        // to not passing the callback if the first call fails.
                        try {
                            target[name](...args, makeCallback({
                                resolve,
                                reject
                            }, metadata));
                        } catch (cbError) {
                            console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                            target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                            // use the unsupported callback anymore.
                            metadata.fallbackToNoCallback = false;
                            metadata.noCallback = true;
                            resolve();
                        }
                        else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else target[name](...args, makeCallback({
                            resolve,
                            reject
                        }, metadata));
                    });
                };
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */ const wrapMethod = (target, method, wrapper)=>{
                return new Proxy(method, {
                    apply (targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */ const wrapObject = (target, wrappers = {}, metadata = {})=>{
                let cache = Object.create(null);
                let handlers = {
                    has (proxyTarget, prop) {
                        return prop in target || prop in cache;
                    },
                    get (proxyTarget, prop, receiver) {
                        if (prop in cache) return cache[prop];
                        if (!(prop in target)) return undefined;
                        let value = target[prop];
                        if (typeof value === "function") {
                            // This is a method on the underlying object. Check if we need to do
                            // any wrapping.
                            if (typeof wrappers[prop] === "function") // We have a special-case wrapper for this method.
                            value = wrapMethod(target, target[prop], wrappers[prop]);
                            else if (hasOwnProperty(metadata, prop)) {
                                // This is an async method that we have metadata for. Create a
                                // Promise wrapper for it.
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value = wrapMethod(target, target[prop], wrapper);
                            } else // This is a method that we don't know or care about. Return the
                            // original method, bound to the underlying object.
                            value = value.bind(target);
                        } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) // This is an object that we need to do some wrapping for the children
                        // of. Create a sub-object wrapper for it with the appropriate child
                        // metadata.
                        value = wrapObject(value, wrappers[prop], metadata[prop]);
                        else if (hasOwnProperty(metadata, "*")) // Wrap all properties in * namespace.
                        value = wrapObject(value, wrappers[prop], metadata["*"]);
                        else {
                            // We don't need to do any wrapping for this property,
                            // so just forward all access to the underlying object.
                            Object.defineProperty(cache, prop, {
                                configurable: true,
                                enumerable: true,
                                get () {
                                    return target[prop];
                                },
                                set (value) {
                                    target[prop] = value;
                                }
                            });
                            return value;
                        }
                        cache[prop] = value;
                        return value;
                    },
                    set (proxyTarget, prop, value, receiver) {
                        if (prop in cache) cache[prop] = value;
                        else target[prop] = value;
                        return true;
                    },
                    defineProperty (proxyTarget, prop, desc) {
                        return Reflect.defineProperty(cache, prop, desc);
                    },
                    deleteProperty (proxyTarget, prop) {
                        return Reflect.deleteProperty(cache, prop);
                    }
                }; // Per contract of the Proxy API, the "get" proxy handler must return the
                // original value of the target if that value is declared read-only and
                // non-configurable. For this reason, we create an object with the
                // prototype set to `target` instead of using `target` directly.
                // Otherwise we cannot return a custom object for APIs that
                // are declared read-only and non-configurable, such as `chrome.devtools`.
                //
                // The proxy handlers themselves will still use the original `target`
                // instead of the `proxyTarget`, so that the methods and properties are
                // dereferenced via the original targets.
                let proxyTarget = Object.create(target);
                return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */ const wrapEvent = (wrapperMap)=>({
                    addListener (target, listener, ...args) {
                        target.addListener(wrapperMap.get(listener), ...args);
                    },
                    hasListener (target, listener) {
                        return target.hasListener(wrapperMap.get(listener));
                    },
                    removeListener (target, listener) {
                        target.removeListener(wrapperMap.get(listener));
                    }
                });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */ return function onRequestFinished(req) {
                    const wrappedReq = wrapObject(req, {}, {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    listener(wrappedReq);
                };
            });
            const onMessageWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") return listener;
                /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */ return function onMessage(message, sender, sendResponse) {
                    let didCallSendResponse = false;
                    let wrappedSendResponse;
                    let sendResponsePromise = new Promise((resolve)=>{
                        wrappedSendResponse = function(response) {
                            didCallSendResponse = true;
                            resolve(response);
                        };
                    });
                    let result;
                    try {
                        result = listener(message, sender, wrappedSendResponse);
                    } catch (err) {
                        result = Promise.reject(err);
                    }
                    const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
                    // wrappedSendResponse synchronously, we can exit earlier
                    // because there will be no response sent from this listener.
                    if (result !== true && !isResultThenable && !didCallSendResponse) return false;
                     // A small helper to send the message if the promise resolves
                    // and an error if the promise rejects (a wrapped sendMessage has
                    // to translate the message into a resolved promise or a rejected
                    // promise).
                    const sendPromisedResult = (promise)=>{
                        promise.then((msg)=>{
                            // send the message value.
                            sendResponse(msg);
                        }, (error)=>{
                            // Send a JSON representation of the error if the rejected value
                            // is an instance of error, or the object itself otherwise.
                            let message;
                            if (error && (error instanceof Error || typeof error.message === "string")) message = error.message;
                            else message = "An unexpected error occurred";
                            sendResponse({
                                __mozWebExtensionPolyfillReject__: true,
                                message
                            });
                        }).catch((err)=>{
                            // Print an error on the console if unable to send the response.
                            console.error("Failed to send onMessage rejected reply", err);
                        });
                    }; // If the listener returned a Promise, send the resolved value as a
                    // result, otherwise wait the promise related to the wrappedSendResponse
                    // callback to resolve and send it as a response.
                    if (isResultThenable) sendPromisedResult(result);
                    else sendPromisedResult(sendResponsePromise);
                     // Let Chrome know that the listener is replying.
                    return true;
                };
            });
            const wrappedSendMessageCallback = ({ reject, resolve }, reply)=>{
                if (extensionAPIs.runtime.lastError) {
                    // Detect when none of the listeners replied to the sendMessage call and resolve
                    // the promise to undefined as in Firefox.
                    // See https://github.com/mozilla/webextension-polyfill/issues/130
                    if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve();
                    else reject(new Error(extensionAPIs.runtime.lastError.message));
                } else if (reply && reply.__mozWebExtensionPolyfillReject__) // Convert back the JSON representation of the error into
                // an Error instance.
                reject(new Error(reply.message));
                else resolve(reply);
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                return new Promise((resolve, reject)=>{
                    const wrappedCb = wrappedSendMessageCallback.bind(null, {
                        resolve,
                        reject
                    });
                    args.push(wrappedCb);
                    apiNamespaceObj.sendMessage(...args);
                });
            };
            const staticWrappers = {
                devtools: {
                    network: {
                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                    }
                },
                runtime: {
                    onMessage: wrapEvent(onMessageWrappers),
                    onMessageExternal: wrapEvent(onMessageWrappers),
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            };
            const settingMetadata = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            apiMetadata.privacy = {
                network: {
                    "*": settingMetadata
                },
                services: {
                    "*": settingMetadata
                },
                websites: {
                    "*": settingMetadata
                }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        }; // The build process adds a UMD wrapper around this file, which makes the
        // `module` variable available.
        module1.exports = wrapAPIs(chrome);
    } else module1.exports = globalThis.browser;
});

},{}],"jz6SY":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["0h5HD","5fTRt","ToOLI","qK4Bu"], "qK4Bu", "parcelRequire2158")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxDQUFDLE1BQU0sTUFFM0M7UUFHRixPQUFPLGNBQWMsQ0FBQyxNQUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLE1BQU0sR0FBRyxTQUFVLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRztJQUM1QyxPQUFPLGNBQWMsQ0FBQyxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWRjZTFkY2IwZmQ3MzM0M2YuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLXdlYmV4dGVuc2lvbi9saWIvcnVudGltZS00NmZjMWIzZWJlNTk1YzBhLmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS13ZWJleHRlbnNpb24vbGliL3J1bnRpbWUtODNiYTVkYjA4YjNlNDk2YS5qcyIsInNyYy9qcy9iYWNrZ3JvdW5kLmpzIiwibm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IDEyMzQ7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCIzYmZjZGJjMTQ4MTE0M2MxXCI7dmFyIEhNUl9VU0VfU1NFID0gZmFsc2U7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCI2YWVmNjQ0ODJmMTI2MDAwXCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSwgSE1SX1VTRV9TU0UsIGNocm9tZSwgYnJvd3NlciwgX19wYXJjZWxfX2ltcG9ydF9fLCBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fLCBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgKi9cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IHt8W3N0cmluZ106IG1peGVkfH07XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmludGVyZmFjZSBFeHRlbnNpb25Db250ZXh0IHtcbiAgcnVudGltZToge3xcbiAgICByZWxvYWQoKTogdm9pZCxcbiAgICBnZXRVUkwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgZ2V0TWFuaWZlc3QoKToge21hbmlmZXN0X3ZlcnNpb246IG51bWJlciwgLi4ufTtcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIEhNUl9VU0VfU1NFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgY2hyb21lOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgYnJvd3NlcjogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBnbG9iYWxUaGlzOiB0eXBlb2Ygc2VsZjtcbmRlY2xhcmUgdmFyIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTogT2JqZWN0O1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGFbbW9kdWxlTmFtZV0sXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGFbbW9kdWxlTmFtZV0gPSB1bmRlZmluZWQ7XG59XG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbm1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHt9O1xudmFyIGNoZWNrZWRBc3NldHMgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLywgYXNzZXRzVG9EaXNwb3NlIC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi8sIGFzc2V0c1RvQWNjZXB0IC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi87XG5cbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIVsnbG9jYWxob3N0JywgJzEyNy4wLjAuMScsICcwLjAuMC4wJ10uaW5jbHVkZXMoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3M7XG4gIGlmIChITVJfVVNFX1NTRSkge1xuICAgIHdzID0gbmV3IEV2ZW50U291cmNlKCcvX19wYXJjZWxfaG1yJyk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgd3MgPSB7fTtcbiAgICB9XG4gIH1cblxuICAvLyBXZWIgZXh0ZW5zaW9uIGNvbnRleHRcbiAgdmFyIGV4dEN0eCA9IHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJyA/IHR5cGVvZiBjaHJvbWUgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNocm9tZSA6IGJyb3dzZXI7XG5cbiAgLy8gU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBzb3VyY2VVUkwgaW4gZXJyb3Igc3RhY2tzLlxuICAvLyBldmFsIG1heSBhbHNvIGJlIGRpc2FibGVkIHZpYSBDU1AsIHNvIGRvIGEgcXVpY2sgY2hlY2suXG4gIHZhciBzdXBwb3J0c1NvdXJjZVVSTCA9IGZhbHNlO1xuICB0cnkge1xuICAgICgwLCBldmFsKSgndGhyb3cgbmV3IEVycm9yKFwidGVzdFwiKTsgLy8jIHNvdXJjZVVSTD10ZXN0LmpzJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN1cHBvcnRzU291cmNlVVJMID0gZXJyLnN0YWNrLmluY2x1ZGVzKCd0ZXN0LmpzJyk7XG4gIH1cblxuICAvLyAkRmxvd0ZpeE1lXG4gIHdzLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqLykge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fSAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgYXNzZXRzVG9EaXNwb3NlID0gW107XG4gICAgdmFyIGRhdGEgLyo6IEhNUk1lc3NhZ2UgKi8gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuICAgICAgbGV0IGFzc2V0cyA9IGRhdGEuYXNzZXRzLmZpbHRlcihhc3NldCA9PiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0gpO1xuXG4gICAgICAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoYXNzZXQgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IHNvIG90aGVyIHJ1bnRpbWVzIChlLmcgUmVhY3QgUmVmcmVzaCkgYXJlIGF3YXJlLlxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFyY2VsaG1yYWNjZXB0JykpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IGhtckFwcGx5VXBkYXRlcyhhc3NldHMpO1xuXG4gICAgICAgIC8vIERpc3Bvc2UgYWxsIG9sZCBhc3NldHMuXG4gICAgICAgIGxldCBwcm9jZXNzZWRBc3NldHMgPSB7fSAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0c1RvRGlzcG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBpZCA9IGFzc2V0c1RvRGlzcG9zZVtpXVsxXTtcbiAgICAgICAgICBpZiAoIXByb2Nlc3NlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckRpc3Bvc2UoYXNzZXRzVG9EaXNwb3NlW2ldWzBdLCBpZCk7XG4gICAgICAgICAgICBwcm9jZXNzZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSdW4gYWNjZXB0IGNhbGxiYWNrcy4gVGhpcyB3aWxsIGFsc28gcmUtZXhlY3V0ZSBvdGhlciBkaXNwb3NlZCBhc3NldHMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICAgIHByb2Nlc3NlZEFzc2V0cyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG4gICAgICAgICAgaWYgKCFwcm9jZXNzZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgICBobXJBY2NlcHQoYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICAgIHByb2Nlc3NlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGZ1bGxSZWxvYWQoKTtcbiAgICB9XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgICAgZm9yIChsZXQgYW5zaURpYWdub3N0aWMgb2YgZGF0YS5kaWFnbm9zdGljcy5hbnNpKSB7XG4gICAgICAgIGxldCBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpO1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpZiAod3MgaW5zdGFuY2VvZiBXZWJTb2NrZXQpIHtcbiAgICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG4gIGxldCBlcnJvckhUTUwgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IGJsYWNrOyBvcGFjaXR5OiAwLjg1OyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgcG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyBwYWRkaW5nOiAzMHB4OyBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7IHotaW5kZXg6IDk5OTk7XCI+JztcbiAgZm9yIChsZXQgZGlhZ25vc3RpYyBvZiBkaWFnbm9zdGljcykge1xuICAgIGxldCBzdGFjayA9IGRpYWdub3N0aWMuZnJhbWVzLmxlbmd0aCA/IGRpYWdub3N0aWMuZnJhbWVzLnJlZHVjZSgocCwgZnJhbWUpID0+IHtcbiAgICAgIHJldHVybiBgJHtwfVxuPGEgaHJlZj1cIi9fX3BhcmNlbF9sYXVuY2hfZWRpdG9yP2ZpbGU9JHtlbmNvZGVVUklDb21wb25lbnQoZnJhbWUubG9jYXRpb24pfVwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGNvbG9yOiAjODg4XCIgb25jbGljaz1cImZldGNoKHRoaXMuaHJlZik7IHJldHVybiBmYWxzZVwiPiR7ZnJhbWUubG9jYXRpb259PC9hPlxuJHtmcmFtZS5jb2RlfWA7XG4gICAgfSwgJycpIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICBlcnJvckhUTUwgKz0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAg8J+aqCAke2RpYWdub3N0aWMubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwcmU+JHtzdGFja308L3ByZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke2RpYWdub3N0aWMuaGludHMubWFwKGhpbnQgPT4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gYDxkaXY+8J+TnSA8YSBzdHlsZT1cImNvbG9yOiB2aW9sZXRcIiBocmVmPVwiJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb259XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5gIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuZnVuY3Rpb24gZnVsbFJlbG9hZCgpIHtcbiAgaWYgKCdyZWxvYWQnIGluIGxvY2F0aW9uKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLnJlbG9hZCkge1xuICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpIC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi97XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGdldFBhcmVudHMoYnVuZGxlLnBhcmVudCwgaWQpKTtcbiAgfVxuICByZXR1cm4gcGFyZW50cztcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGlmICghaHJlZikge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaW5rLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gIH07XG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJyxcbiAgLy8gJEZsb3dGaXhNZVxuICBocmVmLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTtcbiAgLy8gJEZsb3dGaXhNZVxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxudmFyIGNzc1RpbWVvdXQgPSBudWxsO1xuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cbiAgICAgIHZhciBocmVmIC8qOiBzdHJpbmcgKi8gPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cbmZ1bmN0aW9uIGhtckRvd25sb2FkKGFzc2V0KSB7XG4gIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCk7XG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAoX2RvY3VtZW50JGhlYWQgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZCA9PT0gdm9pZCAwIHx8IF9kb2N1bWVudCRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBXb3JrZXIgc2NyaXB0c1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICByZXR1cm4gX19wYXJjZWxfX2ltcG9ydF9fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gaG1yQXBwbHlVcGRhdGVzKGFzc2V0cykge1xuICBnbG9iYWwucGFyY2VsSG90VXBkYXRlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IHNjcmlwdHNUb1JlbW92ZTtcbiAgdHJ5IHtcbiAgICAvLyBJZiBzb3VyY2VVUkwgY29tbWVudHMgYXJlbid0IHN1cHBvcnRlZCBpbiBldmFsLCB3ZSBuZWVkIHRvIGxvYWRcbiAgICAvLyB0aGUgdXBkYXRlIGZyb20gdGhlIGRldiBzZXJ2ZXIgb3ZlciBIVFRQIHNvIHRoYXQgc3RhY2sgdHJhY2VzXG4gICAgLy8gYXJlIGNvcnJlY3QgaW4gZXJyb3JzL2xvZ3MuIFRoaXMgaXMgbXVjaCBzbG93ZXIgdGhhbiBldmFsLCBzb1xuICAgIC8vIHdlIG9ubHkgZG8gaXQgaWYgbmVlZGVkIChjdXJyZW50bHkganVzdCBTYWZhcmkpLlxuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzcyOTdcbiAgICAvLyBUaGlzIHBhdGggaXMgYWxzbyB0YWtlbiBpZiBhIENTUCBkaXNhbGxvd3MgZXZhbC5cbiAgICBpZiAoIXN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICBsZXQgcHJvbWlzZXMgPSBhc3NldHMubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgdmFyIF9obXJEb3dubG9hZDtcbiAgICAgICAgcmV0dXJuIChfaG1yRG93bmxvYWQgPSBobXJEb3dubG9hZChhc3NldCkpID09PSBudWxsIHx8IF9obXJEb3dubG9hZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2htckRvd25sb2FkLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgLy8gV2ViIGV4dGVuc2lvbiBmaXhcbiAgICAgICAgICBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzICYmIHR5cGVvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsIGluc3RhbmNlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlKSB7XG4gICAgICAgICAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGRlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlO1xuICAgIGlmIChzY3JpcHRzVG9SZW1vdmUpIHtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQyO1xuICAgICAgICAgIChfZG9jdW1lbnQkaGVhZDIgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZDIgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZDIucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBobXJBcHBseShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGFzc2V0IC8qOiAgSE1SQXNzZXQgKi8pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBsZXQgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIGlmIChtb2R1bGVzW2Fzc2V0LmlkXSkge1xuICAgICAgICAvLyBSZW1vdmUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIHJlbW92ZWQgYW5kIHdpbGwgYmVjb21lIG9ycGhhbmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHRoZSBhc3NldCBpcyBhZGRlZCBiYWNrIGFnYWluLCB0aGUgY2FjaGUgaXMgZ29uZSwgYW5kIHdlIHByZXZlbnQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICBsZXQgb2xkRGVwcyA9IG1vZHVsZXNbYXNzZXQuaWRdWzFdO1xuICAgICAgICBmb3IgKGxldCBkZXAgaW4gb2xkRGVwcykge1xuICAgICAgICAgIGlmICghZGVwc1tkZXBdIHx8IGRlcHNbZGVwXSAhPT0gb2xkRGVwc1tkZXBdKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBvbGREZXBzW2RlcF07XG4gICAgICAgICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICAgIC8vIEdsb2JhbCBldmFsLiBXZSB3b3VsZCB1c2UgYG5ldyBGdW5jdGlvbmAgaGVyZSBidXQgYnJvd3NlclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBzb3VyY2UgbWFwcyBpcyBiZXR0ZXIgd2l0aCBldmFsLlxuICAgICAgICAoMCwgZXZhbCkoYXNzZXQub3V0cHV0KTtcbiAgICAgIH1cblxuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGV0IGZuID0gZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVthc3NldC5pZF07XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBobXJEZWxldGUoYnVuZGxlLCBpZCkge1xuICBsZXQgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgbGV0IGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICBsZXQgb3JwaGFucyA9IFtdO1xuICAgIGZvciAobGV0IGRlcCBpbiBkZXBzKSB7XG4gICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBkZXBzW2RlcF0pO1xuICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9ycGhhbnMucHVzaChkZXBzW2RlcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgIGRlbGV0ZSBtb2R1bGVzW2lkXTtcbiAgICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcblxuICAgIC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG4gICAgb3JwaGFucy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgaG1yRGVsZXRlKGJ1bmRsZS5wYXJlbnQsIGlkKTtcbiAgfVxufVxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovLCBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8pIHtcbiAgaWYgKGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSwgaWQsIGRlcHNCeUJ1bmRsZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFRyYXZlcnNlIHBhcmVudHMgYnJlYWR0aCBmaXJzdC4gQWxsIHBvc3NpYmxlIGFuY2VzdHJpZXMgbXVzdCBhY2NlcHQgdGhlIEhNUiB1cGRhdGUsIG9yIHdlJ2xsIHJlbG9hZC5cbiAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIGxldCB2ID0gcGFyZW50cy5zaGlmdCgpO1xuICAgIGxldCBhID0gaG1yQWNjZXB0Q2hlY2tPbmUodlswXSwgdlsxXSwgbnVsbCk7XG4gICAgaWYgKGEpIHtcbiAgICAgIC8vIElmIHRoaXMgcGFyZW50IGFjY2VwdHMsIHN0b3AgdHJhdmVyc2luZyB1cHdhcmQsIGJ1dCBzdGlsbCBjb25zaWRlciBzaWJsaW5ncy5cbiAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSB0aGUgcGFyZW50cyBpbiB0aGUgbmV4dCBsZXZlbCB1cHdhcmQuXG4gICAgICBsZXQgcCA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCB2WzFdKTtcbiAgICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcGFyZW50cywgdGhlbiB3ZSd2ZSByZWFjaGVkIGFuIGVudHJ5IHdpdGhvdXQgYWNjZXB0aW5nLiBSZWxvYWQuXG4gICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGFyZW50cy5wdXNoKC4uLnApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYWNjZXB0ZWQ7XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjaGVja2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBhc3NldHNUb0Rpc3Bvc2UucHVzaChbYnVuZGxlLCBpZF0pO1xuICBpZiAoIWNhY2hlZCB8fCBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBhc3NldHNUb0FjY2VwdC5wdXNoKFtidW5kbGUsIGlkXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckRpc3Bvc2UoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YVtpZF0gPSB7fTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGFbaWRdO1xuICB9XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhW2lkXSk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG59XG5mdW5jdGlvbiBobXJBY2NlcHQoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovKSB7XG4gIC8vIEV4ZWN1dGUgdGhlIG1vZHVsZS5cbiAgYnVuZGxlKGlkKTtcblxuICAvLyBSdW4gdGhlIGFjY2VwdCBjYWxsYmFja3MgaW4gdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBtb2R1bGUuXG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIGFzc2V0c1RvQWxzb0FjY2VwdC5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgaG1yRGlzcG9zZShhWzBdLCBhWzFdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBjaHJvbWUsIGJyb3dzZXIgKi9cbmxldCBlbnYgPSB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyBjaHJvbWUgOiBicm93c2VyO1xubGV0IG9yaWdSZWxvYWQgPSBlbnYucnVudGltZS5yZWxvYWQ7XG5sZXQgYXZvaWRJRCA9IC0xO1xubGV0IHByb21pc2lmeSA9IChvYmosIGZuKSA9PiAoLi4uYXJncykgPT4ge1xuICBpZiAodHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IG9ialtmbl0oLi4uYXJncywgcmVzID0+IGVudi5ydW50aW1lLmxhc3RFcnJvciA/IHJlamVjdChlbnYucnVudGltZS5sYXN0RXJyb3IpIDogcmVzb2x2ZShyZXMpKSk7XG4gIH1cbiAgcmV0dXJuIG9ialtmbl0oLi4uYXJncyk7XG59O1xubGV0IHF1ZXJ5VGFicyA9IHByb21pc2lmeShlbnYudGFicywgJ3F1ZXJ5Jyk7XG5sZXQgbWVzc2FnZVRhYiA9IHByb21pc2lmeShlbnYudGFicywgJ3NlbmRNZXNzYWdlJyk7XG5lbnYucnVudGltZS5yZWxvYWQgPSAoKSA9PiB7XG4gIHF1ZXJ5VGFicyh7fSkudGhlbih0YWJzID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGFicy5tYXAodGFiID0+IHtcbiAgICAgIGlmICh0YWIuaWQgPT09IGF2b2lkSUQpIHJldHVybjtcbiAgICAgIHJldHVybiBtZXNzYWdlVGFiKHRhYi5pZCwge1xuICAgICAgICBfX3BhcmNlbF9obXJfcmVsb2FkX186IHRydWVcbiAgICAgIH0pLmNhdGNoKCgpID0+IHt9KTtcbiAgICB9KSk7XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIG9yaWdSZWxvYWQuY2FsbChlbnYucnVudGltZSk7XG4gIH0pO1xufTtcbmVudi5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIpID0+IHtcbiAgaWYgKG1zZy5fX3BhcmNlbF9obXJfcmVsb2FkX18pIHtcbiAgICBhdm9pZElEID0gc2VuZGVyLnRhYi5pZDtcbiAgICBlbnYucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufSk7IiwiSlNPTi5wYXJzZShcIntcXFwibWFuaWZlc3RfdmVyc2lvblxcXCI6MyxcXFwidmVyc2lvblxcXCI6XFxcIjMuMC4xXFxcIixcXFwibmFtZVxcXCI6XFxcIkdQVGhlbWVzIC0gQ2hhdEdQVCBDdXN0b21pemF0aW9uXFxcIixcXFwiZGVzY3JpcHRpb25cXFwiOlxcXCJUcmFuc2Zvcm0gQ2hhdEdQVCdzIHVzZXIgaW50ZXJmYWNlIHdpdGggY3VzdG9taXNhYmxlIGFjY2VudCBjb2xvdXJzLCBtb2Rlcm4gZGVzaWducyBhbmQgY2hhdCBidWJibGVzLlxcXCIsXFxcImF1dGhvclxcXCI6XFxcIml0c21hcnRhXFxcIixcXFwiaG9tZXBhZ2VfdXJsXFxcIjpcXFwiaHR0cHM6Ly9naXRodWIuY29tL2l0c21hcnRhc2h1Yi9HUFRoZW1lc1xcXCIsXFxcImhvc3RfcGVybWlzc2lvbnNcXFwiOltcXFwiaHR0cHM6Ly9jaGF0Lm9wZW5haS5jb20vKlxcXCIsXFxcImh0dHBzOi8vY2hhdGdwdC5jb20vKlxcXCIsXFxcImh0dHBzOi8vY2hhdC5vcGVuYWkuY29tLypcXFwiLFxcXCJodHRwczovL2NoYXRncHQuY29tLypcXFwiXSxcXFwiaWNvbnNcXFwiOntcXFwiMTZcXFwiOlxcXCJcXFwiLFxcXCIxOVxcXCI6XFxcIlxcXCIsXFxcIjMyXFxcIjpcXFwiXFxcIixcXFwiMzhcXFwiOlxcXCJcXFwiLFxcXCI0OFxcXCI6XFxcIlxcXCIsXFxcIjEyOFxcXCI6XFxcIlxcXCJ9LFxcXCJjb250ZW50X3NjcmlwdHNcXFwiOlt7XFxcIm1hdGNoZXNcXFwiOltcXFwiaHR0cHM6Ly9jaGF0Lm9wZW5haS5jb20vKlxcXCIsXFxcImh0dHBzOi8vY2hhdGdwdC5jb20vKlxcXCJdLFxcXCJqc1xcXCI6W1xcXCJcXFwiLFxcXCJcXFwiXSxcXFwiY3NzXFxcIjpbXFxcIlxcXCJdLFxcXCJydW5fYXRcXFwiOlxcXCJkb2N1bWVudF9lbmRcXFwifV0sXFxcImJhY2tncm91bmRcXFwiOntcXFwic2VydmljZV93b3JrZXJcXFwiOlxcXCJcXFwiLFxcXCJ0eXBlXFxcIjpcXFwibW9kdWxlXFxcIn0sXFxcInBlcm1pc3Npb25zXFxcIjpbXFxcInN0b3JhZ2VcXFwiLFxcXCJzY3JpcHRpbmdcXFwiXSxcXFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcXFwiOntcXFwiZXh0ZW5zaW9uX3BhZ2VzXFxcIjpcXFwic2NyaXB0LXNyYyAnc2VsZicgaHR0cDovL2xvY2FsaG9zdDoqO29iamVjdC1zcmMgJ3NlbGYnO3N0eWxlLXNyYyAnc2VsZicgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbTtmb250LXNyYyAnc2VsZicgaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbTtcXFwifX1cIikiLCJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnXHJcblxyXG5icm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdFeHRlbnNpb24gSW5zdGFsbGVkJylcclxufSlcclxuIiwiLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuMTAuMCAtIEZyaSBBdWcgMTIgMjAyMiAxOTo0Mjo0NCAqL1xuLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xufVxuXG5pZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAvLyBKU09OIGZpbGUuXG4gICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgfVxuXG4gICAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgKlxuICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICogICAgICAgIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8XG4gICAgICAgICAgICAgICAgICAgKGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IChudW1BcmdzKSA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAqXG4gICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICB9LFxuXG4gICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgbWF4QXJnczogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtyZWplY3QsIHJlc29sdmV9LCByZXBseSkgPT4ge1xuICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICBkZXZ0b29sczoge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBydW50aW1lOiB7XG4gICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAxLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMiwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgIGNsZWFyOiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBnZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIHNldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgIH07XG4gICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgIG5ldHdvcms6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHNlcnZpY2VzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICB3ZWJzaXRlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICB9O1xuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3Nlcjtcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKFxuICAgICAga2V5ID09PSAnZGVmYXVsdCcgfHxcbiAgICAgIGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzdCwga2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJnbG9iYWxUaGlzIiwiY2hyb21lIiwicnVudGltZSIsImlkIiwiRXJyb3IiLCJicm93c2VyIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJwcm90b3R5cGUiLCJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCJ3cmFwQVBJcyIsImV4dGVuc2lvbkFQSXMiLCJhcGlNZXRhZGF0YSIsImtleXMiLCJsZW5ndGgiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsInVuZGVmaW5lZCIsImdldCIsImtleSIsImhhcyIsInNldCIsImlzVGhlbmFibGUiLCJ2YWx1ZSIsInRoZW4iLCJtYWtlQ2FsbGJhY2siLCJwcm9taXNlIiwibWV0YWRhdGEiLCJjYWxsYmFja0FyZ3MiLCJsYXN0RXJyb3IiLCJyZWplY3QiLCJtZXNzYWdlIiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwibmFtZSIsImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwidGFyZ2V0IiwiYXJncyIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsImJpbmQiLCJ3cmFwT2JqZWN0Iiwid3JhcHBlcnMiLCJjYWNoZSIsImNyZWF0ZSIsImhhbmRsZXJzIiwicHJveHlUYXJnZXQiLCJwcm9wIiwicmVjZWl2ZXIiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJkZXNjIiwiUmVmbGVjdCIsImRlbGV0ZVByb3BlcnR5Iiwid3JhcEV2ZW50Iiwid3JhcHBlck1hcCIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJoYXNMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwib25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyIsIm9uUmVxdWVzdEZpbmlzaGVkIiwicmVxIiwid3JhcHBlZFJlcSIsImdldENvbnRlbnQiLCJvbk1lc3NhZ2VXcmFwcGVycyIsIm9uTWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImRpZENhbGxTZW5kUmVzcG9uc2UiLCJ3cmFwcGVkU2VuZFJlc3BvbnNlIiwic2VuZFJlc3BvbnNlUHJvbWlzZSIsInJlc3BvbnNlIiwicmVzdWx0IiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInNlbmRQcm9taXNlZFJlc3VsdCIsIm1zZyIsImVycm9yIiwiX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fIiwiY2F0Y2giLCJ3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayIsInJlcGx5Iiwid3JhcHBlZFNlbmRNZXNzYWdlIiwiYXBpTmFtZXNwYWNlT2JqIiwid3JhcHBlZENiIiwicHVzaCIsInNlbmRNZXNzYWdlIiwic3RhdGljV3JhcHBlcnMiLCJkZXZ0b29scyIsIm5ldHdvcmsiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsInRhYnMiLCJzZXR0aW5nTWV0YWRhdGEiLCJjbGVhciIsInByaXZhY3kiLCJzZXJ2aWNlcyIsIndlYnNpdGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC4yZjEyNjAwMC5qcy5tYXAifQ==