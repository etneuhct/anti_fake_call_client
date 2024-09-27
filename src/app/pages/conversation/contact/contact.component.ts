import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageDirective {

  pageName = "Contact"

  override title = "ContactTitle"
  override description = "ContactDescription"
  override keywords = "ContactKeywords"
  // replace-me 12345

}

