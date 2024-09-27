import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-user-virtual-phone-number',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './user-virtual-phone-number.component.html',
  styleUrls: ['./user-virtual-phone-number.component.css']
})
export class UserVirtualPhoneNumberComponent extends BasePageDirective {

  pageName = "UserVirtualPhoneNumber"

  override title = "UserVirtualPhoneNumberTitle"
  override description = "UserVirtualPhoneNumberDescription"
  override keywords = "UserVirtualPhoneNumberKeywords"
  // replace-me 12345

}

