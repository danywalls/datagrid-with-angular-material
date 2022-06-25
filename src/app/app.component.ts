import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  columns = ['name', 'team'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  data = [
    { name: 'Lebron James', team: 'Lakers' },
    { name: 'Chef Curry', team: 'Golden State' },
    { name: 'Anthony Davis', team: 'Lakers' },
    { name: 'Klay Thompson', team: 'Golden State' },
    { name: 'Carmelo Anthony', team: 'Lakers' },
    { name: 'Patrick Bowell', team: 'Golden State' },
    { name: 'Russell Westbrook', team: 'Lakers' },
  ];
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
