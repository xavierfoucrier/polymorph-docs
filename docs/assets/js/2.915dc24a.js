(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[t._v("#")]),t._v(" API Reference")]),s("h2",{attrs:{id:"interpolate-paths-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpolate-paths-options","aria-hidden":"true"}},[t._v("#")]),t._v(" interpolate(paths, options)")]),s("p",[t._v("Returns a function that interpolates between two or more paths.")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// create function to interpolate between the two paths")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" interpolator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" polymorph"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("interpolate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'#play'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'#pause'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   addPoints"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   origin"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   optimize"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'fill'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   precision"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// pass a number between 0 and 1. 0.5 is 50% in the middle.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" midway "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("interpolator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0.5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#paths","aria-hidden":"true"}},[t._v("#")]),t._v(" paths")]),s("p",[t._v("An array of path data.  Each item can be a PathElement, a CSS selector, or a path string ('M0,0 ...')")]),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" options")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("addPoints")]),s("td",[t._v("Adds additional points to each side of the tween over what is required.  This takes effect when optimize is set to "),s("code",[t._v("fill")]),t._v(".  The default value is "),s("code",[t._v("0")]),t._v(".")])]),s("tr",[s("td",[t._v("origin")]),s("td",[t._v("There are two modes to origin: absolute and relative. When absolute is true, "),s("code",[t._v("x")]),t._v(" and "),s("code",[t._v("y")]),t._v(" are exact coordinates in the SVG space.  When absolute is false, "),s("code",[t._v("x")]),t._v(" and "),s("code",[t._v("y")]),t._v(" are values between "),s("code",[t._v("0")]),t._v(" and "),s("code",[t._v("1")]),t._v(" representing 0% to 100% of the bounding box of the path. This is similar to transform-origin in CSS.  The default value is "),s("code",[t._v("{ x: 0, y: 0, absolute: false }")]),t._v(" (upper left corner of the bounding box of the path)")])]),s("tr",[s("td",[t._v("optimize")]),s("td",[t._v("Determines the strategy for aligning two disparate shapes. "),s("code",[t._v("none")]),t._v(" does nothing and should be used when the paths are optimized by hand.  "),s("code",[t._v("fill")]),t._v(" creates new subpaths as needed and inserts additional points as needed.  The default value is "),s("code",[t._v("fill")]),t._v(".")])]),s("tr",[s("td",[t._v("precision")]),s("td",[t._v("The number of decimal places to use when rendering paths.  Increasing this value smooths out shapes at the cost of browser rendering speed on some platforms.  The default value is "),s("code",[t._v("0")])])])])])])}],!1,null,null,null);a.default=n.exports}}]);