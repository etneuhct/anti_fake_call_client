import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-term-of-service',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './term-of-service.component.html',
  styleUrls: ['./term-of-service.component.css']
})
export class TermOfServiceComponent extends BasePageDirective {

  pageName = "TermOfService"

  override title = "TermOfServiceTitle"
  override description = "TermOfServiceDescription"
  override keywords = "TermOfServiceKeywords"
  // replace-me 12345

}

