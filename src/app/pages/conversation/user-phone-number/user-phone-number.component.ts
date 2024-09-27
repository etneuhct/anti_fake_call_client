import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-user-phone-number',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './user-phone-number.component.html',
  styleUrls: ['./user-phone-number.component.css']
})
export class UserPhoneNumberComponent extends BasePageDirective {

  pageName = "UserPhoneNumber"

  override title = "UserPhoneNumberTitle"
  override description = "UserPhoneNumberDescription"
  override keywords = "UserPhoneNumberKeywords"
  // replace-me 12345

}

