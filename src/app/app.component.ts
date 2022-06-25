import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
  }
  title = 'datagrid-with-angular-material';
  columns = ['name', 'team'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  data = [
    { name: 'Lebron James', team: 'Lakers' },
    { name: 'Chef Curry', team: 'Golden State' },
    { name: 'Anthony Davis', team: 'Lakers' },
    { name: 'Klay Thompson', team: 'Golden State' },
    { name: 'Carmelo Anthony', team: 'Lakers' },
    { name: 'Patrick Bowell', team: 'Golden State' },
    { name: 'Russell Westbrook', team: 'Lakers' },
  ];
}
