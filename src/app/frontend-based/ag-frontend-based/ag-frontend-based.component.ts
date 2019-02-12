import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ag-frontend-based',
  templateUrl: './ag-frontend-based.component.html',
  styleUrls: ['./ag-frontend-based.component.scss']
})
export class AgFrontendBasedComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowModelType;
  private cacheBlockSize;
  private maxBlocksInCache;
  private rowData: [];

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { field: 'id' },
      {
        field: 'athlete',
        width: 150
      },
      { field: 'age' },
      { field: 'country' },
      { field: 'year' },
      { field: 'sport' },
      { field: 'gold' },
      { field: 'silver' },
      { field: 'bronze' }
    ];
    this.defaultColDef = {
      width: 120,
      resizable: true
    };
    this.rowModelType = 'serverSide';
    this.cacheBlockSize = 100;
    this.maxBlocksInCache = 100;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json')
      .subscribe((data: any[]) => {
        let idSequence = 0;
        data.forEach((item) => {
          item.id = idSequence++;
        });
        const server = this.fakeServer(data);
        const datasource = this.serverSideDatasource(server);
        params.api.setServerSideDatasource(datasource);
      });
  }
  
  serverSideDatasource(server) {
    return {
      getRows(params) {
        setTimeout(() => {
          const response = server.getResponse(params.request);
          if (response.success) {
            params.successCallback(response.rows, response.lastRow);
          } else {
            params.failCallback();
          }
        }, 500);
      }
    };
  }
  
  fakeServer(allData) {
    return {
      getResponse(request) {
        console.log('asking for rows: ' + request.startRow + ' to ' + request.endRow);
        const rowsThisPage = allData.slice(request.startRow, request.endRow);
        const lastRow = allData.length <= request.endRow ? allData.length : -1;
        return {
          success: true,
          rows: rowsThisPage,
          lastRow
        };
      }
    };
  }
  
}
