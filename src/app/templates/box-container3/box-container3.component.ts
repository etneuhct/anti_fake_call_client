import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {RouterLink} from "@angular/router";
import {RoutingPart} from "../../_utils/const";

@Component({
  selector: 'app-box-container3',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './box-container3.component.html',
  styleUrl: './box-container3.component.css'
})
export class BoxContainer3Component {
  appName = environment.appName;
  logo = environment.logo;

  protected readonly RoutingPart = RoutingPart;
}
