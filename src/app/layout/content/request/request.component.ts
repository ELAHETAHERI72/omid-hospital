import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FundModel } from 'src/app/models/fund-request.model';
import { FundService } from 'src/app/services/fund-request.service';
// import { FundService } from 'src/app/services/fund-request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Amount Requested', 'Deadline', 'Reason For Request', 'detail'];

  dataSource = new MatTableDataSource<FundModel>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private route: Router, private foundService: FundService) {

    this.foundService.getAll().subscribe(res => {
      this.dataSource = res;
    })
  }

  ngOnInit(): void {

  }

  RedirectToDetail(id) {
    this.route.navigate(['/detail', id])
  }




}



// const ELEMENT_DATA: FundModel[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', id: '1' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', id: '2' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', id: '3' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', id: '4' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', id: '5' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', id: '6' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', id: '7' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', id: '8' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', id: '9' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', id: '10' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', id: '11' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', id: '12' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', id: '13' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', id: '14' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', id: '15' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', id: '16' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', id: '17' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', id: '18' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', id: '19' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', id: '20' },
// ];