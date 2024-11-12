import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {
  @ViewChild('hourlySalesChart', { static: true }) hourlySalesChart!: ElementRef;
  @ViewChild('stationsActivityChart', { static: true }) stationsActivityChart!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      Chart.register(...registerables);
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeHourlySalesChart();
      this.initializeStationsActivityChart();
    }
  }

  private initializeHourlySalesChart(): void {
    const ctx = this.hourlySalesChart.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00'],
          datasets: [{
            label: 'Hourly Sales',
            data: [30, 50, 80, 40, 60, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    } else {
      console.error("Failed to acquire the hourly sales chart context.");
    }
  }

  private initializeStationsActivityChart(): void {
    const ctx = this.stationsActivityChart.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00'],
          datasets: [{
            label: 'Station Activity',
            data: [20, 40, 60, 30, 50, 70],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    } else {
      console.error("Failed to acquire the stations activity chart context.");
    }
  }
}