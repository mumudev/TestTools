webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _home = __webpack_require__(3);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _order2 = __webpack_require__(10);
	
	var _order3 = _interopRequireDefault(_order2);
	
	var _notFound = __webpack_require__(20);
	
	var _notFound2 = _interopRequireDefault(_notFound);
	
	var _director = __webpack_require__(23);
	
	var _vuex = __webpack_require__(24);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*jshint esversion: 6 */
	_vue2.default.use(_vuex2.default);
	var app = new _vue2.default({
	    el: '#app',
	    template: '<component v-bind:is="currentView" :pages="pages"></component>',
	    data: function data() {
	        return {
	            currentView: _home2.default,
	            pages: [{
	                name: '主页',
	                icon: 'home',
	                url: '#/redirect/home'
	            }, {
	                name: '订单管理',
	                icon: 'block layout',
	                url: '#/redirect/order'
	            }]
	        };
	    }
	});
	
	var router = (0, _director.Router)({
	    '/home': function home() {
	        app.currentView = _home2.default;
	    },
	    '/order': function order() {
	        app.currentView = _order3.default;
	    },
	    '/redirect/:url1/:url2': function redirectUrl1Url2(url1, url2) {
	        var url = url1 + '/' + url2;
	        app.currentView = _home2.default;
	        router.setRoute(url);
	    },
	    '/redirect/:url1': function redirectUrl1(url1) {
	        app.currentView = _home2.default;
	        router.setRoute(url1);
	    },
	    '/error': {
	        '/notfound': function notfound() {
	            app.currentView = _notFound2.default;
	        }
	    }
	});
	//页面未找到
	router.configure({
	    notfound: function notfound() {
	        router.setRoute('/error/notfound');
	    }
	});
	router.init('/home');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* name */
	  "home",
	  /* script */
	  __webpack_require__(5),
	  /* template */
	  __webpack_require__(9),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\workplaces\\nemv\\app\\pages\\home.vue"
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-756b9697", Component.options)
	  } else {
	    hotAPI.reload("data-v-756b9697", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {module.exports = function normalizeComponent (
	  name,
	  scriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  scriptExports = scriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof scriptExports.default
	  if (type === 'object' || type === 'function') {
	    // check named exports
	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.keys(scriptExports).some(function (key) {
	        return key !== 'default' && key !== '__esModule'
	      })) {
	        console.error('named exports are not supported in *.vue files.')
	      }
	    }
	    scriptExports = scriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // default name option based on filename
	  if (options.name == null) {
	    options.name = name
	  }
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    exports: scriptExports,
	    options: options
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _subMenu = __webpack_require__(6);
	
	var _subMenu2 = _interopRequireDefault(_subMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['pages'],
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    subMenu: _subMenu2.default
	  }
	}; //
	//
	//
	//
	//
	//

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* name */
	  "subMenu",
	  /* script */
	  __webpack_require__(7),
	  /* template */
	  __webpack_require__(8),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\workplaces\\nemv\\app\\widgets\\subMenu.vue"
	if (Component.options.functional) {console.error("[vue-loader] subMenu.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-901c3ebc", Component.options)
	  } else {
	    hotAPI.reload("data-v-901c3ebc", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        pages: {
	            default: function _default() {
	                return [];
	            }
	        }
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ui inverted menu"
	  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.pages), function(page) {
	    return _c('a', {
	      staticClass: "item",
	      attrs: {
	        "href": page.url
	      }
	    }, [_vm._v("\n            " + _vm._s(page.name) + " \n        ")])
	  }), _vm._v(" "), _vm._m(1)], 2)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "item"
	  }, [_c('img', {
	    staticClass: "logo",
	    staticStyle: {
	      "width": "1.8em"
	    },
	    attrs: {
	      "src": "/images/logo.png"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "right aligned item",
	    attrs: {
	      "href": "/logout"
	    }
	  }, [_c('i', {
	    staticClass: "sign out icon"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-901c3ebc", module.exports)
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "home"
	  }, [_c('subMenu', {
	    attrs: {
	      "pages": _vm.pages
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-756b9697", module.exports)
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* name */
	  "order",
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(19),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\workplaces\\nemv\\app\\pages\\order.vue"
	if (Component.options.functional) {console.error("[vue-loader] order.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-b5e17f74", Component.options)
	  } else {
	    hotAPI.reload("data-v-b5e17f74", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dataTable = __webpack_require__(12);
	
	var _dataTable2 = _interopRequireDefault(_dataTable);
	
	var _subMenu = __webpack_require__(6);
	
	var _subMenu2 = _interopRequireDefault(_subMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: ['pages', 'dataTable'],
	    beforeCreate: function beforeCreate() {},
	    data: function data() {
	        return {
	            url: '/v1/api/order',
	            buttons: [{
	                text: 'Excel',
	                extend: 'excelHtml5',
	                className: 'ui button'
	            }, {
	                text: '日期',
	                className: 'ui button blue date'
	            }],
	            columnDefs: [{
	                data: '_id',
	                name: 'id',
	                targets: 0,
	                className: "transition hidden"
	            }]
	        };
	    },
	
	    components: {
	        dataTable: _dataTable2.default,
	        subMenu: _subMenu2.default
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(13)
	
	var Component = __webpack_require__(4)(
	  /* name */
	  "dataTable",
	  /* script */
	  __webpack_require__(17),
	  /* template */
	  __webpack_require__(18),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\workplaces\\nemv\\app\\widgets\\dataTable.vue"
	if (Component.options.functional) {console.error("[vue-loader] dataTable.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4c298432", Component.options)
	  } else {
	    hotAPI.reload("data-v-4c298432", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4c298432!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dataTable.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4c298432!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dataTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports
	
	
	// module
	exports.push([module.id, "\ntr.even{\n    background-color: #f9f9f9;\n}\n", "", {"version":3,"sources":["/./app/widgets/dataTable.vue?16a99c02"],"names":[],"mappings":";AA6EA;IACA,0BAAA;CACA","file":"dataTable.vue","sourcesContent":["<template>\r\n    <div class=\"order\">\r\n        <table id='datatable' class=\"ui celled table\" cellspacing=\"0\" width=\"100%\">\r\n            <thead>\r\n                <tr>\r\n                    <th v-for=\"column in columnDefs\" :class='column.class'>{{column.name}}</th>\r\n                </tr>\r\n            </thead>\r\n        </table>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {}\r\n        },\r\n        props: ['url', 'columnDefs', 'buttons'],\r\n        watch: {\r\n            url: function () {\r\n                console.log(1);\r\n            }\r\n        },\r\n        ready() {\r\n            this.$watch('url', function (newVal, oldVal) {\r\n                console.log('newVal');//这里再感受下值拿到了没\r\n            });\r\n        },\r\n        mounted() {\r\n            this.datatable = $('#datatable').DataTable({\r\n                buttons: this.buttons,\r\n                columnDefs: this.columnDefs,\r\n                ajax: {\r\n                    url: this.url\r\n                },\r\n                jQueryUI: false,\r\n                \"aaSorting\": [\r\n                    [1, \"desc\"]\r\n                ],\r\n                language: {\r\n                    search: \"查找\",\r\n                    zeroRecords: \"没有匹配的数据\",\r\n                    infoEmpty: \"没有符合条件的记录\",\r\n                    info: \"第_PAGE_页/共 _PAGES_页\",\r\n                    lengthMenu: \"_MENU_ 条/页\",\r\n                    infoFiltered: \"(从 _MAX_条记录中过滤)\",\r\n                    paginate: {\r\n                        \"first\": \"首页 \",\r\n                        \"last\": \"末页\",\r\n                        \"next\": \"下一页\",\r\n                        \"previous\": \"上一页\"\r\n                    }\r\n                },\r\n                select: {\r\n                    style: 'os',\r\n                    className: 'active'\r\n                },\r\n                paging: true,\r\n                autoWidth: true,\r\n                bLengthChange: true, //改变每页显示数据数量\r\n                pageLength: 10,\r\n                processing: true, //是否显示加载中提示\r\n                responsive: true\r\n            });\r\n            var self = this;\r\n            $(\".btn-set-all\").on(\"click\", function (e) {\r\n                self.datatable.page.len(-1).draw();\r\n            });\r\n            this.$watch('url', function (newVal, oldVal) {\r\n                console.log('newVal');//这里再感受下值拿到了没\r\n            });\r\n        },\r\n        components: {\r\n        },\r\n    }\r\n</script>\r\n<style>\r\n    tr.even{\r\n        background-color: #f9f9f9;\r\n    }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    data: function data() {
	        return {};
	    },
	
	    props: ['url', 'columnDefs', 'buttons'],
	    watch: {
	        url: function url() {
	            console.log(1);
	        }
	    },
	    ready: function ready() {
	        this.$watch('url', function (newVal, oldVal) {
	            console.log('newVal'); //这里再感受下值拿到了没
	        });
	    },
	    mounted: function mounted() {
	        this.datatable = $('#datatable').DataTable({
	            buttons: this.buttons,
	            columnDefs: this.columnDefs,
	            ajax: {
	                url: this.url
	            },
	            jQueryUI: false,
	            "aaSorting": [[1, "desc"]],
	            language: {
	                search: "查找",
	                zeroRecords: "没有匹配的数据",
	                infoEmpty: "没有符合条件的记录",
	                info: "第_PAGE_页/共 _PAGES_页",
	                lengthMenu: "_MENU_ 条/页",
	                infoFiltered: "(从 _MAX_条记录中过滤)",
	                paginate: {
	                    "first": "首页 ",
	                    "last": "末页",
	                    "next": "下一页",
	                    "previous": "上一页"
	                }
	            },
	            select: {
	                style: 'os',
	                className: 'active'
	            },
	            paging: true,
	            autoWidth: true,
	            bLengthChange: true, //改变每页显示数据数量
	            pageLength: 10,
	            processing: true, //是否显示加载中提示
	            responsive: true
	        });
	        var self = this;
	        $(".btn-set-all").on("click", function (e) {
	            self.datatable.page.len(-1).draw();
	        });
	        this.$watch('url', function (newVal, oldVal) {
	            console.log('newVal'); //这里再感受下值拿到了没
	        });
	    },
	
	    components: {}
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "order"
	  }, [_c('table', {
	    staticClass: "ui celled table",
	    attrs: {
	      "id": "datatable",
	      "cellspacing": "0",
	      "width": "100%"
	    }
	  }, [_c('thead', [_c('tr', _vm._l((_vm.columnDefs), function(column) {
	    return _c('th', {
	      class: column.class
	    }, [_vm._v(_vm._s(column.name))])
	  }))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4c298432", module.exports)
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('subMenu', {
	    attrs: {
	      "pages": _vm.pages
	    }
	  }), _vm._v(" "), _c('dataTable', {
	    attrs: {
	      "url": _vm.url,
	      "buttons": _vm.buttons,
	      "columnDefs": _vm.columnDefs
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-b5e17f74", module.exports)
	  }
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(4)(
	  /* name */
	  "notFound",
	  /* script */
	  __webpack_require__(21),
	  /* template */
	  __webpack_require__(22),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\workplaces\\nemv\\app\\pages\\notFound.vue"
	if (Component.options.functional) {console.error("[vue-loader] notFound.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-193fd227", Component.options)
	  } else {
	    hotAPI.reload("data-v-193fd227", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _subMenu = __webpack_require__(6);
	
	var _subMenu2 = _interopRequireDefault(_subMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: ['pages'],
	    data: function data() {
	        return {
	            errMsg: '404! Page not found!'
	        };
	    },
	
	    components: {
	        subMenu: _subMenu2.default
	    }
	}; //
	//
	//
	//
	//
	//
	//

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "not-found"
	  }, [_c('subMenu', {
	    attrs: {
	      "pages": _vm.pages
	    }
	  }), _vm._v("\n  " + _vm._s(_vm.errMsg) + "\n")], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-193fd227", module.exports)
	  }
	}

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.1.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, (function () { 'use strict';
	
	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__
	
	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }
	
	  store._devtoolHook = devtoolHook
	
	  devtoolHook.emit('vuex:init', store)
	
	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState)
	  })
	
	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state)
	  })
	}
	
	function applyMixin (Vue) {
	  var version = Number(Vue.version.split('.')[0])
	
	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit })
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};
	
	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit
	      _init.call(this, options)
	    }
	  }
	
	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */
	
	  function vuexInit () {
	    var options = this.$options
	    // store injection
	    if (options.store) {
	      this.$store = options.store
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store
	    }
	  }
	}
	
	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {}
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    res[key] = function mappedState () {
	      var state = this.$store.state
	      var getters = this.$store.getters
	      if (namespace) {
	        var module = this.$store._modulesNamespaceMap[namespace]
	        if (!module) {
	          warnNamespace('mapState', namespace)
	          return
	        }
	        state = module.state
	        getters = module.context.getters
	      }
	      return typeof val === 'function'
	        ? val.call(this, state, getters)
	        : state[val]
	    }
	  })
	  return res
	})
	
	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {}
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    val = namespace + val
	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	
	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	})
	
	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {}
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    val = namespace + val
	    res[key] = function mappedGetter () {
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val))
	      }
	      return this.$store.getters[val]
	    }
	  })
	  return res
	})
	
	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {}
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    val = namespace + val
	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	
	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	})
	
	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}
	
	function normalizeNamespace (fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace
	      namespace = ''
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/'
	    }
	    return fn(namespace, map)
	  }
	}
	
	function warnNamespace (helper, namespace) {
	  console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace))
	}
	
	/**
	 * forEach for object
	 */
	function forEachValue (obj, fn) {
	  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); })
	}
	
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}
	
	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}
	
	var Module = function Module (rawModule, runtime) {
	  this.runtime = runtime
	  this._children = Object.create(null)
	  this._rawModule = rawModule
	};
	
	var prototypeAccessors$1 = { state: {},namespaced: {} };
	
	prototypeAccessors$1.state.get = function () {
	  return this._rawModule.state || {}
	};
	
	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced
	};
	
	Module.prototype.addChild = function addChild (key, module) {
	  this._children[key] = module
	};
	
	Module.prototype.removeChild = function removeChild (key) {
	  delete this._children[key]
	};
	
	Module.prototype.getChild = function getChild (key) {
	  return this._children[key]
	};
	
	Module.prototype.update = function update (rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters
	  }
	};
	
	Module.prototype.forEachChild = function forEachChild (fn) {
	  forEachValue(this._children, fn)
	};
	
	Module.prototype.forEachGetter = function forEachGetter (fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn)
	  }
	};
	
	Module.prototype.forEachAction = function forEachAction (fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn)
	  }
	};
	
	Module.prototype.forEachMutation = function forEachMutation (fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn)
	  }
	};
	
	Object.defineProperties( Module.prototype, prototypeAccessors$1 );
	
	var ModuleCollection = function ModuleCollection (rawRootModule) {
	  var this$1 = this;
	
	  // register root module (Vuex.Store options)
	  this.root = new Module(rawRootModule, false)
	
	  // register all nested modules
	  if (rawRootModule.modules) {
	    forEachValue(rawRootModule.modules, function (rawModule, key) {
	      this$1.register([key], rawModule, false)
	    })
	  }
	};
	
	ModuleCollection.prototype.get = function get (path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key)
	  }, this.root)
	};
	
	ModuleCollection.prototype.getNamespace = function getNamespace (path) {
	  var module = this.root
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key)
	    return namespace + (module.namespaced ? key + '/' : '')
	  }, '')
	};
	
	ModuleCollection.prototype.update = function update$1 (rawRootModule) {
	  update(this.root, rawRootModule)
	};
	
	ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
	    var this$1 = this;
	    if ( runtime === void 0 ) runtime = true;
	
	  var parent = this.get(path.slice(0, -1))
	  var newModule = new Module(rawModule, runtime)
	  parent.addChild(path[path.length - 1], newModule)
	
	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime)
	    })
	  }
	};
	
	ModuleCollection.prototype.unregister = function unregister (path) {
	  var parent = this.get(path.slice(0, -1))
	  var key = path[path.length - 1]
	  if (!parent.getChild(key).runtime) { return }
	
	  parent.removeChild(key)
	};
	
	function update (targetModule, newModule) {
	  // update target module
	  targetModule.update(newModule)
	
	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        )
	        return
	      }
	      update(targetModule.getChild(key), newModule.modules[key])
	    }
	  }
	}
	
	var Vue // bind on install
	
	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};
	
	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.")
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.")
	
	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;
	
	  // store internal state
	  this._committing = false
	  this._actions = Object.create(null)
	  this._mutations = Object.create(null)
	  this._wrappedGetters = Object.create(null)
	  this._modules = new ModuleCollection(options)
	  this._modulesNamespaceMap = Object.create(null)
	  this._subscribers = []
	  this._watcherVM = new Vue()
	
	  // bind commit and dispatch to self
	  var store = this
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	    this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	  }
	  this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	    }
	
	    // strict mode
	  this.strict = strict
	
	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root)
	
	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state)
	
	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); })
	};
	
	var prototypeAccessors = { state: {} };
	
	prototypeAccessors.state.get = function () {
	  return this._vm.$data.state
	};
	
	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.")
	};
	
	Store.prototype.commit = function commit (_type, _payload, _options) {
	    var this$1 = this;
	
	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	    var type = ref.type;
	    var payload = ref.payload;
	    var options = ref.options;
	
	  var mutation = { type: type, payload: payload }
	  var entry = this._mutations[type]
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type))
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload)
	    })
	  })
	  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); })
	
	  if (options && options.silent) {
	    console.warn(
	      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
	      'Use the filter functionality in the vue-devtools'
	    )
	  }
	};
	
	Store.prototype.dispatch = function dispatch (_type, _payload) {
	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	    var type = ref.type;
	    var payload = ref.payload;
	
	  var entry = this._actions[type]
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type))
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};
	
	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn)
	  }
	  return function () {
	    var i = subs.indexOf(fn)
	    if (i > -1) {
	      subs.splice(i, 1)
	    }
	  }
	};
	
	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;
	
	  assert(typeof getter === 'function', "store.watch only accepts a function.")
	  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
	};
	
	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;
	
	  this._withCommit(function () {
	    this$1._vm.state = state
	  })
	};
	
	Store.prototype.registerModule = function registerModule (path, rawModule) {
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	  this._modules.register(path, rawModule)
	  installModule(this, this.state, path, this._modules.get(path))
	  // reset store to update getters...
	  resetStoreVM(this, this.state)
	};
	
	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;
	
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	    this._modules.unregister(path)
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1))
	    Vue.delete(parentState, path[path.length - 1])
	  })
	  resetStore(this)
	};
	
	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  this._modules.update(newOptions)
	  resetStore(this)
	};
	
	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing
	  this._committing = true
	  fn()
	  this._committing = committing
	};
	
	Object.defineProperties( Store.prototype, prototypeAccessors );
	
	function resetStore (store) {
	  store._actions = Object.create(null)
	  store._mutations = Object.create(null)
	  store._wrappedGetters = Object.create(null)
	  store._modulesNamespaceMap = Object.create(null)
	  var state = store.state
	  // init all modules
	  installModule(store, state, [], store._modules.root, true)
	  // reset vm
	  resetStoreVM(store, state)
	}
	
	function resetStoreVM (store, state) {
	  var oldVm = store._vm
	
	  // bind store public getters
	  store.getters = {}
	  var wrappedGetters = store._wrappedGetters
	  var computed = {}
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); }
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; },
	      enumerable: true // for local getters
	    })
	  })
	
	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent
	  Vue.config.silent = true
	  store._vm = new Vue({
	    data: { state: state },
	    computed: computed
	  })
	  Vue.config.silent = silent
	
	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store)
	  }
	
	  if (oldVm) {
	    // dispatch changes in all subscribed watchers
	    // to force getter re-evaluation.
	    store._withCommit(function () {
	      oldVm.state = null
	    })
	    Vue.nextTick(function () { return oldVm.$destroy(); })
	  }
	}
	
	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length
	  var namespace = store._modules.getNamespace(path)
	
	  // register in namespace map
	  if (namespace) {
	    store._modulesNamespaceMap[namespace] = module
	  }
	
	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1))
	    var moduleName = path[path.length - 1]
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state)
	    })
	  }
	
	  var local = module.context = makeLocalContext(store, namespace)
	
	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key
	    registerMutation(store, namespacedType, mutation, path)
	  })
	
	  module.forEachAction(function (action, key) {
	    var namespacedType = namespace + key
	    registerAction(store, namespacedType, action, local, path)
	  })
	
	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key
	    registerGetter(store, namespacedType, getter, local, path)
	  })
	
	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot)
	  })
	}
	
	/**
	 * make localized dispatch, commit and getters
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext (store, namespace) {
	  var noNamespace = namespace === ''
	
	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options)
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;
	
	      if (!options || !options.root) {
	        type = namespace + type
	        if (!store._actions[type]) {
	          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type))
	          return
	        }
	      }
	
	      return store.dispatch(type, payload)
	    },
	
	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options)
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;
	
	      if (!options || !options.root) {
	        type = namespace + type
	        if (!store._mutations[type]) {
	          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type))
	          return
	        }
	      }
	
	      store.commit(type, payload, options)
	    }
	  }
	
	  // getters object must be gotten lazily
	  // because store.getters will be changed by vm update
	  Object.defineProperty(local, 'getters', {
	    get: noNamespace ? function () { return store.getters; } : function () { return makeLocalGetters(store, namespace); }
	  })
	
	  return local
	}
	
	function makeLocalGetters (store, namespace) {
	  var gettersProxy = {}
	
	  var splitPos = namespace.length
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) { return }
	
	    // extract local getter type
	    var localType = type.slice(splitPos)
	
	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function () { return store.getters[type]; },
	      enumerable: true
	    })
	  })
	
	  return gettersProxy
	}
	
	function registerMutation (store, type, handler, path) {
	  var entry = store._mutations[type] || (store._mutations[type] = [])
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(getNestedState(store.state, path), payload)
	  })
	}
	
	function registerAction (store, type, handler, local, path) {
	  var entry = store._actions[type] || (store._actions[type] = [])
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: getNestedState(store.state, path),
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb)
	    if (!isPromise(res)) {
	      res = Promise.resolve(res)
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err)
	        throw err
	      })
	    } else {
	      return res
	    }
	  })
	}
	
	function registerGetter (store, type, rawGetter, local, path) {
	  if (store._wrappedGetters[type]) {
	    console.error(("[vuex] duplicate getter key: " + type))
	    return
	  }
	  store._wrappedGetters[type] = function wrappedGetter (store) {
	    return rawGetter(
	      getNestedState(store.state, path), // local state
	      local.getters, // local getters
	      store.state, // root state
	      store.getters // root getters
	    )
	  }
	}
	
	function enableStrictMode (store) {
	  store._vm.$watch('state', function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.")
	  }, { deep: true, sync: true })
	}
	
	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}
	
	function unifyObjectStyle (type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload
	    payload = type
	    type = type.type
	  }
	  return { type: type, payload: payload, options: options }
	}
	
	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    )
	    return
	  }
	  Vue = _Vue
	  applyMixin(Vue)
	}
	
	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue)
	}
	
	var index = {
	  Store: Store,
	  install: install,
	  version: '2.1.1',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	}
	
	return index;
	
	})));

/***/ }
]);
//# sourceMappingURL=main.js.map