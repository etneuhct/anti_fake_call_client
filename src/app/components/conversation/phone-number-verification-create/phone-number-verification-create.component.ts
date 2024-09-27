import {Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CRUDComponent} from "@kwyxyz/ngx-request";
import {PhoneNumberVerification} from "@project-interfaces/phone-number-verification";
import {PhoneNumberVerificationService} from "@project-services/phone-number-verification.service";
import {DialogContainer1Component} from "../../../templates/dialog-container1/dialog-container1.component";
import {FormContainer1Component} from "../../../templates/form-container1/form-container1.component";
import {MatButton} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgxCommonModule} from "@kwyxyz/ngx-common";
import {TranslateModule} from "@ngx-translate/core";
import {UserPhoneNumberService} from "@project-services/user-phone-number.service";


@Component({
  selector: 'app-phone-number-verification-create',
  standalone: true,
  imports: [CommonModule, DialogContainer1Component, FormContainer1Component, MatButton, MatDialogClose, MatError, MatFormField, MatHint, MatInput, MatLabel, NgxCommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './phone-number-verification-create.component.html',
  styleUrls: ['./phone-number-verification-create.component.css']
})
export class PhoneNumberVerificationCreateComponent extends CRUDComponent<PhoneNumberVerification> implements OnInit {
  @Input() hideSubmitButton = false;
  readonly data = inject<any>(MAT_DIALOG_DATA);
  private userPhoneNumberId: string;

  constructor(protected phoneNumberVerificationService: PhoneNumberVerificationService,
              private matDialogRef: MatDialogRef<PhoneNumberVerificationCreateComponent>,
              private userPhoneNumberService: UserPhoneNumberService) {
    super(phoneNumberVerificationService);
    this.inputInitialObject = this.data.initialObject
    this.userPhoneNumberId = this.data.userPhoneNumberId
  }

  override ngOnInit() {
    super.ngOnInit()
    this.ngOnInitUpdate()
  }


  override getUpdateForm(): FormGroup {
    return this.formBuilder.group({
      code: [null, [Validators.required]],

    })
  }


  override onSuccessPatchObject(objectId: string, data: any) {
    super.onSuccessPatchObject(objectId, data);
    this.userPhoneNumberService.getObject(this.userPhoneNumberId).subscribe(
      _ => {
        this.matDialogRef.close(true)
      }
    )
  }
}
