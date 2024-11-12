import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';  // Import MatTableModule here

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [MatTableModule],  // Add MatTableModule to the imports array
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  displayedColumns: string[] = ['name', 'sales', 'transactions'];
  dataSource = new MatTableDataSource([
    { name: 'Station 1', sales: 20000, transactions: 300 },
    { name: 'Station 2', sales: 15000, transactions: 250 },
    { name: 'Station 3', sales: 22000, transactions: 310 }
  ]);
}
