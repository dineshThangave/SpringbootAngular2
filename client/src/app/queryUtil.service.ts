import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Production } from "./Production";
@Injectable()
export class queryService {

    hosturl: string = "http://localhost:8090/";
    constructor(private http: Http) {
    };
    ngOnInit() {

    }

    public testLoad() {
        let url = this.hosturl + "test";
        let header = new Headers({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    }
    public getStates() {
        let url = this.hosturl + "States";
        let header = new Headers({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        // console.log(this.http.get(url));
        return this.http.get(url);
    }
    public getDistricts() {
        let url = this.hosturl + "Districts";
        let header = new Headers({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    }
    public getCropYear() {
        let url = this.hosturl + "cropYears";
        let header = new Headers({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    }
    public getCrop() {
        let url = this.hosturl + "Crops";
        let header = new Headers({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        //console.log(this.http.get(url));
        return this.http.get(url);
    }
    public getSeason() {
        let url = this.hosturl + "Seasons";
        let header = new Headers({ 'Content-Type': 'application/json' });
        // this.http.post(url, JSON.stringify(data), {headers: header});
        console.log(this.http.get(url));
        return this.http.get(url);
    }

    public doQueryProcess(production:Production) {
       
        let url = this.hosturl + "search";
         let header = new Headers({'Content-Type': 'application/json'});
         console.log(production);
        return this.http.post(url,JSON.stringify(production), {headers: header});
    }
}