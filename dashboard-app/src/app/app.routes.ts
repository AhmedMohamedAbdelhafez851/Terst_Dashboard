import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { MainComponent } from './components/main/main.component';
import { StationListComponent } from './components/station-list/station-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'summary-cards', component: SummaryCardsComponent },
  { path: 'Main', component: MainComponent },
  { path: 'Station', component: StationListComponent },



  { path: '**', component: NotFoundComponent } // Wildcard route for 404 page
];
