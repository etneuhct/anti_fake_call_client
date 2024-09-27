import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgxCommonModule} from "@kwyxyz/ngx-common";
import {MatIcon} from "@angular/material/icon";
import {BoxContainer3Component} from "../../../templates/box-container3/box-container3.component";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormContainer1Component} from "../../../templates/form-container1/form-container1.component";
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {LoginDirective, OauthProvider} from "@kwyxyz/ngx-auth";
import {ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIcon, BoxContainer3Component,
    MatLabel,
    MatFormField, MatInput, FormContainer1Component, MatButton, TranslateModule, ReactiveFormsModule, NgxCommonModule, RouterLink, MatError],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends LoginDirective {


  oauthProviders: OauthProvider[] = [
    OauthProvider.discord,
    OauthProvider.google,
    OauthProvider.facebook,
    OauthProvider.microsoft,
    OauthProvider.twitter,
    OauthProvider.linkedin
  ]

  formLevelErrors: string[] = []
  private formLevelErrorMessages = ["username_password_mismatch"];

  override ngOnInit() {
    super.ngOnInit();
    this.sendingObservable.subscribe(
      x => {
        if (x) {
          this.resetOnSending()
        }
      }
    )
    this.errorsObservable.subscribe(
      // @ts-ignore
      (errors: HttpErrorResponse) => {
        const err = errors.error
        const detail = err.detail
        if (this.formLevelErrorMessages.indexOf(detail) > -1) {
          this.formLevelErrors.push(detail)
        }
      }
    )
  }

  resetOnSending() {
    this.formLevelErrors = []
  }
}

