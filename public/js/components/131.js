(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dokumen/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/pageHeader.vue */ "./resources/assets/js/components/pageHeader.vue");
/* harmony import */ var _components_message_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message.vue */ "./resources/assets/js/components/message.vue");
/* harmony import */ var _components_selectCu_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selectCu.vue */ "./resources/assets/js/components/selectCu.vue");
/* harmony import */ var _table_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.vue */ "./resources/assets/js/views/dokumen/table.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    pageHeader: _components_pageHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    message: _components_message_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    selectCu: _components_selectCu_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    tableData: _table_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      title: 'Dokumen',
      kelas: 'dokumen',
      titleDesc: 'Mengelola data dokumen',
      titleIcon: 'icon-books',
      selectCuPath: 'dokumenCu'
    };
  },
  created: function created() {
    // if(this.$route.meta.mode != 'gerakanPublik'){
    // 	this.checkUser('index_dokumen',this.$route.params.cu);
    // }
    this.checkMode();
  },
  methods: {
    checkUser: function checkUser(permission, id_cu) {
      if (this.currentUser) {
        if (!this.currentUser.can || !this.currentUser.can[permission]) {
          this.$router.push('/notFound');
        }

        if (!id_cu || this.currentUser.id_cu) {
          if (this.currentUser.id_cu != 0 && this.currentUser.id_cu != id_cu) {
            this.$router.push('/notFound');
          }
        }
      }
    },
    checkMode: function checkMode() {
      if (this.$route.meta.mode == 'gerakanPublik') {
        this.title = 'Dokumen Gerakan & Publik';
        this.titleDesc = 'Mengelola data dokumen gerakan & publik';
      } else {
        this.title = 'Dokumen';
        this.titleDesc = 'Mengelola data dokumen';
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('dokumen', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/table.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dokumen/table.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dataviewer2.vue */ "./resources/assets/js/components/dataviewer2.vue");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal */ "./resources/assets/js/components/modal.vue");
/* harmony import */ var _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/checkValue.vue */ "./resources/assets/js/components/checkValue.vue");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    DataViewer: _components_dataviewer2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    appModal: _components_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
    checkValue: _components_checkValue_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['title', 'kelas'],
  data: function data() {
    return {
      selectedItem: [],
      query: {
        order_column: "name",
        order_direction: "asc",
        filter_match: "and",
        limit: 10,
        page: 1
      },
      excelDownloadUrl: '',
      columnData: [{
        title: 'No.',
        name: 'No.'
      }, {
        title: 'Nama',
        name: 'name',
        tipe: 'string',
        sort: true,
        hide: false,
        disable: false,
        filter: true,
        filterDefault: true
      }, {
        title: 'Kategori',
        name: 'kategori.name',
        tipe: 'string',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Status',
        name: 'status',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'CU',
        name: 'cu.name',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Keterangan',
        name: 'keterangan',
        sort: false,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tipe',
        name: 'tipe',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. Buat',
        name: 'created_at',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }, {
        title: 'Tgl. Ubah',
        name: 'updated_at',
        tipe: 'datetime',
        sort: true,
        hide: false,
        disable: false,
        filter: true
      }],
      state: '',
      modalShow: false,
      modalState: '',
      modalTitle: '',
      modalContent: '',
      modalButton: ''
    };
  },
  created: function created() {
    this.fetch(this.query);
  },
  watch: {
    // check route changes
    '$route': function $route(to, from) {
      this.fetch(this.query);
    },
    // when updating data
    updateStat: function updateStat(value) {
      this.modalState = value;
      this.modalButton = 'Ok';

      if (value == "success") {
        this.modalTitle = this.updateMessage.message;
        this.modalContent = '';
        this.fetch();
      } else if (value == "fail") {
        this.modalContent = this.updateMessage;
      } else {
        this.modalContent = '';
      }
    }
  },
  methods: {
    fetch: function fetch(params) {
      if (this.$route.meta.mode != 'gerakanPublik') {
        if (this.$route.params.cu == 'semua') {
          this.disableColumnCu(false);
          this.$store.dispatch(this.kelas + '/index', params);
          this.excelDownloadUrl = this.kelas;
        } else {
          this.disableColumnCu(true);
          this.$store.dispatch(this.kelas + '/indexCu', [params, this.$route.params.cu]);
          this.excelDownloadUrl = this.kelas + '/indexCu/' + this.$route.params.cu;
        }
      } else {
        if (this.$route.params.cu == 'semua') {
          this.disableColumnCu(false);
          this.$store.dispatch(this.kelas + '/indexGerakanPublik', params);
          this.excelDownloadUrl = this.kelas;
        } else {
          this.disableColumnCu(true);
          this.$store.dispatch(this.kelas + '/indexGerakanPublikCu', [params, this.$route.params.cu]);
          this.excelDownloadUrl = this.kelas + '/indexGerakanPublikCu/' + this.$route.params.cu;
        }
      }
    },
    disableColumnCu: function disableColumnCu(status) {
      this.columnData[4].disable = status;
    },
    selectedRow: function selectedRow(item) {
      this.selectedItem = item;
    },
    ubahData: function ubahData(id) {
      this.$router.push({
        name: this.kelas + 'Edit',
        params: {
          id: id
        }
      });
    },
    modalOpen: function modalOpen(state, isMobile, itemMobile) {
      this.modalShow = true;
      this.modalState = 'confirm-tutup';
      this.state = state;

      if (isMobile) {
        this.selectedItem = itemMobile;
      }

      if (state == 'hapus') {
        this.modalTitle = 'Hapus ' + this.title + ' ' + this.selectedItem.name + ' ?';
        this.modalButton = 'Iya, Hapus';
      }
    },
    modalTutup: function modalTutup() {
      this.modalShow = false;
      this.$store.dispatch(this.kelas + '/resetUpdateStat');
    },
    modalConfirmOk: function modalConfirmOk() {
      if (this.state == 'hapus') {
        this.$store.dispatch(this.kelas + '/destroy', this.selectedItem.id);
      }
    },
    downloadMateri: function downloadMateri(filename) {
      axios.get('/api/download_folder/' + filename + '/dokumen', {
        responseType: 'blob'
      }).then(function (response) {
        file_saver__WEBPACK_IMPORTED_MODULE_4___default.a.saveAs(response.data, filename);
      });
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('auth', {
    currentUser: 'currentUser'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('global', {
    idCu: 'idCu'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('cu', {
    modelCu: 'dataS',
    modelCuStat: 'dataStatS'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('dokumen', {
    itemData: 'dataS',
    itemDataStat: 'dataStatS',
    updateMessage: 'update',
    updateStat: 'updateStat'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/index.vue?vue&type=template&id=c3ea39be&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dokumen/index.vue?vue&type=template&id=c3ea39be& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-header", {
        attrs: {
          title: _vm.title,
          titleDesc: _vm.titleDesc,
          titleIcon: _vm.titleIcon,
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "page-content pt-0" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _vm.itemDataStat === "fail"
                ? _c("message", {
                    attrs: {
                      title: "Oops terjadi kesalahan:",
                      errorData: _vm.itemData,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.currentUser.id_cu == 0
                ? _c("select-cu", {
                    attrs: {
                      kelas: _vm.kelas,
                      path: _vm.selectCuPath,
                      isPus: true,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("table-data", {
                attrs: { title: _vm.title, kelas: _vm.kelas },
              }),
            ],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/table.vue?vue&type=template&id=57a6181d&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/dokumen/table.vue?vue&type=template&id=57a6181d& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "data-viewer",
        {
          attrs: {
            title: _vm.title,
            columnData: _vm.columnData,
            itemData: _vm.itemData,
            query: _vm.query,
            itemDataStat: _vm.itemDataStat,
            excelDownloadUrl: _vm.excelDownloadUrl,
          },
          on: { fetch: _vm.fetch },
          scopedSlots: _vm._u([
            {
              key: "item-desktop",
              fn: function (props) {
                return [
                  _c(
                    "tr",
                    {
                      staticClass: "text-nowrap",
                      class: {
                        "bg-info": _vm.selectedItem.id == props.item.id,
                      },
                      on: {
                        click: function ($event) {
                          return _vm.selectedRow(props.item)
                        },
                      },
                    },
                    [
                      !_vm.columnData[0].hide
                        ? _c("td", [
                            _vm._v(
                              "\n\t\t\t\t\t" +
                                _vm._s(
                                  props.index +
                                    1 +
                                    (+_vm.itemData.current_page - 1) *
                                      +_vm.itemData.per_page +
                                    "."
                                ) +
                                "\n\t\t\t\t"
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[1].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.name },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[2].hide && !_vm.columnData[2].disable
                        ? _c(
                            "td",
                            [
                              props.item.kategori
                                ? _c("check-value", {
                                    attrs: { value: props.item.kategori.name },
                                  })
                                : _c("span", [_vm._v("-")]),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[3].hide && !_vm.columnData[3].disable
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.status },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[4].hide && !_vm.columnData[4].disable
                        ? _c(
                            "td",
                            [
                              props.item.cu
                                ? _c("check-value", {
                                    attrs: { value: props.item.cu.name },
                                  })
                                : _c("span", [_vm._v("PUSKOPCUINA")]),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[5].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.keterangan },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[6].hide
                        ? _c(
                            "td",
                            [
                              _c("check-value", {
                                attrs: { value: props.item.tipe },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[7].hide
                        ? _c("td", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$options.filters.dateTime(
                                  props.item.created_at
                                )
                              ),
                            },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.columnData[8].hide
                        ? _c("td", [
                            props.item.created_at !== props.item.updated_at
                              ? _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.$options.filters.dateTime(
                                        props.item.updated_at
                                      )
                                    ),
                                  },
                                })
                              : _c("span", [_vm._v("-")]),
                          ])
                        : _vm._e(),
                    ]
                  ),
                ]
              },
            },
          ]),
        },
        [
          _c(
            "template",
            { slot: "button-desktop" },
            [
              _vm.$route.meta.mode != "gerakanPublik"
                ? [
                    _vm.currentUser.can &&
                    _vm.currentUser.can["create_" + _vm.kelas]
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-light mb-1",
                            attrs: { to: { name: _vm.kelas + "Create" } },
                          },
                          [
                            _c("i", { staticClass: "icon-plus3" }),
                            _vm._v(" Tambah\n\t\t\t\t"),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentUser.can &&
                    _vm.currentUser.can["update_" + _vm.kelas]
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-light mb-1",
                            attrs: { disabled: !_vm.selectedItem.id },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.ubahData(_vm.selectedItem.id)
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "icon-pencil5" }),
                            _vm._v(" Ubah\n\t\t\t\t"),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentUser.can &&
                    _vm.currentUser.can["destroy_" + _vm.kelas]
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-light mb-1",
                            attrs: { disabled: !_vm.selectedItem.id },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modalOpen("hapus")
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "icon-bin2" }),
                            _vm._v(" Hapus\n\t\t\t\t"),
                          ]
                        )
                      : _vm._e(),
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.selectedItem.format == "upload"
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.downloadMateri(_vm.selectedItem.filename)
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat\n\t\t\t"),
                    ]
                  )
                : _vm.selectedItem.format == "link"
                ? _c(
                    "a",
                    {
                      staticClass: "btn btn-light mb-1",
                      attrs: {
                        type: "button",
                        href: _vm.selectedItem.link,
                        target: "_blank",
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat\n\t\t\t"),
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-light mb-1",
                      attrs: { type: "button", disabled: "" },
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat\n\t\t\t"),
                    ]
                  ),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "button-mobile" },
            [
              _vm.$route.meta.mode != "gerakanPublik"
                ? [
                    _vm.currentUser.can &&
                    _vm.currentUser.can["create_" + _vm.kelas]
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-light btn-block mb-1",
                            attrs: { to: { name: _vm.kelas + "Create" } },
                          },
                          [
                            _c("i", { staticClass: "icon-plus3" }),
                            _vm._v(" Tambah\n\t\t\t\t"),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentUser.can &&
                    _vm.currentUser.can["update_" + _vm.kelas]
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-light btn-block mb-1",
                            attrs: { disabled: !_vm.selectedItem.id },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.ubahData(_vm.selectedItem.id)
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "icon-pencil5" }),
                            _vm._v(" Ubah\n\t\t\t\t"),
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.currentUser.can &&
                    _vm.currentUser.can["destroy_" + _vm.kelas]
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-light btn-block mb-1",
                            attrs: { disabled: !_vm.selectedItem.id },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.modalOpen("hapus")
                              },
                            },
                          },
                          [
                            _c("i", { staticClass: "icon-bin2" }),
                            _vm._v(" Hapus\n\t\t\t\t"),
                          ]
                        )
                      : _vm._e(),
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.selectedItem.format == "upload"
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-block mb-1",
                      attrs: { disabled: !_vm.selectedItem.id },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.downloadMateri(_vm.selectedItem.filename)
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat\n\t\t\t"),
                    ]
                  )
                : _vm.selectedItem.format == "link"
                ? _c(
                    "a",
                    {
                      staticClass: "btn btn-light btn-block mb-1",
                      attrs: {
                        type: "button",
                        href: _vm.selectedItem.link,
                        target: "_blank",
                      },
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat\n\t\t\t"),
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-light btn-block mb-1",
                      attrs: { type: "button", disabled: "" },
                    },
                    [
                      _c("i", { staticClass: "icon-file-eye" }),
                      _vm._v(" Lihat\n\t\t\t"),
                    ]
                  ),
            ],
            2
          ),
        ],
        2
      ),
      _vm._v(" "),
      _c("app-modal", {
        attrs: {
          show: _vm.modalShow,
          state: _vm.modalState,
          title: _vm.modalTitle,
          content: _vm.modalContent,
          button: _vm.modalButton,
        },
        on: {
          tutup: _vm.modalTutup,
          confirmOk: _vm.modalConfirmOk,
          successOk: _vm.modalTutup,
          failOk: _vm.modalTutup,
          backgroundClick: _vm.modalTutup,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/views/dokumen/index.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/views/dokumen/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c3ea39be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c3ea39be& */ "./resources/assets/js/views/dokumen/index.vue?vue&type=template&id=c3ea39be&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/dokumen/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c3ea39be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c3ea39be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/dokumen/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/dokumen/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/views/dokumen/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/dokumen/index.vue?vue&type=template&id=c3ea39be&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/dokumen/index.vue?vue&type=template&id=c3ea39be& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c3ea39be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c3ea39be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/index.vue?vue&type=template&id=c3ea39be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c3ea39be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c3ea39be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/views/dokumen/table.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/views/dokumen/table.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_57a6181d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=57a6181d& */ "./resources/assets/js/views/dokumen/table.vue?vue&type=template&id=57a6181d&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/dokumen/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_57a6181d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_57a6181d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/dokumen/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/dokumen/table.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/views/dokumen/table.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/dokumen/table.vue?vue&type=template&id=57a6181d&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/views/dokumen/table.vue?vue&type=template&id=57a6181d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_57a6181d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=57a6181d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/dokumen/table.vue?vue&type=template&id=57a6181d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_57a6181d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_57a6181d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);