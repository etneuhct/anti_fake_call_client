import {Component} from '@angular/core';
import {CustomIconService} from "@project-shared/services/custom-icon.service";
import {AuthService} from "@kwyxyz/ngx-auth";
import {WebsocketService} from "@kwyxyz/ngx-request";
import {PreferenceService} from "@kwyxyz/ngx-common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anti_fake_call_client';

  constructor(
    private authentificationService: AuthService,
    private webSocketService: WebsocketService,
    private customIconService: CustomIconService,
    private languageService: PreferenceService
  ) {
    this.languageService.initLanguage(["en", "fr"], "en")
    this.customIconService.init()
    this.authentificationService.isLoggedSubject.subscribe(
      x => {
        if (x) {
          // this.webSocketService.initSockets()
        }
      }
    )

  }

}
