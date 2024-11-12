import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

// Import your custom components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ChartsComponent } from './components/charts/charts.component';
import { MainComponent } from './components/main/main.component';
import { StationListComponent } from './components/station-list/station-list.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    SidebarComponent,
    DashboardComponent, 
    HeaderComponent, 
    DataTableComponent, 
    ChartsComponent, 
    HeaderComponent, 
    SidebarComponent, 
    MainComponent, 
    StationListComponent , 
    CommonModule  , 
    NgxChartsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class AppComponent {
  title = 'dashboard-app';
}
