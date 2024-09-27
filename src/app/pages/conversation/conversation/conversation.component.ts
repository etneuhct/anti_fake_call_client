import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {BasePageDirective} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent extends BasePageDirective {

  pageName = "Conversation"

  override title = "ConversationTitle"
  override description = "ConversationDescription"
  override keywords = "ConversationKeywords"
  // replace-me 12345

}

