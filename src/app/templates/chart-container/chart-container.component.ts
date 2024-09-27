import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
  ],
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.css'
})
export class ChartContainerComponent {

}
