(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      action: 1,
      value: '',
      title: '',
      errors: false,
      arErrors: []
    };
  },
  methods: {
    addItem: function addItem() {
      var _this = this;

      axios.post('/api/items', {
        action: this.action,
        title: this.title,
        value: this.value
      }).then(function (response) {
        if (response.status === 200) {
          _this.errors = false;
          _this.action = 1;
          _this.title = '';
          _this.value = '';

          _this.$router.push('/');
        } else {
          console.error(response.status);
        }
      })["catch"](function (error) {
        _this.errors = true;
        _this.arErrors = error.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddItem.vue?vue&type=template&id=273ef985&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AddItem.vue?vue&type=template&id=273ef985& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "pt-3 pb-3" }, [
    _vm.errors
      ? _c(
          "ul",
          _vm._l(_vm.arErrors, function(error) {
            return _c("li", [_vm._v(_vm._s(error))])
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addItem($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "form-check" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.action,
                  expression: "action"
                }
              ],
              staticClass: "form-check-input",
              attrs: {
                type: "radio",
                name: "action",
                id: "exampleRadios1",
                value: "1"
              },
              domProps: { checked: _vm._q(_vm.action, "1") },
              on: {
                change: function($event) {
                  _vm.action = "1"
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "form-check-label",
                attrs: { for: "exampleRadios1" }
              },
              [_vm._v("\n                    Пополнение\n                ")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-check" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.action,
                  expression: "action"
                }
              ],
              staticClass: "form-check-input",
              attrs: {
                type: "radio",
                name: "action",
                id: "exampleRadios2",
                value: "0"
              },
              domProps: { checked: _vm._q(_vm.action, "0") },
              on: {
                change: function($event) {
                  _vm.action = "0"
                }
              }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "form-check-label",
                attrs: { for: "exampleRadios2" }
              },
              [_vm._v("\n                    Списание\n                ")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleFormControlInput1" } }, [
            _vm._v("Сумма")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-group mb-2" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.value,
                  expression: "value"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "number",
                id: "exampleFormControlInput1",
                placeholder: "100",
                pattern: "[0-9]",
                required: ""
              },
              domProps: { value: _vm.value },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.value = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "exampleFormControlInput2" } }, [
            _vm._v("Название")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.title,
                expression: "title"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "exampleFormControlInput2",
              placeholder: "Покупка еды",
              required: ""
            },
            domProps: { value: _vm.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.title = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary" }, [_vm._v("Добавить")])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("₽")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/AddItem.vue":
/*!****************************************!*\
  !*** ./resources/js/views/AddItem.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddItem_vue_vue_type_template_id_273ef985___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddItem.vue?vue&type=template&id=273ef985& */ "./resources/js/views/AddItem.vue?vue&type=template&id=273ef985&");
/* harmony import */ var _AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddItem.vue?vue&type=script&lang=js& */ "./resources/js/views/AddItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddItem_vue_vue_type_template_id_273ef985___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddItem_vue_vue_type_template_id_273ef985___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AddItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AddItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/AddItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AddItem.vue?vue&type=template&id=273ef985&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/AddItem.vue?vue&type=template&id=273ef985& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_273ef985___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AddItem.vue?vue&type=template&id=273ef985& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AddItem.vue?vue&type=template&id=273ef985&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_273ef985___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddItem_vue_vue_type_template_id_273ef985___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);