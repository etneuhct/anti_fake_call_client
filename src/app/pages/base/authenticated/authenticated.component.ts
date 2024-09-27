import {Component} from '@angular/core';
import {BasePageDirective} from "@kwyxyz/ngx-common";
import {environment} from "../../../../environments/environment";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenav,
  MatSidenavContainer
} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import {TranslateModule} from "@ngx-translate/core";
import {AuthOptionsNavBarComponent} from "@project-shared/auth-options-nav-bar/auth-options-nav-bar.component";
import {RoutingPart} from "../../../_utils/const";


@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatSidenav,
    RouterOutlet,
    MatButton,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatNavList,
    MatListItem,
    MatLine,
    RouterLink,
    TranslateModule,
    AuthOptionsNavBarComponent
  ],
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent extends BasePageDirective {

  pageName = "Authenticated"

  override title = "AuthenticatedTitle"
  override description = "AuthenticatedDescription"
  override keywords = "AuthenticatedKeywords"
  // replace-me 12345

  appName = environment.appName

  protected readonly RoutingPart = RoutingPart;
}

