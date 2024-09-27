import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgxCommonModule} from "@kwyxyz/ngx-common";
import {ChangePasswordDirective, fieldsAreIdentical} from "@kwyxyz/ngx-auth";
import {FormContainer1Component} from "../../../templates/form-container1/form-container1.component";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";


@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormContainer1Component,
    MatError, MatFormField, MatInput, MatLabel, NgxCommonModule, ReactiveFormsModule, RouterLink, TranslateModule, MatIcon, MatIconButton, MatHint, MatButton],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends ChangePasswordDirective {

  override getForm(): FormGroup {
    const passwordMinLength = 8
    const passwordMaxLength = 100
    return this.formBuilder.group({
      old_password: [{value: '', disabled: true}, [Validators.required, Validators.minLength(passwordMinLength), Validators.maxLength(passwordMaxLength)]],
      new_password: [{value: '', disabled: true}, [Validators.required, Validators.minLength(passwordMinLength), Validators.maxLength(passwordMaxLength)]],
      new_password2: [{value: '', disabled: true}]
    }, {
      validators: [fieldsAreIdentical('new_password', 'new_password2')]
    })
  }
}

