import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { GridDataService } from '../../shared/services/grid-data.service';
import { IGettingStartedData } from '../../shared/interfaces/getting-started-data.interface';
import { AgGridNg2 } from 'ag-grid-angular';
import { RowNode } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridNg2;
  @ViewChild('agGridGroup') agGridGroup: AgGridNg2;

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  columnDefs: ColDef[] = [
    { headerName: 'Make', field: 'make', checkboxSelection: true },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData$: Observable<IGettingStartedData[]>;

  groupColumnDefs: ColDef[] = [
    {headerName: 'Make', field: 'make', rowGroup: true },
    {headerName: 'Price', field: 'price'}
  ];

  groupRowData$: Observable<IGettingStartedData[]>;

  autoGroupColumnDef: ColDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  };

  constructor(private gridDataService: GridDataService) { }

  ngOnInit() {
    this.rowData$ = this.gridDataService.getGettingStartedRowData();
    this.groupRowData$ = this.gridDataService.getGettingStartedRowGroupingData();
  }

  getSelectedRows() {
    // Gets full row info
    const selectedNodes: RowNode[] = this.agGrid.api.getSelectedNodes();
    // Gets the data out of each node
    const selectedData: IGettingStartedData[] = selectedNodes.map( node => node.data );
    // Joins in a string for the alert()
    const selectedDataStringPresentation: string = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
