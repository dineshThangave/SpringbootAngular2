import { Component } from '@angular/core';
import { queryService } from "./queryUtil.service";
import { DatePipe } from "@angular/common";
import { Http } from "@angular/http";
import * as _ from 'lodash';
import { Production } from "./Production";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [queryService]

})
export class AppComponent {
  avgValue: number;
  maxValue: number;
  default: Boolean = true;
  maxFlag: Boolean = true;
  avgFlag: Boolean = true;
  cropFlag: Boolean = false;
  overall: Boolean = false;
  SeasonFlag: Boolean = false;
  cropandSeasonFlag: Boolean = false;
  cropYearFlag: Boolean = false;
  searchTxt: string = "Search.."

  title = 'app';
  selectedDistrict: any;
  selectedState: any;
  selectedCropYearFrom: any;
  selectedCropYearTo: any;
  selectedCrop: any;
  selectedSeason: any;
  production: Production = new Production();
  private data: Array<any> = [

  ]


  // selected: any;
  stateValues = [];
  districtValues = [];
  cropValuesFrom = [];
  cropValuesTo = [];
  cropValues: { id: number; label: string; }[];
  seasonValues: { id: number; label: string; }[];
  values = [
    { id: 1, label: 'First value' },
    { id: 2, label: 'Second value' },
    { id: 3, label: 'Another one' },
    { id: 4, label: 'Best value' },
  ];

  tableValues = [
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

  // selected = this.values[0];

  constructor(private queryService: queryService, private http: Http) {
    this.loadInitialValues();
  }

  loadInitialValues() {
    //loading states
    this.queryService.getStates().subscribe(
      data1 => {
        this.values = []
        var temp = new Array();
        temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
        let i = 1;
        temp.forEach(element => {

          var itrData = {
            id: i,
            label: element
          }
          this.values.push(itrData);
          i++;
        });
        this.stateValues = this.values;
      },
      error => { })

    //loading districts
    this.queryService.getDistricts().subscribe(
      data1 => {
        this.values = []
        var temp = new Array();
        temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
        let i = 1;
        temp.forEach(element => {

          var itrData = {
            id: i,
            label: element
          }
          this.values.push(itrData);
          i++;
        });
        this.districtValues = this.values;
      },
      error => { })
    //loading cropYears
    this.queryService.getCropYear().subscribe(
      data1 => {
        this.values = []
        var temp = new Array();
        temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
        let i = 1;
        temp.forEach(element => {

          var itrData = {
            id: i,
            label: element
          }
          this.values.push(itrData);
          i++;
        });
        this.cropValuesFrom = this.values;
        this.cropValuesTo = this.values;
      },
      error => { })
    //crops
    this.queryService.getCrop().subscribe(
      data1 => {
        this.values = []
        var temp = new Array();
        temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
        let i = 1;
        temp.forEach(element => {

          var itrData = {
            id: i,
            label: element
          }
          this.values.push(itrData);
          i++;
        });

        this.cropValues = this.values;

      },
      error => { })
    //loading seasons
    this.queryService.getSeason().subscribe(
      data1 => {
        this.values = []
        var temp = new Array();
        temp = JSON.parse(JSON.parse(JSON.stringify(data1))._body);
        let i = 1;
        temp.forEach(element => {

          var itrData = {
            id: i,
            label: element
          }
          this.values.push(itrData);
          i++;
        });

        this.seasonValues = this.values;

      },
      error => { })


  }
  public rows: Array<any> = [];
  public columns: Array<any> = [
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
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filtering: { filterString: '' },
    className: ['table-striped', 'table-bordered']
  };

  public ngOnInit(): void {
    this.onChangeTable(this.config);
  }
  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
  overallBox(e) {
    if (e.target.checked) {
      this.default = false;
    } else {
      this.default = true;
    }
  }
   overallBox1(e) {
    if (e.target.checked) {
      this.overall = false;
    } 
  }

  public processResult() {
    this.searchTxt = "Loading....";
    var isValid = true;
    if(!this.overall && this.cropYearFlag){
    if (this.selectedCropYearFrom != undefined && this.selectedCropYearTo != undefined  ) {
      if ( parseInt(this.selectedCropYearFrom.label) > parseInt(this.selectedCropYearTo.label)) {
        isValid = false
        alert("Verify Crop Year Range");
      }
    } else {
      isValid = false
      alert("Verify Crop Year Range");
    }
    }
    let urlParam = "";
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
        isValid = false
      } else {
        isValid = false
      }
    }
    if (this.overall) {
      this.production.stateName = null;
      this.production.districtName = null;
    }
    console.log(isValid);
    if (isValid) {
      this.searchTxt = "Loading....";
      this.queryService.doQueryProcess(this.production).subscribe(
        data => {
          var itrDta: any;
          this.tableValues = []
          this.avgValue = 0.0;
          var _maxarray = [];
          var itrDta = JSON.parse(JSON.parse(JSON.stringify(data))._body)
          //     console.log(itrDta[1]);
          for (var i = 0; i < itrDta.length; i++) {
            var itrInside = itrDta[i];
            this.avgValue = this.avgValue + parseFloat(itrInside[5]);
            _maxarray.push(itrInside[5]);
            var neededData = {
              state: itrInside[0],
              district: itrInside[1],
              season: itrInside[2],
              crop: itrInside[3],
              area: itrInside[4],
              max: itrInside[5],
              avg: itrInside[7]

            }
            this.tableValues.push(neededData);
          }
          if(itrDta.length>0){
          this.avgValue = this.avgValue / itrDta.length;
          this.maxValue = Math.max.apply(Math, _maxarray);
          }else{
            alert("No Results Found")
          }
          this.data = this.tableValues;
          this.onChangeTable(this.config);
          this.searchTxt = "Search";
        }

      );
    }

  }






}
