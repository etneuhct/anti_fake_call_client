import {Input, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {UserPhoneNumber} from "@project-interfaces/user-phone-number";
import {UserPhoneNumberService} from "@project-services/user-phone-number.service";
import {DialogContainer1Component} from "../../../templates/dialog-container1/dialog-container1.component";
import {FormContainer1Component} from "../../../templates/form-container1/form-container1.component";
import {MatButton} from "@angular/material/button";
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgxCommonModule} from "@kwyxyz/ngx-common";


@Component({
  selector: 'app-user-phone-number-create',
  standalone: true,
  imports: [CommonModule, DialogContainer1Component, FormContainer1Component,
    MatError, MatHint, MatLabel,
    MatButton, MatDialogClose, ReactiveFormsModule, TranslateModule, MatFormField, MatInput, NgxCommonModule],
  templateUrl: './user-phone-number-create.component.html',
  styleUrls: ['./user-phone-number-create.component.css']
})
export class UserPhoneNumberCreateComponent extends CRUDComponent<UserPhoneNumber> implements OnInit {
  @Input() hideSubmitButton = false;

  constructor(protected userPhoneNumberService: UserPhoneNumberService, private matDialogRef: MatDialogRef<UserPhoneNumberCreateComponent>) {
    super(userPhoneNumberService);
  }

  override ngOnInit() {
    super.ngOnInit()
  }


  override getCreateForm(): FormGroup {
    return this.formBuilder.group({
      phone_number: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    })
  }

  override onCreationSucceed(result: any) {
    super.onCreationSucceed(result);
    this.matDialogRef.close(result.id)

  }

}
