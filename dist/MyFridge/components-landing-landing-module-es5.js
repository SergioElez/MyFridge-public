(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-landing-landing-module"], {
    /***/
    "/Sl2":
    /*!*********************************************************!*\
      !*** ./src/app/components/landing/landing.component.ts ***!
      \*********************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function Sl2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/app.service */
      "OaWH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LandingComponent_label_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Por favor, escribe el nombre de una receta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LandingComponent_li_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "category/", category_r3.strCategory, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.strCategory);
        }
      }

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent(router, appService) {
          _classCallCheck(this, LandingComponent);

          this.router = router;
          this.appService = appService;
          this.allCategories = [];
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.inputError = false;
            this.allCategories = this.appService.getRecipeCategoriesData(); // Si no ha datos guardados hacemos la consulta

            if (this.allCategories.length === 0) this.getRecipeCategories();
          } // Get meal categories

        }, {
          key: "getRecipeCategories",
          value: function getRecipeCategories() {
            var _this = this;

            this.appService.getRecipeCategories().subscribe(function (data) {
              data.categories.forEach(function (category, index) {
                _this.allCategories[index] = category;
              });

              _this.appService.setRecipeCategories(_this.allCategories);
            });
          } // Actualizamos el nombre de la receta a buscar con el input del usuario a tiempo real

        }, {
          key: "update",
          value: function update(inputValue) {
            this.recipeName = inputValue; // Descomentar para verlo en tiempo real
            //console.log(this.recipeName);
          } // Navigate user to recipe list view

        }, {
          key: "search",
          value: function search() {
            console.log(this.recipeName);

            if (this.recipeName === undefined) {
              this.inputError = true;
            } else {
              this.router.navigate(['/recipelist', this.recipeName]);
            }
          }
        }]);

        return LandingComponent;
      }();

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        decls: 24,
        vars: 2,
        consts: [["id", "landing", 1, "d-flex", "flex-row"], [1, "container"], ["id", "landingWrapper", 1, "d-flex"], [1, "d-flex", "flex-col"], ["type", "text", "placeholder", "Buscar recetas", "id", "searchRecipe", 1, "u-full-width", "mb-0", 3, "keyup"], ["name", ""], ["class", "error-text mb-0", 4, "ngIf"], [1, "btnGroup"], ["type", "button", "mat-button", "", "color", "primary", "tabindex", "0", 1, "button", "btnSearchRecipe", 3, "click"], ["routerLink", "/random", "mat-button", "", "color", "primary", "tabindex", "0", 1, "button", "btnRandomRecipe"], [1, "row"], [1, "twelve", "columns"], ["id", "NavBarCategory", 1, "navbar", "u-full-width"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "error-text", "mb-0"], [1, "nav-item"], ["tabindex", "0", 1, "navbar-meal-category", 3, "routerLink"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No sabes que cocinar? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Busca una receta o prueba a darle bot\xF3n de aleatorio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LandingComponent_Template_input_keyup_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

              return ctx.update(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LandingComponent_label_12_Template, 2, 0, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_14_listener() {
              return ctx.search();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buscar Receta");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Receta aleatoria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LandingComponent_li_23_Template, 3, 2, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputError);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allCategories);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["#landing[_ngcontent-%COMP%] {\n  height: 80vh;\n  align-items: center;\n}\n\n.btnGroup[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.btnGroup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 20px;\n}\n\n#NavBarCategory[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#NavBarCategory[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.navbar-meal-category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8em;\n  font-weight: 600;\n  letter-spacing: 0.2rem;\n  margin-right: 10px;\n  text-decoration: none;\n  color: black;\n  padding: 2px 5px;\n  border-radius: 5px;\n}\n\n.navbar-meal-category[_ngcontent-%COMP%]:hover, .navbar-meal-category[_ngcontent-%COMP%]:focus {\n  background-color: var(--color);\n  color: white;\n}\n\nsmall[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7O0VBRUksOEJBQUE7RUFDQSxZQUFBO0FBT0o7O0FBTEE7RUFDSSwwQkFBQTtBQVFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGFuZGluZyB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbn1cbi5idG5Hcm91cCB7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbn1cbi5idG5Hcm91cCBhOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMjBweFxufVxuI05hdkJhckNhdGVnb3J5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cbiNOYXZCYXJDYXRlZ29yeSA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbn1cbi5uYXZiYXItbWVhbC1jYXRlZ29yeSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG59XG4ubmF2YmFyLW1lYWwtY2F0ZWdvcnk6aG92ZXIsXG4ubmF2YmFyLW1lYWwtY2F0ZWdvcnk6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGVcbn1cbnNtYWxsIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3XTv":
    /*!**************************************************************!*\
      !*** ./src/app/components/landing/landing-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: LandingRoutingModule */

    /***/
    function XTv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function () {
        return LandingRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing.component */
      "/Sl2");

      var routes = [{
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"]
      }];

      var LandingRoutingModule = function LandingRoutingModule() {
        _classCallCheck(this, LandingRoutingModule);
      };

      LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LandingRoutingModule
      });
      LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LandingRoutingModule_Factory(t) {
          return new (t || LandingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fbO+":
    /*!******************************************************!*\
      !*** ./src/app/components/landing/landing.module.ts ***!
      \******************************************************/

    /*! exports provided: LandingModule */

    /***/
    function fbO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingModule", function () {
        return LandingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-routing.module */
      "3XTv");
      /* harmony import */


      var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing.component */
      "/Sl2");

      var LandingModule = function LandingModule() {
        _classCallCheck(this, LandingModule);
      };

      LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LandingModule
      });
      LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LandingModule_Factory(t) {
          return new (t || LandingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, {
          declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-landing-landing-module-es5.js.map