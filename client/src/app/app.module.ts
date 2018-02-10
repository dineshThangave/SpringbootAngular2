import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap';
import { NgSelectorModule } from 'ng-selector';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,HttpModule,Ng2TableModule,FormsModule,PaginationModule,NgSelectorModule
  ],
  providers: [PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
