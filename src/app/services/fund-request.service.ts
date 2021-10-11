import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfig } from 'src/ApplicationConfig';


@Injectable({
    providedIn: 'root'
})
export class FundService {

    fund = '/Kmnsf3/data';

    constructor(private http: HttpClient,) { }

    public getAll(): any {
        return this.http.get(ApplicationConfig.ServerAddress + this.fund);
    }
}