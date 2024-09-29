import {Component, OnInit} from '@angular/core';
import {AuthService} from "@kwyxyz/ngx-auth";
import {environment} from "../../../../environments/environment";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {MatButton} from "@angular/material/button";
import {RoutingPart} from "../../../_utils/const";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  imports: [CommonModule, RouterOutlet, TranslateModule, RouterLink, MatButton],
  standalone: true
})
export class LandingComponent implements OnInit {
  appname = environment.appName;

  appNameLetters: { letter: string, duration: number }[] = []
  isAuthenticated = false

  constructor(private authService: AuthService) {
  }


  ngOnInit(): void {
    this.appNameLetters = Array.from(
      this.appname.split(''),
      l => (
        {
          letter: l,
          duration: Math.floor(Math.random() * 5)
        }
      )
    )

    this.authService.isLoggedSubject.subscribe(
      x => this.isAuthenticated = !!x
    )
  }

  protected readonly RoutingPart = RoutingPart;
  demoUsername = environment.demoUsername;
  demoPassword = environment.demoPassword;
  demoPhoneNumber = environment.demoPhoneNumber
}
