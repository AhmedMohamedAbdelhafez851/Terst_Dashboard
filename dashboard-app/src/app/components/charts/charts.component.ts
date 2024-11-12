import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgxChartsModule],  // Import NgxChartsModule here
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  barChartData = [
    { name: '12 AM', value: 30 },
    { name: '4 AM', value: 40 },
    { name: '8 AM', value: 70 },
    { name: '12 PM', value: 55 },
    { name: '4 PM', value: 80 },
    { name: '8 PM', value: 60 }
  ];
}
