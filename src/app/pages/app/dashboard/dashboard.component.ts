import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BasePageDirective {

  pageName = "Dashboard"

  override title = "DashboardTitle"
  override description = "DashboardDescription"
  override keywords = "DashboardKeywords"
  // replace-me 12345

}

