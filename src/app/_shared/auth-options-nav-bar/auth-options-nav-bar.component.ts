import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";
import {MatListItem, MatNavList} from "@angular/material/list";
import {TranslateModule} from "@ngx-translate/core";
import {environment} from "../../../environments/environment";
import {RouterLink} from "@angular/router";
import {RoutingPart} from "../../_utils/const";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-auth-options-nav-bar',
  standalone: true,
  imports: [
    MatIconModule,
    MatLine,
    MatListItem,
    MatNavList,
    TranslateModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './auth-options-nav-bar.component.html',
  styleUrl: './auth-options-nav-bar.component.css'
})
export class AuthOptionsNavBarComponent {
  appName = environment.appName;

  protected readonly RoutingPart = RoutingPart;
  links = [
    // {
    //   routing: ['/', RoutingPart.app],
    //   name: "Dashboard",
    //   icon: "dashboard"
    // },
    {
      routing: ['/', RoutingPart.app, RoutingPart.userPhoneNumber],
      name: "Phone Numbers",
      icon: "phone"
    },
    {
      routing: ['/', RoutingPart.app, RoutingPart.contact],
      name: "Contacts",
      icon: "contact_page"
    },
    {
      routing: ['/', RoutingPart.app, RoutingPart.userVirtualPhoneNumber],
      name: "Virtual phone numbers",
      icon: "phone_android"
    },

    {
      routing: ['/', RoutingPart.app, RoutingPart.conversation],
      name: "Conversations",
      icon: "chat"
    }
  ];

}
