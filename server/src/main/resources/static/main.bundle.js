webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Production.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Production; });
var Production = (function () {
    function Production() {
    }
    return Production;
}());

//# sourceMappingURL=Production.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n</div>\n<form #searchForm=\"ngForm\" novalidate=\"novalidate\">\n  <div class=\"panel panel-warning\">\n    <div class=\"well\">\n      <!-- first row filter -->\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n\n          <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-6\">\n            <input type=\"checkbox\" [(ngModel)]=\"default\" name=\"default\" (change)=\"overallBox1($event)\">\n          </div>\n          <label class=\"col-xs-12 col-sm-6 col-md-4 col-lg-6 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong></strong>\n\t\t\t\t\t\t\t</label>\n        </div>\n        <div class=\"col-sm-4\">\n          <label class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong> State </strong>\n\t\t\t\t\t</label>\n          <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n            <ng-selector name=\"selector\" [(ngModel)]=\"selectedState\" [options]=\"stateValues\" [readonly]=\"!default\"></ng-selector>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <label class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong> District </strong>\n\t\t\t\t\t\t\t</label>\n          <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n            <ng-selector name=\"selector\" [(ngModel)]=\"selectedDistrict\" [options]=\"districtValues\" [readonly]=\"!default\"></ng-selector>\n          </div>\n        </div>\n      </div>\n      <!-- second row filter -->\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n\n          <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-6\">\n            <input type=\"checkbox\" [(ngModel)]=\"cropYearFlag\" name=\"cropYearFlag\">\n          </div>\n          <label class=\"col-xs-12 col-sm-6 col-md-4 col-lg-6 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong>Crop Year</strong>\n\t\t\t\t</label>\n        </div>\n        <div class=\"col-sm-4\">\n          <label class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong> From </strong>\n\t\t\t\t\t\t\t</label>\n          <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n            <ng-selector name=\"selector\" [(ngModel)]=\"selectedCropYearFrom\" [options]=\"cropValuesFrom\" [readonly]=\"!cropYearFlag\"></ng-selector>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <label class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong> To </strong>\n\t\t\t\t\t\t\t</label>\n          <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n            <ng-selector name=\"selector\" [(ngModel)]=\"selectedCropYearTo\" [options]=\"cropValuesTo\" [readonly]=\"!cropYearFlag\"></ng-selector>\n          </div>\n        </div>\n      </div>\n      <!-- Third row filter -->\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n\n          <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-6\">\n            <input type=\"checkbox\" [(ngModel)]=\"cropandSeasonFlag\" name=\"cropandSeasonFlag\" disabled>\n          </div>\n          <label class=\"col-xs-12 col-sm-6 col-md-4 col-lg-6 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong>Crop & Season</strong>\n          </label>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"col-xs-12 col-sm-2 col-md-2 col-lg-2\">\n            <input type=\"checkbox\" [(ngModel)]=\"cropFlag\" name=\"cropandSeasonFlag\">\n          </div>\n          <label class=\"col-xs-12 col-sm-2 col-md-2 col-lg-2 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong> Crop </strong>\n\t\t\t\t\t</label>\n          <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n            <ng-selector name=\"selector\" [(ngModel)]=\"selectedCrop\" [options]=\"cropValues\" [readonly]=\"!cropFlag\"></ng-selector>\n          </div>\n        </div>\n        \n        <div class=\"col-sm-4\">\n         <div class=\"col-xs-12 col-sm-2 col-md-2 col-lg-2\">\n            <input type=\"checkbox\" [(ngModel)]=\"SeasonFlag\" name=\"cropandSeasonFlag\">\n          </div>\n          <label  class=\"col-xs-12 col-sm-2 col-md-2 col-lg-2 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong> Season </strong>\n\t\t\t\t\t</label>\n          <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n            <ng-selector name=\"selector\" [(ngModel)]=\"selectedSeason\" [options]=\"seasonValues\" [readonly]=\"!SeasonFlag\"></ng-selector>\n          </div>\n        </div>\n      </div>\n\n      <!-- Fourth row filter -->\n      <div class=\"row\">\n\n        <div class=\"col-sm-4\">\n          <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-6\">\n            <input type=\"checkbox\" [(ngModel)]=\"avgFlag\" name=\"avgFlag\">\n          </div>\n          <label class=\"col-xs-12 col-sm-6 col-md-4 col-lg-6 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong>Average</strong>\n\t\t\t\t\t</label>\n        </div>\n        <div class=\"col-sm-4\">\n\n          <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-6\">\n            <input type=\"checkbox\" [(ngModel)]=\"maxFlag\" name=\"maxFlag\">\n          </div>\n          <label class=\"col-xs-12 col-sm-6 col-md-4 col-lg-6 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong>Max</strong>\n\t\t\t\t\t\t\t</label>\n        </div>\n\n        <div class=\"col-sm-4\">\n           <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-6\">\n            <input type=\"checkbox\" [(ngModel)]=\"overall\" name=\"overall\" (change)=\"overallBox($event)\">\n          </div>\n           <label class=\"col-xs-12 col-sm-6 col-md-4 col-lg-6 control-label customLabel\">\n\t\t\t\t\t\t\t\t<strong>Overall</strong>\n\t\t\t\t\t\t\t</label>\n          <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"processResult()\">{{searchTxt}}</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</form>\n<div class=\"row well\">\n  <label class=\"col-sm-6 col-md-4 col-lg-6 control-label\" *ngIf=\"avgFlag\">\n\t\t\t\t\t\t\t\t<strong>Average : {{avgValue}} </strong>\n</label>\n  <label class=\" col-sm-6 col-md-4 col-lg-6 control-label\" *ngIf=\"maxFlag\">\n\t\t\t\t\t\t\t\t<strong>Max  : {{maxValue}}</strong>\n</label>\n\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <input *ngIf=\"config.filtering\" placeholder=\"Filter all columns\" [ngTableFiltering]=\"config.filtering\" class=\"form-control\"\n      (tableChanged)=\"onChangeTable(config)\" />\n  </div>\n</div>\n<br>\n<ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n</ng-table>\n<pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\"\n  [maxSize]=\"maxSize\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\" (numPages)=\"numPages = $event\">\n</pagination>\n<pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queryUtil_service__ = __webpack_require__("../../../../../src/app/queryUtil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Production__ = __webpack_require__("../../../../../src/app/Production.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    // selected = this.values[0];
    function AppComponent(queryService, http) {
        this.queryService = queryService;
        this.http = http;
        this.default = true;
        this.maxFlag = true;
        this.avgFlag = true;
        this.cropFlag = false;
        this.overall = false;
        this.SeasonFlag = false;
        this.cropandSeasonFlag = false;
        this.cropYearFlag = false;
        this.searchTxt = "Search..";
        this.title = 'app';
        this.production = new __WEBPACK_IMPORTED_MODULE_3__Production__["a" /* Production */]();
        this.data = [];
        // selected: any;
        this.stateValues = [];
        this.districtValues = [];
        this.cropValuesFrom = [];
        this.cropValuesTo = [];
        this.values = [
            { id: 1, label: 'First value' },
            { id: 2, label: 'Second value' },
            { id: 3, label: 'Another one' },
            { id: 4, label: 'Best value' },
        ];
        this.tableValues = [
            {
                'state': 'Victoria Cantrell',
                'district': 'Integer Corporation',
                'season': 'Croatia',
                'crop': '0839',
                'area': '1.0',
                'max': '2015/08/19',
                'avg': 208.178
            }
        ];
        this.rows = [];
        this.columns = [
            { title: 'State', name: 'state', filtering: { filterString: '', placeholder: 'Filter by state' } },
            {
                title: 'District',
                name: 'district',
                sort: false,
                filtering: { filterString: '', placeholder: 'Filter by District' }
            },
            { title: 'Crop Year', className: ['office-header', 'text-success'], name: 'season', sort: 'asc' },
            { title: 'Crop.', name: 'crop', sort: '', filtering: { filterString: '', placeholder: 'Filter by Crop.' } },
            { title: 'Area', className: 'text-warning', name: 'area' },
            { title: 'Production', className: 'text-warning', name: 'max' },
            { title: 'Avg', name: 'avg' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered']
        };
        this.loadInitialValues();
    }
    AppComponent.prototype.loadInitialValues = function () {
        var _this = this;
        //loading states
        this.queryService.getStates().subscribe(function (data1) {
            _this.values = [];
            var temp = new Array();
            temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
            var i = 1;
            temp.forEach(function (element) {
                var itrData = {
                    id: i,
                    label: element
                };
                _this.values.push(itrData);
                i++;
            });
            _this.stateValues = _this.values;
        }, function (error) { });
        //loading districts
        this.queryService.getDistricts().subscribe(function (data1) {
            _this.values = [];
            var temp = new Array();
            temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
            var i = 1;
            temp.forEach(function (element) {
                var itrData = {
                    id: i,
                    label: element
                };
                _this.values.push(itrData);
                i++;
            });
            _this.districtValues = _this.values;
        }, function (error) { });
        //loading cropYears
        this.queryService.getCropYear().subscribe(function (data1) {
            _this.values = [];
            var temp = new Array();
            temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
            var i = 1;
            temp.forEach(function (element) {
                var itrData = {
                    id: i,
                    label: element
                };
                _this.values.push(itrData);
                i++;
            });
            _this.cropValuesFrom = _this.values;
            _this.cropValuesTo = _this.values;
        }, function (error) { });
        //crops
        this.queryService.getCrop().subscribe(function (data1) {
            _this.values = [];
            var temp = new Array();
            temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
            var i = 1;
            temp.forEach(function (element) {
                var itrData = {
                    id: i,
                    label: element
                };
                _this.values.push(itrData);
                i++;
            });
            _this.cropValues = _this.values;
        }, function (error) { });
        //loading seasons
        this.queryService.getSeason().subscribe(function (data1) {
            _this.values = [];
            var temp = new Array();
            temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
            var i = 1;
            temp.forEach(function (element) {
                var itrData = {
                    id: i,
                    label: element
                };
                _this.values.push(itrData);
                i++;
            });
            _this.seasonValues = _this.values;
        }, function (error) { });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    AppComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    AppComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    AppComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    AppComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.data, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    AppComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    AppComponent.prototype.overallBox = function (e) {
        if (e.target.checked) {
            this.default = false;
        }
        else {
            this.default = true;
        }
    };
    AppComponent.prototype.overallBox1 = function (e) {
        if (e.target.checked) {
            this.overall = false;
        }
    };
    AppComponent.prototype.processResult = function () {
        var _this = this;
        this.searchTxt = "Loading....";
        var isValid = true;
        if (!this.overall && this.cropYearFlag) {
            if (this.selectedCropYearFrom != undefined && this.selectedCropYearTo != undefined) {
                if (parseInt(this.selectedCropYearFrom.label) > parseInt(this.selectedCropYearTo.label)) {
                    isValid = false;
                    alert("Verify Crop Year Range");
                }
            }
            else {
                isValid = false;
                alert("Verify Crop Year Range");
            }
        }
        var urlParam = "";
        if (this.cropYearFlag) {
            this.production.cropYearFrom = ((this.selectedCropYearFrom != undefined) ? this.selectedCropYearFrom.label : null);
            this.production.cropYearTo = ((this.selectedCropYearTo != undefined) ? this.selectedCropYearTo.label : null);
        }
        if (this.default) {
            this.production.districtName = ((this.selectedDistrict != undefined) ? this.selectedDistrict.label : null);
            this.production.stateName = ((this.selectedState != undefined) ? this.selectedState.label : null);
        }
        // if (this.cropandSeasonFlag) {
        if (this.cropFlag) {
            this.production.crop = ((this.selectedCrop != undefined) ? this.selectedCrop.label : null);
        }
        if (this.SeasonFlag) {
            this.production.season = ((this.selectedSeason != undefined) ? this.selectedSeason.label : null);
        }
        // }
        if (!this.default && !this.overall) {
            if (this.selectedDistrict != undefined && this.selectedState != undefined) {
                alert("State and district must be selected");
                isValid = false;
            }
            else {
                isValid = false;
            }
        }
        if (this.overall) {
            this.production.stateName = null;
            this.production.districtName = null;
        }
        console.log(isValid);
        if (isValid) {
            this.searchTxt = "Loading....";
            this.queryService.doQueryProcess(this.production).subscribe(function (data) {
                var itrDta;
                _this.tableValues = [];
                _this.avgValue = 0.0;
                var _maxarray = [];
                var itrDta = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                //     console.log(itrDta[1]);
                for (var i = 0; i < itrDta.length; i++) {
                    var itrInside = itrDta[i];
                    _this.avgValue = _this.avgValue + parseFloat(itrInside[5]);
                    _maxarray.push(itrInside[5]);
                    var neededData = {
                        state: itrInside[0],
                        district: itrInside[1],
                        season: itrInside[2],
                        crop: itrInside[3],
                        area: itrInside[4],
                        max: itrInside[5],
                        avg: itrInside[7]
                    };
                    _this.tableValues.push(neededData);
                }
                if (itrDta.length > 0) {
                    _this.avgValue = _this.avgValue / itrDta.length;
                    _this.maxValue = Math.max.apply(Math, _maxarray);
                }
                else {
                    alert("No Results Found");
                }
                _this.data = _this.tableValues;
                _this.onChangeTable(_this.config);
                _this.searchTxt = "Search";
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__queryUtil_service__["a" /* queryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__queryUtil_service__["a" /* queryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__queryUtil_service__["a" /* queryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table__ = __webpack_require__("../../../../ng2-table/ng2-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_selector__ = __webpack_require__("../../../../ng-selector/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table__["Ng2TableModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* PaginationModule */], __WEBPACK_IMPORTED_MODULE_8_ng_selector__["a" /* NgSelectorModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* PaginationConfig */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/queryUtil.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var queryService = (function () {
    function queryService(http) {
        this.http = http;
        this.hosturl = "http://localhost:8090/";
    }
    ;
    queryService.prototype.ngOnInit = function () {
    };
    queryService.prototype.testLoad = function () {
        var url = this.hosturl + "test";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    };
    queryService.prototype.getStates = function () {
        var url = this.hosturl + "States";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        // console.log(this.http.get(url));
        return this.http.get(url);
    };
    queryService.prototype.getDistricts = function () {
        var url = this.hosturl + "Districts";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    };
    queryService.prototype.getCropYear = function () {
        var url = this.hosturl + "cropYears";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    };
    queryService.prototype.getCrop = function () {
        var url = this.hosturl + "Crops";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    };
    queryService.prototype.getSeason = function () {
        var url = this.hosturl + "Seasons";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        console.log(this.http.get(url));
        return this.http.get(url);
    };
    queryService.prototype.doQueryProcess = function (production) {
        var url = this.hosturl + "search";
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log(production);
        return this.http.post(url, JSON.stringify(production), { headers: header });
    };
    return queryService;
}());
queryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], queryService);

var _a;
//# sourceMappingURL=queryUtil.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map