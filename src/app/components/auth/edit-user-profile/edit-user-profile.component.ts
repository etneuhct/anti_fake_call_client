import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {EditUserProfileDirective} from "@kwyxyz/ngx-auth";
import {FormContainer1Component} from "../../../templates/form-container1/form-container1.component";
import {InitialModule} from "../../../initial.module";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgxCommonModule} from "@kwyxyz/ngx-common";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-edit-user-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormContainer1Component, MatError, MatFormField, MatInput, MatLabel, NgxCommonModule, ReactiveFormsModule, RouterLink, TranslateModule, MatButton],
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent extends EditUserProfileDirective {

  pageName = "EditUserProfile"


}

