import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent extends BasePageDirective {

  pageName = "Faq"

  override title = "FaqTitle"
  override description = "FaqDescription"
  override keywords = "FaqKeywords"
  // replace-me 12345

}

