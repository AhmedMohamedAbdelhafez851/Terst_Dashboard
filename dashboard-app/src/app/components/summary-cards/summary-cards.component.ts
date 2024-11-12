import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [MatCardModule, CommonModule, FormsModule], // Import required modules here
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.scss']
})
export class SummaryCardsComponent {
  // Define the summaryData property with mock data
  summaryData = [
    { title: 'Card 1', value: 100, change: 10 },
    { title: 'Card 2', value: 50, change: -5 },
    { title: 'Card 3', value: 75, change: 15 }
  ];
}
