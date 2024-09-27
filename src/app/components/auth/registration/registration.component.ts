import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends BasePageDirective {

  pageName = "Registration"

  override title = "RegistrationTitle"
  override description = "RegistrationDescription"
  override keywords = "RegistrationKeywords"
  // replace-me 12345

}

