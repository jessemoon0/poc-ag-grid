import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGettingStartedData } from '../interfaces/getting-started-data.interface';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor(private http: HttpClient) { }

  getGettingStartedRowData() {
    return this.http.get<IGettingStartedData[]>('https://api.myjson.com/bins/15psn9');
  }

  getGettingStartedRowGroupingData() {
    return this.http.get<IGettingStartedData[]>('https://api.myjson.com/bins/ly7d1');
  }
}
