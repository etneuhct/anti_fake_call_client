import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-box-container3',
  standalone: true,
  imports: [],
  templateUrl: './box-container3.component.html',
  styleUrl: './box-container3.component.css'
})
export class BoxContainer3Component {
  appName = environment.appName;
  logo = environment.logo;

}
