import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'datagrid-with-angular-material';
  columns = ['name', 'team'];
  data = [
    { name: 'Lebron', team: 'Lakers' },
    { name: 'Curry', team: 'Golden State' },
    { name: 'Lebron', team: 'Lakers' },
  ];
}
