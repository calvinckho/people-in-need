"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ionic_site_components_core_js_1 = require("../ionic-site-components.core.js");
var IonicToggle = function () { function e() { } return e.prototype.componentDidLoad = function () { }, e.prototype.selectionChanged = function (e) { var t = e.detail, o = this.el.querySelectorAll("ionic-toggle-button"); Array.prototype.forEach.call(o, function (e) { e.deselect(); }); var n = t.tab; t.select(), console.log("Selecting this one", n, t); var r = this.el.querySelectorAll("ionic-toggle-tab"); console.log("Found tabs", r), Array.prototype.forEach.call(r, function (e) { e.hide(), e.tab === n && e.show(); }); }, e.prototype.render = function () { return ionic_site_components_core_js_1.h("div", { class: "toggle-content" }, ionic_site_components_core_js_1.h("div", { class: "toggle-buttons" }, ionic_site_components_core_js_1.h("slot", { name: "buttons" })), ionic_site_components_core_js_1.h("div", { class: "toggle-tabs" }, ionic_site_components_core_js_1.h("slot", { name: "tabs" }))); }, Object.defineProperty(e, "is", { get: function () { return "ionic-toggle"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { el: { elementRef: !0 } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "listeners", { get: function () { return [{ name: "toggleSelected", method: "selectionChanged" }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ".sc-ionic-toggle-h{display:block}.toggle-buttons.sc-ionic-toggle{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}"; }, enumerable: !0, configurable: !0 }), e; }();
exports.IonicToggle = IonicToggle;