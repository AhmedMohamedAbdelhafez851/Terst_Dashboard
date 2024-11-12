import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
// Remove this line:
// import { StationListComponent } from './station-list.component';

@Component({
  standalone: true,
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']  , 
  imports : [CommonModule]
})
export class StationListComponent implements OnInit {

  ngOnInit() {
    this.createRadarChart();
  }

  createRadarChart() {
    new Chart("hourlySalesChart", {
      type: 'radar',
      data: {
        labels: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00'],
        datasets: [{
          label: 'Hourly Sales',
          data: [20, 40, 30, 50, 60, 70],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
